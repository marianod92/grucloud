(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{193:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),m=n,d=s["".concat(l,".").concat(m)]||s[m]||b[m]||a;return t?o.a.createElement(d,c(c({ref:r},p),{},{components:t})):o.a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),o=(t(0),t(193));const a={id:"Firewall",title:"Firewall"},l={unversionedId:"google/resources/Compute/Firewall",id:"google/resources/Compute/Firewall",isDocsHomePage:!1,title:"Firewall",description:"Manages a Firewall",source:"@site/docs/google/resources/Compute/Firewall.md",sourceDirName:"google/resources/Compute",slug:"/google/resources/Compute/Firewall",permalink:"/docs/google/resources/Compute/Firewall",version:"current",frontMatter:{id:"Firewall",title:"Firewall"},sidebar:"docs",previous:{title:"Backend Bucket",permalink:"/docs/google/resources/Compute/BackendBucket"},next:{title:"Global Forwarding Rule",permalink:"/docs/google/resources/Compute/GlobalForwardingRule"}},c=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],i={toc:c};function p({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Manages a ",Object(o.b)("a",{parentName:"p",href:"https://cloud.google.com/vpc/docs/firewalls"},"Firewall")),Object(o.b)("p",null,"Allow ingress traffic from anywhere to SSH and HTTP/HTTPS:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const firewall22_80_433 = await provider.makeFirewall({\n  name: `firewall-22-80-433-${stage}`,\n  properties: () => ({\n    allowed: [\n      {\n        sourceRanges: ["0.0.0.0/0"],\n        IPProtocol: "TCP",\n        ports: [22, 80, 433],\n      },\n    ],\n  }),\n});\n')),Object(o.b)("p",null,"Allow ping from anywhere:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const firewallIcmp = await provider.makeFirewall({\n  name: `firewall-icmp-${stage}`,\n  properties: () => ({\n    allowed: [\n      {\n        sourceRanges: ["0.0.0.0/0"],\n        IPProtocol: "icmp",\n      },\n    ],\n  }),\n});\n')),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm/iac.js"},"basic example")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm-network/iac.js"},"full example"))),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/firewalls/insert"},"all properties"))),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./Network"},"Network"))))}p.isMDXComponent=!0}}]);