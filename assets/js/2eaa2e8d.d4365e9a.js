(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return p}));var t=n(3),s=n(8),a=(n(0),n(201)),o={title:"SecurityGroupRuleIngress"},c={unversionedId:"aws/resources/EC2/SecurityGroupRuleIngress",id:"aws/resources/EC2/SecurityGroupRuleIngress",isDocsHomePage:!1,title:"SecurityGroupRuleIngress",description:"Manages a security group ingress rule.",source:"@site/docs/aws/resources/EC2/SecurityGroupRuleIngress.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/SecurityGroupRuleIngress",permalink:"/docs/aws/resources/EC2/SecurityGroupRuleIngress",version:"current",frontMatter:{title:"SecurityGroupRuleIngress"},sidebar:"docs",previous:{title:"SecurityGroupRuleEgress",permalink:"/docs/aws/resources/EC2/SecurityGroupRuleEgress"},next:{title:"Subnet",permalink:"/docs/aws/resources/EC2/Subnet"}},u=[{value:"Ingress rule for SSH",id:"ingress-rule-for-ssh",children:[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}]},{value:"Listing",id:"listing",children:[]}],i={toc:u};function p(e){var r=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},i,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manages a security group ingress rule."),Object(a.b)("h1",{id:"example"},"Example"),Object(a.b)("h2",{id:"ingress-rule-for-ssh"},"Ingress rule for SSH"),Object(a.b)("p",null,"The following example creates a security rule to allow ingress SSH traffic."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.ec2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst sg = provider.ec2.makeSecurityGroup({\n  name: "securityGroup",\n  dependencies: { vpc },\n  properties: () => ({\n    create: {\n      Description: "Security Group",\n    },\n  }),\n});\n\nconst sgRuleIngressSsh = provider.ec2.makeSecurityGroupRuleIngress({\n  name: "sg-rule-ingress-ssh",\n  dependencies: {\n    securityGroup: sg,\n  },\n  properties: () => ({\n    IpPermission: {\n      FromPort: 22,\n      IpProtocol: "tcp",\n      IpRanges: [\n        {\n          CidrIp: "0.0.0.0/0",\n        },\n      ],\n      Ipv6Ranges: [\n        {\n          CidrIpv6: "::/0",\n        },\n      ],\n      ToPort: 22,\n    },\n  }),\n});\n')),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2-vpc/iac.js#L26"},"ec2 in vpc"))),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property"},"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#authorizeSecurityGroupIngress-property"))),Object(a.b)("h3",{id:"dependencies"},"Dependencies"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./SecurityGroup"},"SecurityGroup"))),Object(a.b)("h2",{id:"listing"},"Listing"),Object(a.b)("p",null,"List only the ingress rules with the filter ",Object(a.b)("inlineCode",{parentName:"p"},"SecurityGroupRuleIngress")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t SecurityGroupRuleIngress\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  Initialising\n  \u2713 Listing 2/2\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2 SecurityGroupRuleIngress from aws                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                 \u2502 Data                                                  \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 sg-rule-ingress-ssh  \u2502 IpPermissions:                                        \u2502 Yes  \u2502\n\u2502                      \u2502   - FromPort: 22                                      \u2502      \u2502\n\u2502                      \u2502     IpProtocol: tcp                                   \u2502      \u2502\n\u2502                      \u2502     IpRanges:                                         \u2502      \u2502\n\u2502                      \u2502       - CidrIp: 0.0.0.0/0                             \u2502      \u2502\n\u2502                      \u2502     Ipv6Ranges:                                       \u2502      \u2502\n\u2502                      \u2502       - CidrIpv6: ::/0                                \u2502      \u2502\n\u2502                      \u2502     ToPort: 22                                        \u2502      \u2502\n\u2502                      \u2502 Tags:                                                 \u2502      \u2502\n\u2502                      \u2502   - Key: Name                                         \u2502      \u2502\n\u2502                      \u2502     Value: sg-rule-ingress-ssh                        \u2502      \u2502\n\u2502                      \u2502   - Key: ManagedBy                                    \u2502      \u2502\n\u2502                      \u2502     Value: GruCloud                                   \u2502      \u2502\n\u2502                      \u2502   - Key: CreatedByProvider                            \u2502      \u2502\n\u2502                      \u2502     Value: aws                                        \u2502      \u2502\n\u2502                      \u2502   - Key: stage                                        \u2502      \u2502\n\u2502                      \u2502     Value: dev                                        \u2502      \u2502\n\u2502                      \u2502   - Key: projectName                                  \u2502      \u2502\n\u2502                      \u2502     Value: @grucloud/example-aws-ec2-vpc              \u2502      \u2502\n\u2502                      \u2502                                                       \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 sg-rule-ingress-icmp \u2502 IpPermissions:                                        \u2502 Yes  \u2502\n\u2502                      \u2502   - FromPort: -1                                      \u2502      \u2502\n\u2502                      \u2502     IpProtocol: icmp                                  \u2502      \u2502\n\u2502                      \u2502     IpRanges:                                         \u2502      \u2502\n\u2502                      \u2502       - CidrIp: 0.0.0.0/0                             \u2502      \u2502\n\u2502                      \u2502     Ipv6Ranges:                                       \u2502      \u2502\n\u2502                      \u2502       - CidrIpv6: ::/0                                \u2502      \u2502\n\u2502                      \u2502     ToPort: -1                                        \u2502      \u2502\n\u2502                      \u2502 Tags:                                                 \u2502      \u2502\n\u2502                      \u2502   - Key: Name                                         \u2502      \u2502\n\u2502                      \u2502     Value: sg-rule-ingress-icmp                       \u2502      \u2502\n\u2502                      \u2502   - Key: ManagedBy                                    \u2502      \u2502\n\u2502                      \u2502     Value: GruCloud                                   \u2502      \u2502\n\u2502                      \u2502   - Key: CreatedByProvider                            \u2502      \u2502\n\u2502                      \u2502     Value: aws                                        \u2502      \u2502\n\u2502                      \u2502   - Key: stage                                        \u2502      \u2502\n\u2502                      \u2502     Value: dev                                        \u2502      \u2502\n\u2502                      \u2502   - Key: projectName                                  \u2502      \u2502\n\u2502                      \u2502     Value: @grucloud/example-aws-ec2-vpc              \u2502      \u2502\n\u2502                      \u2502                                                       \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 SecurityGroupRule\u2026 \u2502 sg-rule-ingress-ssh                                           \u2502\n\u2502                    \u2502 sg-rule-ingress-icmp                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2 resources, 1 type, 1 provider\nCommand "gc l -t SecurityGroupRuleIngress" executed in 3s\n')))}p.isMDXComponent=!0},201:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),s=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=s.a.createContext({}),p=function(e){var r=s.a.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return s.a.createElement(i.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},d=s.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=p(n),d=t,m=l["".concat(o,".").concat(d)]||l[d]||g[d]||a;return n?s.a.createElement(m,c(c({ref:r},i),{},{components:n})):s.a.createElement(m,c({ref:r},i))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var i=2;i<a;i++)o[i]=n[i];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);