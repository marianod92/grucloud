(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(8),c=(a(0),a(229)),i={id:"APIGatewayStage",title:"Stage"},o={unversionedId:"aws/resources/APIGateway/APIGatewayStage",id:"aws/resources/APIGateway/APIGatewayStage",isDocsHomePage:!1,title:"Stage",description:"Manages an API Gateway Stage.",source:"@site/docs/aws/resources/APIGateway/Stage.md",sourceDirName:"aws/resources/APIGateway",slug:"/aws/resources/APIGateway/APIGatewayStage",permalink:"/docs/aws/resources/APIGateway/APIGatewayStage",version:"current",frontMatter:{id:"APIGatewayStage",title:"Stage"},sidebar:"docs",previous:{title:"RestApi",permalink:"/docs/aws/resources/APIGateway/APIGatewayRestApi"},next:{title:"Api",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Api"}},p=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],s={toc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Manages an ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"API Gateway Stage"),"."),Object(c.b)("h2",{id:"sample-code"},"Sample code"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const restApi = provider.APIGateway.makeRestApi({\n  name: "myRestApi",\n  properties: () => ({ endpointConfiguration: { types: ["REGIONAL"] } }),\n});\n\nconst stage = provider.APIGateway.makeStage({\n  name: "my-api-stage-dev",\n  dependencies: { restApi },\n  properties: () => ({}),\n});\n')),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#createStage-property"},"create properties"))),Object(c.b)("h2",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./RestAPI"},"RestAPI"))),Object(c.b)("h2",{id:"full-examples"},"Full Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway/restapi-lambda"},"RestAPI with Lambda"))),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("p",null,"The Stages can be filtered with the ",Object(c.b)("em",{parentName:"p"},"Stage")," type:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Stage\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-txt"},"")))}l.isMDXComponent=!0},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return a?n.a.createElement(m,o(o({ref:t},s),{},{components:a})):n.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);