(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{185:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),o=(r(0),r(224)),c={id:"K8sModules",title:"Module"},s={id:"k8s/K8sModules",isDocsHomePage:!1,title:"Module",description:"A Module is a collection of resources packaged with npm, the node package manager. These modules can be imported and be used in your project:",source:"@site/docs/k8s/K8sModules.md",permalink:"/docs/k8s/K8sModules",sidebar:"someSidebar",previous:{title:"Examples",permalink:"/docs/k8s/K8sExamples"},next:{title:"Developer's guide",permalink:"/docs/DeveloperGuide"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A Module is a collection of resources packaged with ",Object(o.b)("strong",{parentName:"p"},"npm"),", the node package manager. These modules can be imported and be used in your project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@grucloud/module-k8s-cert-manager"}),"@grucloud/module-k8s-cert-manager"),": provides a set of kubernetes resources to manage SSL certificates, a dependency of the ",Object(o.b)("em",{parentName:"li"},"Amazon Load Balancer Controller"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@grucloud/module-k8s-aws-load-balancer"}),"@grucloud/module-k8s-load-balancer"),": Automates the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"}),"Amazon Load Balancer Controller")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@grucloud/module-k8s-postgres"}),"@grucloud/module-k8s-postgres"),": Defines resources to setup a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/"}),"Postgres")," database."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@grucloud/module-k8s-redis"}),"@grucloud/module-k8s-redis"),": Defines resources to setup ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://redis.io/"}),"Redis"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@grucloud/module-k8s-web-ui-dashboard"}),"@grucloud/module-k8s-web-ui-dashboard"),": Setup the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"}),"Kubernetes Web Ui Dashboard")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@grucloud/module-k8s-prometheus"}),"@grucloud/module-k8s-prometheus"),": Monitoring with ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://prometheus.io"}),"Prometheus")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@grucloud/module-k8s-crunchy-postgres"}),"@grucloud/module-k8s-crunchy-postgres"),": Manages the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/CrunchyData/postgres-operator"}),"Crunchy Data Postgres Operator"))),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./K8sExamples"}),"k8s examples")," how on to consume these modules in your project."))}p.isMDXComponent=!0},224:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),i=p(r),m=a,d=i["".concat(c,".").concat(m)]||i[m]||b[m]||o;return r?n.a.createElement(d,s(s({ref:t},l),{},{components:r})):n.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);