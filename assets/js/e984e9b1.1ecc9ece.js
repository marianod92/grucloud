(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{222:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return i})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(8),o=(a(0),a(235)),c={id:"IamPolicy",title:"Iam Policy"},i={unversionedId:"aws/resources/IAM/IamPolicy",id:"aws/resources/IAM/IamPolicy",isDocsHomePage:!1,title:"Iam Policy",description:"Provides an Iam Policy.",source:"@site/docs/aws/resources/IAM/IamPolicy.md",sourceDirName:"aws/resources/IAM",slug:"/aws/resources/IAM/IamPolicy",permalink:"/docs/aws/resources/IAM/IamPolicy",version:"current",frontMatter:{id:"IamPolicy",title:"Iam Policy"},sidebar:"docs",previous:{title:"Iam OpenIDConnectProvider",permalink:"/docs/aws/resources/IAM/IamOpenIDConnectProvider"},next:{title:"Iam Role",permalink:"/docs/aws/resources/IAM/IamRole"}},l=[{value:"Attach a policy to a role",id:"attach-a-policy-to-a-role",children:[]},{value:"Attach a read only policy to a role",id:"attach-a-read-only-policy-to-a-role",children:[]},{value:"Attach a policy to a user",id:"attach-a-policy-to-a-user",children:[]},{value:"Attach a policy to a group",id:"attach-a-policy-to-a-group",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"List",id:"list",children:[]}],s={toc:l};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides an Iam Policy."),Object(o.b)("p",null,"The examples below create or reference a policy, and add it to a role, a user or a group."),Object(o.b)("h3",{id:"attach-a-policy-to-a-role"},"Attach a policy to a role"),Object(o.b)("p",null,"Let's create a policy and a user, the policy is attached to the user via the ",Object(o.b)("em",{parentName:"p"},"dependencies")," field:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const iamPolicy = provider.IAM.makePolicy({\n  name: "my-policy",\n  properties: () => ({\n    PolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: ["ec2:Describe*"],\n          Effect: "Allow",\n          Resource: "*",\n        },\n      ],\n    },\n    Description: "Allow ec2:Describe",\n    Path: "/",\n  }),\n});\n\nconst iamRole = provider.IAM.makeRole({\n  name: "my-role",\n  dependencies: () => ({ policies: [iamPolicy] }),\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"attach-a-read-only-policy-to-a-role"},"Attach a read only policy to a role"),Object(o.b)("p",null,"A policy can be referenced by its ",Object(o.b)("em",{parentName:"p"},"Arn"),", invoke ",Object(o.b)("em",{parentName:"p"},"usePolicy")," instead of ",Object(o.b)("em",{parentName:"p"},"makePolicy"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const iamPolicyEKSCluster = provider.IAM.usePolicy({\n  name: "AmazonEKSClusterPolicy",\n  properties: () => ({\n    Arn: "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",\n  }),\n});\n\nconst iamRole = provider.IAM.makeRole({\n  name: "my-role",\n  dependencies: () => ({ policies: [iamPolicyEKSCluster] }),\n  properties: () => ({\n    AssumeRolePolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: "sts:AssumeRole",\n          Principal: {\n            Service: "ec2.amazonaws.com",\n          },\n          Effect: "Allow",\n          Sid: "",\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"attach-a-policy-to-a-user"},"Attach a policy to a user"),Object(o.b)("p",null,"Let's create a policy and attach it to the user:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const iamPolicy = provider.IAM.makePolicy({\n  name: "my-policy",\n  properties: () => ({\n    PolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: ["ec2:Describe*"],\n          Effect: "Allow",\n          Resource: "*",\n        },\n      ],\n    },\n    Description: "Allow ec2:Describe",\n    Path: "/",\n  }),\n});\n\nconst iamUser = provider.IAM.makeUser({\n  name: "Alice",\n  dependencies: () => ({ policies: [iamPolicy] }),\n  properties: () => ({}),\n});\n')),Object(o.b)("h3",{id:"attach-a-policy-to-a-group"},"Attach a policy to a group"),Object(o.b)("p",null,"Let's create a policy and attach it to the group:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const iamPolicy = provider.IAM.makePolicy({\n  name: "policy-ec2-describe",\n  properties: () => ({\n    PolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: ["ec2:Describe*"],\n          Effect: "Allow",\n          Resource: "*",\n        },\n      ],\n    },\n    Description: "Allow ec2:Describe",\n  }),\n});\n\nconst iamGroup = provider.IAM.makeGroup({\n  name: "Admin",\n  dependencies: () => ({ policies: [iamPolicy] }),\n  properties: () => ({}),\n});\n')),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iam-policy/iac.js"},"Policies attached to a role")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iam/iac.js"},"Policies attached to roles, users and groups"))),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createPolicy-property"},"properties list"))),Object(o.b)("h3",{id:"used-by"},"Used By"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./IamRole"},"IamRole")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./IamUser"},"IamUser")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./IamGroup"},"IamGroup"))),Object(o.b)("h3",{id:"list"},"List"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t IamPolicy\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 2/2\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2 IamPolicy from aws                                                                          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                      \u2502 Data                                                       \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 policy-allow-ec2          \u2502 PolicyName: policy-allow-ec2                               \u2502 Yes  \u2502\n\u2502                           \u2502 PolicyId: ANPA4HNBM2ZQAVBUWM5OH                            \u2502      \u2502\n\u2502                           \u2502 Arn: arn:aws:iam::840541460064:policy/policy-allow-ec2     \u2502      \u2502\n\u2502                           \u2502 Path: /                                                    \u2502      \u2502\n\u2502                           \u2502 DefaultVersionId: v1                                       \u2502      \u2502\n\u2502                           \u2502 AttachmentCount: 1                                         \u2502      \u2502\n\u2502                           \u2502 PermissionsBoundaryUsageCount: 0                           \u2502      \u2502\n\u2502                           \u2502 IsAttachable: true                                         \u2502      \u2502\n\u2502                           \u2502 Description: Allow ec2:Describe                            \u2502      \u2502\n\u2502                           \u2502 CreateDate: 2021-04-19T23:43:49.000Z                       \u2502      \u2502\n\u2502                           \u2502 UpdateDate: 2021-04-19T23:43:49.000Z                       \u2502      \u2502\n\u2502                           \u2502 Tags:                                                      \u2502      \u2502\n\u2502                           \u2502   - Key: ManagedBy                                         \u2502      \u2502\n\u2502                           \u2502     Value: GruCloud                                        \u2502      \u2502\n\u2502                           \u2502   - Key: stage                                             \u2502      \u2502\n\u2502                           \u2502     Value: dev                                             \u2502      \u2502\n\u2502                           \u2502   - Key: projectName                                       \u2502      \u2502\n\u2502                           \u2502     Value: @grucloud/example-aws-iam-policy                \u2502      \u2502\n\u2502                           \u2502   - Key: CreatedByProvider                                 \u2502      \u2502\n\u2502                           \u2502     Value: aws                                             \u2502      \u2502\n\u2502                           \u2502   - Key: Name                                              \u2502      \u2502\n\u2502                           \u2502     Value: policy-allow-ec2                                \u2502      \u2502\n\u2502                           \u2502 EntitiesForPolicy:                                         \u2502      \u2502\n\u2502                           \u2502   PolicyGroups: []                                         \u2502      \u2502\n\u2502                           \u2502   PolicyUsers: []                                          \u2502      \u2502\n\u2502                           \u2502   PolicyRoles:                                             \u2502      \u2502\n\u2502                           \u2502     - RoleName: role-4-policies                            \u2502      \u2502\n\u2502                           \u2502       RoleId: AROA4HNBM2ZQEPTRMF2XD                        \u2502      \u2502\n\u2502                           \u2502                                                            \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AmazonEKSWorkerNodePolicy \u2502 name: AmazonEKSWorkerNodePolicy                            \u2502 NO   \u2502\n\u2502                           \u2502 Arn: arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy     \u2502      \u2502\n\u2502                           \u2502                                                            \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 IamPolicy          \u2502 policy-allow-ec2                                                        \u2502\n\u2502                    \u2502 AmazonEKSWorkerNodePolicy                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2 resources, 1 type, 1 provider\nCommand "gc l -t IamPolicy" executed in 2s\n')))}p.isMDXComponent=!0},235:function(e,n,a){"use strict";a.d(n,"a",(function(){return m})),a.d(n,"b",(function(){return y}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),b=t,y=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return a?r.a.createElement(y,i(i({ref:n},s),{},{components:a})):r.a.createElement(y,i({ref:n},s))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);