"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1793],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,k=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(k,u(u({ref:r},l),{},{components:t})):n.createElement(k,u({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<a;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7405:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),u=["components"],c={id:"NetworkInterface",title:"Network Interface"},i=void 0,s={unversionedId:"azure/resources/Network/NetworkInterface",id:"azure/resources/Network/NetworkInterface",isDocsHomePage:!1,title:"Network Interface",description:"Provides a Network Interface:",source:"@site/docs/azure/resources/Network/NetworkInterface.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/NetworkInterface",permalink:"/docs/azure/resources/Network/NetworkInterface",tags:[],version:"current",frontMatter:{id:"NetworkInterface",title:"Network Interface"},sidebar:"docs",previous:{title:"Virtual Machine",permalink:"/docs/azure/resources/Compute/VirtualMachine"},next:{title:"Public Ip Address",permalink:"/docs/azure/resources/Network/PublicIpAddress"}},l=[{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[],level:3}],p={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a Network Interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeNetworkInterface({\n  name: "network-interface",\n  properties: ({ config }) => ({\n    properties: {\n      ipConfigurations: [\n        {\n          name: "ipconfig",\n          properties: {\n            privateIPAllocationMethod: "Dynamic",\n          },\n        },\n      ],\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["resource-group"],\n    virtualNetwork: resources.Network.VirtualNetwork["virtual-network"],\n    publicIpAddress: resources.Network.PublicIpAddress["ip"],\n    securityGroup: resources.Network.SecurityGroup["security-group"],\n    subnet: resources.Network.Subnet["subnet"],\n  }),\n});\n')),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/iac.js#70"},"basic example"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/virtualnetwork/networkinterfaces/createorupdate#request-body"},"all properties"))),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualNetwork"},"VirtualNetwork")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/SecurityGroup"},"SecurityGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/PublicIpAddress"},"PublicIpAddress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/Subnet"},"Subnet"))))}f.isMDXComponent=!0}}]);