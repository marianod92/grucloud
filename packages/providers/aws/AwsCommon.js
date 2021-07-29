const AWS = require("aws-sdk");
const assert = require("assert");
const {
  pipe,
  tryCatch,
  tap,
  switchCase,
  and,
  get,
  eq,
  or,
  any,
  not,
} = require("rubico");
const {
  callProp,
  first,
  last,
  find,
  isEmpty,
  forEach,
  identity,
  isFunction,
  includes,
  when,
} = require("rubico/x");
const logger = require("@grucloud/core/logger")({ prefix: "AwsCommon" });
const { tos } = require("@grucloud/core/tos");
const { retryCall } = require("@grucloud/core/Retry");
const { configProviderDefault } = require("@grucloud/core/Common");

exports.getNewCallerReference = () => `grucloud-${new Date()}`;

const proxyHandler = ({ endpointName, endpoint }) => ({
  get: (target, name, receiver) => {
    assert(endpointName);
    assert(endpoint);
    assert(isFunction(endpoint[name]), `${name} is not a function`);
    return (...args) =>
      retryCall({
        name: `${endpointName}.${name} ${JSON.stringify(args)}`,
        fn: () => endpoint[name](...args).promise(),
        isExpectedResult: () => true,
        shouldRetryOnException: ({ error, name }) =>
          pipe([
            () => error,
            or([
              eq(get("code"), "Throttling"),
              eq(get("code"), "UnknownEndpoint"),
            ]),
            tap((retry) => {
              logger.debug(
                `shouldRetryOnException: ${name}:  retry: ${retry}, ${tos({
                  error,
                })}`
              );
            }),
          ])(),
      });
  },
});

const createEndpoint =
  ({ endpointName }) =>
  (config) =>
    pipe([
      tap(() => AWS.config.update(config)),
      () => new AWS[endpointName]({ region: config.region }),
      (endpoint) => new Proxy({}, proxyHandler({ endpointName, endpoint })),
    ])();

exports.createEndpoint = createEndpoint;

exports.Ec2New = (config) => () =>
  createEndpoint({ endpointName: "EC2" })(config);

exports.IAMNew = (config) => () =>
  createEndpoint({ endpointName: "IAM" })(config);

exports.S3New = (config) => () =>
  createEndpoint({ endpointName: "S3" })({ region: "us-east-1" });

exports.Route53New = (config) => () =>
  createEndpoint({ endpointName: "Route53" })(config);

exports.CloudFrontNew = (config) => () =>
  createEndpoint({ endpointName: "CloudFront" })(config);

exports.Route53DomainsNew = () => () =>
  createEndpoint({ endpointName: "Route53Domains" })({ region: "us-east-1" });

exports.ACMNew = (config) => () =>
  createEndpoint({ endpointName: "ACM" })(config);

exports.EKSNew = (config) => () =>
  createEndpoint({ endpointName: "EKS" })(config);

exports.ELBNew = (config) => () =>
  createEndpoint({ endpointName: "ELB" })(config);

exports.ELBv2New = (config) => () =>
  createEndpoint({ endpointName: "ELBv2" })(config);

exports.AutoScalingNew = (config) => () =>
  createEndpoint({ endpointName: "AutoScaling" })(config);

exports.KmsNew = (config) => () =>
  createEndpoint({ endpointName: "KMS" })(config);

exports.shouldRetryOnException = ({ error, name }) =>
  pipe([
    tap(() => {
      logger.error(`aws shouldRetryOnException ${tos({ name, error })}`);
      error.stack && logger.error(error.stack);
    }),
    () => error,
    //TODO find out error code we can retry on
    or([
      () => [503].includes(error.statusCode),
      eq(get("code"), "OperationAborted"),
    ]),
    tap((retry) => {
      logger.error(`aws shouldRetryOnException retry: ${retry}`);
    }),
  ])();

//TODO use pipe
exports.shouldRetryOnExceptionDelete = ({ error, name }) => {
  logger.debug(`shouldRetryOnException ${tos({ name, error })}`);
  const retry = error.code === "DeleteConflict";
  logger.debug(`shouldRetryOnException retry: ${retry}`);
  return retry;
};

const hasKeyValueInTags =
  ({ key, value }) =>
  ({ live }) =>
    pipe([
      tap(() => {
        assert(key);
        assert(live);
      }),
      () => live,
      get("Tags"),
      any(and([eq(get("Key"), key), eq(get("Value"), value)])),
      tap((result) => {
        assert(true);
      }),
    ])();

exports.hasKeyValueInTags = hasKeyValueInTags;

const hasKeyInTags =
  ({ key }) =>
  ({ live }) =>
    pipe([
      tap(() => {
        assert(key);
        assert(live);
      }),
      () => live,
      get("Tags"),
      tap((Tags) => {
        assert(Tags, `not Tags in ${tos(live)}`);
      }),
      any((tag) => new RegExp(`^${key}*`, "i").test(tag.Key)),
      tap((result) => {
        assert(true);
      }),
    ])();

exports.hasKeyInTags = hasKeyInTags;

const findValueInTags = ({ key }) =>
  pipe([
    tap((live) => {
      assert(key);
      assert(live);
    }),
    get("Tags"),
    find(eq(get("Key"), key)),
    get("Value"),
  ]);

exports.findValueInTags = findValueInTags;

const findEksCluster =
  ({ config, key = "aws:eks:cluster-name" }) =>
  ({ live, lives }) =>
    pipe([
      tap(() => {
        assert(lives, "lives");
      }),
      () =>
        lives.getByType({
          type: "Cluster",
          group: "eks",
          providerName: config.providerName,
        }),
      find(eq(get("name"), findValueInTags({ key })(live))),
      tap((cluster) => {
        //logger.debug(`findEksCluster ${!!cluster}`);
      }),
    ])();

exports.findEksCluster = findEksCluster;

const findNamespaceEksCluster =
  ({ config, key = "aws:eks:cluster-name" }) =>
  ({ live, lives }) =>
    pipe([
      tap(() => {
        assert(lives, "lives");
      }),
      () => findEksCluster({ config, key })({ live, lives }),
      tap((param) => {
        assert(true);
      }),
      findNamespaceInTagsObject(config),
      tap((namespace) => {
        logger.debug(`findNamespace`, namespace);
      }),
    ])();

exports.findNamespaceInTagsOrEksCluster =
  ({ config, key }) =>
  ({ live, lives }) =>
    pipe([
      tap(() => {
        assert(lives, "lives");
      }),
      () => findNamespaceInTags(config)({ live }),
      switchCase([
        isEmpty,
        () =>
          findNamespaceEksCluster({ config, key })({
            live,
            lives,
          }),
        identity,
      ]),
    ])();

exports.isOurMinionObject = ({ tags, config }) => {
  const {
    stage,
    projectName,
    stageTagKey,
    projectNameKey,
    providerName,
    createdByProviderKey,
  } = config;
  //assert(tags);
  return pipe([
    () => tags,
    tap(() => {
      assert(stage);
      assert(projectName);
      assert(providerName);
    }),
    switchCase([
      and([
        eq(get(projectNameKey), projectName),
        eq(get(stageTagKey), stage),
        eq(get(createdByProviderKey), providerName),
      ]),
      () => true,
      () => false,
    ]),
    tap((minion) => {
      // logger.debug(
      //   `isOurMinionObject ${minion}, ${JSON.stringify({
      //     stage,
      //     projectName,
      //     tags,
      //   })}`
      // );
    }),
  ])();
};

exports.buildTags = ({
  name,
  config,
  namespace,
  UserTags = [],
  key = "Key",
  value = "Value",
}) => {
  const {
    nameKey,
    managedByKey,
    managedByValue,
    stageTagKey,
    createdByProviderKey,
    projectNameKey,
    stage,
    providerName,
    projectName,
    namespaceKey,
  } = config;

  assert(name);
  assert(nameKey);
  assert(providerName);
  assert(stage);
  assert(projectName);
  assert(projectNameKey);

  return pipe([
    () => [
      ...UserTags,
      {
        [key]: nameKey,
        [value]: name,
      },
      {
        [key]: managedByKey,
        [value]: managedByValue,
      },
      {
        [key]: createdByProviderKey,
        [value]: providerName,
      },
      {
        [key]: stageTagKey,
        [value]: stage,
      },
      { [key]: projectNameKey, [value]: projectName },
    ],
    switchCase([
      () => isEmpty(namespace),
      identity,
      (tags) => [
        ...tags,
        {
          [key]: namespaceKey,
          [value]: namespace,
        },
      ],
    ]),
  ])();
};

const isOurMinionFactory =
  ({ key = "Key", value = "Value", tags = "Tags" } = {}) =>
  ({ live, config }) => {
    const {
      createdByProviderKey,
      providerName,
      projectNameKey,
      stageTagKey,
      stage,
      projectName,
    } = config;
    return pipe([
      tap(() => {
        assert(createdByProviderKey);
        assert(live);
        assert(stage);
      }),
      () => live,
      get(tags),
      and([
        find(and([eq(get(key), projectNameKey), eq(get(value), projectName)])),
        find(and([eq(get(key), stageTagKey), eq(get(value), stage)])),
      ]),
      tap((minion) => {
        // logger.debug(
        //   `isOurMinion ${minion}, ${JSON.stringify({
        //     stage,
        //     projectName,
        //   })}`
        // );
      }),
    ])();
  };

exports.isOurMinionFactory = isOurMinionFactory;
exports.isOurMinion = isOurMinionFactory({});

exports.tagsExtractFromDescription = pipe([
  get("Description", ""),
  callProp("split", "tags:"),
  last,
  tryCatch(JSON.parse, () => ({})),
  tap((Tags) => {
    assert(true);
  }),
]);

exports.tagsRemoveFromDescription = pipe([
  get("Description", ""),
  callProp("split", "tags:"),
  first,
  callProp("trim"),
  tap((Description) => {
    assert(true);
  }),
]);

const findNamespaceInTags =
  (config) =>
  ({ live }) =>
    pipe([
      tap(() => {
        assert(live);
      }),
      () => live,
      get("Tags"),
      find(eq(get("Key"), config.namespaceKey)),
      get("Value", ""),
    ])();

exports.findNamespaceInTags = findNamespaceInTags;

const findNamespaceInTagsObject =
  (config) =>
  ({ live } = {}) =>
    pipe([
      tap(() => {
        assert(config.namespaceKey);
      }),
      () => live,
      get("tags"),
      get(config.namespaceKey, ""),
      tap(() => {
        assert(true);
      }),
    ])();

exports.findNamespaceInTagsObject = findNamespaceInTagsObject;

const findNameInTags = ({ live }) =>
  pipe([
    tap(() => {
      if (!live) {
        assert(live);
      }
    }),
    () => live,
    get("Tags", []),
    tap((params) => {
      assert(true);
    }),
    switchCase([
      Array.isArray,
      pipe([find(eq(get("Key"), configProviderDefault.nameKey)), get("Value")]),
      pipe([get(configProviderDefault.nameKey)]),
    ]),
  ])();

exports.findNameInTags = findNameInTags;

exports.findNameInTagsOrId =
  ({ findId }) =>
  ({ live }) =>
    pipe([
      tap(() => {
        //TODO move assert up
        assert(findId);
        if (!live) {
          assert(live);
        }
      }),
      () => ({ live }),
      findNameInTags,
      when(isEmpty, pipe([() => findId({ live })])),
      tap((name) => {
        if (!name) {
          assert(name, `cannot find name or id for ${tos(live)}`);
        }
      }),
    ])();

exports.getByIdCore = ({ fieldIds, getList }) =>
  tryCatch(
    pipe([
      tap(({ id }) => {
        logger.debug(`getById ${fieldIds} ${id}`);
      }),
      ({ id }) => getList({ params: { [fieldIds]: [id] } }),
      get("items"),
      first,
      tap((item) => {
        logger.debug(`getById  ${fieldIds} result: ${tos(item)}`);
      }),
    ]),
    (error) => {
      logger.debug(`getById  ${fieldIds} no result: ${error.message}`);
    }
  );

exports.revokeSecurityGroupIngress =
  ({ ec2 }) =>
  (params) =>
    tryCatch(
      () => ec2().revokeSecurityGroupIngress(params),
      tap.if(
        ({ code }) =>
          !includes(code)([
            "InvalidPermission.NotFound",
            "InvalidGroup.NotFound",
          ]),
        (error) => {
          throw Error(error.message);
        }
      )
    )();

exports.removeRoleFromInstanceProfile =
  ({ iam }) =>
  (params) =>
    tryCatch(
      () => iam().removeRoleFromInstanceProfile(params),
      switchCase([
        eq(get("code"), "NoSuchEntity"),
        () => undefined,
        (error) => {
          logger.error(`iam role removeRoleFromInstanceProfile ${tos(error)}`);
          throw Error(error.message);
        },
      ])
    )();

exports.destroyNetworkInterfaces = ({ ec2, Name, Values }) =>
  pipe([
    tap(() => {
      assert(ec2);
      assert(Name);
      assert(Array.isArray(Values));
    }),
    () =>
      ec2().describeNetworkInterfaces({
        Filters: [{ Name, Values }],
      }),
    get("NetworkInterfaces", []),
    tap((NetworkInterfaces) => {
      logger.debug(`#NetworkInterfaces ${NetworkInterfaces.length}`);
    }),
    tap(
      forEach(
        pipe([
          get("Attachment.AttachmentId"),
          tap.if(
            not(isEmpty),
            tryCatch(
              (AttachmentId) => ec2().detachNetworkInterface({ AttachmentId }),
              switchCase([
                eq(get("code"), "AuthFailure"),
                () => undefined,
                (error) => {
                  logger.error(
                    `deleteNetworkInterface error code: ${error.code}`
                  );
                  throw Error(error.message);
                },
              ])
            )
          ),
        ])
      )
    ),
    tap(
      forEach(
        pipe([
          get("NetworkInterfaceId"),
          tap((NetworkInterfaceId) => {
            logger.debug(`deleteNetworkInterface: ${NetworkInterfaceId}`);
            assert(NetworkInterfaceId);
          }),
          tryCatch(
            (NetworkInterfaceId) =>
              ec2().deleteNetworkInterface({ NetworkInterfaceId }),
            switchCase([
              or([
                eq(get("code"), "InvalidNetworkInterfaceID.NotFound"),
                eq(get("code"), "InvalidParameterValue"),
              ]),
              (error) => {
                logger.error(
                  `deleteNetworkInterface ignore error code: ${error.code}`
                );
              },
              (error) => {
                logger.error(
                  `deleteNetworkInterface error code: ${error.code}`
                );
                throw Error(error.message);
              },
            ])
          ),
        ])
      )
    ),
  ])();
