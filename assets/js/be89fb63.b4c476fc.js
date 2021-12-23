"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6392],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4923:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],u={id:"VirtualMachine",title:"Virtual Machine"},c=void 0,s={unversionedId:"azure/resources/Compute/VirtualMachine",id:"azure/resources/Compute/VirtualMachine",isDocsHomePage:!1,title:"Virtual Machine",description:"Provides a Virtual Machine:",source:"@site/docs/azure/resources/Compute/VirtualMachine.md",sourceDirName:"azure/resources/Compute",slug:"/azure/resources/Compute/VirtualMachine",permalink:"/docs/azure/resources/Compute/VirtualMachine",tags:[],version:"current",frontMatter:{id:"VirtualMachine",title:"Virtual Machine"},sidebar:"docs",previous:{title:"Resources List",permalink:"/docs/azure/ResourcesList"},next:{title:"Network Interface",permalink:"/docs/azure/resources/Network/NetworkInterface"}},l=[{value:"Examples",id:"examples",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[],level:3}],p={toc:l};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a Virtual Machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.compute.makeVirtualMachine({\n  name: "vm",\n  properties: ({ config }) => ({\n    properties: {\n      hardwareProfile: {\n        vmSize: "Standard_A1_v2",\n      },\n      storageProfile: {\n        imageReference: {\n          publisher: "Canonical",\n          offer: "UbuntuServer",\n          sku: "18.04-LTS",\n          version: "latest",\n        },\n      },\n      osProfile: {\n        computerName: "myVM",\n        adminUsername: "ops",\n        linuxConfiguration: {\n          disablePasswordAuthentication: false,\n          provisionVMAgent: true,\n        },\n        allowExtensionOperations: true,\n        adminPassword: process.env.VM_ADMIN_PASSWORD,\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["resource-group"],\n    networkInterface: resources.Network.NetworkInterface["network-interface"],\n  }),\n});\n')),(0,o.kt)("p",null,"Retrieve the list of all possible virtual machine on a given location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"az vm list-sizes  --output table --location uksouth\n")),(0,o.kt)("p",null,"Regarding the ",(0,o.kt)("em",{parentName:"p"},"imageReference"),", execute this command and select the desired image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"az vm image list  --output table\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/resources.js"},"basic example"))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#request-body"},"all properties"))),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/NetworkInterface"},"NetworkInterface"))))}m.isMDXComponent=!0}}]);