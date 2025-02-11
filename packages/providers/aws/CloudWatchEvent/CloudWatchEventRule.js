const assert = require("assert");
const { assign, pipe, tap, get, eq, pick, omit } = require("rubico");
const { defaultsDeep, isEmpty, pluck, unless, append } = require("rubico/x");

const { getField } = require("@grucloud/core/ProviderCommon");
const { buildTags } = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");
const {
  createCloudWatchEvents,
  ignoreErrorCodes,
  tagResource,
  untagResource,
} = require("./CloudWatchEventCommon");

const findId = get("live.Arn");
const pickId = pick(["Name", "EventBusName"]);
const findName = get("live.Name");

const cannotBeDeleted = get("live.ManagedBy");

const buildArn =
  ({ config }) =>
  ({ Name, EventBusName }) =>
    pipe([
      () => `arn:aws:events:${config.region}:${config.accountId()}:rule/`,
      unless(eq(EventBusName, "default"), append(`${EventBusName}/`)),
      append(Name),
    ])();

exports.CloudWatchEventRule = ({ spec, config }) => {
  const cloudWatchEvents = createCloudWatchEvents(config);
  const client = AwsClient({ spec, config })(cloudWatchEvents);

  // findDependencies for CloudWatchEventRule
  const findDependencies = ({ live, lives }) => [
    {
      type: "EventBus",
      group: "CloudWatchEvents",
      ids: [
        pipe([
          () => live,
          get("EventBusName"),
          (name) =>
            lives.getByName({
              name,
              type: "EventBus",
              group: "CloudWatchEvents",
              providerName: config.providerName,
            }),
          get("id"),
        ])(),
      ],
    },
  ];

  const decorate = () =>
    pipe([
      assign({
        Targets: pipe([
          ({ Name, EventBusName }) => ({ Rule: Name, EventBusName }),
          //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#listTargetsByRule-property
          cloudWatchEvents().listTargetsByRule,
          get("Targets"),
        ]),
        Tags: pipe([
          buildArn({ config }),
          (ResourceARN) => ({ ResourceARN }),
          // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#listTagsForResource-property
          cloudWatchEvents().listTagsForResource,
          get("Tags"),
        ]),
      }),
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#listRules-property
  const getList = client.getListWithParent({
    parent: { type: "EventBus", group: "CloudWatchEvents" },
    pickKey: ({ Name }) => ({ EventBusName: Name }),
    method: "listRules",
    getParam: "Rules",
    config,
    decorate,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#describeRule-property
  const getById = client.getById({
    pickId,
    method: "describeRule",
    ignoreErrorCodes,
  });

  const getByName = ({ name, dependencies = () => ({}) }) =>
    pipe([
      dependencies,
      get("eventBus.name"),
      (EventBusName) => ({ Name: name, EventBusName }),
      getById,
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#putRule-property
  const create = client.create({
    method: "putRule",
    pickCreated:
      ({ payload }) =>
      () =>
        payload,
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#putRule-property
  const update = client.update({
    pickId: omit(["Arn", "Targets"]),
    filterParams: ({ payload, live }) =>
      pipe([
        () => payload,
        omit(["Tags"]),
        defaultsDeep(pickId(live)),
        tap((params) => {
          assert(true);
        }),
      ])(),
    method: "putRule",
    getById,
  });

  const destroyTargets = pipe([
    get("live"),
    ({ Targets, Name, EventBusName }) =>
      pipe([
        () => Targets,
        unless(
          isEmpty,
          pipe([
            pluck("Id"),
            (Ids) => ({
              Ids,
              Rule: Name,
              EventBusName,
            }),
            cloudWatchEvents().removeTargets,
          ])
        ),
      ])(),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#deleteRule-property
  const destroy = client.destroy({
    preDestroy: destroyTargets,
    pickId,
    method: "deleteRule",
    getById,
    ignoreErrorCodes,
  });

  const configDefault = async ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { eventBus },
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        Name: name,
        ...(eventBus && { EventBusName: getField(eventBus, "Name") }),
        Tags: buildTags({ config, namespace, name, UserTags: Tags }),
      }),
    ])();

  return {
    spec,
    findName,
    findId,
    create,
    update,
    destroy,
    getByName,
    getList,
    configDefault,
    findDependencies,
    cannotBeDeleted,
    managedByOther: cannotBeDeleted,
    tagResource: tagResource({ cloudWatchEvents }),
    untagResource: untagResource({ cloudWatchEvents }),
  };
};
