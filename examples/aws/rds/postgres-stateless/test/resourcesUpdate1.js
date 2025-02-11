exports.createResources = () => [
  {
    type: "DBCluster",
    group: "RDS",
    name: "cluster-postgres-stateless",
    properties: ({}) => ({
      DatabaseName: "dev",
      Engine: "aurora-postgresql",
      EngineVersion: "10.14",
      EngineMode: "serverless",
      Port: 5432,
      PreferredBackupWindow: "01:39-02:09",
      PreferredMaintenanceWindow: "sun:00:47-sun:01:17",
      ScalingConfiguration: {
        MinCapacity: 2,
        MaxCapacity: 4,
        AutoPause: true,
        SecondsUntilAutoPause: 300,
        TimeoutAction: "RollbackCapacityChange",
        SecondsBeforeTimeout: 300,
      },
      MasterUsername: process.env.CLUSTER_POSTGRES_STATELESS_MASTER_USERNAME,
      MasterUserPassword:
        process.env.CLUSTER_POSTGRES_STATELESS_MASTER_USER_PASSWORD,
      Tags: [
        {
          Key: "mykey1",
          Value: "myvalue",
        },
      ],
    }),
    dependencies: () => ({
      dbSubnetGroup: "subnet-group-postgres-stateless",
      securityGroups: ["security-group-postgres"],
    }),
  },
];
