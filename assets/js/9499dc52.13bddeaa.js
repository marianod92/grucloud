"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1886],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(g,s(s({ref:n},u),{},{components:t})):r.createElement(g,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69149:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],c={id:"VmInstance",title:"VM Instance"},i=void 0,l={unversionedId:"google/resources/compute/VmInstance",id:"google/resources/compute/VmInstance",isDocsHomePage:!1,title:"VM Instance",description:"Provides a Virtual Machine instance.",source:"@site/docs/google/resources/compute/VmInstance.md",sourceDirName:"google/resources/compute",slug:"/google/resources/compute/VmInstance",permalink:"/docs/google/resources/compute/VmInstance",tags:[],version:"current",frontMatter:{id:"VmInstance",title:"VM Instance"},sidebar:"docs",previous:{title:"Url Map",permalink:"/docs/google/resources/compute/UrlMap"},next:{title:"Dns Managed Zone",permalink:"/docs/google/resources/dns/DnsManagedZone"}},u=[{value:"Examples",id:"examples",children:[{value:"Simple VM",id:"simple-vm",children:[],level:3},{value:"Attach a public IP address",id:"attach-a-public-ip-address",children:[],level:3},{value:"Attach a service account",id:"attach-a-service-account",children:[],level:3},{value:"Authenticate with a local SSH key pair",id:"authenticate-with-a-local-ssh-key-pair",children:[],level:3},{value:"Authenticate with oslogin",id:"authenticate-with-oslogin",children:[],level:3},{value:"VM Intance into a specific network",id:"vm-intance-into-a-specific-network",children:[],level:3}],level:2},{value:"Examples Code",id:"examples-code",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a Virtual Machine instance."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"simple-vm"},"Simple VM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.compute.makeVmInstance({\n  name: "web-server",\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),(0,o.kt)("p",null,"To list the available source image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gcloud compute images list\n")),(0,o.kt)("h3",{id:"attach-a-public-ip-address"},"Attach a public IP address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.compute.makeAddress({\n  name: `ip-webserver`,\n});\n\nconst server = provider.compute.makeVmInstance({\n  name: `webserver`,\n  dependencies: { ip: `ip-webserver` },\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),(0,o.kt)("h3",{id:"attach-a-service-account"},"Attach a service account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.iam.makeServiceAccount({\n  name: `sa-dev`,\n  properties: () => ({\n    serviceAccount: {\n      displayName: "SA dev",\n    },\n  }),\n});\n\n// Allocate a server\nconst server = provider.compute.makeVmInstance({\n  name: `webserver`,\n  dependencies: () => ({ serviceAccount: `sa-dev` }),\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),(0,o.kt)("h3",{id:"authenticate-with-a-local-ssh-key-pair"},"Authenticate with a local SSH key pair"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const publicKey = fs.readFileSync(\n  path.resolve(process.env.HOME, ".ssh/id_rsa.pub")\n);\n\nconst ip = provider.compute.makeAddress({\n  name: `ip-webserver-ssh-keys`,\n});\n\nconst firewall22 = provider.compute.makeFirewall({\n  name: `firewall-22`,\n  properties: () => ({\n    allowed: [\n      {\n        IPProtocol: "tcp",\n        ports: ["22"],\n      },\n    ],\n  }),\n});\n\nconst server = provider.compute.makeVmInstance({\n  name: `webserver-ssh-keys`,\n  dependencies: { ip },\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "ssh-keys",\n          value: `ubuntu:${publicKey}`,\n        },\n      ],\n    },\n  }),\n});\n')),(0,o.kt)("h3",{id:"authenticate-with-oslogin"},"Authenticate with oslogin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const server = provider.compute.makeVmInstance({\n  name: `webserver`,\n  properties: () => ({\n    diskSizeGb: "20",\n    machineType: "f1-micro",\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n    metadata: {\n      items: [\n        {\n          key: "enable-oslogin",\n          value: "True",\n        },\n      ],\n    },\n  }),\n});\n')),(0,o.kt)("h3",{id:"vm-intance-into-a-specific-network"},"VM Intance into a specific network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Vpc network\nconst network = provider.compute.makeNetwork({\n  name: `vpc`,\n  properties: () => ({ autoCreateSubnetworks: false }),\n});\n\n// Subnetwork\nconst subNetwork = provider.ec2.makeSubnetwork({\n  name: `subnetwork`,\n  dependencies: { network },\n  properties: () => ({\n    ipCidrRange: "10.164.0.0/20",\n  }),\n});\n\n// Allocate a server\nconst server = provider.compute.makeVmInstance({\n  name: `my-server`,\n  dependencies: { subNetwork },\n  properties: () => ({\n    sourceImage:\n      "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",\n  }),\n});\n')),(0,o.kt)("h2",{id:"examples-code"},"Examples Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm/iac.js#L9"},"basic example")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm-ssh-keys/iac.js#L9"},"VM with SSH keys in metadata")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/google/vm-network/iac.js#L9"},"full example"))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/reference/rest/v1/instances/insert#request-body"},"all properties"))),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/Address"},"Address")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/google/resources/iam/ServiceAccount"},"Service Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/SubNetwork"},"SubNetwork")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/google/resources/compute/Disk"},"Disk"))))}m.isMDXComponent=!0}}]);