const assert = require("assert");
const { pipe, tap } = require("rubico");
const { CloudWatchLogs } = require("@aws-sdk/client-cloudwatch-logs");
const { createEndpoint } = require("../AwsCommon");

exports.createCloudWatchLogs = createEndpoint(CloudWatchLogs);

exports.ignoreErrorCodes = ["ResourceNotFoundException"];

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchLogs.html#tagLogGroup-property
exports.tagResource =
  ({ cloudWatchLogs }) =>
  ({ live }) =>
    pipe([
      (tags) => ({ logGroupName: live.logGroupName, tags }),
      cloudWatchLogs().tagLogGroup,
    ]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchLogs.html#untagLogGroup-property
exports.untagResource =
  ({ cloudWatchLogs }) =>
  ({ live }) =>
    pipe([
      (tags) => ({ logGroupName: live.logGroupName, tags }),
      cloudWatchLogs().untagLogGroup,
    ]);
