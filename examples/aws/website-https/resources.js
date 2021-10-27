const assert = require("assert");
const path = require("path");
const { map } = require("rubico");
const mime = require("mime-types");

const { makeDomainName, getFiles } = require("./dumpster");

const createResources = async ({ provider }) => {
  const { config } = provider;
  const { rootDomainName, DomainName, websiteDir, stage } = config;
  assert(rootDomainName);
  assert(DomainName);
  assert(websiteDir);
  assert(stage);
  const files = await getFiles(websiteDir);
  const bucketName = `${DomainName}-${stage}`;

  const websiteBucket = provider.S3.makeBucket({
    name: bucketName,
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

  await map((file) =>
    provider.S3.makeObject({
      name: file,
      dependencies: { bucket: websiteBucket },
      properties: () => ({
        ACL: "public-read",
        ContentType: mime.lookup(file) || "text/plain",
        source: path.join(websiteDir, file),
      }),
    })
  )(files);

  const domainName = makeDomainName({
    DomainName,
    stage,
  });

  const certificate = provider.ACM.makeCertificate({
    name: domainName,
    properties: () => ({
      DomainName: domainName,
    }),
  });

  const domain = provider.Route53Domains.useDomain({
    name: rootDomainName,
  });

  const hostedZone = provider.Route53.makeHostedZone({
    name: `${domainName}.`,
    dependencies: { domain },
  });

  const recordValidation = provider.Route53.makeRecord({
    name: `validation-${domainName}.`,
    dependencies: { hostedZone, certificate },
    // properties: ({ dependencies: { certificate } }) => {
    //   const domainValidationOption =
    //     certificate?.live?.DomainValidationOptions[0];
    //   const record = domainValidationOption?.ResourceRecord;
    //   if (domainValidationOption) {
    //     assert(
    //       record,
    //       `missing record in DomainValidationOptions, certificate ${JSON.stringify(
    //         certificate.live
    //       )}`
    //     );
    //   }
    //   return {
    //     Name: record?.Name,
    //     ResourceRecords: [
    //       {
    //         Value: record?.Value,
    //       },
    //     ],
    //     TTL: 300,
    //     Type: "CNAME",
    //   };
    // },
  });

  const distribution = provider.CloudFront.makeDistribution({
    name: `distribution-${bucketName}`,
    dependencies: { websiteBucket, certificate },
    properties: ({}) => {
      return {
        PriceClass: "PriceClass_100",
        Comment: `${bucketName}.s3.amazonaws.com`,
        Aliases: { Quantity: 1, Items: [domainName] },
        DefaultRootObject: "index.html",
        DefaultCacheBehavior: {
          TargetOriginId: `S3-${bucketName}`,
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
              DomainName: `${bucketName}.s3.amazonaws.com`,
              Id: `S3-${bucketName}`,
              S3OriginConfig: { OriginAccessIdentity: "" },
            },
          ],
          Quantity: 1,
        },
      };
    },
  });

  // const hostedZoneName = `${makeDomainName({
  //   DomainName,
  //   stage,
  // })}.`;

  const recordCloudFront = provider.Route53.makeRecord({
    name: `distribution-alias-${domainName}`,
    dependencies: { hostedZone, distribution },
  });

  return {
    certificate,
    websiteBucket,
    recordCloudFront,
    distribution,
    hostedZone,
    recordValidation,
  };
};

exports.createResources = createResources;