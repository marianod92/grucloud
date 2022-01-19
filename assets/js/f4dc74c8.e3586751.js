"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4518],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,m=d["".concat(c,".").concat(g)]||d[g]||l[g]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59867:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"AgentPool",title:"AgentPool"},c=void 0,u={unversionedId:"azure/resources/ContainerRegistry/AgentPool",id:"azure/resources/ContainerRegistry/AgentPool",isDocsHomePage:!1,title:"AgentPool",description:"Provides a AgentPool from the ContainerRegistry group",source:"@site/docs/azure/resources/ContainerRegistry/AgentPool.md",sourceDirName:"azure/resources/ContainerRegistry",slug:"/azure/resources/ContainerRegistry/AgentPool",permalink:"/docs/azure/resources/ContainerRegistry/AgentPool",tags:[],version:"current",frontMatter:{id:"AgentPool",title:"AgentPool"},sidebar:"docs",previous:{title:"VirtualMachineScaleSetVM",permalink:"/docs/azure/resources/Compute/VirtualMachineScaleSetVM"},next:{title:"BuildStep",permalink:"/docs/azure/resources/ContainerRegistry/BuildStep"}},p=[{value:"Examples",id:"examples",children:[{value:"AgentPools_Create",id:"agentpools_create",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"AgentPool")," from the ",(0,i.kt)("strong",{parentName:"p"},"ContainerRegistry")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"agentpools_create"},"AgentPools_Create"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.ContainerRegistry.makeAgentPool({\n  name: "myAgentPool",\n  properties: () => ({\n    location: "WESTUS",\n    tags: { key: "value" },\n    properties: { count: 1, tier: "S1", os: "Linux" },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    subnet: resources.Network.Subnet["mySubnet"],\n    registry: resources.ContainerRegistry.Registry["myRegistry"],\n  }),\n});\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/Subnet"},"Subnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/ContainerRegistry/Registry"},"Registry"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'The agentpool that has the ARM resource and properties. \\r\\n' +\n    'The agentpool will have all information to create an agent pool.',\n  type: 'object',\n  allOf: [\n    {\n      description: 'An Azure resource.',\n      required: [ 'location' ],\n      properties: {\n        id: {\n          description: 'The resource ID.',\n          type: 'string',\n          readOnly: true\n        },\n        name: {\n          description: 'The name of the resource.',\n          type: 'string',\n          readOnly: true\n        },\n        type: {\n          description: 'The type of the resource.',\n          type: 'string',\n          readOnly: true\n        },\n        location: {\n          description: 'The location of the resource. This cannot be changed after the resource is created.',\n          type: 'string',\n          'x-ms-mutability': [ 'read', 'create' ]\n        },\n        tags: {\n          description: 'The tags of the resource.',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        },\n        systemData: {\n          description: 'Metadata pertaining to creation and last modification of the resource.',\n          type: 'object',\n          readOnly: true,\n          properties: {\n            createdBy: {\n              description: 'The identity that created the resource.',\n              type: 'string'\n            },\n            createdByType: {\n              description: 'The type of identity that created the resource.',\n              enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n              type: 'string',\n              'x-ms-enum': { name: 'createdByType', modelAsString: true }\n            },\n            createdAt: {\n              format: 'date-time',\n              description: 'The timestamp of resource creation (UTC).',\n              type: 'string'\n            },\n            lastModifiedBy: {\n              description: 'The identity that last modified the resource.',\n              type: 'string'\n            },\n            lastModifiedByType: {\n              description: 'The type of identity that last modified the resource.',\n              enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n              type: 'string',\n              'x-ms-enum': { name: 'lastModifiedByType', modelAsString: true }\n            },\n            lastModifiedAt: {\n              format: 'date-time',\n              description: 'The timestamp of resource modification (UTC).',\n              type: 'string'\n            }\n          }\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    properties: {\n      description: 'The properties associated with the agent pool',\n      'x-ms-client-flatten': true,\n      type: 'object',\n      properties: {\n        count: {\n          format: 'int32',\n          description: 'The count of agent machine',\n          type: 'integer'\n        },\n        tier: { description: 'The Tier of agent machine', type: 'string' },\n        os: {\n          description: 'The OS of agent machine',\n          enum: [ 'Windows', 'Linux' ],\n          type: 'string',\n          'x-ms-enum': { name: 'OS', modelAsString: true }\n        },\n        virtualNetworkSubnetResourceId: {\n          description: 'The Virtual Network Subnet Resource Id of the agent machine',\n          type: 'string'\n        },\n        provisioningState: {\n          description: 'The provisioning state of this agent pool',\n          enum: [\n            'Creating',\n            'Updating',\n            'Deleting',\n            'Succeeded',\n            'Failed',\n            'Canceled'\n          ],\n          type: 'string',\n          readOnly: true,\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        }\n      }\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2019-06-01-preview"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/containerregistry_build.json"},"here"),"."))}d.isMDXComponent=!0}}]);