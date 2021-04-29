(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{174:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return p}));var t=n(3),s=n(8),o=(n(0),n(193)),a={title:"SecurityGroupRuleEgress"},i={unversionedId:"aws/resources/EC2/SecurityGroupRuleEgress",id:"aws/resources/EC2/SecurityGroupRuleEgress",isDocsHomePage:!1,title:"SecurityGroupRuleEgress",description:"Manages a security group egress rule.",source:"@site/docs/aws/resources/EC2/SecurityGroupRuleEgress.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/SecurityGroupRuleEgress",permalink:"/docs/aws/resources/EC2/SecurityGroupRuleEgress",version:"current",frontMatter:{title:"SecurityGroupRuleEgress"},sidebar:"docs",previous:{title:"Security Group",permalink:"/docs/aws/resources/EC2/SecurityGroup"},next:{title:"SecurityGroupRuleIngress",permalink:"/docs/aws/resources/EC2/SecurityGroupRuleIngress"}},u=[{value:"Ingress rule for SSH",id:"ingress-rule-for-ssh",children:[{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}]},{value:"Listing",id:"listing",children:[]}],c={toc:u};function p(e){var r=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Manages a security group egress rule."),Object(o.b)("h1",{id:"example"},"Example"),Object(o.b)("h2",{id:"ingress-rule-for-ssh"},"Ingress rule for SSH"),Object(o.b)("p",null,"The following example creates a security rule to allow egress traffic."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const vpc = await provider.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst sg = await provider.makeSecurityGroup({\n  name: "securityGroup",\n  dependencies: { vpc },\n  properties: () => ({\n    create: {\n      Description: "Security Group",\n    },\n  }),\n});\n\nconst sgRuleEgress = await provider.makeSecurityGroupRuleEgress({\n  name: "sg-rule-egress",\n  dependencies: {\n    securityGroup: sg,\n  },\n  properties: () => ({\n    IpPermissions: [\n      {\n        FromPort: 1024,\n        IpProtocol: "tcp",\n        IpRanges: [\n          {\n            CidrIp: "0.0.0.0/0",\n          },\n        ],\n        Ipv6Ranges: [\n          {\n            CidrIpv6: "::/0",\n          },\n        ],\n        ToPort: 65535,\n      },\n    ],\n  }),\n});\n')),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property"))),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./SecurityGroup"},"SecurityGroup"))),Object(o.b)("h2",{id:"listing"},"Listing"),Object(o.b)("p",null,"List only the ingress rules with the filter ",Object(o.b)("inlineCode",{parentName:"p"},"SecurityGroupRuleEgress")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t SecurityGroupRuleEgress\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  Initialising\n  \u2713 Listing 2/2\n\u2713 k8s\n  Initialising\n  \u2713 Listing\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 SecurityGroupRuleEgress from aws                                                  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                              \u2502 Data                                     \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 sg-cluster-rule-egress-starhackit \u2502 IpPermissions:                           \u2502 Yes  \u2502\n\u2502                                   \u2502   - FromPort: 1024                       \u2502      \u2502\n\u2502                                   \u2502     IpProtocol: tcp                      \u2502      \u2502\n\u2502                                   \u2502     IpRanges:                            \u2502      \u2502\n\u2502                                   \u2502       - CidrIp: 0.0.0.0/0                \u2502      \u2502\n\u2502                                   \u2502     Ipv6Ranges:                          \u2502      \u2502\n\u2502                                   \u2502       - CidrIpv6: ::/0                   \u2502      \u2502\n\u2502                                   \u2502     ToPort: 65535                        \u2502      \u2502\n\u2502                                   \u2502 Tags:                                    \u2502      \u2502\n\u2502                                   \u2502   - Key: Name                            \u2502      \u2502\n\u2502                                   \u2502     Value: sg-cluster-rule-egress-starh\u2026 \u2502      \u2502\n\u2502                                   \u2502   - Key: ManagedBy                       \u2502      \u2502\n\u2502                                   \u2502     Value: GruCloud                      \u2502      \u2502\n\u2502                                   \u2502   - Key: CreatedByProvider               \u2502      \u2502\n\u2502                                   \u2502     Value: aws                           \u2502      \u2502\n\u2502                                   \u2502   - Key: stage                           \u2502      \u2502\n\u2502                                   \u2502     Value: dev                           \u2502      \u2502\n\u2502                                   \u2502   - Key: projectName                     \u2502      \u2502\n\u2502                                   \u2502     Value: starhackit                    \u2502      \u2502\n\u2502                                   \u2502                                          \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 SecurityGroupRule\u2026 \u2502 sg-cluster-rule-egress-starhackit                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 2 providers\nCommand "gc l -t SecurityGroupRuleEgress" executed in 6s\n')))}p.isMDXComponent=!0},193:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return y}));var t=n(0),s=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),p=function(e){var r=s.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return s.a.createElement(c.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},d=s.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=t,y=l["".concat(a,".").concat(d)]||l[d]||g[d]||o;return n?s.a.createElement(y,i(i({ref:r},c),{},{components:n})):s.a.createElement(y,i({ref:r},c))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);