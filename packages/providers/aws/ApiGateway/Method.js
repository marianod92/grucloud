const assert = require("assert");
const {
  map,
  pipe,
  tap,
  get,
  eq,
  not,
  assign,
  filter,
  omit,
  tryCatch,
  switchCase,
  pick,
  flatMap,
} = require("rubico");
const { pluck, defaultsDeep, append, isEmpty } = require("rubico/x");
const logger = require("@grucloud/core/logger")({
  prefix: "Method",
});

const { tos } = require("@grucloud/core/tos");
const { getField } = require("@grucloud/core/ProviderCommon");
const { getByNameCore, buildTagsObject } = require("@grucloud/core/Common");
const { AwsClient } = require("../AwsClient");

const {
  throwIfNotAwsError,
  tagsExtractFromDescription,
  tagsRemoveFromDescription,
} = require("../AwsCommon");

const { createAPIGateway, ignoreErrorCodes } = require("./ApiGatewayCommon");
const pickId = pick(["restApiId", "resourceId", "httpMethod"]);

exports.Method = ({ spec, config }) => {
  const apiGateway = createAPIGateway(config);

  const client = AwsClient({ spec, config })(apiGateway);

  const findId = ({ live, lives }) =>
    pipe([
      () =>
        lives.getById({
          id: live.resourceId,
          type: "Resource",
          group: "APIGateway",
          providerName: config.providerName,
        }),
      get("name"),
      tap((name) => {
        assert(name);
      }),
      append(`_${live.httpMethod}`),
      tap((params) => {
        assert(true);
      }),
    ])();

  const findName = (params) => {
    const fns = [get("live.operationName"), findId];
    for (fn of fns) {
      const name = fn(params);
      if (!isEmpty(name)) {
        return name;
      }
    }
    assert(false, "should have a name");
  };

  const findDependencies = ({ live, lives }) => [
    {
      type: "Resource",
      group: "APIGateway",
      ids: [live.resourceId],
    },
    {
      type: "Autorizer",
      group: "APIGateway",
      ids: [live.authorizerId], //TODO
    },
  ];

  const getById = client.getById({
    pickId,
    method: "getMethod",
    ignoreErrorCodes,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getMethod-property
  //TODO getListByParent

  const getList = ({ lives }) =>
    pipe([
      tap(() => {
        logger.info(`getList method`);
      }),
      () =>
        lives.getByType({
          providerName: config.providerName,
          type: "Resource",
          group: "APIGateway",
        }),
      tap((params) => {
        assert(true);
      }),
      pluck("live"),
      flatMap(({ restApiId, restApiName, id, path }) =>
        tryCatch(
          pipe([
            () => ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
            map((httpMethod) =>
              tryCatch(
                pipe([
                  () => ({
                    restApiId,
                    resourceId: id,
                    httpMethod,
                  }),
                  tap((params) => {
                    assert(true);
                  }),
                  apiGateway().getMethod,
                  defaultsDeep({ path }),
                ]),
                throwIfNotAwsError("NotFoundException")
              )()
            ),
            filter(not(isEmpty)),
            map(
              defaultsDeep({
                restApiId,
                restApiName,
                resourceId: id,
              })
            ),
            map(
              assign({
                tags: tagsExtractFromDescription,
                description: tagsRemoveFromDescription,
              })
            ),
          ]),
          (error) =>
            pipe([
              () => ({
                error,
              }),
            ])()
        )()
      ),
    ])();

  //const isUpByName = pipe([getByName, not(isEmpty)]);
  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#putMethod-property
  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { resource, authorizer },
  }) =>
    pipe([
      tap(() => {
        assert(resource, "missing 'resource' dependency");
      }),
      () => otherProps,
      defaultsDeep({
        restApiId: getField(resource, "restApiId"),
        resource: getField(resource, "id"),
        ...(authorizer && {
          authorizerId: getField(authorizer, "authorizerId"),
        }),
        tags: buildTagsObject({ name, namespace, config, userTags: Tags }),
      }),
    ])();

  //TODO create
  const create = ({ name, payload, resolvedDependencies: { restApi } }) =>
    pipe([
      tap(() => {
        logger.info(`create method: ${name}`);
        logger.debug(tos(payload));
      }),
      () => payload,
      apiGateway().putMethod,
      tap((params) => {
        logger.info(`created method ${name}`);
      }),
    ])();

  //TODO update
  const update = ({ name, payload, diff, live }) =>
    pipe([
      tap(() => {
        logger.info(`update method: ${name}`);
        logger.debug(tos({ payload, diff, live }));
      }),
      () => payload,
      apiGateway().updateMethod,
      tap(() => {
        logger.info(`updated method ${name}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#deleteMethod-property
  const destroy = client.destroy({
    pickId,
    method: "deleteMethod",
    getById,
    ignoreErrorCodes,
  });

  return {
    spec,
    findName,
    getById,
    findId,
    create,
    update,
    destroy,
    getByName,
    getList,
    configDefault,
    findDependencies,
    cannotBeDeleted: () => true,
  };
};
