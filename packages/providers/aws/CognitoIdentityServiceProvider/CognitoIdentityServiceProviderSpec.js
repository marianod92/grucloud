const { assign, map } = require("rubico");
const { isOurMinionObject } = require("../AwsCommon");
const { UserPool, compareUserPool } = require("./UserPool");
const {
  IdentityProvider,
  compareIdentityProvider,
} = require("./IdentityProvider");

const isOurMinion = ({ live, config }) =>
  isOurMinionObject({ tags: live.tags, config });

const GROUP = "cognitoIdentityServiceProvider";

module.exports = () =>
  map(assign({ group: () => GROUP }))([
    {
      type: "UserPool",
      Client: UserPool,
      isOurMinion: ({ live, config }) =>
        isOurMinionObject({ tags: live.UserPoolTags, config }),
      compareIdentity: compareUserPool,
    },
    {
      type: "IdentityProvider",
      dependsOn: ["cognitoIdentityServiceProvider::UserPool"],
      Client: IdentityProvider,
      isOurMinion,
      compareIdentity: compareIdentityProvider,
    },
  ]);