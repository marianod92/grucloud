(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),c=(n(0),n(161)),o={id:"InternetGateway",title:"Internet Gateway"},i={id:"aws/resources/EC2/InternetGateway",isDocsHomePage:!1,title:"Internet Gateway",description:"Provides an Internet Gateway",source:"@site/docs/aws/resources/EC2/InternetGateway.md",permalink:"/docs/aws/resources/EC2/InternetGateway",sidebar:"someSidebar",previous:{title:"Vpc",permalink:"/docs/aws/resources/EC2/Vpc"},next:{title:"Route Tables",permalink:"/docs/aws/resources/EC2/RouteTables"}},l=[{value:"Examples",id:"examples",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides an ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html"}),"Internet Gateway")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const ig = await provider.makeInternetGateway({\n  name: "ig",\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/master/examples/aws/ec2-vpc/iac.js"}),"simple example"))),Object(c.b)("h3",{id:"dependencies"},"Dependencies"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"./Vpc"}),"Vpc"))),Object(c.b)("h3",{id:"aws-cli"},"AWS CLI"),Object(c.b)("p",null,"List the internet Gateways"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"aws ec2 describe-internet-gateways\n")))}s.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);