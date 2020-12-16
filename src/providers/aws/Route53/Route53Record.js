const assert = require("assert");
const AWS = require("aws-sdk");

const {
  map,
  pipe,
  tap,
  tryCatch,
  get,
  switchCase,
  pick,
  filter,
  assign,
  fork,
  or,
  not,
  eq,
  omit,
  and,
} = require("rubico");
const {
  find,
  pluck,
  defaultsDeep,
  isEmpty,
  differenceWith,
  isDeepEqual,
  flatten,
} = require("rubico/x");
const { detailedDiff } = require("deep-object-diff");

const logger = require("../../../logger")({ prefix: "Route53Record" });
const { retryCall } = require("../../Retry");
const { tos } = require("../../../tos");
const {
  convertError,
  isUpByIdCore,
  isDownByIdCore,
  logError,
  axiosErrorToJSON,
  mapPoolSize,
} = require("../../Common");
const { shouldRetryOnException } = require("../AwsCommon");
const { filterEmptyResourceRecords } = require("./Route53Utils");

const findName = pipe([
  tap((live) => {
    logger.debug(`findName live ${tos(live)}`);
    assert(live.Name);
    assert(live.Tags);
  }),
  ({ Name, Tags }) => find(eq(get("Key"), Name))(Tags),
  tap((tag) => {
    logger.debug(`findName tag ${tos(tag)}`);
  }),
  get("Value"),
  tap((Value) => {
    logger.info(`findName name: ${tos(Value)}`);
  }),
]);

const findId = pick(["Name", "Type"]);

const getHostedZone = ({ name, dependencies = {} }) =>
  pipe([
    get("hostedZone"),
    switchCase([
      isEmpty,
      () => {
        throw {
          code: 422,
          message: `resource record '${name}' is missing the hostedZone dependency'`,
        };
      },
      pipe([
        (hostedZone) => hostedZone.getLive(),
        tap((live) => {
          logger.debug(`getHostedZone live ${tos(live)}`);
        }),
      ]),
    ]),
  ])(dependencies);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html
exports.Route53Record = ({ spec, config }) => {
  assert(spec);
  assert(config);

  const route53 = new AWS.Route53({ region: config.region });

  const findRecord = ({ name, type }) =>
    and([eq(get("Name"), name), eq(get("Type"), type)]);

  const assignTags = ({ Tags }) =>
    switchCase([
      not(isEmpty),
      (record) => ({ ...record, Tags }),
      () => undefined,
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53.html#listHostedZones-property
  const getList = async ({ resources = [] } = {}) =>
    pipe([
      tap(() => {
        logger.debug(`getList #resources ${resources.length}`);
      }),
      map.pool(mapPoolSize, (resource) =>
        pipe([
          tap((hostedZone) => {
            logger.debug(`getList resource ${resource.name}`);
          }),
          () => getHostedZone(resource),
          tap((hostedZone) => {
            //logger.debug(`getList hostedZone ${hostedZone}`);
          }),
          switchCase([
            isEmpty,
            () => null,
            tryCatch(
              (hostedZone) =>
                pipe([
                  () =>
                    route53
                      .listResourceRecordSets({
                        HostedZoneId: hostedZone.Id,
                      })
                      .promise(),
                  get("ResourceRecordSets"),
                  (ResourceRecordSets) =>
                    pipe([
                      () => resource.resolveConfig(),
                      (properties) =>
                        find(
                          findRecord({
                            name: properties.Name,
                            type: properties.Type,
                          })
                        )(ResourceRecordSets),
                    ])(),
                  assignTags({ Tags: hostedZone.Tags }),
                ])(),
              (error, params) => ({
                error: convertError({
                  error,
                  procedure: "s3.listResourceRecordSets",
                  params,
                }),
              })
            ),
          ]),
        ])(resource)
      ),
      filter(not(isEmpty)),
      (records) => ({
        total: records.length,
        items: records,
      }),
      tap((records) => {
        logger.debug(`getList route53 records result: ${tos(records)}`);
      }),
    ])(resources);

  const getByName = async ({ name, dependencies, resolveConfig }) =>
    pipe([
      tap(() => {
        logger.info(`getByName ${name}`);
        assert(dependencies, "dependencies");
      }),
      () => getHostedZone({ dependencies, name }),
      tap((hostedZone) => {
        logger.debug(`getByName hostedZoneId ${hostedZone?.Id}`);
      }),
      switchCase([
        not(isEmpty),
        (hostedZone) =>
          tryCatch(
            pipe([
              () =>
                route53
                  .listResourceRecordSets({
                    HostedZoneId: hostedZone.Id,
                  })
                  .promise(),
              get("ResourceRecordSets"),
              tap((ResourceRecordSets) => {
                logger.info(`getByName ${tos({ ResourceRecordSets })}`);
              }),
              (ResourceRecordSets) =>
                pipe([
                  () => resolveConfig(),
                  tap((properties) => {
                    logger.info(`getByName ${tos({ properties })}`);
                    assert(properties.Name);
                    assert(properties.Type);
                  }),
                  (properties) =>
                    find(
                      findRecord({
                        name: properties.Name,
                        type: properties.Type,
                      })
                    )(ResourceRecordSets),
                ])(),
              assignTags({ Tags: hostedZone.Tags }),
              tap((ResourceRecord) => {
                logger.info(`getByName ${name} result: ${tos(ResourceRecord)}`);
              }),
            ]),
            (error, hostedZone) => {
              throw convertError({
                error,
                params: {
                  name,
                  hostedZone,
                },
              });
            }
          )(),
        () => {},
      ]),
      tap((result) => {
        logger.debug(`getByName result: ${tos(result)}`);
      }),
    ])();

  const getById = ({ name }) => getByName({ name });
  const isDownById = isDownByIdCore({ getById, getList, findId });
  const isUpById = isUpByIdCore({ getById });

  const create = async ({
    name,
    payload = {},
    resolvedDependencies: { hostedZone },
  }) =>
    pipe([
      tap(() => {
        assert(name);
        assert(payload);
        logger.info(
          `create record: ${name}, ${tos(payload)}, ${tos({
            hostedZone,
          })}`
        );
      }),
      () => ({
        Action: "CREATE",
        ResourceRecordSet: payload,
      }),
      (Change) =>
        route53
          .changeResourceRecordSets({
            HostedZoneId: hostedZone.live.Id,
            ChangeBatch: {
              Changes: [Change],
            },
          })
          .promise(),
      () =>
        route53
          .changeTagsForResource({
            ResourceId: hostedZone.live.Id,
            AddTags: [{ Key: payload.Name, Value: name }],
            ResourceType: "hostedzone",
          })
          .promise(),
      tap((result) => {
        logger.info(`record created: ${name}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53.html#deleteHostedZone-property
  const destroy = async ({ id, name, resource }) =>
    pipe([
      tap(() => {
        logger.info(`destroy Route53Record ${tos({ name, id })}`);
        assert(!isEmpty(id), `destroy invalid id`);
        assert(name, "destroy name");
        assert(resource, "resource");
      }),
      getHostedZone,
      (hostedZone) =>
        pipe([
          () => resource.getLive(),
          switchCase([
            not(isEmpty),
            (live) =>
              route53
                .changeResourceRecordSets({
                  HostedZoneId: hostedZone.Id,
                  ChangeBatch: {
                    Changes: [
                      {
                        Action: "DELETE",
                        ResourceRecordSet: pipe([
                          omit(["Tags"]),
                          filterEmptyResourceRecords,
                        ])(live),
                      },
                    ],
                  },
                })
                .promise(),
            () => {
              logger.error(`no live record for ${name}`);
            },
          ]),
        ])(),
      tap((result) => {
        logger.debug(`destroy Route53Record done, ${tos({ name, id })}`);
      }),
    ])(resource);

  const update = async ({
    name,
    payload,
    live,
    diff,
    resolvedDependencies: { hostedZone },
  }) =>
    pipe([
      tap(() => {
        logger.info(
          `update ${name}, payload: ${tos(payload)}, live: ${tos(live)}`
        );
        assert(name, "name");
        assert(live, "live");
        assert(diff, "diff");
        assert(hostedZone, "missing the hostedZone dependency.");
      }),
      () =>
        route53
          .changeResourceRecordSets({
            HostedZoneId: hostedZone.live.Id,
            ChangeBatch: {
              Changes: [
                {
                  Action: "DELETE",
                  ResourceRecordSet: omit(["Tags"])(live),
                },
                {
                  Action: "CREATE",
                  ResourceRecordSet: payload,
                },
              ],
            },
          })
          .promise(),
      tap((result) => {
        logger.info(`record updated: ${name}`);
      }),
    ])();

  const configDefault = async ({ name, properties, dependencies }) => {
    return defaultsDeep({ Name: name })(properties);
  };

  return {
    type: "Route53Record",
    spec,
    isUpById,
    isDownById,
    findId,
    getByName,
    getById,
    findName,
    create,
    update,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};

exports.compareRoute53Record = async ({ target, live, dependencies }) =>
  pipe([
    tap(() => {
      logger.debug(
        `compareRoute53Record ${tos({ target, live, dependencies })}`
      );
      assert(target, "target");
      assert(live.ResourceRecords, "live.ResourceRecords");
    }),
    () =>
      detailedDiff(
        omit(["Tags"])(live),
        defaultsDeep({ ResourceRecords: [] })(target)
      ),
    tap((diff) => {
      logger.debug(`compareHostedZone diff:${tos(diff)}`);
    }),
  ])();