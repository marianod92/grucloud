(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(8),o=(t(0),t(198)),c={id:"NetworkInterface",title:"Network Interface"},i={unversionedId:"azure/resources/NetworkInterface",id:"azure/resources/NetworkInterface",isDocsHomePage:!1,title:"Network Interface",description:"Provides a Network Interface:",source:"@site/docs/azure/resources/NetworkInterface.md",sourceDirName:"azure/resources",slug:"/azure/resources/NetworkInterface",permalink:"/docs/azure/resources/NetworkInterface",version:"current",frontMatter:{id:"NetworkInterface",title:"Network Interface"},sidebar:"docs",previous:{title:"Google Requirements",permalink:"/docs/google/GoogleRequirements"},next:{title:"Public Ip Address",permalink:"/docs/azure/resources/PublicIpAddress"}},u=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],p={toc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides a Network Interface:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const networkInterface = await provider.makeNetworkInterface({\n  name: `network-interface`,\n  dependencies: {\n    resourceGroup,\n    virtualNetwork,\n    securityGroup,\n    subnet: `subnet`,\n    publicIpAddress,\n  },\n  properties: () => ({\n    properties: {\n      ipConfigurations: [\n        {\n          name: "ipconfig",\n          properties: {\n            privateIPAllocationMethod: "Dynamic",\n          },\n        },\n      ],\n    },\n  }),\n});\n')),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/iac.js#70"},"basic example"))),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networkinterfaces/createorupdate#request-body"},"all properties"))),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./ResourceGroup"},"ResourceGroup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./VirtualNetwork"},"VirtualNetwork")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./SecurityGroup"},"SecurityGroup")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./PublicIpAddress"},"PublicIpAddress"))))}l.isMDXComponent=!0},198:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return t?a.a.createElement(f,i(i({ref:r},p),{},{components:t})):a.a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);