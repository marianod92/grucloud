---
id: DnsManagedZone
title: Dns Managed Zone
---

Provides a DNS managed zone and resource record set.

## Examples

### Dns managed zone with one record set

```js
const domain = "gcp.grucloud.com";

provider.dns.makeManagedZone({
  name: "dns-managed-zone",
  properties: () => ({
    dnsName: `${domain}.`,
    recordSet: [
      {
        name: `${domain}.`,
        rrdatas: ["1.2.3.1"],
        ttl: 86400,
        type: "A",
      },
    ],
  }),
});
```

### Example Code

- [basic example](https://github.com/grucloud/grucloud/blob/main/examples/google/storage/website-https)

## Properties

See [create properties](https://cloud.google.com/dns/docs/reference/v1beta2/managedZones/create)
and [recordSet properties](https://cloud.google.com/dns/docs/reference/v1beta2/resourceRecordSets#resource)
