(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{118:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return u}));var t=n(3),a=n(8),s=(n(0),n(193)),o={id:"IamUser",title:"Iam User"},c={unversionedId:"aws/resources/IAM/IamUser",id:"aws/resources/IAM/IamUser",isDocsHomePage:!1,title:"Iam User",description:"Provides an Iam User",source:"@site/docs/aws/resources/IAM/IamUser.md",sourceDirName:"aws/resources/IAM",slug:"/aws/resources/IAM/IamUser",permalink:"/docs/aws/resources/IAM/IamUser",version:"current",frontMatter:{id:"IamUser",title:"Iam User"},sidebar:"docs",previous:{title:"Iam Role",permalink:"/docs/aws/resources/IAM/IamRole"},next:{title:"Hosted Zone",permalink:"/docs/aws/resources/Route53/Route53HostedZone"}},i=[{value:"Add a user to groups",id:"add-a-user-to-groups",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]}],l={toc:i};function u(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Provides an Iam User"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'const iamUser = await provider.makeIamUser({\n  name: "Alice",\n  properties: () => ({}),\n});\n')),Object(s.b)("h3",{id:"add-a-user-to-groups"},"Add a user to groups"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'const iamGroup = await provider.makeIamGroup({\n  name: "Admin",\n  properties: () => ({}),\n});\n\nconst iamUser = await provider.makeIamUser({\n  name: "Alice",\n  dependencies: { iamGroups: [iamGroup] },\n  properties: () => ({}),\n});\n')),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iac.js"},"simple example"))),Object(s.b)("h3",{id:"properties"},"Properties"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createUser-property"},"properties list"))),Object(s.b)("h3",{id:"dependencies"},"Dependencies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./IamGroup"},"IamGroup"))),Object(s.b)("h3",{id:"list"},"List"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t IamUser\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 3/3\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 IamUser from aws                                                                                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name     \u2502 Data                                                                            \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 grucloud \u2502 Path: /                                                                         \u2502 NO   \u2502\n\u2502          \u2502 UserName: grucloud                                                              \u2502      \u2502\n\u2502          \u2502 UserId: AIDA4HNBM2ZQG52XXYCYX                                                   \u2502      \u2502\n\u2502          \u2502 Arn: arn:aws:iam::840541460064:user/grucloud                                    \u2502      \u2502\n\u2502          \u2502 CreateDate: 2021-04-19T18:59:01.000Z                                            \u2502      \u2502\n\u2502          \u2502 Tags: []                                                                        \u2502      \u2502\n\u2502          \u2502 LoginProfile:                                                                   \u2502      \u2502\n\u2502          \u2502   UserName: grucloud                                                            \u2502      \u2502\n\u2502          \u2502   CreateDate: 2021-04-19T18:59:02.000Z                                          \u2502      \u2502\n\u2502          \u2502   PasswordResetRequired: true                                                   \u2502      \u2502\n\u2502          \u2502 AccessKeys:                                                                     \u2502      \u2502\n\u2502          \u2502   - UserName: grucloud                                                          \u2502      \u2502\n\u2502          \u2502     AccessKeyId: AKIA4HNBM2ZQIMJ35GUF                                           \u2502      \u2502\n\u2502          \u2502     Status: Active                                                              \u2502      \u2502\n\u2502          \u2502     CreateDate: 2021-04-19T18:59:02.000Z                                        \u2502      \u2502\n\u2502          \u2502 AttachedPolicies:                                                               \u2502      \u2502\n\u2502          \u2502   - PolicyName: AdministratorAccess                                             \u2502      \u2502\n\u2502          \u2502     PolicyArn: arn:aws:iam::aws:policy/AdministratorAccess                      \u2502      \u2502\n\u2502          \u2502   - PolicyName: IAMUserChangePassword                                           \u2502      \u2502\n\u2502          \u2502     PolicyArn: arn:aws:iam::aws:policy/IAMUserChangePassword                    \u2502      \u2502\n\u2502          \u2502 Groups: []                                                                      \u2502      \u2502\n\u2502          \u2502                                                                                 \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 IamUser            \u2502 grucloud                                                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t IamUser" executed in 3s\n')),Object(s.b)("h3",{id:"aws-cli"},"AWS CLI"),Object(s.b)("p",null,"List all iam users"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"aws iam list-users\n")),Object(s.b)("p",null,"List the tags for a given user"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"aws iam list-user-tags --user-name Alice\n\n")),Object(s.b)("p",null,"Delete a user:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"aws iam delete-user --user-name Alice\n")))}u.isMDXComponent=!0},193:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||s;return n?a.a.createElement(b,c(c({ref:r},l),{},{components:n})):a.a.createElement(b,c({ref:r},l))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);