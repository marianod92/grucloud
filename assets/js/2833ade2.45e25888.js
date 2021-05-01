(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{193:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||c;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),c=(r(0),r(193)),a={id:"SslCertificate",title:"SSL Certificate"},i={unversionedId:"google/resources/Compute/SslCertificate",id:"google/resources/Compute/SslCertificate",isDocsHomePage:!1,title:"SSL Certificate",description:"Provides a managed SSL certificate.",source:"@site/docs/google/resources/Compute/SslCertificate.md",sourceDirName:"google/resources/Compute",slug:"/google/resources/Compute/SslCertificate",permalink:"/docs/google/resources/Compute/SslCertificate",version:"current",frontMatter:{id:"SslCertificate",title:"SSL Certificate"},sidebar:"docs",previous:{title:"Project",permalink:"/docs/google/resources/Compute/Project"},next:{title:"SubNetwork",permalink:"/docs/google/resources/Compute/SubNetwork"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides a managed SSL certificate."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const sslCertificate = await provider.makeSslCertificate({\n  name: "ssl-certificate",\n  properties: () => ({\n    managed: {\n      domains: ["yourdomainhere.com"],\n    },\n  }),\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/storage/website-https/iac.js#L7"},"basic example"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/sslCertificates/insert"},"all properties"))),Object(c.b)("h2",{id:"dependencies"},"Dependencies"),Object(c.b)("h2",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/google/resources/Compute/HttpsTargetProxy"},"HttpsTargetProxy"))))}u.isMDXComponent=!0}}]);