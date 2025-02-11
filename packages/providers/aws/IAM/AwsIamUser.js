const assert = require("assert");
const {
  map,
  pipe,
  tap,
  tryCatch,
  get,
  assign,
  fork,
  pick,
  omit,
} = require("rubico");
const { defaultsDeep, forEach, pluck } = require("rubico/x");

const logger = require("@grucloud/core/logger")({ prefix: "IamUser" });
const {
  findNameInTagsOrId,
  findNamespaceInTags,
  throwIfNotAwsError,
  buildTags,
} = require("../AwsCommon");
const { getByNameCore } = require("@grucloud/core/Common");

const { AwsClient } = require("../AwsClient");
const {
  createIAM,
  tagResourceIam,
  untagResourceIam,
  assignAttachedPolicies,
} = require("./AwsIamCommon");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#tagUser-property
const tagResource = tagResourceIam({ field: "UserName", method: "tagUser" });

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#untagUser-property
const untagResource = untagResourceIam({
  field: "UserName",
  method: "untagUser",
});

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html
exports.AwsIamUser = ({ spec, config }) => {
  const iam = createIAM(config);
  const client = AwsClient({ spec, config })(iam);

  const findId = get("live.UserName");
  const pickId = pick(["UserName"]);
  const findName = findNameInTagsOrId({ findId });

  const findDependencies = ({ live }) => [
    {
      type: "Policy",
      group: "IAM",
      ids: pipe([() => live, get("AttachedPolicies"), pluck("PolicyArn")])(),
    },
    {
      type: "Group",
      group: "IAM",
      ids: pipe([() => live, get("Groups"), pluck("GroupName")])(),
    },
  ];

  const fetchLoginProfile = tryCatch(
    pipe([pick(["UserName"]), iam().getLoginProfile, get("LoginProfile")]),
    throwIfNotAwsError("NoSuchEntity")
  );

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#listUsers-property
  const getList = client.getList({
    method: "listUsers",
    getParam: "Users",
    decorate: () =>
      pipe([
        pick(["UserName"]),
        iam().getUser,
        get("User"),
        assign({
          AttachedPolicies: pipe([
            pick(["UserName"]),
            defaultsDeep({ MaxItems: 1e3 }),
            iam().listAttachedUserPolicies,
            get("AttachedPolicies"),
          ]),
          Policies: pipe([
            pick(["UserName"]),
            defaultsDeep({ MaxItems: 1e3 }),
            iam().listUserPolicies,
            get("PolicyNames"),
          ]),
          Groups: pipe([
            pick(["UserName"]),
            iam().listGroupsForUser,
            get("Groups"),
            pluck("GroupName"),
          ]),
          AccessKeys: pipe([
            pick(["UserName"]),
            iam().listAccessKeys,
            get("AccessKeyMetadata"),
          ]),
          LoginProfile: fetchLoginProfile,
          Tags: pipe([pick(["UserName"]), iam().listUserTags, get("Tags")]),
        }),
      ]),
  });

  const getByName = getByNameCore({ getList, findName });

  const getById = client.getById({
    pickId,
    method: "getUser",
    ignoreErrorCodes: ["NoSuchEntity"],
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createUser-property
  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { policies = [], iamGroups = [] },
  }) =>
    pipe([
      () => ({}),
      assignAttachedPolicies({ policies }),
      assign({
        Groups: pipe([
          () => iamGroups,
          map(
            pipe([
              get("config.GroupName"),
              tap((GroupName) => {
                assert(GroupName);
              }),
            ])
          ),
        ]),
      }),
      defaultsDeep(otherProps),
      defaultsDeep({
        UserName: name,
        Path: "/",
        Tags: buildTags({
          name,
          config,
          namespace,
          UserTags: Tags,
        }),
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#addUserToGroup-property
  const addUserToGroup = ({ name }) =>
    pipe([
      forEach(
        pipe([
          (GroupName) => ({ GroupName, UserName: name }),
          iam().addUserToGroup,
        ])
      ),
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#attachUserPolicy-property
  const attachUserPolicy = ({ name }) =>
    pipe([
      forEach(
        pipe([
          tap(({ PolicyArn }) => {
            assert(PolicyArn);
          }),
          pick(["PolicyArn"]),
          defaultsDeep({ UserName: name }),
          iam().attachUserPolicy,
        ])
      ),
    ]);

  const create = client.create({
    method: "createUser",
    pickId,
    getById,
    config,
    filterPayload: omit(["AttachedPolicies", "Groups"]),
    pickCreated: () => get("User"),
    postCreate: ({ name, payload }) =>
      pipe([
        tap((params) => {
          assert(true);
        }),
        fork({
          groups: pipe([
            () => payload,
            get("Groups", []),
            addUserToGroup({ name }),
          ]),
          policies: pipe([
            () => payload,
            get("AttachedPolicies", []),
            attachUserPolicy({ name }),
          ]),
        }),
      ]),
  });

  const updateAttachedPolicies = ({ name, diff }) =>
    pipe([
      tap((params) => {
        assert(true);
      }),
      () => diff,
      get("liveDiff.added.AttachedPolicies", []),
      //putUserAttachedPolicies({ name }),
    ]);

  const update = async ({ name, diff }) =>
    pipe([
      tap((params) => {
        assert(diff);
      }),
      updateAttachedPolicies({ name, diff }),
    ])();

  const destroyAccessKey = ({ UserName }) =>
    pipe([
      () => iam().listAccessKeys({ UserName }),
      get("AccessKeyMetadata"),
      forEach(({ AccessKeyId }) => {
        iam().deleteAccessKey({
          AccessKeyId,
          UserName,
        });
      }),
    ])();

  const removeUserFromGroup = ({ UserName }) =>
    pipe([
      () => iam().listGroupsForUser({ UserName }),
      get("Groups"),
      tap((Groups = []) => {
        logger.debug(`removeUserFromGroup: ${Groups.length}`);
      }),
      forEach(({ GroupName }) => {
        iam().removeUserFromGroup({
          GroupName,
          UserName,
        });
      }),
    ])();

  const detachUserPolicy = ({ UserName }) =>
    pipe([
      () => iam().listAttachedUserPolicies({ UserName, MaxItems: 1e3 }),
      get("AttachedPolicies"),
      tap((AttachedPolicies = []) => {
        logger.debug(`detachUserPolicy: ${AttachedPolicies.length}`);
      }),
      forEach(({ PolicyArn }) => {
        iam().detachUserPolicy({
          PolicyArn,
          UserName,
        });
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#deleteUserPolicy-property
  const deleteUserPolicy = ({ UserName }) =>
    pipe([
      () => iam().listUserPolicies({ UserName, MaxItems: 1e3 }),
      get("PolicyNames"),
      tap((PolicyNames = []) => {
        logger.debug(`deleteUserPolicy: ${PolicyNames.length}`);
      }),
      forEach((PolicyName) => {
        iam().deleteUserPolicy({
          PolicyName,
          UserName,
        });
      }),
    ])();

  const deleteLoginProfile = ({ UserName }) =>
    tryCatch(
      pipe([() => ({ UserName }), iam().deleteLoginProfile]),
      throwIfNotAwsError("NoSuchEntity")
    )();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#deleteUser-property
  const destroy = client.destroy({
    pickId,
    preDestroy: pipe([
      get("live"),
      pick(["UserName"]),
      fork({
        userFromGroup: removeUserFromGroup,
        deletePolicy: pipe([tap(detachUserPolicy), deleteUserPolicy]),
        loginProfile: deleteLoginProfile,
        accessKey: destroyAccessKey,
      }),
    ]),
    method: "deleteUser",
    ignoreErrorCodes: ["NoSuchEntity"],
    getById,
    config,
  });

  return {
    spec,
    findId,
    findDependencies,
    getByName,
    findName,
    create,
    update,
    destroy,
    getList,
    configDefault,
    findNamespace: findNamespaceInTags(config),
    tagResource: tagResource({ iam }),
    untagResource: untagResource({ iam }),
  };
};
