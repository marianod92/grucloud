"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4804],{3905:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return u}});var o=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function t(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):t(t({},n),e)),a},m=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,y=p["".concat(c,".").concat(u)]||p[u]||d[u]||l;return a?o.createElement(y,t(t({ref:n},m),{},{components:a})):o.createElement(y,t({ref:n},m))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,t=new Array(l);t[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,t[1]=i;for(var s=2;s<l;s++)t[s]=a[s];return o.createElement.apply(null,t)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},77893:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var o=a(87462),r=a(63366),l=(a(67294),a(3905)),t=["components"],i={id:"Role",title:"Role"},c=void 0,s={unversionedId:"aws/resources/IAM/Role",id:"aws/resources/IAM/Role",isDocsHomePage:!1,title:"Role",description:"Provides an Iam Role.",source:"@site/docs/aws/resources/IAM/Role.md",sourceDirName:"aws/resources/IAM",slug:"/aws/resources/IAM/Role",permalink:"/docs/aws/resources/IAM/Role",tags:[],version:"current",frontMatter:{id:"Role",title:"Role"},sidebar:"docs",previous:{title:"Policy",permalink:"/docs/aws/resources/IAM/Policy"},next:{title:"User",permalink:"/docs/aws/resources/IAM/User"}},m=[{value:"Attach a policy to a role",id:"attach-a-policy-to-a-role",children:[],level:3},{value:"Add an inline policy to a role",id:"add-an-inline-policy-to-a-role",children:[],level:3},{value:"Add a role to an instance profile",id:"add-a-role-to-an-instance-profile",children:[],level:3},{value:"Link to an OpenIdConnectProvider",id:"link-to-an-openidconnectprovider",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[],level:3},{value:"Used By",id:"used-by",children:[],level:3},{value:"List",id:"list",children:[],level:3},{value:"AWS CLI",id:"aws-cli",children:[],level:3}],d={toc:m};function p(e){var n=e.components,a=(0,r.Z)(e,t);return(0,l.kt)("wrapper",(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Provides an Iam Role."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'provider.IAM.makeRole({\n  name: "my-role",\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n')),(0,l.kt)("h3",{id:"attach-a-policy-to-a-role"},"Attach a policy to a role"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'provider.IAM.makePolicy({\n  name: "my-policy",\n  properties: () => ({\n    PolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: ["ec2:Describe*"],\n          Effect: "Allow",\n          Resource: "*",\n        },\n      ],\n    },\n    Description: "Allow ec2:Describe",\n    Path: "/",\n  }),\n});\n\nprovider.IAM.makeRole({\n  name: "my-role",\n  dependencies: () => ({ policies: [iamPolicy] }),\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n')),(0,l.kt)("h3",{id:"add-an-inline-policy-to-a-role"},"Add an inline policy to a role"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const iamRole = provider.IAM.makeRole({\n  name: "my-role",\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n    Policies: [\n      {\n        PolicyDocument: {\n          Version: "2012-10-17",\n          Statement: [\n            {\n              Action: "dynamodb:*",\n              Resource: [\n                "arn:aws:dynamodb:eu-west-2:1234567890:table/AppsyncCdkAppStack-CDKNotesTable254A7FD1-3MPG6DUNDCO9",\n              ],\n              Effect: "Allow",\n            },\n          ],\n        },\n        PolicyName: "AppSyncNotesHandlerServiceRoleDefaultPolicy12C70C4F",\n      },\n    ],\n  }),\n});\n')),(0,l.kt)("h3",{id:"add-a-role-to-an-instance-profile"},"Add a role to an instance profile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'provider.IAM.makeRole({\n  name: "my-role",\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n\nprovider.IAM.makeInstanceProfile({\n  name: "my-instance-profile",\n  dependencies: () => ({ iamRoles: ["my-role"] }),\n});\n')),(0,l.kt)("h3",{id:"link-to-an-openidconnectprovider"},"Link to an OpenIdConnectProvider"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"AssumeRolePolicyDocument")," will be filled with the ",(0,l.kt)("strong",{parentName:"p"},"openIdConnectProvider")," dependency."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'\nconst loadBalancerPolicy = require("./load-balancer-policy.json");\n\nconst iamOpenIdConnectProvider = provider.IAM.makeOpenIDConnectProvider({\n  name: "oidc",\n  dependencies: () => ({ cluster }),\n});\n\nconst iamLoadBalancerPolicy = provider.IAM.makePolicy({\n  name: "AWSLoadBalancerControllerIAMPolicy",\n  properties: () => ({\n    PolicyDocument: loadBalancerPolicy,\n    Description: "Load Balancer Policy",\n  }),\n});\n\nconst roleLoadBalancer = provider.IAM.makeRole({\n  name: "roleLoadBalancer"\n  dependencies: () => ({\n    openIdConnectProvider: iamOpenIdConnectProvider,\n    policies: [iamLoadBalancerPolicy],\n  }),\n});\n')),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iam/iac.js"},"simple example"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/load-balancer-controller/iac.js#"},"load balancer controller module")))),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createRole-property"},"properties list"))),(0,l.kt)("h3",{id:"dependencies"},"Dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/Policy"},"Iam Policy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/OpenIDConnectProvider"},"Iam OpenIDConnectProvider"))),(0,l.kt)("h3",{id:"used-by"},"Used By"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/InstanceProfile"},"IamInstanceProfile"))),(0,l.kt)("h3",{id:"list"},"List"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gc list -t IamRole\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 3 iam::Role from aws                                                                   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: role-cluster                                                                     \u2502\n\u2502 managedByUs: Yes                                                                       \u2502\n\u2502 live:                                                                                  \u2502\n\u2502   Path: /                                                                              \u2502\n\u2502   RoleName: role-cluster                                                               \u2502\n\u2502   RoleId: AROA4HNBM2ZQBIII7KZ4Z                                                        \u2502\n\u2502   Arn: arn:aws:iam::840541460064:role/role-cluster                                     \u2502\n\u2502   CreateDate: 2021-07-21T13:29:11.000Z                                                 \u2502\n\u2502   AssumeRolePolicyDocument:                                                            \u2502\n\u2502     Version: 2012-10-17                                                                \u2502\n\u2502     Statement:                                                                         \u2502\n\u2502       - Effect: Allow                                                                  \u2502\n\u2502         Principal:                                                                     \u2502\n\u2502           Service: eks.amazonaws.com                                                   \u2502\n\u2502         Action: sts:AssumeRole                                                         \u2502\n\u2502   MaxSessionDuration: 3600                                                             \u2502\n\u2502   Tags:                                                                                \u2502\n\u2502     - Key: Name                                                                        \u2502\n\u2502       Value: role-cluster                                                              \u2502\n\u2502     - Key: gc-managed-by                                                               \u2502\n\u2502       Value: grucloud                                                                  \u2502\n\u2502     - Key: gc-created-by-provider                                                      \u2502\n\u2502       Value: aws                                                                       \u2502\n\u2502     - Key: gc-stage                                                                    \u2502\n\u2502       Value: dev                                                                       \u2502\n\u2502     - Key: gc-project-name                                                             \u2502\n\u2502       Value: @grucloud/example-module-aws-load-balancer-controller                     \u2502\n\u2502     - Key: gc-namespace                                                                \u2502\n\u2502       Value: EKS                                                                       \u2502\n\u2502   InstanceProfiles: []                                                                 \u2502\n\u2502   AttachedPolicies:                                                                    \u2502\n\u2502     - PolicyName: AmazonEKSClusterPolicy                                               \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEKSClusterPolicy                        \u2502\n\u2502     - PolicyName: AmazonEKSVPCResourceController                                       \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEKSVPCResourceController                \u2502\n\u2502   Policies: []                                                                         \u2502\n\u2502                                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: role-load-balancer                                                               \u2502\n\u2502 managedByUs: Yes                                                                       \u2502\n\u2502 live:                                                                                  \u2502\n\u2502   Path: /                                                                              \u2502\n\u2502   RoleName: role-load-balancer                                                         \u2502\n\u2502   RoleId: AROA4HNBM2ZQH2RLTJRCD                                                        \u2502\n\u2502   Arn: arn:aws:iam::840541460064:role/role-load-balancer                               \u2502\n\u2502   CreateDate: 2021-07-21T13:39:48.000Z                                                 \u2502\n\u2502   AssumeRolePolicyDocument:                                                            \u2502\n\u2502     Version: 2012-10-17                                                                \u2502\n\u2502     Statement:                                                                         \u2502\n\u2502       - Effect: Allow                                                                  \u2502\n\u2502         Principal:                                                                     \u2502\n\u2502           Federated: arn:aws:iam::840541460064:oidc-provider/oidc.eks.eu-west-2.amazo\u2026 \u2502\n\u2502         Action: sts:AssumeRoleWithWebIdentity                                          \u2502\n\u2502         Condition:                                                                     \u2502\n\u2502           StringEquals:                                                                \u2502\n\u2502             oidc.eks.eu-west-2.amazonaws.com/id/9377E3CCC52850A5BC4BEF6D012643E6:aud:\u2026 \u2502\n\u2502   MaxSessionDuration: 3600                                                             \u2502\n\u2502   Tags:                                                                                \u2502\n\u2502     - Key: Name                                                                        \u2502\n\u2502       Value: role-load-balancer                                                        \u2502\n\u2502     - Key: gc-managed-by                                                               \u2502\n\u2502       Value: grucloud                                                                  \u2502\n\u2502     - Key: gc-created-by-provider                                                      \u2502\n\u2502       Value: aws                                                                       \u2502\n\u2502     - Key: gc-stage                                                                    \u2502\n\u2502       Value: dev                                                                       \u2502\n\u2502     - Key: gc-project-name                                                             \u2502\n\u2502       Value: @grucloud/example-module-aws-load-balancer-controller                     \u2502\n\u2502     - Key: gc-namespace                                                                \u2502\n\u2502       Value: LoadBalancerControllerRole                                                \u2502\n\u2502   AttachedPolicies:                                                                    \u2502\n\u2502     - PolicyName: AWSLoadBalancerControllerIAMPolicy                                   \u2502\n\u2502       PolicyArn: arn:aws:iam::840541460064:policy/AWSLoadBalancerControllerIAMPolicy   \u2502\n\u2502   InstanceProfiles: []                                                                 \u2502\n\u2502   Policies: []                                                                         \u2502\n\u2502                                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: role-node-group                                                                  \u2502\n\u2502 managedByUs: Yes                                                                       \u2502\n\u2502 live:                                                                                  \u2502\n\u2502   Path: /                                                                              \u2502\n\u2502   RoleName: role-node-group                                                            \u2502\n\u2502   RoleId: AROA4HNBM2ZQAQEEDNKMM                                                        \u2502\n\u2502   Arn: arn:aws:iam::840541460064:role/role-node-group                                  \u2502\n\u2502   CreateDate: 2021-07-21T13:29:11.000Z                                                 \u2502\n\u2502   AssumeRolePolicyDocument:                                                            \u2502\n\u2502     Version: 2012-10-17                                                                \u2502\n\u2502     Statement:                                                                         \u2502\n\u2502       - Effect: Allow                                                                  \u2502\n\u2502         Principal:                                                                     \u2502\n\u2502           Service: ec2.amazonaws.com                                                   \u2502\n\u2502         Action: sts:AssumeRole                                                         \u2502\n\u2502   MaxSessionDuration: 3600                                                             \u2502\n\u2502   Tags:                                                                                \u2502\n\u2502     - Key: Name                                                                        \u2502\n\u2502       Value: role-node-group                                                           \u2502\n\u2502     - Key: gc-managed-by                                                               \u2502\n\u2502       Value: grucloud                                                                  \u2502\n\u2502     - Key: gc-created-by-provider                                                      \u2502\n\u2502       Value: aws                                                                       \u2502\n\u2502     - Key: gc-stage                                                                    \u2502\n\u2502       Value: dev                                                                       \u2502\n\u2502     - Key: gc-project-name                                                             \u2502\n\u2502       Value: @grucloud/example-module-aws-load-balancer-controller                     \u2502\n\u2502     - Key: gc-namespace                                                                \u2502\n\u2502       Value: EKS                                                                       \u2502\n\u2502   AttachedPolicies:                                                                    \u2502\n\u2502     - PolicyName: AmazonEKSWorkerNodePolicy                                            \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy                     \u2502\n\u2502     - PolicyName: AmazonEC2ContainerRegistryReadOnly                                   \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly            \u2502\n\u2502     - PolicyName: AmazonEKS_CNI_Policy                                                 \u2502\n\u2502       PolicyArn: arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy                          \u2502\n\u2502   Policies: []                                                                         \u2502\n\u2502   InstanceProfiles:                                                                    \u2502\n\u2502     - InstanceProfileName: eks-b6bd64a5-a3dc-30a8-b4a5-f6a7fd37e90d                    \u2502\n\u2502       InstanceProfileId: AIPA4HNBM2ZQACXAPZ3H7                                         \u2502\n\u2502       Arn: arn:aws:iam::840541460064:instance-profile/eks-b6bd64a5-a3dc-30a8-b4a5-f6a\u2026 \u2502\n\u2502       Path: /                                                                          \u2502\n\u2502                                                                                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                               \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 iam::Role                      \u2502 role-cluster                                     \u2502\n\u2502                                \u2502 role-load-balancer                               \u2502\n\u2502                                \u2502 role-node-group                                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n3 resources, 2 types, 1 provider\nCommand "gc l -t Role" executed in 5s\n')),(0,l.kt)("h3",{id:"aws-cli"},"AWS CLI"),(0,l.kt)("p",null,"List all iam roles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"aws iam list-roles\n")),(0,l.kt)("p",null,"Delete a role"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"aws iam delete-role --role-name role-name\n")),(0,l.kt)("p",null,"List a role:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"aws iam get-role --role-name my-role\n")))}p.isMDXComponent=!0}}]);