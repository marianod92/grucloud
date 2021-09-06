(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{167:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return s}));var n=t(3),r=t(8),p=(t(0),t(229)),i={id:"ApiGatewayV2ApiMapping",title:"ApiMapping"},c={unversionedId:"aws/resources/ApiGatewayV2/ApiGatewayV2ApiMapping",id:"aws/resources/ApiGatewayV2/ApiGatewayV2ApiMapping",isDocsHomePage:!1,title:"ApiMapping",description:"Manages an Api Gateway V2 ApiMapping.",source:"@site/docs/aws/resources/ApiGatewayV2/ApiMapping.md",sourceDirName:"aws/resources/ApiGatewayV2",slug:"/aws/resources/ApiGatewayV2/ApiGatewayV2ApiMapping",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2ApiMapping",version:"current",frontMatter:{id:"ApiGatewayV2ApiMapping",title:"ApiMapping"},sidebar:"docs",previous:{title:"Api",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Api"},next:{title:"Authorizer",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Authorizer"}},o=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],l={toc:o};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Manages an ",Object(p.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"Api Gateway V2 ApiMapping"),"."),Object(p.b)("h2",{id:"sample-code"},"Sample code"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},'const apiGatewayDomainName = provider.ApiGatewayV2.makeDomainName({\n  name: config.domainName,\n  dependencies: { certificate },\n  properties: () => ({}),\n});\n\nconst api = provider.ApiGatewayV2.makeApi({\n  name: "my-api",\n  properties: () => ({}),\n});\n\nconst stage = provider.ApiGatewayV2.makeStage({\n  name: "my-api-stage-dev",\n  dependencies: { api },\n  properties: () => ({}),\n});\n\nprovider.ApiGatewayV2.makeApiMapping({\n  name: "api-mapping-dev",\n  dependencies: { api, stage, domainName: apiGatewayDomainName },\n  properties: () => ({ ApiMappingKey: "my-function" }),\n});\n')),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createApiMapping-property"},"create properties"))),Object(p.b)("h2",{id:"dependencies"},"Dependencies"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"./API"},"API")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"./Stage"},"Stage")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"./DomainName"},"DomainName"))),Object(p.b)("h2",{id:"full-examples"},"Full Examples"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway-v2/http-lambda"},"Http with Lambda"))),Object(p.b)("h2",{id:"list"},"List"),Object(p.b)("p",null,"The ApiMappings can be filtered with the ",Object(p.b)("em",{parentName:"p"},"ApiMapping")," type:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t ApiMapping\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-txt"},"")))}s.isMDXComponent=!0},229:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=s(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||p;return t?r.a.createElement(d,c(c({ref:a},l),{},{components:t})):r.a.createElement(d,c({ref:a},l))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=b;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<p;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);