---
id: Route53Record
title: Route53 Record
---

Provides a single Route53 Record.

## Examples

### A Record

Add an A record to the hosted zone:

```js
const domainName = "your.domain.name.com";

const domain = await provider.useRoute53Domain({
  name: domainName,
});

const hostedZoneName = `${domainName}.`;
const hostedZone = await provider.makeHostedZone({
  name: hostedZoneName,
  dependencies: { domain },
  properties: ({}) => ({}),
});

const recordA = await provider.makeRoute53Record({
  name: `${hostedZoneName}-ipv4`,
  dependencies: { hostedZone, eip },
  properties: ({ dependencies: { eip } }) => {
    return {
      Name: hostedZoneName,
      Type: "A",
      ResourceRecords: [
        {
          Value: eip.live?.PublicIp,
        },
      ],
      TTL: 60,
    };
  },
});
```

### CNAME from a certificate

Verify a certificate with DNS validation by adding a CNAME record.

```js
const domainName = "your.domain.name.com";

const domain = await provider.useRoute53Domain({
  name: domainName,
});

const hostedZone = await provider.makeHostedZone({
  name: `${domainName}.`,
  dependencies: { domain },
  properties: ({}) => ({}),
});

const recordValidation = await provider.makeRoute53Record({
  name: `validation-${domainName}.`,
  dependencies: { hostedZone, certificate },
  properties: ({ dependencies: { certificate } }) => {
    const domainValidationOption =
      certificate?.live?.DomainValidationOptions[0];
    const record = domainValidationOption?.ResourceRecord;
    if (domainValidationOption) {
      assert(
        record,
        `missing record in DomainValidationOptions, certificate ${JSON.stringify(
          certificate.live
        )}`
      );
    }
    return {
      Name: record?.Name,
      ResourceRecords: [
        {
          Value: record?.Value,
        },
      ],
      TTL: 300,
      Type: "CNAME",
    };
  },
});
```

## Source Code Examples

- [https static website ](https://github.com/grucloud/grucloud/blob/main/examples/aws/website-https/iac.js)
- [starhack.it](https://github.com/FredericHeem/starhackit/blob/master/deploy/grucloud-aws/iac.js)
- [A record and hosted zone ](https://github.com/grucloud/grucloud/blob/main/examples/aws/route53/iac.js)

## Properties

- [properties list](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53.html#changeResourceRecordSets-property)

## Dependencies

- [Route53 HostedZone](./Route53HostedZone)