---
id: Vpc
title: Vpc
---

Provide a Virtual Private Cloud:

## Examples

### Simple Vpc

```js
const vpc = await provider.makeVpc({
  name: "vpc",
  properties: () => ({
    CidrBlock: "10.1.0.0/16",
  }),
});
```

### Vpc with Tags

```js
const clusterName = "cluster";

const vpc = await provider.makeVpc({
  name: "vpc-eks",
  properties: () => ({
    CidrBlock: "10.1.0.0/16",
    Tags: [{ Key: `kubernetes.io/cluster/${clusterName}`, Value: "shared" }],
  }),
});
```

## Code Examples

- [simple example](https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2-vpc/iac.js#L13)
- [eks](https://github.com/grucloud/grucloud/blob/main/examples/aws/eks/iac.js)

## Used By

- [Subnet](./Subnet)
- [Security Group](./SecurityGroup)
- [Internet Gateway ](./InternetGateway)