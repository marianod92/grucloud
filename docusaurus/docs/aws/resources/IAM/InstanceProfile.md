---
id: InstanceProfile
title: Instance Profile
---

Provides an Iam Instance Profile.

The following example create an instance profile, a role attached to this instance profile, and create an ec2 instance under this profile:

```js
exports.createResources = () => [
  {
    type: "Instance",
    group: "EC2",
    name: "web-iam",
    properties: ({ config }) => ({
      InstanceType: "t2.micro",
      ImageId: "ami-02e136e904f3da870",
      Placement: {
        AvailabilityZone: `${config.region}d`,
      },
    }),
    dependencies: () => ({
      iamInstanceProfile: "my-profile",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "role-allow-assume-role",
    properties: ({}) => ({
      Path: "/",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "",
            Effect: "Allow",
            Principal: {
              Service: "ec2.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
    }),
    dependencies: () => ({
      policies: ["AmazonEKSWorkerNodePolicy", "myPolicy-to-role"],
    }),
  },
  {
    type: "InstanceProfile",
    group: "IAM",
    name: "my-profile",
    dependencies: () => ({
      roles: ["role-allow-assume-role"],
    }),
  },
];
```

### Examples

- [simple example](https://github.com/grucloud/grucloud/blob/main/examples/aws/IAM/iam/resources.js)

### Properties

- [CreateInstanceProfileCommandInput](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-iam/interfaces/createinstanceprofilecommandinput.html)

### Dependencies

- [Iam Role](./Role.md)

### Used By

- [EC2 Instance](../EC2/Instance.md)
- [LaunchTemplate](../EC2/LaunchTemplate.md)

### List

```sh
gc l -t InstanceProfile
```

```sh
Listing resources on 1 provider: aws
✓ aws
  ✓ Initialising
  ✓ Listing 3/3
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│ 1 IamInstanceProfile from aws                                                           │
├──────────────────────────────────────────┬───────────────────────────────────────┬──────┤
│ Name                                     │ Data                                  │ Our  │
├──────────────────────────────────────────┼───────────────────────────────────────┼──────┤
│ eks-54bc6e8b-43c7-2c95-7057-1af0e6e8aa77 │ Path: /                               │ NO   │
│                                          │ InstanceProfileName: eks-54bc6e8b-43… │      │
│                                          │ InstanceProfileId: AIPA4HNBM2ZQCIF3D… │      │
│                                          │ Arn: arn:aws:iam::840541460064:insta… │      │
│                                          │ CreateDate: 2021-04-16T23:49:13.000Z  │      │
│                                          │ Roles:                                │      │
│                                          │   - Path: /                           │      │
│                                          │     RoleName: role-node-group         │      │
│                                          │     RoleId: AROA4HNBM2ZQICLVXAZIM     │      │
│                                          │     Arn: arn:aws:iam::840541460064:r… │      │
│                                          │     CreateDate: 2021-04-16T23:39:55.… │      │
│                                          │     AssumeRolePolicyDocument: %7B%22… │      │
│                                          │     Tags:                             │      │
│                                          │       - Key: Name                     │      │
│                                          │         Value: role-node-group        │      │
│                                          │       - Key: ManagedBy                │      │
│                                          │         Value: GruCloud               │      │
│                                          │       - Key: CreatedByProvider        │      │
│                                          │         Value: aws                    │      │
│                                          │       - Key: stage                    │      │
│                                          │         Value: dev                    │      │
│                                          │       - Key: projectName              │      │
│                                          │         Value: ex-eks-mod             │      │
│                                          │ Tags: []                              │      │
│                                          │                                       │      │
└──────────────────────────────────────────┴───────────────────────────────────────┴──────┘


List Summary:
Provider: aws
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ aws                                                                                    │
├────────────────────┬───────────────────────────────────────────────────────────────────┤
│ IamInstanceProfile │ eks-54bc6e8b-43c7-2c95-7057-1af0e6e8aa77                          │
└────────────────────┴───────────────────────────────────────────────────────────────────┘
1 resource, 1 type, 1 provider
Command "gc l -t IamInstanceProfile" executed in 3s
```

### AWS CLI

List all iam instances profile

```
aws iam list-instance-profiles

```

Delete an instance profile

```
aws iam delete-instance-profile --instance-profile-name ExampleInstanceProfile
```
