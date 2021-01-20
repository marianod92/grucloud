(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(176));const c={id:"AwsGettingStarted",title:"Getting Started"},l={id:"aws/AwsGettingStarted",isDocsHomePage:!1,title:"Getting Started",description:"Let's create a simple infrastructure with",source:"@site/docs/aws/AwsGettingStarted.md",permalink:"/docs/aws/AwsGettingStarted",sidebar:"someSidebar",previous:{title:"Requirements",permalink:"/docs/aws/AwsRequirements"},next:{title:"Configuration",permalink:"/docs/aws/AwsConfig"}},o=[{value:"Getting the code",id:"getting-the-code",children:[]},{value:"iac.js",id:"iacjs",children:[]},{value:"Plan",id:"plan",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"List",id:"list",children:[]},{value:"Destroy",id:"destroy",children:[]}],i={rightToc:o};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let's create a simple infrastructure with"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a server running ubuntu"),Object(a.b)("li",{parentName:"ul"},"connected to a public ip address."),Object(a.b)("li",{parentName:"ul"},"accessible through SSH")),Object(a.b)("p",null,"Ensure the AWS CLI is configured properly and the possesion of the ",Object(a.b)("strong",{parentName:"p"},"SSH keys"),".\nVisit the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/aws/AwsRequirements"}),"Aws Requirements")," to retrieve these informations."),Object(a.b)("h2",{id:"getting-the-code"},"Getting the code"),Object(a.b)("p",null,"Install the ",Object(a.b)("em",{parentName:"p"},"grucloud")," command line utility: ",Object(a.b)("strong",{parentName:"p"},"gc")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g @grucloud/core\n")),Object(a.b)("p",null,"Clone the source code containing the examples:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:grucloud/grucloud.git\n")),Object(a.b)("p",null,"Change the directory to one of the examples:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd grucloud/examples/aws/ec2\n")),Object(a.b)("p",null,"Install the node dependencies:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(a.b)("h2",{id:"iacjs"},"iac.js"),Object(a.b)("p",null,"Edit ",Object(a.b)("strong",{parentName:"p"},"iac.js")," and set the correct ",Object(a.b)("strong",{parentName:"p"},"KeyName")),Object(a.b)("h2",{id:"plan"},"Plan"),Object(a.b)("p",null,"Find out which resources are going to be allocated:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gc plan\n")),Object(a.b)("h2",{id:"deploy"},"Deploy"),Object(a.b)("p",null,"Happy with the expected plan ? Deploy it now:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gc deploy\n")),Object(a.b)("h2",{id:"list"},"List"),Object(a.b)("p",null,"List all the resources:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gc list\n")),Object(a.b)("h2",{id:"destroy"},"Destroy"),Object(a.b)("p",null,"Time to destroy the resources allocated:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gc destroy\n")))}s.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,O=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(O,o(o({ref:t},s),{},{components:n})):a.a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);