(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{183:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var a=r(2),n=r(6),o=(r(0),r(222)),c={id:"K8sModules",title:"Module"},s={id:"k8s/K8sModules",isDocsHomePage:!1,title:"Module",description:"A Module is a collection of resources packaged with npm, the node package manager. These modules can be imported and be used in your project.",source:"@site/docs/k8s/K8sModules.md",permalink:"/docs/k8s/K8sModules",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/docs/k8s/K8sExamples"},next:{title:"Developer's guide",permalink:"/docs/DeveloperGuide"}},u=[],i={rightToc:u};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A Module is a collection of resources packaged with ",Object(o.b)("strong",{parentName:"p"},"npm"),", the node package manager. These modules can be imported and be used in your project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/tree/main/packages/modules/k8s/cert-manager"}),"Cert Manager"),": provides a set of kubernetes resources to manage SSL certificates, a dependency of the ",Object(o.b)("strong",{parentName:"li"},"Amazon Load Balancer Controller"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/tree/main/packages/modules/k8s/aws-load-balancer"}),"Amazon Load Balancer Controller"),": Creates and destroys Amazon Load Balancer, Listener and TargetGroup."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/tree/main/packages/modules/k8s/postgres"}),"Postgres"),": Defines resources to setup a Postgres database."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/tree/main/packages/modules/k8s/redis"}),"Redis"),": Defines resources to setup Redis."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/tree/main/packages/modules/k8s/web-ui-dashboard"}),"Web Ui Dashboard"),": Setup the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"}),"Web Ui Dashboard"))),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./K8sExamples"}),"k8s examples")," how on to consume these modules in your project."))}l.isMDXComponent=!0},222:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return r?n.a.createElement(m,s(s({ref:t},i),{},{components:r})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);