const assert = require("assert");
const { assign, pipe, tap, get, pick, tryCatch, set, not } = require("rubico");
const {
  isEmpty,
  defaultsDeep,
  last,
  callProp,
  when,
  first,
} = require("rubico/x");

const { buildTagsObject } = require("@grucloud/core/Common");
const { AwsClient } = require("../AwsClient");
const { createSQS, tagResource, untagResource } = require("./SQSCommon");
const { throwIfNotAwsError } = require("../AwsCommon");

const findId = get("live.Attributes.QueueArn");
const pickId = pick(["QueueUrl"]);
const findName = pipe([
  get("live.QueueUrl"),
  tap((QueueUrl) => {
    assert(QueueUrl);
  }),
  callProp("split", "/"),
  last,
  tap((name) => {
    assert(name);
  }),
]);

const ignoreErrorCodes = ["AWS.SimpleQueueService.NonExistentQueue"];

exports.SQSQueue = ({ spec, config }) => {
  const sqs = createSQS(config);
  const client = AwsClient({ spec, config })(sqs);

  const findDependencies = ({ live, lives }) => [];

  const assignTags = pipe([
    tap((params) => {
      assert(true);
    }),
    assign({
      tags: pipe([
        pickId,
        (params) => sqs().listQueueTags(params),
        get("Tags"),
      ]),
    }),
  ]);

  const decorate = (params) =>
    pipe([
      tap((input) => {
        assert(input);
        assert(params);
      }),
      when(
        get("Policy"),
        assign({
          Policy: pipe([get("Policy"), JSON.parse]),
        })
      ),
      (Attributes) => ({ ...params, Attributes }),
      assignTags,
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#getQueueAttributes-property
  const getById = client.getById({
    pickId,
    extraParams: { AttributeNames: ["All"] },
    method: "getQueueAttributes",
    getField: "Attributes",
    decorate,
    ignoreErrorCodes,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#listQueues-property
  const getList = client.getList({
    method: "listQueues",
    getParam: "QueueUrls",
    decorate: () =>
      pipe([
        tap((QueueUrl) => {
          assert(QueueUrl);
        }),
        (QueueUrl) => ({ QueueUrl }),
        getById,
      ]),
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#getQueueUrl-property
  const getByName = pipe([
    tryCatch(
      pipe([
        tap((params) => {
          assert(true);
        }),
        ({ name }) => sqs().getQueueUrl({ QueueName: name }),
        getById,
      ]),
      throwIfNotAwsError("AWS.SimpleQueueService.NonExistentQueue")
    ),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#createQueue-property
  const create = client.create({
    method: "createQueue",
    shouldRetryOnExceptionCodes: [
      "AWS.SimpleQueueService.QueueDeletedRecently",
    ],
    getById,
    isInstanceUp: pipe([
      (live) => ({ live }),
      findName,
      (QueueNamePrefix) =>
        pipe([
          () => ({ QueueNamePrefix }),
          sqs().listQueues,
          get("QueueUrls"),
          first,
          not(isEmpty),
        ])(),
    ]),
    config: { retryDelay: 65e3, retryCount: 2 },
    configIsUp: { repeatCount: 1, repeatDelay: 60e3 },
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#setQueueAttributes-property
  const update = client.update({
    pickId,
    filterParams: ({ payload, live }) =>
      pipe([
        () => payload,
        when(
          get("Attributes.Policy"),
          set("Attributes.Policy", JSON.stringify(payload.Attributes.Policy))
        ),
        defaultsDeep(pickId(live)),
        tap((params) => {
          assert(true);
        }),
      ])(),
    method: "setQueueAttributes",
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html#deleteQueue-property
  const destroy = client.destroy({
    pickId,
    method: "deleteQueue",
    getById,
    ignoreErrorCodes,
  });

  const configDefault = async ({
    name,
    namespace,
    properties: { tags, ...otherProps },
    dependencies: {},
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        QueueName: name,
        tags: buildTagsObject({ config, namespace, name, userTags: tags }),
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
    getById,
    getList,
    configDefault,
    findDependencies,
    tagResource: tagResource({ sqs }),
    untagResource: untagResource({ sqs }),
  };
};
