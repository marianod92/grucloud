const assert = require("assert");
const { map, pipe, assign, get, tap, switchCase } = require("rubico");
const { identity } = require("rubico/x");

exports.config = require("./config");
exports.hooks = [];

const NamespaceDefault = "VPC";

const createResources = async ({ provider, namespace = NamespaceDefault }) => {
  const { config } = provider;
  const formatName = config.formatName || identity;

  return pipe([
    tap(() => {
      assert(config.vpc);
      assert(config.vpc.vpc);
      assert(config.vpc.internetGateway);
      assert(config.vpc.routeTablePublic);
      assert(config.vpc.routePublic);
      assert(config.vpc.subnets.publics);
    }),
    assign({
      vpc: () =>
        provider.makeVpc({
          name: formatName(config.vpc.vpc.name, config),
          namespace,
          properties: () => ({
            DnsHostnames: true,
            CidrBlock: config.vpc.vpc.CidrBlock,
            Tags: config.vpc.vpc.Tags,
          }),
        }),
    }),
    assign({
      internetGateway: ({ vpc }) =>
        provider.makeInternetGateway({
          name: formatName(config.vpc.internetGateway.name, config),
          namespace,
          dependencies: { vpc },
        }),
    }),
    assign({
      subnetsPublic: ({ vpc }) =>
        pipe([
          () => config.vpc.subnets.publics,
          map(({ name, CidrBlock, AvailabilityZone }) =>
            provider.makeSubnet({
              name: formatName(name, config),
              namespace,
              dependencies: { vpc },
              attributes: () => ({
                MapPublicIpOnLaunch: {
                  Value: true,
                },
              }),
              properties: () => ({
                CidrBlock,
                AvailabilityZone,
                Tags: config.vpc.subnets.publicTags,
              }),
            })
          ),
        ])(),
    }),
    assign({
      routeTablePublic: ({ vpc, subnetsPublic }) =>
        provider.makeRouteTable({
          name: formatName(config.vpc.routeTablePublic.name, config),
          namespace,
          dependencies: { vpc, subnets: subnetsPublic },
        }),
    }),
    assign({
      routePublic: ({ routeTablePublic, internetGateway }) =>
        provider.makeRoute({
          name: formatName(config.vpc.routePublic.name, config),
          namespace,
          dependencies: { routeTable: routeTablePublic, ig: internetGateway },
        }),
    }),
    switchCase([
      () => config.vpc.subnets.privates,
      pipe([
        assign({
          eip: () =>
            provider.makeElasticIpAddress({
              namespace,
              name: formatName(config.vpc.eip.name, config),
            }),
        }),
        assign({
          natGateway: ({ subnetsPublic, eip }) =>
            provider.makeNatGateway({
              name: formatName(config.vpc.natGateway.name, config),
              namespace,
              dependencies: { subnet: subnetsPublic[0], eip },
            }),
        }),
        assign({
          privates: ({ vpc, natGateway }) =>
            pipe([
              () => config.vpc.subnets.privates,
              map(
                ({
                  name,
                  CidrBlock,
                  AvailabilityZone,
                  routeTableName,
                  routeName,
                }) =>
                  pipe([
                    assign({
                      subnet: () =>
                        provider.makeSubnet({
                          name: formatName(name, config),
                          namespace,
                          dependencies: { vpc },
                          properties: () => ({
                            CidrBlock,
                            AvailabilityZone,
                            Tags: config.vpc.subnets.privateTags,
                          }),
                        }),
                    }),
                    assign({
                      routeTable: ({ subnet }) =>
                        provider.makeRouteTable({
                          name: formatName(routeTableName, config),
                          namespace,
                          dependencies: { vpc, subnets: [subnet] },
                        }),
                    }),
                    assign({
                      routeNat: ({ routeTable }) =>
                        provider.makeRoute({
                          name: formatName(routeName, config),
                          namespace,
                          dependencies: { routeTable, natGateway },
                        }),
                    }),
                  ])({})
              ),
            ])(),
        }),
      ]),
      identity,
    ]),
    tap((resources) => {
      assert(true);
    }),
  ])({});
};

exports.createResources = createResources;