(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{226:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),s=(r(0),r(229)),c={id:"KmsKey",title:"Kms Key"},o={unversionedId:"aws/resources/KMS/KmsKey",id:"aws/resources/KMS/KmsKey",isDocsHomePage:!1,title:"Kms Key",description:"Manages a Customer Master Key.",source:"@site/docs/aws/resources/KMS/KmsKey.md",sourceDirName:"aws/resources/KMS",slug:"/aws/resources/KMS/KmsKey",permalink:"/docs/aws/resources/KMS/KmsKey",version:"current",frontMatter:{id:"KmsKey",title:"Kms Key"},sidebar:"docs",previous:{title:"Iam User",permalink:"/docs/aws/resources/IAM/IamUser"},next:{title:"Function",permalink:"/docs/aws/resources/Lambda/LambdaFunction"}},i=[{value:"Example",id:"example",children:[{value:"Symmetric key",id:"symmetric-key",children:[]}]},{value:"Code Examples",id:"code-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"List",id:"list",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Manages a ",Object(s.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys"},"Customer Master Key"),"."),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("h3",{id:"symmetric-key"},"Symmetric key"),Object(s.b)("p",null,"Create a symmetric key, for instance used by an ",Object(s.b)("a",{parentName:"p",href:"../EKS/EksCluster"},"EKS Cluster")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'const cmk = provider.KMS.makeKey({\n  name: "my-secret-key",\n  properties: () => ({}),\n});\n')),Object(s.b)("h2",{id:"code-examples"},"Code Examples"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/kms/symmetric/iac.js"},"simple symmetric key")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/kms/eks/iac.js"},"symmetric key used by an EKS cluster"))),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#createKey-property"},"properties list"))),Object(s.b)("h2",{id:"used-by"},"Used By"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"../EKS/EksCluster"},"EKSCluster"))),Object(s.b)("h2",{id:"list"},"List"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Key\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1  Key from \u2026   \u2502                                                                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name            \u2502 Data                                                               \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 secret-key-test \u2502 AWSAccountId: 840541460064                                         \u2502 Yes  \u2502\n\u2502                 \u2502 KeyId: cf8639e0-25d1-46d2-86eb-d2761e8d556d                        \u2502      \u2502\n\u2502                 \u2502 Arn: arn:aws:kms:eu-west-2:840541460064:key/cf8639e0-25d1-46d2-86\u2026 \u2502      \u2502\n\u2502                 \u2502 CreationDate: 2021-06-08T16:39:23.024Z                             \u2502      \u2502\n\u2502                 \u2502 Enabled: true                                                      \u2502      \u2502\n\u2502                 \u2502 Description:                                                       \u2502      \u2502\n\u2502                 \u2502 KeyUsage: ENCRYPT_DECRYPT                                          \u2502      \u2502\n\u2502                 \u2502 KeyState: Enabled                                                  \u2502      \u2502\n\u2502                 \u2502 Origin: AWS_KMS                                                    \u2502      \u2502\n\u2502                 \u2502 KeyManager: CUSTOMER                                               \u2502      \u2502\n\u2502                 \u2502 CustomerMasterKeySpec: SYMMETRIC_DEFAULT                           \u2502      \u2502\n\u2502                 \u2502 EncryptionAlgorithms:                                              \u2502      \u2502\n\u2502                 \u2502   - "SYMMETRIC_DEFAULT"                                            \u2502      \u2502\n\u2502                 \u2502 Tags:                                                              \u2502      \u2502\n\u2502                 \u2502   - TagKey: CreatedByProvider                                      \u2502      \u2502\n\u2502                 \u2502     TagValue: aws                                                  \u2502      \u2502\n\u2502                 \u2502   - TagKey: ManagedBy                                              \u2502      \u2502\n\u2502                 \u2502     TagValue: GruCloud                                             \u2502      \u2502\n\u2502                 \u2502   - TagKey: Name                                                   \u2502      \u2502\n\u2502                 \u2502     TagValue: secret-key-test                                      \u2502      \u2502\n\u2502                 \u2502   - TagKey: projectName                                            \u2502      \u2502\n\u2502                 \u2502     TagValue: kms-symmetric                                        \u2502      \u2502\n\u2502                 \u2502   - TagKey: stage                                                  \u2502      \u2502\n\u2502                 \u2502     TagValue: dev                                                  \u2502      \u2502\n\u2502                 \u2502 Alias: alias/secret-key-test                                       \u2502      \u2502\n\u2502                 \u2502                                                                    \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Key                \u2502 secret-key-test                                                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t Key" executed in 2s\n')))}u.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return r?a.a.createElement(b,o(o({ref:t},l),{},{components:r})):a.a.createElement(b,o({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,c=new Array(s);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<s;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);