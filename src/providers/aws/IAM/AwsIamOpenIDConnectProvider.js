const assert = require("assert");
const {
  map,
  pipe,
  tap,
  tryCatch,
  get,
  switchCase,
  eq,
  assign,
  pick,
} = require("rubico");
const { defaultsDeep, isEmpty, forEach, pluck, find } = require("rubico/x");
const tls = require("tls");

const logger = require("../../../logger")({
  prefix: "IamOIDC",
});
const { retryCall } = require("../../Retry");
const { tos } = require("../../../tos");
const {
  IAMNew,
  buildTags,
  findNameInTags,
  shouldRetryOnException,
  shouldRetryOnExceptionDelete,
} = require("../AwsCommon");
const {
  mapPoolSize,
  getByNameCore,
  isUpByIdCore,
  isDownByIdCore,
} = require("../../Common");

// https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc_verify-thumbprint.html
const fetchThumbprint = ({ Url }) =>
  pipe([
    tap(() => {
      logger.info(`fetchFingerPrint ${Url}`);
    }),
    () => new URL(Url),
    ({ port, hostname }) => ({
      host: hostname,
      port: port || 443,
      rejectUnauthorized: false,
    }),
    (tlsOptions) =>
      new Promise((resolve, reject) => {
        const tlsStream = tls.connect(tlsOptions, () => {
          resolve(tlsStream.getPeerCertificate());
        });
      }),
    tap((peerCertificate) => {
      logger.debug(`peerCertificate ${peerCertificate}`);
    }),
    get("fingerprint"),
    (fingerprint) => fingerprint.replace(/:/g, ""),
    tap((fingerprint) => {
      logger.debug(`fingerprint ${fingerprint}`);
    }),
  ])();
exports.fetchThumbprint = fetchThumbprint;

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html
exports.AwsIamOpenIDConnectProvider = ({ spec, config }) => {
  assert(spec);
  assert(config);

  const iam = IAMNew(config);

  const findName = findNameInTags;
  const findId = pipe([
    tap((item) => {
      logger.debug(`findId iam oidc`);
    }),
    get("Arn"),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#listOpenIDConnectProviders-property
  const getList = async ({ params } = {}) =>
    pipe([
      tap(() => {
        logger.debug(`getList iam oidc`);
      }),
      () => iam().listOpenIDConnectProviders(params),
      get("OpenIDConnectProviderList"),
      tap((oidcs) => {
        logger.debug(`getList oidcs: ${tos(oidcs)}`);
      }),
      map.pool(
        mapPoolSize,
        tryCatch(
          ({ Arn }) =>
            pipe([
              () =>
                iam().getOpenIDConnectProvider({
                  OpenIDConnectProviderArn: Arn,
                }),
              pick(["ClientIDList", "ThumbprintList", "Url", "CreateDate"]),
              assign({
                Arn: () => Arn,
                Tags: pipe([
                  () =>
                    iam().listOpenIDConnectProviderTags({
                      OpenIDConnectProviderArn: Arn,
                    }),
                  get("Tags"),
                ]),
              }),
            ])(),
          (error, oidc) =>
            pipe([
              tap(() => {
                logger.error(`getList iam oidc error: ${tos({ error, oidc })}`);
              }),
              () => ({ error, oidc }),
            ])()
        )
      ),
      tap.if(find(get("error")), (oidcs) => {
        throw oidcs;
      }),
      tap((oidcs) => {
        logger.debug(`getList iam oidc results: ${tos(oidcs)}`);
      }),
      (oidcs) => ({
        total: oidcs.length,
        items: oidcs,
      }),
      tap(({ total }) => {
        logger.info(`getList #iamoidc: ${total}`);
      }),
    ])();

  const getByName = ({ name }) => getByNameCore({ name, getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#getOpenIDConnectProvider-property
  const getById = ({ id: OpenIDConnectProviderArn }) =>
    pipe([
      tap(() => {
        logger.debug(`getById ${OpenIDConnectProviderArn}`);
      }),
      tryCatch(
        () => iam().getOpenIDConnectProvider({ OpenIDConnectProviderArn }),
        switchCase([
          eq(get("code"), "NoSuchEntity"),
          (error) => {
            logger.debug(`getById ${OpenIDConnectProviderArn} NoSuchEntity`);
          },
          (error) => {
            logger.debug(`getById error: ${tos(error)}`);
            throw error;
          },
        ])
      ),
      tap((result) => {
        logger.debug(`getById result: ${result}`);
      }),
    ])();

  const isUpById = isUpByIdCore({ getById });
  const isDownById = isDownByIdCore({ getById });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createOpenIDConnectProvider-property
  const create = async ({ name, payload = {}, resolvedDependencies: {} }) =>
    pipe([
      tap(() => {
        logger.info(`create iam oidc ${name}`);
        logger.debug(`payload: ${tos(payload)}`);
      }),
      () => fetchThumbprint({ Url: payload.Url }),
      (thumbprint) => defaultsDeep({ ThumbprintList: [thumbprint] })(payload),
      tap((createParams) => {
        logger.debug(`createParams: ${tos(createParams)}`);
      }),
      (createParams) => iam().createOpenIDConnectProvider(createParams),
      tap((result) => {
        logger.debug(`createOpenIDConnectProvider result: ${tos(result)}`);
      }),
      ({ OpenIDConnectProviderArn }) => ({
        OpenIDConnectProviderArn,
        Tags: buildTags({ config, name }),
      }),
      (tagParams) => iam().tagOpenIDConnectProvider(tagParams),
      tap((oidcp) => {
        logger.debug(`created iam oidc result ${tos({ name, oidcp })}`);
        logger.info(`created iam oidc ${name}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#deleteOpenIDConnectProvider-property
  const destroy = async ({ live }) =>
    pipe([
      tap(() => {
        logger.info(`destroy iam oidc`);
      }),
      () => ({
        OpenIDConnectProviderArn: findId(live),
        name: findName(live),
      }),
      ({ OpenIDConnectProviderArn, name }) =>
        pipe([
          tap(() => {
            logger.info(
              `destroy iam oidc ${JSON.stringify({
                name,
                OpenIDConnectProviderArn,
              })}`
            );
          }),
          () =>
            iam().deleteOpenIDConnectProvider({
              OpenIDConnectProviderArn,
            }),
          tap(() =>
            retryCall({
              name: `iam oidc isDownById: ${name} OpenIDConnectProviderArn: ${OpenIDConnectProviderArn}`,
              fn: () => isDownById({ id: OpenIDConnectProviderArn }),
              config,
            })
          ),
          tap(() => {
            logger.info(
              `destroy iam oidc done, ${JSON.stringify({
                name,
                OpenIDConnectProviderArn,
              })}`
            );
          }),
        ])(),
    ])();

  const configDefault = async ({ name, properties, dependencies }) =>
    defaultsDeep({
      ClientIDList: ["sts.amazonaws.com"],
      /*Tags: buildTags({ name, config }),*/
    })(properties);

  return {
    type: "IamOpenIDConnectProvider",
    spec,
    isUpById,
    isDownById,
    findId,
    getByName,
    getById,
    findName,
    create,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
    shouldRetryOnExceptionDelete,
  };
};