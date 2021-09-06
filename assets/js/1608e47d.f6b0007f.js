(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{229:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),o=b(t),d=a,m=o["".concat(s,".").concat(d)]||o[d]||p[d]||u;return t?r.a.createElement(m,l(l({ref:n},c),{},{components:t})):r.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,s=new Array(u);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<u;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(8),u=(t(0),t(229)),s={title:"Subnet"},l={unversionedId:"aws/resources/EC2/Subnet",id:"aws/resources/EC2/Subnet",isDocsHomePage:!1,title:"Subnet",description:"Provides an AWS subnet:",source:"@site/docs/aws/resources/EC2/Subnet.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/Subnet",permalink:"/docs/aws/resources/EC2/Subnet",version:"current",frontMatter:{title:"Subnet"},sidebar:"docs",previous:{title:"SecurityGroupRuleIngress",permalink:"/docs/aws/resources/EC2/SecurityGroupRuleIngress"},next:{title:"EBS Volume",permalink:"/docs/aws/resources/EC2/Volume"}},i=[{value:"Examples",id:"examples",children:[{value:"Simple subnet",id:"simple-subnet",children:[]},{value:"Subnet with attributes:",id:"subnet-with-attributes",children:[]},{value:"Subnet with Tags",id:"subnet-with-tags",children:[]}]},{value:"Code Examples",id:"code-examples",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Listing",id:"listing",children:[]}],c={toc:i};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(u.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)("p",null,"Provides an ",Object(u.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html"},"AWS subnet"),":"),Object(u.b)("h2",{id:"examples"},"Examples"),Object(u.b)("h3",{id:"simple-subnet"},"Simple subnet"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.EC2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst subnet = provider.EC2.makeSubnet({\n  name: "subnet",\n  dependencies: { vpc },\n  properties: () => ({\n    CidrBlock: "10.1.0.1/24",\n  }),\n});\n')),Object(u.b)("h3",{id:"subnet-with-attributes"},"Subnet with attributes:"),Object(u.b)("p",null,"The list of attributes can found in ",Object(u.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#modifySubnetAttribute-property"},"modifySubnetAttribute")," function parameter."),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-js"},'const vpc = provider.EC2.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst subnet = provider.EC2.makeSubnet({\n  name: "subnet",\n  dependencies: { vpc },\n  properties: () => ({\n    CidrBlock: "10.1.0.1/24",\n    MapPublicIpOnLaunch: true,\n  }),\n});\n')),Object(u.b)("h3",{id:"subnet-with-tags"},"Subnet with Tags"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-js"},'const clusterName = "cluster";\nconst vpc = provider.EC2.makeVpc({\n  name: "vpc-eks",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n    Tags: [{ Key: `kubernetes.io/cluster/${clusterName}`, Value: "shared" }],\n  }),\n});\n\nconst subnetPublic = provider.EC2.makeSubnet({\n  name: "subnet-public",\n  dependencies: { vpc },\n  properties: () => ({\n    CidrBlock: "10.1.0.1/24",\n    AvailabilityZone: "eu-west-2a",\n    Tags: [{ Key: "kubernetes.io/role/elb", Value: "1" }],\n    MapPublicIpOnLaunch: true,\n  }),\n});\n\nconst subnetPrivate = provider.EC2.makeSubnet({\n  name: "subnet-private",\n  dependencies: { vpc },\n  properties: () => ({\n    CidrBlock: "10.1.1.1/24",\n    AvailabilityZone: "eu-west-2b",\n    Tags: [{ Key: "kubernetes.io/role/internal-elb", Value: "1" }],\n  }),\n});\n')),Object(u.b)("h2",{id:"code-examples"},"Code Examples"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js"},"simple example")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/vpc/iac.js"},"module-aws-vpc"))),Object(u.b)("h2",{id:"dependencies"},"Dependencies"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"./Vpc"},"Vpc"))),Object(u.b)("h2",{id:"used-by"},"Used By"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"./SecurityGroup"},"SecurityGroup")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"./EC2"},"EC2")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"./RouteTable"},"RouteTable")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"./NatGateway"},"NatGateway"))),Object(u.b)("h2",{id:"listing"},"Listing"),Object(u.b)("p",null,"List the subnets filtering by the type ",Object(u.b)("inlineCode",{parentName:"p"},"Subnet")),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-sh"},"gc list --types Subnet\n")),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 2/2\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 5 Subnet from aws                                                                                    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name             \u2502 Data                                                                       \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 subnet-public-1  \u2502 AvailabilityZone: eu-west-2a                                               \u2502 Yes  \u2502\n\u2502                  \u2502 AvailabilityZoneId: euw2-az2                                               \u2502      \u2502\n\u2502                  \u2502 AvailableIpAddressCount: 8186                                              \u2502      \u2502\n\u2502                  \u2502 CidrBlock: 192.168.0.0/19                                                  \u2502      \u2502\n\u2502                  \u2502 DefaultForAz: false                                                        \u2502      \u2502\n\u2502                  \u2502 MapPublicIpOnLaunch: true                                                  \u2502      \u2502\n\u2502                  \u2502 MapCustomerOwnedIpOnLaunch: false                                          \u2502      \u2502\n\u2502                  \u2502 State: available                                                           \u2502      \u2502\n\u2502                  \u2502 SubnetId: subnet-0bc901f569ce3e55c                                         \u2502      \u2502\n\u2502                  \u2502 VpcId: vpc-06d8eb1ddef9ed0f1                                               \u2502      \u2502\n\u2502                  \u2502 OwnerId: 840541460064                                                      \u2502      \u2502\n\u2502                  \u2502 AssignIpv6AddressOnCreation: false                                         \u2502      \u2502\n\u2502                  \u2502 Ipv6CidrBlockAssociationSet: []                                            \u2502      \u2502\n\u2502                  \u2502 Tags:                                                                      \u2502      \u2502\n\u2502                  \u2502   - Key: kubernetes.io/role/elb                                            \u2502      \u2502\n\u2502                  \u2502     Value: 1                                                               \u2502      \u2502\n\u2502                  \u2502   - Key: ManagedBy                                                         \u2502      \u2502\n\u2502                  \u2502     Value: GruCloud                                                        \u2502      \u2502\n\u2502                  \u2502   - Key: Name                                                              \u2502      \u2502\n\u2502                  \u2502     Value: subnet-public-1                                                 \u2502      \u2502\n\u2502                  \u2502   - Key: stage                                                             \u2502      \u2502\n\u2502                  \u2502     Value: dev                                                             \u2502      \u2502\n\u2502                  \u2502   - Key: CreatedByProvider                                                 \u2502      \u2502\n\u2502                  \u2502     Value: aws                                                             \u2502      \u2502\n\u2502                  \u2502   - Key: projectName                                                       \u2502      \u2502\n\u2502                  \u2502     Value: @grucloud/example-module-aws-eks                                \u2502      \u2502\n\u2502                  \u2502   - Key: kubernetes.io/cluster/cluster                                     \u2502      \u2502\n\u2502                  \u2502     Value: shared                                                          \u2502      \u2502\n\u2502                  \u2502 SubnetArn: arn:aws:ec2:eu-west-2:840541460064:subnet/subnet-0bc901f569ce3\u2026 \u2502      \u2502\n\u2502                  \u2502                                                                            \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 subnet-private-2 \u2502 AvailabilityZone: eu-west-2b                                               \u2502 Yes  \u2502\n\u2502                  \u2502 AvailabilityZoneId: euw2-az3                                               \u2502      \u2502\n\u2502                  \u2502 AvailableIpAddressCount: 8187                                              \u2502      \u2502\n\u2502                  \u2502 CidrBlock: 192.168.128.0/19                                                \u2502      \u2502\n\u2502                  \u2502 DefaultForAz: false                                                        \u2502      \u2502\n\u2502                  \u2502 MapPublicIpOnLaunch: false                                                 \u2502      \u2502\n\u2502                  \u2502 MapCustomerOwnedIpOnLaunch: false                                          \u2502      \u2502\n\u2502                  \u2502 State: available                                                           \u2502      \u2502\n\u2502                  \u2502 SubnetId: subnet-0335cd853ab7b2cd1                                         \u2502      \u2502\n\u2502                  \u2502 VpcId: vpc-06d8eb1ddef9ed0f1                                               \u2502      \u2502\n\u2502                  \u2502 OwnerId: 840541460064                                                      \u2502      \u2502\n\u2502                  \u2502 AssignIpv6AddressOnCreation: false                                         \u2502      \u2502\n\u2502                  \u2502 Ipv6CidrBlockAssociationSet: []                                            \u2502      \u2502\n\u2502                  \u2502 Tags:                                                                      \u2502      \u2502\n\u2502                  \u2502   - Key: ManagedBy                                                         \u2502      \u2502\n\u2502                  \u2502     Value: GruCloud                                                        \u2502      \u2502\n\u2502                  \u2502   - Key: projectName                                                       \u2502      \u2502\n\u2502                  \u2502     Value: @grucloud/example-module-aws-eks                                \u2502      \u2502\n\u2502                  \u2502   - Key: kubernetes.io/cluster/cluster                                     \u2502      \u2502\n\u2502                  \u2502     Value: shared                                                          \u2502      \u2502\n\u2502                  \u2502   - Key: CreatedByProvider                                                 \u2502      \u2502\n\u2502                  \u2502     Value: aws                                                             \u2502      \u2502\n\u2502                  \u2502   - Key: Name                                                              \u2502      \u2502\n\u2502                  \u2502     Value: subnet-private-2                                                \u2502      \u2502\n\u2502                  \u2502   - Key: kubernetes.io/role/internal-elb                                   \u2502      \u2502\n\u2502                  \u2502     Value: 1                                                               \u2502      \u2502\n\u2502                  \u2502   - Key: stage                                                             \u2502      \u2502\n\u2502                  \u2502     Value: dev                                                             \u2502      \u2502\n\u2502                  \u2502 SubnetArn: arn:aws:ec2:eu-west-2:840541460064:subnet/subnet-0335cd853ab7b\u2026 \u2502      \u2502\n\u2502                  \u2502                                                                            \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 subnet-private-1 \u2502 AvailabilityZone: eu-west-2a                                               \u2502 Yes  \u2502\n\u2502                  \u2502 AvailabilityZoneId: euw2-az2                                               \u2502      \u2502\n\u2502                  \u2502 AvailableIpAddressCount: 8187                                              \u2502      \u2502\n\u2502                  \u2502 CidrBlock: 192.168.96.0/19                                                 \u2502      \u2502\n\u2502                  \u2502 DefaultForAz: false                                                        \u2502      \u2502\n\u2502                  \u2502 MapPublicIpOnLaunch: false                                                 \u2502      \u2502\n\u2502                  \u2502 MapCustomerOwnedIpOnLaunch: false                                          \u2502      \u2502\n\u2502                  \u2502 State: available                                                           \u2502      \u2502\n\u2502                  \u2502 SubnetId: subnet-0e600c9492fbf10c7                                         \u2502      \u2502\n\u2502                  \u2502 VpcId: vpc-06d8eb1ddef9ed0f1                                               \u2502      \u2502\n\u2502                  \u2502 OwnerId: 840541460064                                                      \u2502      \u2502\n\u2502                  \u2502 AssignIpv6AddressOnCreation: false                                         \u2502      \u2502\n\u2502                  \u2502 Ipv6CidrBlockAssociationSet: []                                            \u2502      \u2502\n\u2502                  \u2502 Tags:                                                                      \u2502      \u2502\n\u2502                  \u2502   - Key: projectName                                                       \u2502      \u2502\n\u2502                  \u2502     Value: @grucloud/example-module-aws-eks                                \u2502      \u2502\n\u2502                  \u2502   - Key: ManagedBy                                                         \u2502      \u2502\n\u2502                  \u2502     Value: GruCloud                                                        \u2502      \u2502\n\u2502                  \u2502   - Key: kubernetes.io/cluster/cluster                                     \u2502      \u2502\n\u2502                  \u2502     Value: shared                                                          \u2502      \u2502\n\u2502                  \u2502   - Key: Name                                                              \u2502      \u2502\n\u2502                  \u2502     Value: subnet-private-1                                                \u2502      \u2502\n\u2502                  \u2502   - Key: CreatedByProvider                                                 \u2502      \u2502\n\u2502                  \u2502     Value: aws                                                             \u2502      \u2502\n\u2502                  \u2502   - Key: kubernetes.io/role/internal-elb                                   \u2502      \u2502\n\u2502                  \u2502     Value: 1                                                               \u2502      \u2502\n\u2502                  \u2502   - Key: stage                                                             \u2502      \u2502\n\u2502                  \u2502     Value: dev                                                             \u2502      \u2502\n\u2502                  \u2502 SubnetArn: arn:aws:ec2:eu-west-2:840541460064:subnet/subnet-0e600c9492fbf\u2026 \u2502      \u2502\n\u2502                  \u2502                                                                            \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 subnet-public-2  \u2502 AvailabilityZone: eu-west-2b                                               \u2502 Yes  \u2502\n\u2502                  \u2502 AvailabilityZoneId: euw2-az3                                               \u2502      \u2502\n\u2502                  \u2502 AvailableIpAddressCount: 8187                                              \u2502      \u2502\n\u2502                  \u2502 CidrBlock: 192.168.32.0/19                                                 \u2502      \u2502\n\u2502                  \u2502 DefaultForAz: false                                                        \u2502      \u2502\n\u2502                  \u2502 MapPublicIpOnLaunch: true                                                  \u2502      \u2502\n\u2502                  \u2502 MapCustomerOwnedIpOnLaunch: false                                          \u2502      \u2502\n\u2502                  \u2502 State: available                                                           \u2502      \u2502\n\u2502                  \u2502 SubnetId: subnet-0a56a7f4e874f99fc                                         \u2502      \u2502\n\u2502                  \u2502 VpcId: vpc-06d8eb1ddef9ed0f1                                               \u2502      \u2502\n\u2502                  \u2502 OwnerId: 840541460064                                                      \u2502      \u2502\n\u2502                  \u2502 AssignIpv6AddressOnCreation: false                                         \u2502      \u2502\n\u2502                  \u2502 Ipv6CidrBlockAssociationSet: []                                            \u2502      \u2502\n\u2502                  \u2502 Tags:                                                                      \u2502      \u2502\n\u2502                  \u2502   - Key: kubernetes.io/role/elb                                            \u2502      \u2502\n\u2502                  \u2502     Value: 1                                                               \u2502      \u2502\n\u2502                  \u2502   - Key: CreatedByProvider                                                 \u2502      \u2502\n\u2502                  \u2502     Value: aws                                                             \u2502      \u2502\n\u2502                  \u2502   - Key: stage                                                             \u2502      \u2502\n\u2502                  \u2502     Value: dev                                                             \u2502      \u2502\n\u2502                  \u2502   - Key: kubernetes.io/cluster/cluster                                     \u2502      \u2502\n\u2502                  \u2502     Value: shared                                                          \u2502      \u2502\n\u2502                  \u2502   - Key: projectName                                                       \u2502      \u2502\n\u2502                  \u2502     Value: @grucloud/example-module-aws-eks                                \u2502      \u2502\n\u2502                  \u2502   - Key: ManagedBy                                                         \u2502      \u2502\n\u2502                  \u2502     Value: GruCloud                                                        \u2502      \u2502\n\u2502                  \u2502   - Key: Name                                                              \u2502      \u2502\n\u2502                  \u2502     Value: subnet-public-2                                                 \u2502      \u2502\n\u2502                  \u2502 SubnetArn: arn:aws:ec2:eu-west-2:840541460064:subnet/subnet-0a56a7f4e874f\u2026 \u2502      \u2502\n\u2502                  \u2502                                                                            \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 default          \u2502 AvailabilityZone: eu-west-2a                                               \u2502 NO   \u2502\n\u2502                  \u2502 AvailabilityZoneId: euw2-az2                                               \u2502      \u2502\n\u2502                  \u2502 AvailableIpAddressCount: 4091                                              \u2502      \u2502\n\u2502                  \u2502 CidrBlock: 172.31.0.0/20                                                   \u2502      \u2502\n\u2502                  \u2502 DefaultForAz: true                                                         \u2502      \u2502\n\u2502                  \u2502 MapPublicIpOnLaunch: true                                                  \u2502      \u2502\n\u2502                  \u2502 MapCustomerOwnedIpOnLaunch: false                                          \u2502      \u2502\n\u2502                  \u2502 State: available                                                           \u2502      \u2502\n\u2502                  \u2502 SubnetId: subnet-0f6f085fc384bf8ce                                         \u2502      \u2502\n\u2502                  \u2502 VpcId: vpc-bbbafcd3                                                        \u2502      \u2502\n\u2502                  \u2502 OwnerId: 840541460064                                                      \u2502      \u2502\n\u2502                  \u2502 AssignIpv6AddressOnCreation: false                                         \u2502      \u2502\n\u2502                  \u2502 Ipv6CidrBlockAssociationSet: []                                            \u2502      \u2502\n\u2502                  \u2502 Tags: []                                                                   \u2502      \u2502\n\u2502                  \u2502 SubnetArn: arn:aws:ec2:eu-west-2:840541460064:subnet/subnet-0f6f085fc384b\u2026 \u2502      \u2502\n\u2502                  \u2502                                                                            \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Subnet             \u2502 subnet-public-1                                                                \u2502\n\u2502                    \u2502 subnet-private-2                                                               \u2502\n\u2502                    \u2502 subnet-private-1                                                               \u2502\n\u2502                    \u2502 subnet-public-2                                                                \u2502\n\u2502                    \u2502 default                                                                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n5 resources, 1 type, 1 provider\nCommand "gc list --types Subnet" executed in 5s\n')))}b.isMDXComponent=!0}}]);