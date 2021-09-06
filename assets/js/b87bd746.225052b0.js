(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{181:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return u})),a.d(n,"toc",(function(){return i})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(8),c=(a(0),a(229)),o={id:"AutoScalingGroup",title:"AutoScaling Group"},u={unversionedId:"aws/resources/AutoScaling/AutoScalingGroup",id:"aws/resources/AutoScaling/AutoScalingGroup",isDocsHomePage:!1,title:"AutoScaling Group",description:"Manages an AWS Auto Scaling group.",source:"@site/docs/aws/resources/AutoScaling/AutoScalingGroup.md",sourceDirName:"aws/resources/AutoScaling",slug:"/aws/resources/AutoScaling/AutoScalingGroup",permalink:"/docs/aws/resources/AutoScaling/AutoScalingGroup",version:"current",frontMatter:{id:"AutoScalingGroup",title:"AutoScaling Group"},sidebar:"docs",previous:{title:"Stage",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Stage"},next:{title:"Launch Configuration",permalink:"/docs/aws/resources/AutoScaling/LaunchConfiguration"}},i=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]},{value:"Links",id:"links",children:[]}],l={toc:i};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Manages an ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2autoscaling/home"},"AWS Auto Scaling group"),"."),Object(c.b)("h2",{id:"sample-code"},"Sample code"),Object(c.b)("p",null,"Create an AutoScaling Group given 2 subnets and a launch template:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'provider.AutoScaling.makeAutoScalingGroup({\n  name: "asg",\n  properties: () => ({\n    MinSize: 1,\n    MaxSize: 1,\n    DesiredCapacity: 1,\n    DefaultCooldown: 300,\n    HealthCheckType: "EC2",\n    HealthCheckGracePeriod: 300,\n  }),\n  dependencies: ({ resources }) => ({\n    subnets: [\n      resources.EC2.Subnet.pubSubnetAz1,\n      resources.EC2.Subnet.pubSubnetAz2,\n    ],\n    launchTemplate: resources.EC2.LaunchTemplate.ltEc2Micro,\n  }),\n});\n')),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#createAutoScalingGroup-property"},"create properties"))),Object(c.b)("h2",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"../EC2/Subnet"},"Subnet"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"./LaunchConfiguration"},"Launch Configuration")," or ",Object(c.b)("a",{parentName:"p",href:"./EC2/LaunchTemplate"},"Launch Template"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"/docs/aws/resources/ELBv2/AwsTargetGroup"},"ELB Target Groups")),Object(c.b)("h2",{parentName:"li",id:"full-examples"},"Full Examples")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/autoScaling/autoScalingGroup"},"AutoScaling Group example"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ecs/ecs-simple"},"AutoScaling Group in ECS with Launch Configuration")))),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("p",null,"The auto scaling groups can be filtered with the ",Object(c.b)("em",{parentName:"p"},"AutoScalingGroup")," type:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t AutoScalingGroup\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 18/18\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 autoscaling::AutoScalingGroup from aws                       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: asg                                                      \u2502\n\u2502 managedByUs: Yes                                               \u2502\n\u2502 live:                                                          \u2502\n\u2502   AutoScalingGroupName: asg                                    \u2502\n\u2502   AutoScalingGroupARN: arn:aws:autoscaling:eu-west-2:84054146\u2026 \u2502\n\u2502   LaunchTemplate:                                              \u2502\n\u2502     LaunchTemplateId: lt-0753d0ca24696f478                     \u2502\n\u2502     LaunchTemplateName: lt-ec2-micro                           \u2502\n\u2502   MinSize: 1                                                   \u2502\n\u2502   MaxSize: 1                                                   \u2502\n\u2502   DesiredCapacity: 1                                           \u2502\n\u2502   DefaultCooldown: 300                                         \u2502\n\u2502   AvailabilityZones:                                           \u2502\n\u2502     - "eu-west-2a"                                             \u2502\n\u2502     - "eu-west-2b"                                             \u2502\n\u2502   LoadBalancerNames: []                                        \u2502\n\u2502   TargetGroupARNs: []                                          \u2502\n\u2502   HealthCheckType: EC2                                         \u2502\n\u2502   HealthCheckGracePeriod: 300                                  \u2502\n\u2502   Instances:                                                   \u2502\n\u2502     - InstanceId: i-02e65188be5a2caa9                          \u2502\n\u2502       InstanceType: t2.micro                                   \u2502\n\u2502       AvailabilityZone: eu-west-2b                             \u2502\n\u2502       LifecycleState: Pending                                  \u2502\n\u2502       HealthStatus: Healthy                                    \u2502\n\u2502       LaunchTemplate:                                          \u2502\n\u2502         LaunchTemplateId: lt-0753d0ca24696f478                 \u2502\n\u2502         LaunchTemplateName: lt-ec2-micro                       \u2502\n\u2502         Version: 1                                             \u2502\n\u2502       ProtectedFromScaleIn: false                              \u2502\n\u2502   CreatedTime: 2021-08-27T17:17:37.549Z                        \u2502\n\u2502   SuspendedProcesses: []                                       \u2502\n\u2502   VPCZoneIdentifier: subnet-0904117fc234a5151,subnet-0e2c4739\u2026 \u2502\n\u2502   EnabledMetrics: []                                           \u2502\n\u2502   Tags:                                                        \u2502\n\u2502     - ResourceId: asg                                          \u2502\n\u2502       ResourceType: auto-scaling-group                         \u2502\n\u2502       Key: gc-created-by-provider                              \u2502\n\u2502       Value: aws                                               \u2502\n\u2502       PropagateAtLaunch: true                                  \u2502\n\u2502     - ResourceId: asg                                          \u2502\n\u2502       ResourceType: auto-scaling-group                         \u2502\n\u2502       Key: gc-managed-by                                       \u2502\n\u2502       Value: grucloud                                          \u2502\n\u2502       PropagateAtLaunch: true                                  \u2502\n\u2502     - ResourceId: asg                                          \u2502\n\u2502       ResourceType: auto-scaling-group                         \u2502\n\u2502       Key: gc-project-name                                     \u2502\n\u2502       Value: example-grucloud-autoscaling-group                \u2502\n\u2502       PropagateAtLaunch: true                                  \u2502\n\u2502     - ResourceId: asg                                          \u2502\n\u2502       ResourceType: auto-scaling-group                         \u2502\n\u2502       Key: gc-stage                                            \u2502\n\u2502       Value: dev                                               \u2502\n\u2502       PropagateAtLaunch: true                                  \u2502\n\u2502     - ResourceId: asg                                          \u2502\n\u2502       ResourceType: auto-scaling-group                         \u2502\n\u2502       Key: Name                                                \u2502\n\u2502       Value: asg                                               \u2502\n\u2502       PropagateAtLaunch: true                                  \u2502\n\u2502   TerminationPolicies:                                         \u2502\n\u2502     - "Default"                                                \u2502\n\u2502   NewInstancesProtectedFromScaleIn: false                      \u2502\n\u2502   ServiceLinkedRoleARN: arn:aws:iam::840541460064:role/aws-se\u2026 \u2502\n\u2502                                                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 autoscaling::AutoScalingGroup  \u2502 asg                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),Object(c.b)("h2",{id:"links"},"Links"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html"},"Auto Scaling Group user guide"),".")))}s.isMDXComponent=!0},229:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},p=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(a),g=t,m=p["".concat(o,".").concat(g)]||p[g]||b[g]||c;return a?r.a.createElement(m,u(u({ref:n},l),{},{components:a})):r.a.createElement(m,u({ref:n},l))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=a.length,o=new Array(c);o[0]=g;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);