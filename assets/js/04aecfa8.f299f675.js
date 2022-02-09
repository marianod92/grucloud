"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5629],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,v=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},89581:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={id:"PrivateEndpointConnection",title:"PrivateEndpointConnection"},s=void 0,p={unversionedId:"azure/resources/Storage/PrivateEndpointConnection",id:"azure/resources/Storage/PrivateEndpointConnection",isDocsHomePage:!1,title:"PrivateEndpointConnection",description:"Provides a PrivateEndpointConnection from the Storage group",source:"@site/docs/azure/resources/Storage/PrivateEndpointConnection.md",sourceDirName:"azure/resources/Storage",slug:"/azure/resources/Storage/PrivateEndpointConnection",permalink:"/docs/azure/resources/Storage/PrivateEndpointConnection",tags:[],version:"current",frontMatter:{id:"PrivateEndpointConnection",title:"PrivateEndpointConnection"},sidebar:"docs",previous:{title:"ObjectReplicationPolicy",permalink:"/docs/azure/resources/Storage/ObjectReplicationPolicy"},next:{title:"Queue",permalink:"/docs/azure/resources/Storage/Queue"}},u=[{value:"Examples",id:"examples",children:[{value:"StorageAccountPutPrivateEndpointConnection",id:"storageaccountputprivateendpointconnection",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],d={toc:u};function l(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"PrivateEndpointConnection")," from the ",(0,i.kt)("strong",{parentName:"p"},"Storage")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"storageaccountputprivateendpointconnection"},"StorageAccountPutPrivateEndpointConnection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "PrivateEndpointConnection",\n    group: "Storage",\n    name: "myPrivateEndpointConnection",\n    properties: () => ({\n      properties: {\n        privateLinkServiceConnectionState: {\n          status: "Approved",\n          description: "Auto-Approved",\n        },\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      privateEndpoint: "myPrivateEndpoint",\n      account: "myStorageAccount",\n    }),\n  },\n];\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/PrivateEndpoint"},"PrivateEndpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Storage/StorageAccount"},"StorageAccount"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Resource properties.',\n      properties: {\n        privateEndpoint: {\n          description: 'The resource of private end point.',\n          properties: {\n            id: {\n              readOnly: true,\n              type: 'string',\n              description: 'The ARM identifier for Private Endpoint'\n            }\n          }\n        },\n        privateLinkServiceConnectionState: {\n          description: 'A collection of information about the state of the connection between service consumer and provider.',\n          properties: {\n            status: {\n              description: 'Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.',\n              type: 'string',\n              enum: [ 'Pending', 'Approved', 'Rejected' ],\n              'x-ms-enum': {\n                name: 'PrivateEndpointServiceConnectionStatus',\n                modelAsString: true\n              }\n            },\n            description: {\n              type: 'string',\n              description: 'The reason for approval/rejection of the connection.'\n            },\n            actionRequired: {\n              type: 'string',\n              description: 'A message indicating if changes on the service provider require any updates on the consumer.'\n            }\n          }\n        },\n        provisioningState: {\n          description: 'The provisioning state of the private endpoint connection resource.',\n          type: 'string',\n          readOnly: true,\n          enum: [ 'Succeeded', 'Creating', 'Deleting', 'Failed' ],\n          'x-ms-enum': {\n            name: 'PrivateEndpointConnectionProvisioningState',\n            modelAsString: true\n          }\n        }\n      },\n      required: [ 'privateLinkServiceConnectionState' ]\n    }\n  },\n  allOf: [\n    {\n      title: 'Resource',\n      description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n      type: 'object',\n      properties: {\n        id: {\n          readOnly: true,\n          type: 'string',\n          description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n        },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'The name of the resource'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'The Private Endpoint Connection resource.'\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-08-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/storage.json"},"here"),"."))}l.isMDXComponent=!0}}]);