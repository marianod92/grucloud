---
id: CloudFrontDistribution
title: Distribution
---

Provides a Cloud Front distribution.

## CloudFront with a S3 bucket as origin

```js
const domainName = "your.domain.name.com";

const websiteBucket = await provider.makeS3Bucket({
  name: `${domainName}-bucket`,
  properties: () => ({
    ACL: "public-read",
    WebsiteConfiguration: {
      ErrorDocument: {
        Key: "error.html",
      },
      IndexDocument: {
        Suffix: "index.html",
      },
    },
  }),
});

const distribution = await provider.makeCloudFrontDistribution({
  name: `distribution-${domainName}`,
  dependencies: { websiteBucket },
  properties: ({ dependencies }) => {
    return {
      DistributionConfigWithTags: {
        DistributionConfig: {
          Comment: `${domainName}.s3.amazonaws.com`,
          DefaultCacheBehavior: {
            TargetOriginId: `S3-${domainName}`,
            ViewerProtocolPolicy: "redirect-to-https",
            ForwardedValues: {
              Cookies: {
                Forward: "none",
              },
              QueryString: false,
            },
            MinTTL: 600,
            TrustedSigners: {
              Enabled: false,
              Quantity: 0,
              Items: [],
            },
          },
          Origins: {
            Items: [
              {
                DomainName: `${domainName}.s3.amazonaws.com`,
                Id: `S3-${domainName}`,
                S3OriginConfig: { OriginAccessIdentity: "" },
              },
            ],
            Quantity: 1,
          },
        },
      },
    };
  },
});
```

### Examples

- [https static website ](https://github.com/grucloud/grucloud/blob/main/examples/aws/website-https/iac.js)

### Properties

- [properties list](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudFront.html#createDistributionWithTags-property)

### Dependencies

- [S3Bucket](../S3/S3Bucket)