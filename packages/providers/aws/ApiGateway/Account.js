const assert = require("assert");
const { pipe, tap, get, not } = require("rubico");
const { defaultsDeep, includes } = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");
const { AwsClient } = require("../AwsClient");
const { createAPIGateway, diffToPatch } = require("./ApiGatewayCommon");
const findName = () => "default";
const findId = findName;

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html
exports.Account = ({ spec, config }) => {
  const apiGateway = createAPIGateway(config);
  const client = AwsClient({ spec, config })(apiGateway);

  const findDependencies = ({ live }) => [
    { type: "Role", group: "IAM", ids: [live.cloudwatchRoleArn] },
  ];
  const isDefault = pipe([not(get("live.cloudwatchRoleArn"))]);
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getAccount-property
  const getAccount = () => pipe([() => ({}), apiGateway().getAccount])();

  const getList = () => pipe([getAccount, (account) => [account]])();
  const getByName = getAccount;
  const getById = getAccount;

  const configDefault = ({
    name,
    namespace,
    properties,
    dependencies: { cloudwatchRole },
  }) =>
    pipe([
      () => properties,
      defaultsDeep({
        ...(cloudwatchRole && {
          cloudwatchRoleArn: getField(cloudwatchRole, "Arn"),
        }),
      }),
    ])();

  const create = pipe([
    tap((params) => {
      assert(false, "create should not be called");
    }),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#updateAccount-property
  const update = client.update({
    pickId: () => ({}),
    filterParams: ({ payload, live, diff }) =>
      pipe([
        tap(() => {
          assert(diff);
        }),
        () => ({ diff }),
        diffToPatch,
        (patchOperations) => ({
          patchOperations,
        }),
      ])(),
    method: "updateAccount",
    shouldRetryOnExceptionMessages: [
      "The role ARN does not have required permissions configured. Please grant trust permission for API Gateway and add the required role policy.",
    ],
    config,
    getById,
  });
  //TODO client.destroy
  const destroy = pipe([
    () => ({
      patchOperations: [
        { op: "replace", path: "/cloudwatchRoleArn", value: "" },
      ],
    }),
    apiGateway().updateAccount,
  ]);

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
    isDefault,
    managedByOther: isDefault,
  };
};
