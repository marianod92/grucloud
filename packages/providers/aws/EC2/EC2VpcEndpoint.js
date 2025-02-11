const assert = require("assert");
const { pipe, tap, get, assign } = require("rubico");
const { defaultsDeep } = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");

const { buildTags, findNameInTagsOrId } = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");
const {
  createEC2,
  tagResource,
  untagResource,
  findDependenciesVpc,
} = require("./EC2Common");
const { getField } = require("@grucloud/core/ProviderCommon");
const ignoreErrorCodes = ["InvalidVpcEndpointId.NotFound"];
const findId = get("live.VpcEndpointId");
const pickId = pipe([
  tap(({ VpcEndpointId }) => {
    assert(VpcEndpointId);
  }),
  ({ VpcEndpointId }) => ({ VpcEndpointIds: [VpcEndpointId] }),
]);
const findName = findNameInTagsOrId({ findId: get("live.ServiceName") });

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html
exports.EC2VpcEndpoint = ({ spec, config }) => {
  const ec2 = createEC2(config);
  const client = AwsClient({ spec, config })(ec2);

  const managedByOther = pipe([
    tap((params) => {
      assert(true);
    }),
    () => false,
  ]);

  const findDependencies = ({ live, lives, config }) => [
    findDependenciesVpc({ live }),
    {
      type: "Subnet",
      group: "EC2",
      ids: live.SubnetIds,
    },
    //TODO
    // RouteTableIds:
  ];

  const decorate = () =>
    pipe([
      tap((params) => {
        assert(true);
      }),
      assign({ PolicyDocument: pipe([get("PolicyDocument"), JSON.parse]) }),
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeVpcEndpoints-property
  const getList = client.getList({
    method: "describeVpcEndpoints",
    getParam: "VpcEndpoints",
    decorate,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeVpcEndpoints-property
  const getById = client.getById({
    pickId,
    method: "describeVpcEndpoints",
    getField: "VpcEndpoints",
    decorate,
    ignoreErrorCodes,
  });
  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createVpcEndpoint-property
  const create = client.create({
    method: "createVpcEndpoint",
    filterPayload: assign({
      PolicyDocument: pipe([get("PolicyDocument"), JSON.stringify]),
    }),
    pickCreated: () => pipe([get("VpcEndpoint")]),
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#modifyVpcEndpoint-property
  //TODO update
  const update = client.update({
    method: "modifyVpcEndpoint",
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#deleteVpcEndpoints-property
  const destroy = client.destroy({
    pickId,
    method: "deleteVpcEndpoints",
    getById,
    ignoreErrorCodes,
  });

  const configDefault = ({
    name,
    namespace,
    properties: {
      Tags,

      ...otherProps
    },
    dependencies: { vpc },
  }) =>
    pipe([
      () => otherProps,
      tap((params) => {
        assert(vpc, "missing vpc dependency");
      }),
      defaultsDeep({
        ServiceName: name,
        VpcId: getField(vpc, "VpcId"),

        TagSpecifications: [
          {
            ResourceType: "vpc-endpoint",
            Tags: buildTags({ config, namespace, name, UserTags: Tags }),
          },
        ],
      }),
    ])();

  return {
    spec,
    findId,
    managedByOther,
    findDependencies,
    getByName,
    getById,
    findName,
    create,
    update,
    destroy,
    getList,
    configDefault,
    tagResource: tagResource({ ec2 }),
    untagResource: untagResource({ ec2 }),
  };
};
