"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[382],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return d}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?t.createElement(f,o(o({ref:r},u),{},{components:n})):t.createElement(f,o({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7990:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var t=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={id:"User",title:"User"},l=void 0,c={unversionedId:"aws/resources/IAM/User",id:"aws/resources/IAM/User",isDocsHomePage:!1,title:"User",description:"Provides an Iam User",source:"@site/docs/aws/resources/IAM/User.md",sourceDirName:"aws/resources/IAM",slug:"/aws/resources/IAM/User",permalink:"/docs/aws/resources/IAM/User",tags:[],version:"current",frontMatter:{id:"User",title:"User"},sidebar:"docs",previous:{title:"Role",permalink:"/docs/aws/resources/IAM/Role"},next:{title:"Event Source Mapping",permalink:"/docs/aws/resources/Lambda/EventSourceMapping"}},u=[{value:"Add a user to groups",id:"add-a-user-to-groups",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[],level:3},{value:"List",id:"list",children:[],level:3},{value:"AWS CLI",id:"aws-cli",children:[],level:3}],p={toc:u};function m(e){var r=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides an Iam User"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const iamUser = provider.IAM.makeUser({\n  name: "Alice",\n});\n')),(0,s.kt)("h3",{id:"add-a-user-to-groups"},"Add a user to groups"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const iamGroup = provider.IAM.makeGroup({\n  name: "Admin",\n});\n\nconst iamUser = provider.IAM.makeUser({\n  name: "Alice",\n  dependencies: () => ({ iamGroups: [iamGroup] }),\n});\n')),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iam/iam/iac.js"},"simple example"))),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createUser-property"},"properties list"))),(0,s.kt)("h3",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/Group"},"IamGroup"))),(0,s.kt)("h3",{id:"list"},"List"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t IamUser\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 3/3\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 IamUser from aws                                                                                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name     \u2502 Data                                                                            \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 grucloud \u2502 Path: /                                                                         \u2502 NO   \u2502\n\u2502          \u2502 UserName: grucloud                                                              \u2502      \u2502\n\u2502          \u2502 UserId: AIDA4HNBM2ZQG52XXYCYX                                                   \u2502      \u2502\n\u2502          \u2502 Arn: arn:aws:iam::840541460064:user/grucloud                                    \u2502      \u2502\n\u2502          \u2502 CreateDate: 2021-04-19T18:59:01.000Z                                            \u2502      \u2502\n\u2502          \u2502 Tags: []                                                                        \u2502      \u2502\n\u2502          \u2502 LoginProfile:                                                                   \u2502      \u2502\n\u2502          \u2502   UserName: grucloud                                                            \u2502      \u2502\n\u2502          \u2502   CreateDate: 2021-04-19T18:59:02.000Z                                          \u2502      \u2502\n\u2502          \u2502   PasswordResetRequired: true                                                   \u2502      \u2502\n\u2502          \u2502 AccessKeys:                                                                     \u2502      \u2502\n\u2502          \u2502   - UserName: grucloud                                                          \u2502      \u2502\n\u2502          \u2502     AccessKeyId: AKIA4HNBM2ZQIMJ35GUF                                           \u2502      \u2502\n\u2502          \u2502     Status: Active                                                              \u2502      \u2502\n\u2502          \u2502     CreateDate: 2021-04-19T18:59:02.000Z                                        \u2502      \u2502\n\u2502          \u2502 AttachedPolicies:                                                               \u2502      \u2502\n\u2502          \u2502   - PolicyName: AdministratorAccess                                             \u2502      \u2502\n\u2502          \u2502     PolicyArn: arn:aws:iam::aws:policy/AdministratorAccess                      \u2502      \u2502\n\u2502          \u2502   - PolicyName: IAMUserChangePassword                                           \u2502      \u2502\n\u2502          \u2502     PolicyArn: arn:aws:iam::aws:policy/IAMUserChangePassword                    \u2502      \u2502\n\u2502          \u2502 Groups: []                                                                      \u2502      \u2502\n\u2502          \u2502                                                                                 \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 IamUser            \u2502 grucloud                                                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t IamUser" executed in 3s\n')),(0,s.kt)("h3",{id:"aws-cli"},"AWS CLI"),(0,s.kt)("p",null,"List all iam users"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"aws iam list-users\n")),(0,s.kt)("p",null,"List the tags for a given user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"aws iam list-user-tags --user-name Alice\n\n")),(0,s.kt)("p",null,"Delete a user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"aws iam delete-user --user-name Alice\n")))}m.isMDXComponent=!0}}]);