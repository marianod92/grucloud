(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{203:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(6),o=(r(0),r(224)),i={id:"AwsListener",title:"Listener"},s={id:"aws/resources/ELBv2/AwsListener",isDocsHomePage:!1,title:"Listener",description:"Manage an ELB Listener.",source:"@site/docs/aws/resources/ELBv2/Listener.md",permalink:"/docs/aws/resources/ELBv2/AwsListener",sidebar:"someSidebar",previous:{title:"Target Group",permalink:"/docs/aws/resources/ELBv2/AwsTargetGroup"},next:{title:"Listener Rule",permalink:"/docs/aws/resources/ELBv2/AwsListenerRule"}},c=[{value:"Example",id:"example",children:[{value:"Http listener",id:"http-listener",children:[]}]},{value:"Properties",id:"properties",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"List",id:"list",children:[]}],l={rightToc:c};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Manage an ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html"}),"ELB Listener"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("h3",{id:"http-listener"},"Http listener"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'const vpc = await provider.makeVpc({\n  name: "vpc",\n  properties: () => ({\n    CidrBlock: "10.1.0.0/16",\n  }),\n});\n\nconst listenerHttp = await provider.makeListener({\n  name: config.elb.listeners.http.name,\n  dependencies: {\n    loadBalancer,\n    targetGroups: [targetGroups.web],\n  },\n  properties: ({\n    dependencies: {\n      targetGroups: [targetGroup],\n    },\n  }) => ({\n    Port: 80,\n    Protocol: "HTTP",\n    DefaultActions: [\n      {\n        TargetGroupArn: targetGroup?.live?.TargetGroupArn,\n        Type: "forward",\n      },\n    ],\n  }),\n});\n')),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"The list of properties are the parameter of ",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createTargetGroup-property"}),"createTargetGroup")),Object(o.b)("h2",{id:"source-code"},"Source Code"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/aws/load-balancer/iac.js"}),"Load Balancer Module"))),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/aws/resources/ELBv2/AwsLoadBalancer"}),"LoadBalancer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/aws/resources/ELBv2/AwsTargetGroup"}),"TargetGroup"))),Object(o.b)("h2",{id:"list"},"List"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"gc l -t Listener\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),'Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 5/5\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2 Listener from aws                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name           \u2502 Data                                                     \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 listener-http  \u2502 ListenerArn: arn:aws:elasticloadbalancing:eu-west-2:840\u2026 \u2502 Yes  \u2502\n\u2502                \u2502 LoadBalancerArn: arn:aws:elasticloadbalancing:eu-west-2\u2026 \u2502      \u2502\n\u2502                \u2502 Port: 80                                                 \u2502      \u2502\n\u2502                \u2502 Protocol: HTTP                                           \u2502      \u2502\n\u2502                \u2502 Certificates: []                                         \u2502      \u2502\n\u2502                \u2502 DefaultActions:                                          \u2502      \u2502\n\u2502                \u2502   - Type: forward                                        \u2502      \u2502\n\u2502                \u2502     TargetGroupArn: arn:aws:elasticloadbalancing:eu-wes\u2026 \u2502      \u2502\n\u2502                \u2502     ForwardConfig:                                       \u2502      \u2502\n\u2502                \u2502       TargetGroups:                                      \u2502      \u2502\n\u2502                \u2502         - TargetGroupArn: arn:aws:elasticloadbalancing:\u2026 \u2502      \u2502\n\u2502                \u2502           Weight: 1                                      \u2502      \u2502\n\u2502                \u2502       TargetGroupStickinessConfig:                       \u2502      \u2502\n\u2502                \u2502         Enabled: false                                   \u2502      \u2502\n\u2502                \u2502 AlpnPolicy: []                                           \u2502      \u2502\n\u2502                \u2502 Tags:                                                    \u2502      \u2502\n\u2502                \u2502   - Key: ManagedBy                                       \u2502      \u2502\n\u2502                \u2502     Value: GruCloud                                      \u2502      \u2502\n\u2502                \u2502   - Key: stage                                           \u2502      \u2502\n\u2502                \u2502     Value: dev                                           \u2502      \u2502\n\u2502                \u2502   - Key: projectName                                     \u2502      \u2502\n\u2502                \u2502     Value: starhackit                                    \u2502      \u2502\n\u2502                \u2502   - Key: CreatedByProvider                               \u2502      \u2502\n\u2502                \u2502     Value: aws                                           \u2502      \u2502\n\u2502                \u2502   - Key: Name                                            \u2502      \u2502\n\u2502                \u2502     Value: listener-http                                 \u2502      \u2502\n\u2502                \u2502                                                          \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 listener-https \u2502 ListenerArn: arn:aws:elasticloadbalancing:eu-west-2:840\u2026 \u2502 Yes  \u2502\n\u2502                \u2502 LoadBalancerArn: arn:aws:elasticloadbalancing:eu-west-2\u2026 \u2502      \u2502\n\u2502                \u2502 Port: 443                                                \u2502      \u2502\n\u2502                \u2502 Protocol: HTTPS                                          \u2502      \u2502\n\u2502                \u2502 Certificates:                                            \u2502      \u2502\n\u2502                \u2502   - CertificateArn: arn:aws:acm:eu-west-2:840541460064:\u2026 \u2502      \u2502\n\u2502                \u2502 SslPolicy: ELBSecurityPolicy-2016-08                     \u2502      \u2502\n\u2502                \u2502 DefaultActions:                                          \u2502      \u2502\n\u2502                \u2502   - Type: forward                                        \u2502      \u2502\n\u2502                \u2502     TargetGroupArn: arn:aws:elasticloadbalancing:eu-wes\u2026 \u2502      \u2502\n\u2502                \u2502     ForwardConfig:                                       \u2502      \u2502\n\u2502                \u2502       TargetGroups:                                      \u2502      \u2502\n\u2502                \u2502         - TargetGroupArn: arn:aws:elasticloadbalancing:\u2026 \u2502      \u2502\n\u2502                \u2502           Weight: 1                                      \u2502      \u2502\n\u2502                \u2502       TargetGroupStickinessConfig:                       \u2502      \u2502\n\u2502                \u2502         Enabled: false                                   \u2502      \u2502\n\u2502                \u2502 AlpnPolicy: []                                           \u2502      \u2502\n\u2502                \u2502 Tags:                                                    \u2502      \u2502\n\u2502                \u2502   - Key: ManagedBy                                       \u2502      \u2502\n\u2502                \u2502     Value: GruCloud                                      \u2502      \u2502\n\u2502                \u2502   - Key: stage                                           \u2502      \u2502\n\u2502                \u2502     Value: dev                                           \u2502      \u2502\n\u2502                \u2502   - Key: projectName                                     \u2502      \u2502\n\u2502                \u2502     Value: starhackit                                    \u2502      \u2502\n\u2502                \u2502   - Key: CreatedByProvider                               \u2502      \u2502\n\u2502                \u2502     Value: aws                                           \u2502      \u2502\n\u2502                \u2502   - Key: Name                                            \u2502      \u2502\n\u2502                \u2502     Value: listener-https                                \u2502      \u2502\n\u2502                \u2502                                                          \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Listener           \u2502 listener-http                                              \u2502\n\u2502                    \u2502 listener-https                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2 resources, 1 type, 2 providers\nCommand "gc l -t Listener" executed in 10s\n')))}p.isMDXComponent=!0},224:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return g}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,g=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(g,s(s({ref:n},l),{},{components:r})):a.a.createElement(g,s({ref:n},l))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);