const assert = require("assert");
const { map, pipe, tap, get, eq, pick, assign, omit } = require("rubico");
const { defaultsDeep, isEmpty, pluck } = require("rubico/x");
const { getField } = require("@grucloud/core/ProviderCommon");
const { getByNameCore } = require("@grucloud/core/Common");
const { buildTags } = require("../AwsCommon");

const { AwsClient } = require("../AwsClient");
const {
  createRDS,
  tagResource,
  untagResource,
  renameTagList,
} = require("./RDSCommon");

const findId = get("live.DBInstanceArn");
const pickId = pipe([
  tap(({ DBInstanceIdentifier }) => {
    assert(DBInstanceIdentifier);
  }),
  pick(["DBInstanceIdentifier"]),
]);
const findName = get("live.DBInstanceIdentifier");
const isInstanceUp = pipe([eq(get("DBInstanceStatus"), "available")]);

exports.DBInstance = ({ spec, config }) => {
  const rds = createRDS(config);
  const client = AwsClient({ spec, config })(rds);

  const findDependencies = ({ live, lives }) => [
    {
      type: "DBSubnetGroup",
      group: "RDS",
      ids: [
        pipe([
          () => live,
          get("DBSubnetGroup.DBSubnetGroupName"),
          (name) =>
            lives.getByName({
              name,
              providerName: config.providerName,
              type: "DBSubnetGroup",
              group: "RDS",
            }),
          get("id"),
        ])(),
      ],
    },
    {
      type: "SecurityGroup",
      group: "EC2",
      ids: pipe([get("VpcSecurityGroups"), pluck("VpcSecurityGroupId")])(live),
    },
    {
      type: "Key",
      group: "KMS",
      ids: [live.KmsKeyId],
    },
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#describeDBInstances-property
  const getList = client.getList({
    method: "describeDBInstances",
    getParam: "DBInstances",
    decorate: () => pipe([renameTagList]),
  });

  const getByName = getByNameCore({ getList, findName });

  const getById = client.getById({
    pickId,
    method: "describeDBInstances",
    getField: "DBInstances",
    ignoreErrorCodes: ["DBInstanceNotFound"],
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#createDBInstance-property
  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { dbSubnetGroup, securityGroups, kmsKey },
  }) =>
    pipe([
      tap(() => {
        assert(
          !isEmpty(otherProps.MasterUserPassword),
          "MasterUserPassword is empty"
        );
      }),
      () => otherProps,
      defaultsDeep({
        DBInstanceIdentifier: name,
        DBSubnetGroupName: dbSubnetGroup.config.DBSubnetGroupName,
        VpcSecurityGroupIds: map((sg) => getField(sg, "GroupId"))(
          securityGroups
        ),
        ...(kmsKey && { KmsKeyId: getField(kmsKey, "Arn") }),
        Tags: buildTags({ config, namespace, name, UserTags: Tags }),
      }),
    ])();

  const create = client.create({
    pickCreated: () => get("DBInstance"),
    method: "createDBInstance",
    getById,
    isInstanceUp,
    config: { ...config, retryCount: 100 },
    configIsUp: { ...config, retryCount: 500 },
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#modifyDBInstance-property
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#describeValidDBInstanceModifications-property
  const update = client.update({
    pickId,
    method: "modifyDBInstance",
    filterParams: () => pipe([omit(["Tags"])]),
    extraParam: { ApplyImmediately: true },
    getById,
    config: { ...config, retryDelay: 10e3, retryCount: 200 },
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#deleteDBInstance-property
  const destroy = client.destroy({
    pickId,
    extraParam: {
      SkipFinalSnapshot: true,
    },
    method: "deleteDBInstance",
    getById,
    ignoreErrorCodes: ["DBInstanceNotFound", "InvalidDBInstanceStateFault"],
    config,
  });

  return {
    spec,
    findName,
    findId,
    create,
    update,
    destroy,
    getById,
    getByName,
    getList,
    configDefault,
    findDependencies,
    tagResource: tagResource({ rds }),
    untagResource: untagResource({ rds }),
  };
};
