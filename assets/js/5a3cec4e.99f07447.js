"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3291],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=o,f=m["".concat(c,".").concat(p)]||m[p]||l[p]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},41166:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"Record",title:"Record"},c=void 0,d={unversionedId:"aws/resources/Route53/Record",id:"aws/resources/Route53/Record",isDocsHomePage:!1,title:"Record",description:"Provides a single Route53 Record",source:"@site/docs/aws/resources/Route53/Record.md",sourceDirName:"aws/resources/Route53",slug:"/aws/resources/Route53/Record",permalink:"/docs/aws/resources/Route53/Record",tags:[],version:"current",frontMatter:{id:"Record",title:"Record"},sidebar:"docs",previous:{title:"Hosted Zone",permalink:"/docs/aws/resources/Route53/HostedZone"},next:{title:"Domains",permalink:"/docs/aws/resources/Route53Domains/Domain"}},u=[{value:"Examples",id:"examples",children:[{value:"A Record",id:"a-record",children:[],level:3},{value:"CNAME from a certificate",id:"cname-from-a-certificate",children:[],level:3},{value:"Alias for CloudFront Distribution",id:"alias-for-cloudfront-distribution",children:[],level:3}],level:2},{value:"Source Code Examples",id:"source-code-examples",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"List",id:"list",children:[],level:2}],l={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a single ",(0,a.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/route53/v2/home#Dashboard"},"Route53 Record")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"a-record"},"A Record"),(0,a.kt)("p",null,"Add an A record to the hosted zone:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const domainName = "your.domain.name.com";\n\nprovider.Route53Domain.useDomain({\n  name: domainName,\n});\n\nconst hostedZoneName = `${domainName}.`;\nprovider.Route53.makeHostedZone({\n  name: hostedZoneName,\n  dependencies: () => ({ domain: domainName }),\n});\n\nprovider.Route53.makeRecord({\n  name: `${hostedZoneName}-ipv4`,\n  dependencies: () => ({ hostedZone: hostedZoneName, eip: "ip" }),\n  properties: ({ dependencies: { eip } }) => {\n    return {\n      Name: hostedZoneName,\n      Type: "A",\n      ResourceRecords: [\n        {\n          Value: eip.live?.PublicIp,\n        },\n      ],\n      TTL: 60,\n    };\n  },\n});\n')),(0,a.kt)("h3",{id:"cname-from-a-certificate"},"CNAME from a certificate"),(0,a.kt)("p",null,"Verify a certificate with DNS validation by adding a CNAME record."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const domainName = "your.domain.name.com";\n\nprovider.Route53Domain.useDomain({\n  name: domainName,\n});\n\nconst hostedZoneName = `${domainName}.`;\nprovider.Route53.makeHostedZone({\n  name: hostedZoneName,\n  dependencies: () => ({ domain: domainName }),\n});\n\nprovider.Route53.makeRecord({\n  dependencies: () => ({\n    hostedZone: hostedZoneName,\n    certificate: "domainName",\n  }),\n});\n')),(0,a.kt)("h3",{id:"alias-for-cloudfront-distribution"},"Alias for CloudFront Distribution"),(0,a.kt)("p",null,"Add an alias entry to the the CloudFront distribution domain name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const domainName = "your.domain.name.com";\n\nconst distribution = provider.CloudFront.makeDistribution({\n  name: `distribution-${bucketName}`,\n  dependencies: () => ({ websiteBucket, certificate }),\n  properties: ({}) => {\n    // More stuff here\n  },\n});\n\nconst hostedZone = provider.Route53.makeHostedZone({\n  name: `${domainName}.`,\n  dependencies: () => ({ domain }),\n});\n\nconst recordCloudFront = provider.Route53.makeRecord({\n  dependencies: () => ({ hostedZone, distribution }),\n});\n')),(0,a.kt)("h2",{id:"source-code-examples"},"Source Code Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/website-https/iac.js"},"https static website ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/FredericHeem/starhackit/blob/master/deploy/grucloud-aws/iac.js"},"starhack.it")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/route53/dns-validation-record-txt/iac.js"},"TXT record and hosted zone "))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53.html#changeResourceRecordSets-property"},"properties list"))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./HostedZone"},"Route53 HostedZone")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/LoadBalancer"},"LoadBalancer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../ACM/Certificate"},"Certificate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/aws/resources/APIGateway/DomainName"},"APIGateway DomainName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/aws/resources/ApiGatewayV2/DomainName"},"ApiGatewayV2 DomainName")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/aws/resources/CloudFront/Distribution"},"CloudFront Distribution"))),(0,a.kt)("h2",{id:"list"},"List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},'\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 3 route53::Record from aws                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name               \u2502 Data                                           \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 grucloud.org.::NS  \u2502 Name: grucloud.org.                            \u2502 Yes  \u2502\n\u2502                    \u2502 Type: NS                                       \u2502      \u2502\n\u2502                    \u2502 TTL: 172800                                    \u2502      \u2502\n\u2502                    \u2502 ResourceRecords:                               \u2502      \u2502\n\u2502                    \u2502   - Value: ns-1907.awsdns-46.co.uk.            \u2502      \u2502\n\u2502                    \u2502   - Value: ns-15.awsdns-01.com.                \u2502      \u2502\n\u2502                    \u2502   - Value: ns-1423.awsdns-49.org.              \u2502      \u2502\n\u2502                    \u2502   - Value: ns-514.awsdns-00.net.               \u2502      \u2502\n\u2502                    \u2502 HostedZoneId: /hostedzone/Z0064831PNCGMBFQ0H7Y \u2502      \u2502\n\u2502                    \u2502                                                \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 grucloud.org.::SOA \u2502 Name: grucloud.org.                            \u2502 Yes  \u2502\n\u2502                    \u2502 Type: SOA                                      \u2502      \u2502\n\u2502                    \u2502 TTL: 900                                       \u2502      \u2502\n\u2502                    \u2502 ResourceRecords:                               \u2502      \u2502\n\u2502                    \u2502   - Value: ns-1907.awsdns-46.co.uk. awsdns-ho\u2026 \u2502      \u2502\n\u2502                    \u2502 HostedZoneId: /hostedzone/Z0064831PNCGMBFQ0H7Y \u2502      \u2502\n\u2502                    \u2502                                                \u2502      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 txt.grucloud.org.  \u2502 Name: grucloud.org.                            \u2502 Yes  \u2502\n\u2502                    \u2502 Type: TXT                                      \u2502      \u2502\n\u2502                    \u2502 TTL: 60                                        \u2502      \u2502\n\u2502                    \u2502 ResourceRecords:                               \u2502      \u2502\n\u2502                    \u2502   - Value: "google-site-verification=q_tZuuK8\u2026 \u2502      \u2502\n\u2502                    \u2502 Tags:                                          \u2502      \u2502\n\u2502                    \u2502   - Key: gc-managed-by                         \u2502      \u2502\n\u2502                    \u2502     Value: grucloud                            \u2502      \u2502\n\u2502                    \u2502   - Key: gc-project-name                       \u2502      \u2502\n\u2502                    \u2502     Value: @grucloud/example-aws-route53-dns-\u2026 \u2502      \u2502\n\u2502                    \u2502   - Key: gc-stage                              \u2502      \u2502\n\u2502                    \u2502     Value: dev                                 \u2502      \u2502\n\u2502                    \u2502   - Key: gc-record-txt.grucloud.org.           \u2502      \u2502\n\u2502                    \u2502     Value: grucloud.org.::TXT                  \u2502      \u2502\n\u2502                    \u2502   - Key: gc-created-by-provider                \u2502      \u2502\n\u2502                    \u2502     Value: aws                                 \u2502      \u2502\n\u2502                    \u2502   - Key: Name                                  \u2502      \u2502\n\u2502                    \u2502     Value: grucloud.org.                       \u2502      \u2502\n\u2502                    \u2502 HostedZoneId: /hostedzone/Z0064831PNCGMBFQ0H7Y \u2502      \u2502\n\u2502                    \u2502 namespace:                                     \u2502      \u2502\n\u2502                    \u2502                                                \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')))}m.isMDXComponent=!0}}]);