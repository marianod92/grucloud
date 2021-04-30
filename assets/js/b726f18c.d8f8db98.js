(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var a=t(3),r=(t(0),t(193));const c={id:"VmInstance",title:"VM Instance"},o={unversionedId:"google/resources/Compute/VmInstance",id:"google/resources/Compute/VmInstance",isDocsHomePage:!1,title:"VM Instance",description:"Provides a Virtual Machine instance.",source:"@site/docs/google/resources/Compute/VmInstance.md",sourceDirName:"google/resources/Compute",slug:"/google/resources/Compute/VmInstance",permalink:"/docs/google/resources/Compute/VmInstance",version:"current",frontMatter:{id:"VmInstance",title:"VM Instance"},sidebar:"docs",previous:{title:"Url Map",permalink:"/docs/google/resources/Compute/UrlMap"},next:{title:"Dns Managed Zone",permalink:"/docs/google/resources/DNS/DnsManagedZone"}},i=[{value:"Examples",id:"examples",children:[{value:"Simple VM",id:"simple-vm",children:[]},{value:"Attach a public IP address",id:"attach-a-public-ip-address",children:[]},{value:"Attach a service account",id:"attach-a-service-account",children:[]},{value:"Authenticate with a local SSH key pair",id:"authenticate-with-a-local-ssh-key-pair",children:[]},{value:"Authenticate with oslogin",id:"authenticate-with-oslogin",children:[]},{value:"VM Intance into a specific network",id:"vm-intance-into-a-specific-network",children:[]}]},{value:"Examples Code",id:"examples-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]}],s={toc:i};function l({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Provides a Virtual Machine instance."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"simple-vm"},"Simple VM"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const server = await provider.makeVmInstance({\n  name: "web-server",\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),Object(r.b)("p",null,"To list the available source image:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"gcloud compute images list\n")),Object(r.b)("h3",{id:"attach-a-public-ip-address"},"Attach a public IP address"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const ip = await provider.makeAddress({\n  name: `ip-webserver`,\n});\n\nconst server = await provider.makeVmInstance({\n  name: `webserver`,\n  dependencies: { ip },\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),Object(r.b)("h3",{id:"attach-a-service-account"},"Attach a service account"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const serviceAccount = await provider.makeServiceAccount({\n  name: `sa-dev`,\n  properties: () => ({\n    serviceAccount: {\n      displayName: "SA dev",\n    },\n  }),\n});\n\n// Allocate a server\nconst server = await provider.makeVmInstance({\n  name: `webserver`,\n  dependencies: { serviceAccount },\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),Object(r.b)("h3",{id:"authenticate-with-a-local-ssh-key-pair"},"Authenticate with a local SSH key pair"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const publicKey = fs.readFileSync(\n  path.resolve(process.env.HOME, ".ssh/id_rsa.pub")\n);\n\nconst ip = await provider.makeAddress({\n  name: `ip-webserver-ssh-keys`,\n});\n\nconst firewall22 = await provider.makeFirewall({\n  name: `firewall-22`,\n  properties: () => ({\n    allowed: [\n      {\n        sourceRanges: ["0.0.0.0/0"],\n        IPProtocol: "TCP",\n        ports: [22],\n      },\n    ],\n  }),\n});\n\nconst server = await provider.makeVmInstance({\n  name: `webserver-ssh-keys`,\n  dependencies: { ip },\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "ssh-keys",\n          value: `ubuntu:${publicKey}`,\n        },\n      ],\n    },\n  }),\n});\n')),Object(r.b)("h3",{id:"authenticate-with-oslogin"},"Authenticate with oslogin"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const server = await provider.makeVmInstance({\n  name: `webserver`,\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),Object(r.b)("h3",{id:"vm-intance-into-a-specific-network"},"VM Intance into a specific network"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'// Vpc network\nconst network = await provider.makeNetwork({\n  name: `vpc`,\n  properties: () => ({ autoCreateSubnetworks: false }),\n});\n\n// Subnetwork\nconst subNetwork = await provider.makeSubNetwork({\n  name: `subnetwork`,\n  dependencies: { network },\n  properties: () => ({\n    ipCidrRange: "10.164.0.0/20",\n  }),\n});\n\n// Allocate a server\nconst server = await provider.makeVmInstance({\n  name: `my-server`,\n  dependencies: { subNetwork },\n  properties: () => ({\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n  }),\n});\n')),Object(r.b)("h2",{id:"examples-code"},"Examples Code"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm/iac.js#L9"},"basic example")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm-ssh-keys/iac.js#L9"},"VM with SSH keys in metadata")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm-network/iac.js#L9"},"full example"))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/instances/insert#request-body"},"all properties"))),Object(r.b)("h2",{id:"dependencies"},"Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"./Address"},"Address")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"../IAM/ServiceAccount"},"Service Account")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"./SubNetwork"},"SubNetwork"))))}l.isMDXComponent=!0},193:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||c;return t?r.a.createElement(d,i(i({ref:n},l),{},{components:t})):r.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);