(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(8),c=(r(0),r(229)),i={id:"APIGatewayRestApi",title:"RestApi"},o={unversionedId:"aws/resources/APIGateway/APIGatewayRestApi",id:"aws/resources/APIGateway/APIGatewayRestApi",isDocsHomePage:!1,title:"RestApi",description:"Manages an API Gateway RestAPI.",source:"@site/docs/aws/resources/APIGateway/RestApi.md",sourceDirName:"aws/resources/APIGateway",slug:"/aws/resources/APIGateway/APIGatewayRestApi",permalink:"/docs/aws/resources/APIGateway/APIGatewayRestApi",version:"current",frontMatter:{id:"APIGatewayRestApi",title:"RestApi"},sidebar:"docs",previous:{title:"Resource",permalink:"/docs/aws/resources/APIGateway/APIGatewayResource"},next:{title:"Stage",permalink:"/docs/aws/resources/APIGateway/APIGatewayStage"}},s=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],p={toc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Manages an ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"API Gateway RestAPI"),"."),Object(c.b)("h2",{id:"sample-code"},"Sample code"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const restApi = provider.APIGateway.makeRestApi({\n  name: "myRestApi",\n  properties: () => ({ endpointConfiguration: { types: ["REGIONAL"] } }),\n});\n')),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#createRestApi-property"},"create properties"))),Object(c.b)("h2",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Authorizer"},"Authorizer")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Deployment"},"Deployment")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Resource"},"Resource")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./Stage"},"Stage"))),Object(c.b)("h2",{id:"full-examples"},"Full Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway/restapi-lambda"},"RestAPI with Lambda"))),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("p",null,"The RestApis can be filtered with the ",Object(c.b)("em",{parentName:"p"},"RestApi")," type:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t RestApi\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-txt"},"")))}l.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||c;return r?n.a.createElement(d,o(o({ref:t},p),{},{components:r})):n.a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);