(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),a=(t(0),t(193));const c={title:"KeyPair"},o={unversionedId:"aws/resources/EC2/KeyPair",id:"aws/resources/EC2/KeyPair",isDocsHomePage:!1,title:"KeyPair",description:"Provide a reference to an SSH key pair, used to connect to EC2 instances.",source:"@site/docs/aws/resources/EC2/KeyPair.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/KeyPair",permalink:"/docs/aws/resources/EC2/KeyPair",version:"current",frontMatter:{title:"KeyPair"},sidebar:"docs",previous:{title:"Internet Gateway",permalink:"/docs/aws/resources/EC2/InternetGateway"},next:{title:"Nat Gateway",permalink:"/docs/aws/resources/EC2/NatGateway"}},i=[{value:"Examples",id:"examples",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Aws cli",id:"aws-cli",children:[]}],s={toc:i};function l({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provide a reference to an SSH key pair, used to connect to EC2 instances."),Object(a.b)("p",null,"See the ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"},"AWS documentation for ec2 key pair")," to create a new one."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const keyPair = await provider.useKeyPair({\n  name: "kp",\n});\n')),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/iac.js#L10"},"simple example"))),Object(a.b)("h3",{id:"used-by"},"Used By"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"./EC2"},"EC2"))),Object(a.b)("h3",{id:"aws-cli"},"Aws cli"),Object(a.b)("p",null,"List the available key pairs:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"aws ec2 describe-key-pairs\n")))}l.isMDXComponent=!0},193:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return t?a.a.createElement(m,i(i({ref:r},l),{},{components:t})):a.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);