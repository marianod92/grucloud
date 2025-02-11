const assert = require("assert");
const {
  omit,
  pipe,
  get,
  tap,
  tryCatch,
  filter,
  not,
  map,
  fork,
} = require("rubico");
const {
  first,
  pluck,
  isFunction,
  size,
  defaultsDeep,
  when,
} = require("rubico/x");

const path = require("path");

const { STS } = require("@aws-sdk/client-sts");

const logger = require("@grucloud/core/logger")({ prefix: "AwsProvider" });
const CoreProvider = require("@grucloud/core/CoreProvider");
const { assignTagsSort } = require("./AwsCommon");
const { mergeConfig } = require("@grucloud/core/ProviderCommon");
const {
  createProjectAws,
} = require("@grucloud/core/cli/providers/createProjectAws");

const { generateCode } = require("./Aws2gc");
const { createEC2 } = require("./EC2/EC2Common");
const ApiGatewayV2 = require("./ApiGatewayV2");
const ApiGateway = require("./ApiGateway");
const AppRunner = require("./AppRunner");
const AppSync = require("./AppSync");
const AutoScaling = require("./Autoscaling");
const CertificateManager = require("./ACM");
const CloudFront = require("./CloudFront");
const CloudWatchEvent = require("./CloudWatchEvent");
const CloudWatchLogs = require("./CloudWatchLogs");
const CognitoIdentityServiceProvider = require("./CognitoIdentityServiceProvider");
const EC2 = require("./EC2");
const DynamoDB = require("./DynamoDB");
const ECR = require("./ECR");
const ECS = require("./ECS");
const EKS = require("./EKS");
const ELBv2 = require("./ELBv2");
const IAM = require("./IAM");
const KMS = require("./KMS");
const Lambda = require("./Lambda");
const RDS = require("./RDS");
const Route53 = require("./Route53");
const Route53Domain = require("./Route53Domain");
const S3 = require("./S3");
const SQS = require("./SQS");
const SSM = require("./SSM");

const fnSpecs = (config) =>
  pipe([
    tap(() => {
      assert(config);
    }),
    () => [
      ...ApiGateway(),
      ...ApiGatewayV2(),
      ...AppRunner(),
      ...AppSync(),
      ...AutoScaling(),
      ...CertificateManager(),
      ...CloudFront(),
      ...CloudWatchEvent(),
      ...CloudWatchLogs(),
      ...CognitoIdentityServiceProvider(),
      ...DynamoDB(),
      ...EC2(),
      ...ECR(),
      ...ECS(),
      ...EKS(),
      ...ELBv2(),
      ...IAM(),
      ...KMS(),
      ...Lambda(),
      ...RDS(),
      ...Route53(),
      ...Route53Domain(),
      ...S3(),
      ...SQS(),
      ...SSM(),
    ],
  ])();

const getAvailabilityZonesName = ({ region }) =>
  pipe([
    () => createEC2({ region }),
    tap((params) => {
      assert(true);
    }),
    (ec2) => ec2().describeAvailabilityZones({}),
    tap((params) => {
      assert(true);
    }),
    get("AvailabilityZones"),
    pluck("ZoneName"),
    tap((ZoneNames) => {
      logger.debug(`AvailabilityZones: for region ${region}: ${ZoneNames}`);
    }),
  ])();

const validateConfig = ({ region, zone, zones }) => {
  logger.debug(`region: ${region}, zone: ${zone}, zones: ${zones}`);
  if (zone && !zones.includes(zone)) {
    const message = `The configued zone '${zone}' is not part of region ${region}, available zones for this region: ${zones}`;
    throw { code: 400, type: "configuration", message };
  }
};

//TODO wrap for retry
const fetchAccountId = pipe([
  tap(() => {
    logger.debug(`fetchAccountId`);
  }),
  () => new STS({ region: "us-east-1" }),
  (sts) => sts.getCallerIdentity({}),
  get("Account"),
]);

exports.AwsProvider = ({
  name = "aws",
  stage = "dev",
  config,
  programOptions,
  configs = [],
  ...other
}) => {
  assert(config ? isFunction(config) : true, "config must be a function");

  // AWS.config.apiVersions = {
  //   acm: "2015-12-08",
  //   apigateway: "2015-07-09",
  //   apigatewayv2: "2018-11-29",
  //   apprunner: "2020-05-15",
  //   appsync: "2017-07-25",
  //   autoscaling: "2011-01-01",
  //   cloudfront: "2020-05-31",
  //   cloudwatchevents: "2015-10-07",
  //   cloudwatchlogs: "2014-03-28",
  //   cloudwatch: "2010-08-01",
  //   cognitoidentityserviceprovider: "2016-04-18",
  //   dynamodb: "2012-08-10",
  //   ec2: "2016-11-15",
  //   ecr: "2015-09-21",
  //   ecs: "2014-11-13",
  //   eks: "2017-11-01",
  //   elb: "2012-06-01",
  //   elbv2: "2015-12-01",
  //   iam: "2010-05-08",
  //   kms: "2014-11-01",
  //   lambda: "2015-03-31",
  //   rds: "2014-10-31",
  //   resourcegroupstaggingapi: "2017-01-26",
  //   route53: "2013-04-01",
  //   route53domains: "2014-05-15",
  //   s3: "2006-03-01",
  //   sqs: "2012-11-05",
  //   ssm: "2014-11-06",
  // };

  const { AWSAccessKeyId, AWSSecretKey } = process.env;

  // AWS.config.update({
  //   ...(AWSAccessKeyId && {
  //     accessKeyId: AWSAccessKeyId,
  //   }),
  //   ...(AWSSecretKey && {
  //     secretAccessKey: AWSSecretKey,
  //   }),
  // });

  let accountId;
  let zone;
  let zones;

  const getRegion = (config) =>
    pipe([
      () => ({}),
      when(
        () => process.env.AWS_REGION,
        defaultsDeep({ region: process.env.AWS_REGION })
      ),
      defaultsDeep(config),
      get("region", "us-east-1"),
      tap((region) => {
        assert(region);
        logger.info(`using region '${region}'`);
      }),
    ])();

  let region = getRegion(
    mergeConfig({
      config,
      configs,
    })
  );

  const makeConfig = pipe([
    tap((params) => {
      assert(true);
    }),
    () =>
      mergeConfig({
        configDefault: {
          stage,
          zone: () => zone,
          accountId: () => accountId,
          region,
        },
        config,
        configs,
      }),
  ]);

  const getZone = ({ zones, config }) => config.zone() || first(zones);

  const start = async () => {
    accountId = await fetchAccountId();
    const merged = makeConfig();
    zones = await getAvailabilityZonesName({ region });
    assert(zones, `no zones for region ${region}`);
    zone = getZone({ zones, config: merged });
    assert(zone);
    validateConfig({
      region,
      zone,
      zones,
    });
  };

  const info = () => ({
    accountId,
    region,
    zone,
    config: omit(["accountId", "zone"])(makeConfig()),
  });

  const init = ({ options, programOptions }) =>
    pipe([
      tap(() => {
        assert(programOptions.workingDirectory);
      }),
      fork({
        dirs: () => ({
          destination: path.resolve(programOptions.workingDirectory),
        }),
      }),
      createProjectAws,
    ])();

  const getListHof = ({ getList, spec }) =>
    tryCatch(
      pipe([
        tap(() => {
          logger.debug(`getList ${spec.groupType}`);
        }),
        getList,
        tap((items) => {
          Array.isArray(items);
        }),
        map(assignTagsSort),
        filter(not(isEmpty)),
        (items) => ({ items, total: size(items) }),
        tap(({ total, items }) => {
          logger.debug(`getList ${spec.groupType} total: ${total}`);
        }),
      ]),
      (error) =>
        pipe([
          tap((params) => {
            logger.error(`getList #${spec.groupType}, ${error}`);
          }),
          () => {
            throw error;
          },
        ])()
    );

  return CoreProvider({
    ...other,
    type: "aws",
    name,
    programOptions,
    makeConfig,
    fnSpecs,
    start,
    info,
    init,
    generateCode: ({ commandOptions, programOptions }) =>
      generateCode({
        providerConfig: makeConfig(),
        specs: fnSpecs(makeConfig()),
        commandOptions,
        programOptions,
      }),
    getListHof,
  });
};
