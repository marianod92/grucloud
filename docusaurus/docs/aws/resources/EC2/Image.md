---
id: Image
title: AMI
---

Provides an [Amazon Managed Image](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html).

## Example

### EC2 running on Ubuntu 20.04

- Find the _Ubuntu Server 20.04 LTS_ image running on _x86_64_.
- Provides the image as an EC2 dependency.

```js
exports.createResources = () => [
  {
    type: "Image",
    group: "EC2",
    name: "eip",
    readOnly: true,
    properties: () => ({
      Filters: [
        {
          Name: "architecture",
          Values: ["x86_64"],
        },
        {
          Name: "description",
          Values: ["Canonical, Ubuntu, 20.04 LTS, amd64 focal*"],
        },
      ],
    }),
  },
];
```

### Amazon Linux 2

Here is the Amazone Linux 2 image:

```js
exports.createResources = () => [
  {
    type: "Image",
    group: "EC2",
    name: "eip",
    readOnly: true,
    properties: () => ({
      Filters: [
        {
          Name: "architecture",
          Values: ["x86_64"],
        },
        {
          Name: "description",
          Values: ["Amazon Linux 2 AMI *"],
        },
      ],
    }),
  },
];
```

## Properties

The list of properties can be found in [DescribeImagesCommandInput](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ec2/interfaces/describeimagescommandinput.html)

## Examples

- [simple example](https://github.com/grucloud/grucloud/blob/main/examples/aws/EC2/ec2)

## Used By

- [EC2](./Instance.md)

## Listing

List all of the images with the _Image_ filter:

```sh
gc l -t Image
```

```sh
Listing resources on 1 provider: aws
✓ aws
  ✓ Initialising
  ✓ Listing 1/1
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 1 Image from aws                                                                                             │
├───────────────────────┬───────────────────────────────────────────────────────────────────────────────┬──────┤
│ Name                  │ Data                                                                          │ Our  │
├───────────────────────┼───────────────────────────────────────────────────────────────────────────────┼──────┤
│ ami-0945843162c83c351 │ Architecture: x86_64                                                          │ NO   │
│                       │ CreationDate: 2020-12-04T00:11:02.000Z                                        │      │
│                       │ ImageId: ami-0945843162c83c351                                                │      │
│                       │ ImageLocation: aws-marketplace/Ubuntu Server 20.04 LTS-bc9ee367-938c-4032-b2… │      │
│                       │ ImageType: machine                                                            │      │
│                       │ Public: true                                                                  │      │
│                       │ OwnerId: 679593333241                                                         │      │
│                       │ PlatformDetails: Linux/UNIX                                                   │      │
│                       │ UsageOperation: RunInstances                                                  │      │
│                       │ ProductCodes:                                                                 │      │
│                       │   - ProductCodeId: b6066zavuglx3tvu52d5ikod2                                  │      │
│                       │     ProductCodeType: marketplace                                              │      │
│                       │ State: available                                                              │      │
│                       │ BlockDeviceMappings:                                                          │      │
│                       │   - DeviceName: /dev/sda1                                                     │      │
│                       │     Ebs:                                                                      │      │
│                       │       DeleteOnTermination: true                                               │      │
│                       │       SnapshotId: snap-02571452446eabf30                                      │      │
│                       │       VolumeSize: 8                                                           │      │
│                       │       VolumeType: gp2                                                         │      │
│                       │       Encrypted: false                                                        │      │
│                       │ Description: Ubuntu Server 20.04 LTS                                          │      │
│                       │ EnaSupport: true                                                              │      │
│                       │ Hypervisor: xen                                                               │      │
│                       │ ImageOwnerAlias: aws-marketplace                                              │      │
│                       │ Name: Ubuntu Server 20.04 LTS-bc9ee367-938c-4032-b257-5dd4abfe8e56-ami-0d86f… │      │
│                       │ RootDeviceName: /dev/sda1                                                     │      │
│                       │ RootDeviceType: ebs                                                           │      │
│                       │ SriovNetSupport: simple                                                       │      │
│                       │ Tags: []                                                                      │      │
│                       │ VirtualizationType: hvm                                                       │      │
│                       │                                                                               │      │
└───────────────────────┴───────────────────────────────────────────────────────────────────────────────┴──────┘


List Summary:
Provider: aws
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ aws                                                                                                         │
├────────────────────┬────────────────────────────────────────────────────────────────────────────────────────┤
│ Image              │ ami-0945843162c83c351                                                                  │
└────────────────────┴────────────────────────────────────────────────────────────────────────────────────────┘
1 resource, 1 type, 1 provider
Command "gc l -t Image" executed in 2s
```

## AWS CLI

You can fiddle the filters with the `aws cli` as well:

```sh
aws ec2 describe-images --filters "Name=description,Values=Amazon Linux 2 AMI*" "Name=architecture,Values=x86_64"
```
