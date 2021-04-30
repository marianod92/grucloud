(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{170:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return s}));var n=t(3),c=(t(0),t(193));const o={id:"PublicIpAddress",title:"Public Ip Address"},a={unversionedId:"azure/resources/PublicIpAddress",id:"azure/resources/PublicIpAddress",isDocsHomePage:!1,title:"Public Ip Address",description:"Provides a Public Ip Address:",source:"@site/docs/azure/resources/PublicIpAddress.md",sourceDirName:"azure/resources",slug:"/azure/resources/PublicIpAddress",permalink:"/docs/azure/resources/PublicIpAddress",version:"current",frontMatter:{id:"PublicIpAddress",title:"Public Ip Address"},sidebar:"docs",previous:{title:"Network Interface",permalink:"/docs/azure/resources/NetworkInterface"},next:{title:"Resource Group",permalink:"/docs/azure/resources/ResourceGroup"}},i=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]}],u={toc:i};function s({components:e,...r}){return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides a Public Ip Address:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const publicIpAddress = await provider.makePublicIpAddress({\n  name: `ip`,\n  dependencies: {\n    resourceGroup,\n  },\n  properties: () => ({\n    properties: {\n      publicIPAllocationMethod: "Dynamic",\n    },\n  }),\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/iac.js#L58"},"basic example"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/virtualnetwork/publicipaddresses/createorupdate#request-body"},"all properties"))),Object(c.b)("h3",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./ResourceGroup"},"ResourceGroup"))),Object(c.b)("h3",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./NetworkInterface"},"NetworkInterface"))))}s.isMDXComponent=!0},193:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),p=function(e){var r=c.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return c.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),b=n,f=l["".concat(a,".").concat(b)]||l[b]||d[b]||o;return t?c.a.createElement(f,i(i({ref:r},s),{},{components:t})):c.a.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);