"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8677],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||u;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,a=new Array(u);a[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<u;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7927:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var n=t(7462),o=t(3366),u=(t(7294),t(3905)),a=["components"],c={id:"ResourceGroup",title:"Resource Group"},s=void 0,i={unversionedId:"azure/resources/Resources/ResourceGroup",id:"azure/resources/Resources/ResourceGroup",isDocsHomePage:!1,title:"Resource Group",description:"A container for other resources:",source:"@site/docs/azure/resources/Resources/ResourceGroup.md",sourceDirName:"azure/resources/Resources",slug:"/azure/resources/Resources/ResourceGroup",permalink:"/docs/azure/resources/Resources/ResourceGroup",tags:[],version:"current",frontMatter:{id:"ResourceGroup",title:"Resource Group"},sidebar:"docs",previous:{title:"Workspace",permalink:"/docs/azure/resources/OperationalInsights/Workspace"},next:{title:"Container App",permalink:"/docs/azure/resources/Web/ContainerApp"}},l=[{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Used By",id:"used-by",children:[],level:3}],p={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"A container for other resources:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"const resourceGroup = provider.makeResourceGroup({\n  name: `resource-group`,\n});\n")),(0,u.kt)("h3",{id:"examples"},"Examples"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/iac.js#9"},"basic example"))),(0,u.kt)("h3",{id:"properties"},"Properties"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/apimanagement/2019-12-01/apimanagementservice/createorupdate#request-body"},"all properties"))),(0,u.kt)("h3",{id:"used-by"},"Used By"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualNetwork"},"VirtualNetwork")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/SecurityGroup"},"SecurityGroup")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/NetworkInterface"},"NetworkInterface")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/PublicIpAddress"},"PublicIpAddress")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"../compute/VirtualMachine.md"},"VirtualMachine"))))}m.isMDXComponent=!0}}]);