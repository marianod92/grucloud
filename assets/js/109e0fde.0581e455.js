(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{201:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=i(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||s;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<s;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(8),s=(n(0),n(201)),c={id:"EksCluster",title:"Cluster"},l={unversionedId:"aws/resources/EKS/EksCluster",id:"aws/resources/EKS/EksCluster",isDocsHomePage:!1,title:"Cluster",description:"Provides an EKS Cluster.",source:"@site/docs/aws/resources/EKS/EksCluster.md",sourceDirName:"aws/resources/EKS",slug:"/aws/resources/EKS/EksCluster",permalink:"/docs/aws/resources/EKS/EksCluster",version:"current",frontMatter:{id:"EksCluster",title:"Cluster"},sidebar:"docs",previous:{title:"Vpc",permalink:"/docs/aws/resources/EC2/Vpc"},next:{title:"Node Group",permalink:"/docs/aws/resources/EKS/EksNodeGroup"}},o=[{value:"Examples",id:"examples",children:[{value:"Create a cluster",id:"create-a-cluster",children:[]}]},{value:"On Deployed and On Destroyed",id:"on-deployed-and-on-destroyed",children:[{value:"On Deployed",id:"on-deployed",children:[]},{value:"On Destroyed",id:"on-destroyed",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],u={toc:o};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Provides an ",Object(s.b)("a",{parentName:"p",href:"https://aws.amazon.com/eks"},"EKS Cluster"),"."),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"create-a-cluster"},"Create a cluster"),Object(s.b)("p",null,"In order to create an EKS Cluster, a few resources need to be created before:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"a VPC"),Object(s.b)("li",{parentName:"ul"},"an Internet Gateway"),Object(s.b)("li",{parentName:"ul"},"at least 2 public subnet"),Object(s.b)("li",{parentName:"ul"},"at least 2 private subnet"),Object(s.b)("li",{parentName:"ul"},"a Nat Gateway."),Object(s.b)("li",{parentName:"ul"},"route tables and routes."),Object(s.b)("li",{parentName:"ul"},"a security group"),Object(s.b)("li",{parentName:"ul"},"an Iam role"),Object(s.b)("li",{parentName:"ul"},"a customer master key")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'const cluster = provider.eks.makeCluster({\n  name: "cluster",\n  dependencies: {\n    subnets: [...subnetPublics, ...subnetPrivates],\n    securityGroups: [securityGroup],\n    role,\n    key,\n  },\n});\n')),Object(s.b)("h2",{id:"on-deployed-and-on-destroyed"},"On Deployed and On Destroyed"),Object(s.b)("h3",{id:"on-deployed"},"On Deployed"),Object(s.b)("p",null,"When the cluster is up and running, the ",Object(s.b)("strong",{parentName:"p"},"kubeconfig")," is updated with the new endpoint, i.e arn:aws:eks:eu-west-2:840541460064:cluster/myCluster\nUnder the hood, the ",Object(s.b)("strong",{parentName:"p"},"aws eks update-kubeconfig")," command is invoked with the right cluster name."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"aws eks update-kubeconfig --name myCluster\n")),Object(s.b)("h3",{id:"on-destroyed"},"On Destroyed"),Object(s.b)("p",null,"When the cluster is destroyed, the endpoint is removed from ",Object(s.b)("strong",{parentName:"p"},"kubeconfig"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"kubectl config delete-cluster arn:aws:eks:eu-west-2:840541460064:cluster/myCluster\n")),Object(s.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/eks/iac.js"},"eks"))),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#createCluster-property"},"properties list"))),Object(s.b)("h2",{id:"dependencies"},"Dependencies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"../EC2/Subnet"},"Subnet")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"../EC2/SecurityGroup"},"SecurityGroup")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"../Iam/IamRole"},"Role")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"../KMS/KmsKey"},"Key"))),Object(s.b)("h2",{id:"list"},"List"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t EKSCluster\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 5/5\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 EKSCluster from aws                                                            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name     \u2502 Data                                                           \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 cluster  \u2502 name: cluster                                                  \u2502 Yes  \u2502\n\u2502          \u2502 arn: arn:aws:eks:eu-west-2:840541460064:cluster/cluster        \u2502      \u2502\n\u2502          \u2502 createdAt: 2021-04-16T19:17:59.258Z                            \u2502      \u2502\n\u2502          \u2502 version: 1.18                                                  \u2502      \u2502\n\u2502          \u2502 endpoint: https://789895ABB5E7DDFABC1AD92FA854A4B3.gr7.eu-wes\u2026 \u2502      \u2502\n\u2502          \u2502 roleArn: arn:aws:iam::840541460064:role/role-cluster           \u2502      \u2502\n\u2502          \u2502 resourcesVpcConfig:                                            \u2502      \u2502\n\u2502          \u2502   subnetIds:                                                   \u2502      \u2502\n\u2502          \u2502     - "subnet-053363a740a209ba8"                               \u2502      \u2502\n\u2502          \u2502     - "subnet-0a7a0a47b7130c01f"                               \u2502      \u2502\n\u2502          \u2502     - "subnet-0dff8b29620034c34"                               \u2502      \u2502\n\u2502          \u2502     - "subnet-0f436523b208a068c"                               \u2502      \u2502\n\u2502          \u2502   securityGroupIds:                                            \u2502      \u2502\n\u2502          \u2502     - "sg-04ffe6df304c184d7"                                   \u2502      \u2502\n\u2502          \u2502     - "sg-094514a64ee09d3c9"                                   \u2502      \u2502\n\u2502          \u2502   clusterSecurityGroupId: sg-0a83ac7deb9323c1d                 \u2502      \u2502\n\u2502          \u2502   vpcId: vpc-03b8d521b703d6c46                                 \u2502      \u2502\n\u2502          \u2502   endpointPublicAccess: true                                   \u2502      \u2502\n\u2502          \u2502   endpointPrivateAccess: false                                 \u2502      \u2502\n\u2502          \u2502   publicAccessCidrs:                                           \u2502      \u2502\n\u2502          \u2502     - "0.0.0.0/0"                                              \u2502      \u2502\n\u2502          \u2502 kubernetesNetworkConfig:                                       \u2502      \u2502\n\u2502          \u2502   serviceIpv4Cidr: 10.100.0.0/16                               \u2502      \u2502\n\u2502          \u2502 logging:                                                       \u2502      \u2502\n\u2502          \u2502   clusterLogging:                                              \u2502      \u2502\n\u2502          \u2502     - types:                                                   \u2502      \u2502\n\u2502          \u2502         - "api"                                                \u2502      \u2502\n\u2502          \u2502         - "audit"                                              \u2502      \u2502\n\u2502          \u2502         - "authenticator"                                      \u2502      \u2502\n\u2502          \u2502         - "controllerManager"                                  \u2502      \u2502\n\u2502          \u2502         - "scheduler"                                          \u2502      \u2502\n\u2502          \u2502       enabled: false                                           \u2502      \u2502\n\u2502          \u2502 identity:                                                      \u2502      \u2502\n\u2502          \u2502   oidc:                                                        \u2502      \u2502\n\u2502          \u2502     issuer: https://oidc.eks.eu-west-2.amazonaws.com/id/78989\u2026 \u2502      \u2502\n\u2502          \u2502 status: ACTIVE                                                 \u2502      \u2502\n\u2502          \u2502 certificateAuthority:                                          \u2502      \u2502\n\u2502          \u2502   data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN5RENDQWJDZ\u2026 \u2502      \u2502\n\u2502          \u2502 clientRequestToken: null                                       \u2502      \u2502\n\u2502          \u2502 platformVersion: eks.4                                         \u2502      \u2502\n\u2502          \u2502 tags:                                                          \u2502      \u2502\n\u2502          \u2502   ManagedBy: GruCloud                                          \u2502      \u2502\n\u2502          \u2502   stage: dev                                                   \u2502      \u2502\n\u2502          \u2502   projectName: starhackit                                      \u2502      \u2502\n\u2502          \u2502   CreatedByProvider: aws                                       \u2502      \u2502\n\u2502          \u2502   Name: cluster                                                \u2502      \u2502\n\u2502          \u2502                                                                \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 EKSCluster         \u2502 cluster                                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 2 providers\nCommand "gc l -t EKSCluster" executed in 8s\n')))}i.isMDXComponent=!0}}]);