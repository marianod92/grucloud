"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5950],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=i,y=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},47558:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"MHSMPrivateEndpointConnection",title:"MHSMPrivateEndpointConnection"},c=void 0,p={unversionedId:"azure/resources/KeyVault/MHSMPrivateEndpointConnection",id:"azure/resources/KeyVault/MHSMPrivateEndpointConnection",isDocsHomePage:!1,title:"MHSMPrivateEndpointConnection",description:"Provides a MHSMPrivateEndpointConnection from the KeyVault group",source:"@site/docs/azure/resources/KeyVault/MHSMPrivateEndpointConnection.md",sourceDirName:"azure/resources/KeyVault",slug:"/azure/resources/KeyVault/MHSMPrivateEndpointConnection",permalink:"/docs/azure/resources/KeyVault/MHSMPrivateEndpointConnection",tags:[],version:"current",frontMatter:{id:"MHSMPrivateEndpointConnection",title:"MHSMPrivateEndpointConnection"},sidebar:"docs",previous:{title:"Key",permalink:"/docs/azure/resources/KeyVault/Key"},next:{title:"ManagedHsm",permalink:"/docs/azure/resources/KeyVault/ManagedHsm"}},d=[{value:"Examples",id:"examples",children:[{value:"ManagedHsmPutPrivateEndpointConnection",id:"managedhsmputprivateendpointconnection",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],u={toc:d};function l(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"MHSMPrivateEndpointConnection")," from the ",(0,o.kt)("strong",{parentName:"p"},"KeyVault")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"managedhsmputprivateendpointconnection"},"ManagedHsmPutPrivateEndpointConnection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.KeyVault.makeMHSMPrivateEndpointConnection({\n  name: "myMHSMPrivateEndpointConnection",\n  properties: () => ({\n    properties: {\n      privateLinkServiceConnectionState: {\n        status: "Approved",\n        description: "My name is Joe and I\'m approving this.",\n      },\n    },\n  }),\n  dependencies: ({}) => ({\n    resourceGroup: "myResourceGroup",\n    privateEndpoint: "myPrivateEndpoint",\n    name: "myManagedHsm",\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/PrivateEndpoint"},"PrivateEndpoint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/KeyVault/ManagedHsm"},"ManagedHsm"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Resource properties.',\n      properties: {\n        privateEndpoint: {\n          description: 'Properties of the private endpoint object.',\n          properties: {\n            id: {\n              readOnly: true,\n              type: 'string',\n              description: 'Full identifier of the private endpoint resource.'\n            }\n          }\n        },\n        privateLinkServiceConnectionState: {\n          description: 'Approval state of the private link connection.',\n          properties: {\n            status: {\n              description: 'Indicates whether the connection has been approved, rejected or removed by the key vault owner.',\n              type: 'string',\n              enum: [ 'Pending', 'Approved', 'Rejected', 'Disconnected' ],\n              'x-ms-enum': {\n                name: 'PrivateEndpointServiceConnectionStatus',\n                modelAsString: true\n              }\n            },\n            description: {\n              type: 'string',\n              description: 'The reason for approval or rejection.'\n            },\n            actionsRequired: {\n              type: 'string',\n              description: 'A message indicating if changes on the service provider require any updates on the consumer.',\n              enum: [ 'None' ],\n              'x-ms-enum': { name: 'ActionsRequired', modelAsString: true }\n            }\n          }\n        },\n        provisioningState: {\n          description: 'Provisioning state of the private endpoint connection.',\n          type: 'string',\n          readOnly: true,\n          enum: [\n            'Succeeded',\n            'Creating',\n            'Updating',\n            'Deleting',\n            'Failed',\n            'Disconnected'\n          ],\n          'x-ms-enum': {\n            name: 'PrivateEndpointConnectionProvisioningState',\n            modelAsString: true\n          }\n        }\n      }\n    },\n    etag: {\n      type: 'string',\n      description: 'Modified whenever there is a change in the state of private endpoint connection.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: {\n          readOnly: true,\n          type: 'string',\n          description: 'The Azure Resource Manager resource ID for the managed HSM Pool.'\n        },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'The name of the managed HSM Pool.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'The resource type of the managed HSM Pool.'\n        },\n        location: {\n          type: 'string',\n          description: 'The supported Azure location where the managed HSM Pool should be created.',\n          'x-ms-mutability': [ 'create', 'read' ]\n        },\n        sku: {\n          description: 'SKU details',\n          properties: {\n            family: {\n              type: 'string',\n              description: 'SKU Family of the managed HSM Pool',\n              enum: [ 'B' ],\n              'x-ms-client-default': 'B',\n              'x-ms-enum': { name: 'ManagedHsmSkuFamily', modelAsString: true }\n            },\n            name: {\n              type: 'string',\n              description: 'SKU of the managed HSM Pool',\n              enum: [ 'Standard_B1', 'Custom_B32' ],\n              'x-ms-enum': { name: 'ManagedHsmSkuName', modelAsString: false }\n            }\n          },\n          required: [ 'name', 'family' ]\n        },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags'\n        },\n        systemData: {\n          description: 'Metadata pertaining to creation and last modification of the key vault resource.',\n          readOnly: true,\n          properties: {\n            createdBy: {\n              type: 'string',\n              description: 'The identity that created the key vault resource.'\n            },\n            createdByType: {\n              description: 'The type of identity that created the key vault resource.',\n              type: 'string',\n              enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n              'x-ms-enum': { name: 'identityType', modelAsString: true }\n            },\n            createdAt: {\n              type: 'string',\n              format: 'date-time',\n              description: 'The timestamp of the key vault resource creation (UTC).'\n            },\n            lastModifiedBy: {\n              type: 'string',\n              description: 'The identity that last modified the key vault resource.'\n            },\n            lastModifiedByType: {\n              description: 'The type of identity that last modified the key vault resource.',\n              type: 'string',\n              enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n              'x-ms-enum': { name: 'identityType', modelAsString: true }\n            },\n            lastModifiedAt: {\n              type: 'string',\n              format: 'date-time',\n              description: 'The timestamp of the key vault resource last modification (UTC).'\n            }\n          }\n        }\n      },\n      description: 'Managed HSM resource',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Private endpoint connection resource.',\n  'x-ms-azure-resource': true\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-11-01-preview"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-11-01-preview/managedHsm.json"},"here"),"."))}l.isMDXComponent=!0}}]);