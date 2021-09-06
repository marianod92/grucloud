(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{137:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return o}));var r=t(3),a=t(8),s=(t(0),t(229)),c={id:"ECSCluster",title:"Cluster"},i={unversionedId:"aws/resources/ECS/ECSCluster",id:"aws/resources/ECS/ECSCluster",isDocsHomePage:!1,title:"Cluster",description:"Manages an ECS Cluster.",source:"@site/docs/aws/resources/ECS/Cluster.md",sourceDirName:"aws/resources/ECS",slug:"/aws/resources/ECS/ECSCluster",permalink:"/docs/aws/resources/ECS/ECSCluster",version:"current",frontMatter:{id:"ECSCluster",title:"Cluster"},sidebar:"docs",previous:{title:"CapacityProvider",permalink:"/docs/aws/resources/ECS/ECSCapacityProvider"},next:{title:"Service",permalink:"/docs/aws/resources/ECS/ECSService"}},l=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],u={toc:l};function o(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Manages an ",Object(s.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/ecs/home?#/clusters"},"ECS Cluster"),"."),Object(s.b)("h2",{id:"sample-code"},"Sample code"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'provider.ECS.makeCluster({\n  name: "my-cluster",\n  properties: () => ({\n    settings: [\n      {\n        name: "containerInsights",\n        value: "enabled",\n      },\n    ],\n  }),\n  dependencies: ({ resources }) => ({\n    capacityProviders: [resources.ECS.CapacityProvider.cp],\n  }),\n});\n')),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#createCluster-property"},"create properties"))),Object(s.b)("h2",{id:"dependencies"},"Dependencies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/aws/resources/ECS/ECSCapacityProvider"},"Capacity Provider")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./KMS/KmsKey.md"},"KMS Key"))),Object(s.b)("h2",{id:"full-examples"},"Full Examples"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ecs/ecs-simple"},"Simple example"))),Object(s.b)("h2",{id:"list"},"List"),Object(s.b)("p",null,"The clusters can be filtered with the ",Object(s.b)("em",{parentName:"p"},"ECS::Cluster")," type:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t ECS::Cluster\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 23/23\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 ECS::Cluster from aws                                                       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: cluster                                                                 \u2502\n\u2502 managedByUs: Yes                                                              \u2502\n\u2502 live:                                                                         \u2502\n\u2502   clusterArn: arn:aws:ecs:eu-west-2:840541460064:cluster/cluster              \u2502\n\u2502   clusterName: cluster                                                        \u2502\n\u2502   status: ACTIVE                                                              \u2502\n\u2502   registeredContainerInstancesCount: 1                                        \u2502\n\u2502   runningTasksCount: 1                                                        \u2502\n\u2502   pendingTasksCount: 0                                                        \u2502\n\u2502   activeServicesCount: 1                                                      \u2502\n\u2502   statistics:                                                                 \u2502\n\u2502     - name: runningEC2TasksCount                                              \u2502\n\u2502       value: 1                                                                \u2502\n\u2502     - name: runningFargateTasksCount                                          \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: pendingEC2TasksCount                                              \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: pendingFargateTasksCount                                          \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: runningExternalTasksCount                                         \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: pendingExternalTasksCount                                         \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: activeEC2ServiceCount                                             \u2502\n\u2502       value: 1                                                                \u2502\n\u2502     - name: activeFargateServiceCount                                         \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: drainingEC2ServiceCount                                           \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: drainingFargateServiceCount                                       \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: activeExternalServiceCount                                        \u2502\n\u2502       value: 0                                                                \u2502\n\u2502     - name: drainingExternalServiceCount                                      \u2502\n\u2502       value: 0                                                                \u2502\n\u2502   tags:                                                                       \u2502\n\u2502     - key: gc-created-by-provider                                             \u2502\n\u2502       value: aws                                                              \u2502\n\u2502     - key: gc-managed-by                                                      \u2502\n\u2502       value: grucloud                                                         \u2502\n\u2502     - key: gc-project-name                                                    \u2502\n\u2502       value: example-grucloud-ecs-simple                                      \u2502\n\u2502     - key: gc-stage                                                           \u2502\n\u2502       value: dev                                                              \u2502\n\u2502     - key: Name                                                               \u2502\n\u2502       value: cluster                                                          \u2502\n\u2502   settings:                                                                   \u2502\n\u2502     - name: containerInsights                                                 \u2502\n\u2502       value: enabled                                                          \u2502\n\u2502   capacityProviders:                                                          \u2502\n\u2502     - "cp"                                                                    \u2502\n\u2502   defaultCapacityProviderStrategy: []                                         \u2502\n\u2502   attachments:                                                                \u2502\n\u2502     - id: 8c350eb4-7aa6-4881-8336-54abaeb534c1                                \u2502\n\u2502       type: asp                                                               \u2502\n\u2502       status: CREATED                                                         \u2502\n\u2502       details:                                                                \u2502\n\u2502         - name: capacityProviderName                                          \u2502\n\u2502           value: cp                                                           \u2502\n\u2502         - name: scalingPlanName                                               \u2502\n\u2502           value: ECSManagedAutoScalingPlan-3124ced1-b8c9-4225-bd28-0df041bed\u2026 \u2502\n\u2502   attachmentsStatus: UPDATE_COMPLETE                                          \u2502\n\u2502                                                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ECS::Cluster                   \u2502 cluster                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\n')))}o.isMDXComponent=!0},229:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),o=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=o(t),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return t?a.a.createElement(b,i(i({ref:n},u),{},{components:t})):a.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<s;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);