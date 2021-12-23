"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6198],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return n?t.createElement(f,i(i({ref:r},s),{},{components:n})):t.createElement(f,i({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4522:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={id:"ContainerApp",title:"Container App"},p=void 0,c={unversionedId:"azure/resources/Web/ContainerApp",id:"azure/resources/Web/ContainerApp",isDocsHomePage:!1,title:"Container App",description:"Provides a Container App:",source:"@site/docs/azure/resources/Web/ContainerApp.md",sourceDirName:"azure/resources/Web",slug:"/azure/resources/Web/ContainerApp",permalink:"/docs/azure/resources/Web/ContainerApp",tags:[],version:"current",frontMatter:{id:"ContainerApp",title:"Container App"},sidebar:"docs",previous:{title:"Resource Group",permalink:"/docs/azure/resources/Resources/ResourceGroup"},next:{title:"Kube Environment",permalink:"/docs/azure/resources/Web/KubeEnvironment"}},s=[{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[],level:3}],l={toc:s};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a Container App:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'provider.Web.makeContainerApp({\n  name: "plantuml",\n  properties: ({ config }) => ({\n    properties: {\n      configuration: {\n        ingress: {\n          external: true,\n          targetPort: 8080,\n        },\n      },\n      template: {\n        containers: [\n          {\n            image: "docker.io/plantuml/plantuml-server:jetty-v1.2021.15",\n            name: "plantuml",\n            resources: {\n              cpu: 0.5,\n              memory: "1Gi",\n            },\n          },\n        ],\n        scale: {\n          maxReplicas: 10,\n        },\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["rg"],\n    kubeEnvironment: resources.Web.KubeEnvironment["dev"],\n  }),\n});\n')),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/container-apps/plantuml/resources.js"},"basic example"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/appservice/kube-environments/create-or-update"},"all properties"))),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/KubeEnvironment"},"KubeEnvironment"))))}m.isMDXComponent=!0}}]);