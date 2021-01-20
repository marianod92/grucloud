(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{157:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return o})),t.d(r,"default",(function(){return u}));var n=t(2),a=(t(0),t(176));const c={id:"VirtualMachine",title:"Virtual Machine"},i={id:"azure/resources/VirtualMachine",isDocsHomePage:!1,title:"Virtual Machine",description:"Provides a Virtual Machine:",source:"@site/docs/azure/resources/VirtualMachine.md",permalink:"/docs/azure/resources/VirtualMachine",sidebar:"someSidebar",previous:{title:"Network Interface",permalink:"/docs/azure/resources/NetworkInterface"},next:{title:"Miscellaneous",permalink:"/docs/azure/AzureMisc"}},o=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],l={rightToc:o};function u({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Provides a Virtual Machine:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const { MACHINE_ADMIN_USERNAME, MACHINE_ADMIN_PASSWORD } = process.env;\n\nconst vm = await provider.makeVirtualMachine({\n  name: `vm`,\n  dependencies: {\n    resourceGroup,\n    networkInterface,\n  },\n  properties: () => ({\n    properties: {\n      hardwareProfile: {\n        vmSize: "Standard_A1_v2",\n      },\n      storageProfile: {\n        imageReference: {\n          offer: "UbuntuServer",\n          publisher: "Canonical",\n          sku: "18.04-LTS",\n          version: "latest",\n        },\n      },\n      osProfile: {\n        adminUsername: MACHINE_ADMIN_USERNAME,\n        computerName: "myVM",\n        adminPassword: MACHINE_ADMIN_PASSWORD,\n      },\n    },\n  }),\n});\n')),Object(a.b)("p",null,"Retrieve the list of all possible virtual machine on a given location:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"az vm list-sizes  --output table --location uksouth\n")),Object(a.b)("p",null,"Regarding the ",Object(a.b)("em",{parentName:"p"},"imageReference"),", execute this command and select the desired image:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"az vm image list  --output table\n")),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/main/examples/azure/iac.js#L97"}),"basic example"))),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#request-body"}),"all properties"))),Object(a.b)("h3",{id:"dependencies"},"Dependencies"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./ResourceGroup"}),"ResourceGroup")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"./NetworkInterface"}),"NetworkInterface"))))}u.isMDXComponent=!0},176:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||c;return t?a.a.createElement(d,o(o({ref:r},u),{},{components:t})):a.a.createElement(d,o({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);