const assert = require("assert");
const {
  map,
  pipe,
  tap,
  get,
  eq,
  tryCatch,
  switchCase,
  and,
} = require("rubico");
const { defaultsDeep, find } = require("rubico/x");
const logger = require("@grucloud/core/logger")({
  prefix: "Integration",
});
const { getField } = require("@grucloud/core/ProviderCommon");
const { tos } = require("@grucloud/core/tos");
const { getByNameCore, buildTagsObject } = require("@grucloud/core/Common");
const { AwsClient } = require("../AwsClient");
const { createLambda } = require("../Lambda/LambdaCommon");
const { lambdaAddPermission } = require("../AwsCommon");
const { createAPIGateway, ignoreErrorCodes } = require("./ApiGatewayCommon");

const findName = pipe([
  get("live"),
  ({ restApiName, path, httpMethod }) =>
    `integration::${restApiName}::${path}::${httpMethod}`,
]);

const findId = pipe([
  get("live"),
  ({ restApiId, path, httpMethod }) =>
    `integration::${restApiId}::${path}::${httpMethod}`,
]);

const pickId = ({ restApiId, resourceId, httpMethod }) => ({
  restApiId,
  resourceId,
  httpMethod,
});

exports.Integration = ({ spec, config }) => {
  const apiGateway = createAPIGateway(config);
  const lambda = createLambda(config);

  const client = AwsClient({ spec, config })(apiGateway);

  const findDependencies = ({ live, lives }) => [
    {
      type: "Method",
      group: "APIGateway",
      ids: [
        pipe([
          () =>
            lives.getByType({
              providerName: config.providerName,
              type: "Method",
              group: "APIGateway",
            }),
          find(
            and([
              eq(get("live.restApiId"), live.restApiId),
              eq(get("live.resourceId"), live.resourceId),
              eq(get("live.httpMethod"), live.httpMethod),
            ])
          ),
          get("id"),
        ])(),
      ],
    },
    {
      type: "Function",
      group: "Lambda",
      ids: pipe([
        () => live,
        //TODO
        switchCase([
          eq(get("integrationType"), "AWS_PROXY"),
          () => live.integrationUri,
          () => undefined,
        ]),
        (id) => [id],
      ])(),
    },
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getIntegration-property
  const getById = client.getById({
    pickId,
    method: "getIntegration",
    ignoreErrorCodes,
    decorate: (method) =>
      pipe([
        tap((params) => {
          assert(method);
        }),
        defaultsDeep({
          restApiId: method.restApiId,
          restApiName: method.restApiName,
          resourceId: method.resourceId,
          path: method.path,
          httpMethod: method.httpMethod,
        }),
        tap((params) => {
          assert(true);
        }),
      ]),
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getIntegration-property
  const getList = client.getListWithParent({
    parent: { type: "Method", group: "APIGateway" },
    config,
    decorate: ({ lives, parent }) => pipe([getById]),
  });

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#putIntegration-property

  const create = client.create({
    method: "putIntegration",
    postCreate: ({ resolvedDependencies: { restApi, lambdaFunction } }) =>
      pipe([
        tap(() => {
          assert(restApi);
        }),
        lambdaAddPermission({
          lambda,
          lambdaFunction,
          SourceArn: `arn:aws:execute-api:${
            config.region
          }:${config.accountId()}:${getField(restApi, "id")}/*/*/${
            lambdaFunction.resource.name
          }`,
        }),
      ]),
  });

  //TODO update
  const update = ({ name, payload, diff, live }) =>
    pipe([
      tap(() => {
        logger.info(`update integration: ${name}`);
        logger.debug(tos({ payload, diff, live }));
      }),
      () => payload,
      apiGateway().updateIntegration,
      tap(() => {
        logger.info(`updated integration ${name}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html#removePermission-property
  const lambdaRemovePermission = ({ live }) =>
    pipe([
      () => live,
      tap.if(
        eq(get("integrationType"), "AWS_PROXY"),
        pipe([
          () => ({
            FunctionName: live.integrationUri,
            StatementId: live.id,
          }),
          tryCatch(lambda().removePermission, (error) =>
            pipe([
              tap(() => {
                logger.error(`lambdaRemovePermission ${tos(error)}`);
              }),
              () => {
                throw error;
              },
            ])()
          ),
        ])
      ),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#deleteIntegration-property
  const destroy = client.destroy({
    preDestroy: lambdaRemovePermission,
    method: "deleteIntegration",
    getById,
    ignoreErrorCodes,
  });

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { method, lambdaFunction },
  }) =>
    pipe([
      tap(() => {
        assert(method, "missing 'method' dependency");
      }),
      () => otherProps,
      defaultsDeep({
        httpMethod: getField(method, "httpMethod"),
        restApiId: getField(method, "restApiId"),
        resource: getField(method, "resourceId"),
        ...(lambdaFunction && {
          integrationUri: getField(lambdaFunction, "FunctionArn"),
        }),
        tags: buildTagsObject({ name, namespace, config, userTags: Tags }),
      }),
    ])();

  return {
    spec,
    findName,
    findId,
    getById,
    create,
    update,
    destroy,
    getByName,
    getList,
    configDefault,
    findDependencies,
  };
};
