(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{153:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),s=(t(0),t(193));const a={id:"ClusterRole",title:"Cluster Role"},o={unversionedId:"k8s/resources/ClusterRole",id:"k8s/resources/ClusterRole",isDocsHomePage:!1,title:"Cluster Role",description:"Provides a Kubernetes Cluster Role",source:"@site/docs/k8s/resources/ClusterRole.md",sourceDirName:"k8s/resources",slug:"/k8s/resources/ClusterRole",permalink:"/docs/k8s/resources/ClusterRole",version:"current",frontMatter:{id:"ClusterRole",title:"Cluster Role"},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/azure/AzureRequirements"},next:{title:"Cluster Role Binding",permalink:"/docs/k8s/resources/ClusterRoleBinding"}},l=[{value:"Examples",id:"examples",children:[{value:"Create a Cluster Role",id:"create-a-cluster-role",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Listing",id:"listing",children:[]}],c={toc:l};function u({components:e,...r}){return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Provides a ",Object(s.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes Cluster Role")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"create-a-cluster-role"},"Create a Cluster Role"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'const clusterRole = await provider.makeClusterRole({\n  name: "aws-load-balancer-controller-role",\n  properties: () => ({\n    metadata: {\n      labels: {\n        "app.kubernetes.io/name": "alb-ingress-controller",\n      },\n    },\n    rules: [\n      {\n        apiGroups: ["", "extensions"],\n        resources: [\n          "configmaps",\n          "endpoints",\n          "events",\n          "ingresses",\n          "ingresses/status",\n          "services",\n          "pods/status",\n        ],\n        verbs: ["create", "get", "list", "update", "watch", "patch"],\n      },\n      {\n        apiGroups: ["", "extensions"],\n        resources: ["nodes", "pods", "secrets", "services", "namespaces"],\n        verbs: ["get", "list", "watch"],\n      },\n    ],\n  }),\n});\n')),Object(s.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/packages/modules/k8s/aws-load-balancer/resources.js#L373"},"Cluster Role for the aws load balancer"))),Object(s.b)("h2",{id:"used-by"},"Used By"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./ClusterRoleBinding"},"ClusterRoleBinding"))),Object(s.b)("h2",{id:"listing"},"Listing"),Object(s.b)("p",null,"The following commands list the ",Object(s.b)("strong",{parentName:"p"},"ClusterRole")," type:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"gc list --types ClusterRole\n")),Object(s.b)("p",null,"Short version:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t ClusterRole\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-sh"},"")))}u.isMDXComponent=!0},193:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),s=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=s.a.createContext({}),i=function(e){var r=s.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=i(e.components);return s.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},d=s.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(t),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return t?s.a.createElement(m,l(l({ref:r},u),{},{components:t})):s.a.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);