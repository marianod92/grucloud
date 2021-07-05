(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),c=(n(0),n(199)),l={id:"K8sTutorialFullStack",title:"Full Stack App on Kubernetes"},o={unversionedId:"k8s/K8sTutorialFullStack",id:"k8s/K8sTutorialFullStack",isDocsHomePage:!1,title:"Full Stack App on Kubernetes",description:"Introduction",source:"@site/docs/k8s/K8sTutorialFullStack.md",sourceDirName:"k8s",slug:"/k8s/K8sTutorialFullStack",permalink:"/docs/k8s/K8sTutorialFullStack",version:"current",frontMatter:{id:"K8sTutorialFullStack",title:"Full Stack App on Kubernetes"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Getting the code",id:"getting-the-code",children:[]},{value:"config.js",id:"configjs",children:[]}]},{value:"Plan",id:"plan",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"List",id:"list",children:[]},{value:"Destroy",id:"destroy",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"The Kubernetes Grucloud provider allows to define and describe Kubernetes resources in Javascript, removing the need to write YAML or templating file."),Object(c.b)("p",null,"The GruCloud Command Line Interface ",Object(c.b)("strong",{parentName:"p"},"gc")," reads this description in Javascript and connect to the k8s control plane to apply the new or updated resource definitions."),Object(c.b)("p",null,"Let's deploy a full-stack application on kubernetes locally with minikube."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"a frontend (React)"),Object(c.b)("li",{parentName:"ul"},"a backend (Node.js)"),Object(c.b)("li",{parentName:"ul"},"an SQL database (postgres)"),Object(c.b)("li",{parentName:"ul"},"Key/Value, Pub/Sub (redis)")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/k8s/starhackit/minikube/diagram-target.svg",alt:"starhackit-grucloud"})),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("p",null,"Ensure ",Object(c.b)("strong",{parentName:"p"},"kubectl")," and ",Object(c.b)("strong",{parentName:"p"},"minikube")," is started with the ingress addon: ",Object(c.b)("a",{parentName:"p",href:"/docs/k8s/K8sRequirements"},"K8s Requirements")),Object(c.b)("h3",{id:"getting-the-code"},"Getting the code"),Object(c.b)("p",null,"Install the ",Object(c.b)("em",{parentName:"p"},"grucloud")," command line utility: ",Object(c.b)("strong",{parentName:"p"},"gc")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm i -g @grucloud/core\n")),Object(c.b)("p",null,"Clone the source code containing the examples:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:grucloud/grucloud.git\n")),Object(c.b)("p",null,"Change the k8s minikube directory"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"cd grucloud/examples/k8s/starhackit/minikube\n")),Object(c.b)("p",null,"Install the node dependencies:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),Object(c.b)("h3",{id:"configjs"},"config.js"),Object(c.b)("p",null,"Edit ",Object(c.b)("strong",{parentName:"p"},"config.js")," and eventually change the configuration."),Object(c.b)("h2",{id:"plan"},"Plan"),Object(c.b)("p",null,"Find out which resources are going to be allocated:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"gc plan\n")),Object(c.b)("h2",{id:"deploy"},"Deploy"),Object(c.b)("p",null,"Happy with the expected plan ? Deploy it now:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"gc deploy\n")),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("p",null,"List all the resources:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"gc list\n")),Object(c.b)("h2",{id:"destroy"},"Destroy"),Object(c.b)("p",null,"Time to destroy the resources allocated:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"gc destroy\n")))}s.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);