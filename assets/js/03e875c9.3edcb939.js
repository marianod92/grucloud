(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{235:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(r),b=t,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||c;return r?a.a.createElement(d,i(i({ref:n},l),{},{components:r})):a.a.createElement(d,i({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,s=new Array(c);s[0]=b;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var l=2;l<c;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},68:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return o})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(8),c=(r(0),r(235)),s={id:"LaunchTemplate",title:"Launch Template"},i={unversionedId:"aws/resources/EC2/LaunchTemplate",id:"aws/resources/EC2/LaunchTemplate",isDocsHomePage:!1,title:"Launch Template",description:"Manages an EC2 Launch Template",source:"@site/docs/aws/resources/EC2/LaunchTemplate.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/LaunchTemplate",permalink:"/docs/aws/resources/EC2/LaunchTemplate",version:"current",frontMatter:{id:"LaunchTemplate",title:"Launch Template"},sidebar:"docs",previous:{title:"KeyPair",permalink:"/docs/aws/resources/EC2/KeyPair"},next:{title:"Nat Gateway",permalink:"/docs/aws/resources/EC2/NatGateway"}},o=[{value:"Full Examples",id:"full-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"List",id:"list",children:[]}],l={toc:o};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Manages an EC2 ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchTemplates:"},"Launch Template")),Object(c.b)("p",null,"##\xa0Example Code"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'provider.EC2.makeLaunchTemplate({\n  name: "lt-ecs",\n  properties: ({ config }) => ({\n    LaunchTemplateData: {\n      BlockDeviceMappings: [\n        {\n          DeviceName: "/dev/xvda",\n          Ebs: {\n            DeleteOnTermination: true,\n            VolumeSize: 20,\n            VolumeType: "gp2",\n          },\n        },\n      ],\n      ImageId: "ami-0e6732e69988617b8",\n      InstanceType: "t2.medium",\n      MetadataOptions: {\n        HttpPutResponseHopLimit: 2,\n      },\n    },\n    Tags: [\n      {\n        Key: "eks:cluster-name",\n        Value: "cluster",\n      },\n      {\n        Key: "eks:nodegroup-name",\n        Value: "node-group-private-cluster",\n      },\n    ],\n  }),\n  dependencies: ({ resources }) => ({\n    keyPair: resources.EC2.KeyPair.kpEcs,\n    iamInstanceProfile: resources.IAM.InstanceProfile.roleEcs,\n    securityGroups: [resources.EC2.SecurityGroup.ecsSecurityGroup],\n  }),\n});\n')),Object(c.b)("h2",{id:"full-examples"},"Full Examples"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#runInstances-property"},"properties list"))),Object(c.b)("h2",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./SecurityGroup"},"Security Group")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./KeyPair"},"KeyPair")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Image"},"Image")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"../IAM/IamInstanceProfile"},"Instance Profile"))),Object(c.b)("h2",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/aws/resources/EKS/EksNodeGroup"},"EKS NodeGroup")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/aws/resources/AutoScaling/AutoScalingGroup"},"AutoScalingGroup"))),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t LaunchTemplate\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 14/14\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 ec2::LaunchTemplate from aws                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: lt-ec2-micro                                                             \u2502\n\u2502 managedByUs: Yes                                                               \u2502\n\u2502 live:                                                                          \u2502\n\u2502   LaunchTemplateId: lt-0706115759aa5b522                                       \u2502\n\u2502   LaunchTemplateName: lt-ec2-micro                                             \u2502\n\u2502   VersionNumber: 1                                                             \u2502\n\u2502   CreateTime: 2021-08-26T04:39:58.000Z                                         \u2502\n\u2502   CreatedBy: arn:aws:iam::840541460064:root                                    \u2502\n\u2502   DefaultVersion: true                                                         \u2502\n\u2502   LaunchTemplateData:                                                          \u2502\n\u2502     EbsOptimized: false                                                        \u2502\n\u2502     IamInstanceProfile:                                                        \u2502\n\u2502       Arn: arn:aws:iam::840541460064:instance-profile/role-ecs                 \u2502\n\u2502     BlockDeviceMappings: []                                                    \u2502\n\u2502     NetworkInterfaces:                                                         \u2502\n\u2502       - AssociatePublicIpAddress: true                                         \u2502\n\u2502         DeviceIndex: 0                                                         \u2502\n\u2502         Groups:                                                                \u2502\n\u2502           - "sg-04c8e2a5c5cdd7f92"                                             \u2502\n\u2502         Ipv6Addresses: []                                                      \u2502\n\u2502         PrivateIpAddresses: []                                                 \u2502\n\u2502         Ipv4Prefixes: []                                                       \u2502\n\u2502         Ipv6Prefixes: []                                                       \u2502\n\u2502     ImageId: ami-0d26eb3972b7f8c96                                             \u2502\n\u2502     InstanceType: t2.micro                                                     \u2502\n\u2502     KeyName: kp-ecs                                                            \u2502\n\u2502     ElasticGpuSpecifications: []                                               \u2502\n\u2502     ElasticInferenceAccelerators: []                                           \u2502\n\u2502     SecurityGroupIds: []                                                       \u2502\n\u2502     SecurityGroups: []                                                         \u2502\n\u2502     LicenseSpecifications: []                                                  \u2502\n\u2502   DefaultVersionNumber: 1                                                      \u2502\n\u2502   LatestVersionNumber: 1                                                       \u2502\n\u2502   Tags:                                                                        \u2502\n\u2502     - Key: gc-created-by-provider                                              \u2502\n\u2502       Value: aws                                                               \u2502\n\u2502     - Key: gc-managed-by                                                       \u2502\n\u2502       Value: grucloud                                                          \u2502\n\u2502     - Key: gc-project-name                                                     \u2502\n\u2502       Value: example-grucloud-ec2-launch-template                              \u2502\n\u2502     - Key: gc-stage                                                            \u2502\n\u2502       Value: dev                                                               \u2502\n\u2502     - Key: Name                                                                \u2502\n\u2502       Value: lt-ec2-micro                                                      \u2502\n\u2502                                                                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ec2::LaunchTemplate            \u2502 lt-ec2-micro                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\n')))}u.isMDXComponent=!0}}]);