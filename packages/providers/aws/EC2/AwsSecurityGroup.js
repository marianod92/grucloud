const assert = require("assert");
const {
  get,
  pipe,
  map,
  eq,
  or,
  tap,
  pick,
  filter,
  not,
  omit,
} = require("rubico");
const {
  find,
  defaultsDeep,
  pluck,
  flatten,
  isEmpty,
  identity,
  when,
  prepend,
  first,
} = require("rubico/x");
const {
  buildTags,
  findNamespaceInTagsOrEksCluster,
  revokeSecurityGroupIngress,
} = require("../AwsCommon");
const { getField } = require("@grucloud/core/ProviderCommon");
const { hasKeyInTags, findEksCluster } = require("../AwsCommon");

const logger = require("@grucloud/core/logger")({ prefix: "AwsSecurityGroup" });
const { AwsClient } = require("../AwsClient");
const { createEC2, tagResource, untagResource } = require("./EC2Common");

exports.AwsSecurityGroup = ({ spec, config }) => {
  const { managedByDescription, providerName } = config;
  assert(managedByDescription);
  assert(providerName);

  const ec2 = createEC2(config);
  const client = AwsClient({ spec, config })(ec2);

  const findName = ({ live, lives }) =>
    pipe([
      tap(() => {
        assert(lives);
      }),
      () => live,
      get("GroupName"),
      when(
        eq(identity, "default"),
        pipe([
          () =>
            lives.getById({
              id: live.VpcId,
              type: "Vpc",
              group: "EC2",
              providerName,
            }),
          tap((vpc) => {
            assert(vpc);
          }),
          get("name"),
          tap((vpcName) => {
            assert(vpcName);
          }),
          prepend("sg-default-"),
        ])
      ),
      tap((name) => {
        assert(name);
      }),
    ])();

  const findId = get("live.GroupId");
  const pickId = pick(["GroupId"]);

  const findDependencies = ({ live, lives }) => [
    { type: "Vpc", group: "EC2", ids: [live.VpcId] },
    {
      type: "SecurityGroup",
      group: "EC2",
      ids: pipe([
        () => live,
        get("IpPermissions"),
        pluck("UserIdGroupPairs"),
        flatten,
        pluck("GroupId"),
      ])(),
    },
    {
      type: "Cluster",
      group: "EKS",
      ids: [
        pipe([
          () => ({ live, lives }),
          findEksCluster({ config }),
          get("id"),
        ])(),
      ],
    },
  ];

  const findNamespace = (param) =>
    pipe([
      () => [
        findNamespaceInTagsOrEksCluster({
          config,
          key: "aws:eks:cluster-name",
        })(param),
        findNamespaceInTagsOrEksCluster({
          config,
          key: "elbv2.k8s.aws/cluster",
        })(param),
      ],
      find(not(isEmpty)),
      tap((namespace) => {
        logger.debug(`findNamespace ${namespace}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeSecurityGroups-property

  const getList = client.getList({
    method: "describeSecurityGroups",
    getParam: "SecurityGroups",
  });

  //TODO
  const getByName = ({ name, dependencies }) =>
    pipe([
      () => ({
        params: {
          Filters: [
            {
              Name: "group-name",
              Values: [name],
            },
          ],
        },
      }),
      getList,
      first,
      tap((securityGroup) => {
        logger.debug(`getByName ${name}: ${JSON.stringify(securityGroup)}`);
      }),
    ])();

  const getById = client.getById({
    pickId: ({ GroupId }) => ({ GroupIds: [GroupId] }),
    method: "describeSecurityGroups",
    getField: "SecurityGroups",
    ignoreErrorCodes: ["InvalidGroup.NotFound"],
  });

  const cannotBeDeleted = pipe([
    get("live"),
    or([
      eq(get("GroupName"), "default"),
      //pipe([get("Tags"), find(eq(get("Key"), "aws:eks:cluster-name"))]),
    ]),
  ]);
  const isDefault = cannotBeDeleted;

  const managedByOther = or([
    hasKeyInTags({
      key: "aws:eks:cluster-name",
    }),
    hasKeyInTags({
      key: "elbv2.k8s.aws/cluster",
    }),
    isDefault,
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createSecurityGroup-property
  const create = client.create({
    method: "createSecurityGroup",
    getById,
  });

  const revokeIngressRules = ({ live }) =>
    pipe([
      tap(() => {
        logger.debug(`revokeIngressRules`);
      }),
      () => live.IpPermissions,
      filter(pipe([get("UserIdGroupPairs"), not(isEmpty)])),
      map(
        pipe([
          omit(["IpRanges", "Ipv6Ranges", "PrefixListIds"]),
          (ipPermission) => ({
            GroupId: live.GroupId,
            IpPermissions: [ipPermission],
          }),
          revokeSecurityGroupIngress({ ec2 }),
        ])
      ),
    ])();

  const destroy = client.destroy({
    pickId,
    preDestroy: revokeIngressRules,
    method: "deleteSecurityGroup",
    getById,
    ignoreErrorCodes: ["InvalidGroup.NotFound"],
  });

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { vpc },
  }) =>
    pipe([
      () => ({}),
      defaultsDeep(otherProps),
      defaultsDeep({
        GroupName: name,
        ...(vpc && { VpcId: getField(vpc, "VpcId") }),
        TagSpecifications: [
          {
            ResourceType: "security-group",
            Tags: buildTags({ config, namespace, name, UserTags: Tags }),
          },
        ],
      }),
    ])();

  return {
    spec,
    getByName,
    findId,
    findName,
    findDependencies,
    findNamespace,
    isDefault,
    cannotBeDeleted,
    managedByOther,
    getList,
    create,
    destroy,
    configDefault,
    tagResource: tagResource({ ec2 }),
    untagResource: untagResource({ ec2 }),
  };
};
