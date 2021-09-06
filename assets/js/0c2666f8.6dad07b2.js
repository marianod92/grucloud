(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{229:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(a),b=n,d=m["".concat(o,".").concat(b)]||m[b]||u[b]||i;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),i=(a(0),a(229)),o={id:"ApiGatewayV2DomainName",title:"DomainName"},c={unversionedId:"aws/resources/ApiGatewayV2/ApiGatewayV2DomainName",id:"aws/resources/ApiGatewayV2/ApiGatewayV2DomainName",isDocsHomePage:!1,title:"DomainName",description:"Manages an Api Gateway V2 Domain Name.",source:"@site/docs/aws/resources/ApiGatewayV2/DomainName.md",sourceDirName:"aws/resources/ApiGatewayV2",slug:"/aws/resources/ApiGatewayV2/ApiGatewayV2DomainName",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2DomainName",version:"current",frontMatter:{id:"ApiGatewayV2DomainName",title:"DomainName"},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Deployment"},next:{title:"Integration",permalink:"/docs/aws/resources/ApiGatewayV2/ApiGatewayV2Integration"}},p=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],l={toc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Manages an ",Object(i.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/apigateway/main/apis"},"Api Gateway V2 Domain Name"),"."),Object(i.b)("h2",{id:"sample-code"},"Sample code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const apiGatewayDomainName = provider.ApiGatewayV2.makeDomainName({\n  name: config.domainName,\n  dependencies: { certificate },\n  properties: () => ({}),\n});\n")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createDomainName-property"},"create properties"))),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../ACM/AcmCertificate"},"Certificate"))),Object(i.b)("h2",{id:"full-examples"},"Full Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/api-gateway-v2/http-lambda"},"Http with Lambda"))),Object(i.b)("h2",{id:"list"},"List"),Object(i.b)("p",null,"The DomainNames can be filtered with the ",Object(i.b)("em",{parentName:"p"},"DomainName")," type:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t DomainName\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-txt"},"")))}s.isMDXComponent=!0}}]);