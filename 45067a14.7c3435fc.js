(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{150:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),c=(r(0),r(224)),a={id:"GcpObject",title:"Object"},i={id:"google/resources/storage/GcpObject",isDocsHomePage:!1,title:"Object",description:"Provides an Object storage.",source:"@site/docs/google/resources/storage/GcpObject.md",permalink:"/docs/google/resources/storage/GcpObject",sidebar:"someSidebar",previous:{title:"Bucket",permalink:"/docs/google/resources/storage/GcpBucket"},next:{title:"Dns Managed Zone",permalink:"/docs/google/resources/DNS/DnsManagedZone"}},p=[{value:"Examples",id:"examples",children:[{value:"Simple Object",id:"simple-object",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Example Code",id:"example-code",children:[]}]},{value:"Depends On",id:"depends-on",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides an Object storage."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"simple-object"},"Simple Object"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const bucket = await provider.makeBucket({\n  name: "myuniquebucketname",\n  properties: () => ({ storageClass: "STANDARD" }),\n});\n\nconst Object = await provider.makeObject({\n  name: "myname",\n  dependencies: { bucket: bucket },\n  properties: () => ({\n    path: "/",\n    contentType: "text/plain",\n    source: path.join(process.cwd(), "testFile.txt"),\n  }),\n});\n')),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/storage/docs/json_api/v1/objects/insert#request-body"}),"Object create properties")),Object(c.b)("h3",{id:"example-code"},"Example Code"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/google/storage/simple/iac.js#L7"}),"basic example"))),Object(c.b)("h2",{id:"depends-on"},"Depends On"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"./GcpBucket"}),"GcpBucket"))))}s.isMDXComponent=!0},224:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||c;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);