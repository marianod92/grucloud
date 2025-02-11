const assert = require("assert");
const { pipe, tap, get, switchCase, pick, map, assign } = require("rubico");
const { defaultsDeep, isEmpty, callProp } = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");
const { AwsClient } = require("../AwsClient");
const {
  createAutoScaling,
  tagResource,
  untagResource,
} = require("./AutoScalingCommon");

const ignoreErrorMessages = ["Launch configuration name not found"];
const ResourceType = "launch-configuration";

const findName = get("live.LaunchConfigurationName");
const findId = get("live.LaunchConfigurationARN");

const pickId = pipe([
  tap(({ LaunchConfigurationName }) => {
    assert(LaunchConfigurationName);
  }),
  pick(["LaunchConfigurationName"]),
]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html
exports.AutoScalingLaunchConfiguration = ({ spec, config }) => {
  const autoScaling = createAutoScaling(config);
  const client = AwsClient({ spec, config })(autoScaling);
  const findDependencies = ({ live, lives }) => [
    {
      type: "KeyPair",
      group: "EC2",
      ids: [live.KeyName],
    },
    {
      type: "SecurityGroup",
      group: "EC2",
      ids: live.SecurityGroups,
    },
    {
      type: "InstanceProfile",
      group: "IAM",
      ids: [
        pipe([
          () => live.IamInstanceProfile,
          switchCase([
            isEmpty,
            () => undefined,
            callProp("startsWith", "arn"),
            pipe([
              () =>
                lives.getById({
                  id: live.IamInstanceProfile,
                  type: "InstanceProfile",
                  group: "IAM",
                  providerName: config.providerName,
                }),
              get("id"),
            ]),
            pipe([
              () =>
                lives.getByName({
                  name: live.IamInstanceProfile,
                  type: "InstanceProfile",
                  group: "IAM",
                  providerName: config.providerName,
                }),
              get("id"),
            ]),
          ]),
        ])(),
      ],
    },
    //TODO
    // {
    //   type: "Image",
    //   group: "EC2",
    //   ids: [live.ImageId],
    // },
  ];

  const findNamespace = pipe([() => ""]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#describeLaunchConfigurations-property
  const getById = client.getById({
    pickId: ({ LaunchConfigurationName }) => ({
      LaunchConfigurationNames: [LaunchConfigurationName],
    }),
    method: "describeLaunchConfigurations",
    getField: "LaunchConfigurations",
    ignoreErrorMessages,
  });

  const getList = client.getList({
    method: "describeLaunchConfigurations",
    getParam: "LaunchConfigurations",
  });

  const getByName = pipe([
    ({ name }) => ({ LaunchConfigurationName: name }),
    getById,
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#createLaunchConfiguration-property
  const create = client.create({
    method: "createLaunchConfiguration",
    shouldRetryOnExceptionMessages: ["Invalid IamInstanceProfile:"],
    pickCreated:
      ({ payload }) =>
      () =>
        payload,
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#deleteLaunchConfiguration-property
  const destroy = client.destroy({
    pickId,
    method: "deleteLaunchConfiguration",
    getById,
    ignoreErrorMessages,
  });

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { instanceProfile, securityGroups = [], keyPair },
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        LaunchConfigurationName: name,
        ...(instanceProfile && {
          IamInstanceProfile: getField(instanceProfile, "InstanceProfileName"),
        }),
        ...(keyPair && { KeyName: keyPair.resource.name }),
        SecurityGroups: pipe([
          () => securityGroups,
          map((securityGroup) => getField(securityGroup, "GroupId")),
        ])(),
      }),
      assign({
        UserData: ({ UserData }) =>
          Buffer.from(UserData, "utf-8").toString("base64"),
      }),
      tap((params) => {
        assert(true);
      }),
    ])();

  return {
    spec,
    findId,
    findNamespace,
    findDependencies,
    getByName,
    getById,
    findName,
    create,
    destroy,
    getList,
    configDefault,
    tagResource: tagResource({
      autoScaling,
      ResourceType,
      property: "LaunchConfigurationName",
    }),
    untagResource: untagResource({
      autoScaling,
      ResourceType,
      property: "LaunchConfigurationName",
    }),
  };
};
