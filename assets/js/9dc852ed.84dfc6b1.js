"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2001],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return n?t.createElement(f,a(a({ref:r},u),{},{components:n})):t.createElement(f,a({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6816:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={id:"TableService",title:"TableService"},c=void 0,l={unversionedId:"azure/resources/Storage/TableService",id:"azure/resources/Storage/TableService",isDocsHomePage:!1,title:"TableService",description:"Provides a TableService from the Storage group",source:"@site/docs/azure/resources/Storage/TableService.md",sourceDirName:"azure/resources/Storage",slug:"/azure/resources/Storage/TableService",permalink:"/docs/azure/resources/Storage/TableService",tags:[],version:"current",frontMatter:{id:"TableService",title:"TableService"},sidebar:"docs",previous:{title:"Table",permalink:"/docs/azure/resources/Storage/Table"},next:{title:"ApplicationGateway",permalink:"/docs/azure/resources/Network/ApplicationGateway"}},u=[{value:"Examples",id:"examples",children:[{value:"TableServicesPut",id:"tableservicesput",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],p={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("strong",{parentName:"p"},"TableService")," from the ",(0,s.kt)("strong",{parentName:"p"},"Storage")," group"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"tableservicesput"},"TableServicesPut"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'provider.Storage.makeTableService({\n  name: "myTableService",\n  properties: () => ({\n    properties: {\n      cors: {\n        corsRules: [\n          {\n            allowedOrigins: [\n              "http://www.contoso.com",\n              "http://www.fabrikam.com",\n            ],\n            allowedMethods: ["GET", "HEAD", "POST", "OPTIONS", "MERGE", "PUT"],\n            maxAgeInSeconds: 100,\n            exposedHeaders: ["x-ms-meta-*"],\n            allowedHeaders: [\n              "x-ms-meta-abc",\n              "x-ms-meta-data*",\n              "x-ms-meta-target*",\n            ],\n          },\n          {\n            allowedOrigins: ["*"],\n            allowedMethods: ["GET"],\n            maxAgeInSeconds: 2,\n            exposedHeaders: ["*"],\n            allowedHeaders: ["*"],\n          },\n          {\n            allowedOrigins: [\n              "http://www.abc23.com",\n              "https://www.fabrikam.com/*",\n            ],\n            allowedMethods: ["GET", "PUT"],\n            maxAgeInSeconds: 2000,\n            exposedHeaders: [\n              "x-ms-meta-abc",\n              "x-ms-meta-data*",\n              "x-ms-meta-target*",\n            ],\n            allowedHeaders: ["x-ms-meta-12345675754564*"],\n          },\n        ],\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    account: resources.Storage.StorageAccount["myStorageAccount"],\n  }),\n});\n\n')),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Storage/StorageAccount"},"StorageAccount"))),(0,s.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      properties: {\n        cors: {\n          description: 'Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.',\n          properties: {\n            corsRules: {\n              type: 'array',\n              items: {\n                description: 'Specifies a CORS rule for the Blob service. ',\n                properties: {\n                  allowedOrigins: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or \"*\" to allow all domains'\n                  },\n                  allowedMethods: {\n                    type: 'array',\n                    items: {\n                      type: 'string',\n                      enum: [\n                        'DELETE', 'GET',\n                        'HEAD',   'MERGE',\n                        'POST',   'OPTIONS',\n                        'PUT'\n                      ]\n                    },\n                    description: 'Required if CorsRule element is present. A list of HTTP methods that are allowed to be executed by the origin.'\n                  },\n                  maxAgeInSeconds: {\n                    type: 'integer',\n                    description: 'Required if CorsRule element is present. The number of seconds that the client/browser should cache a preflight response.'\n                  },\n                  exposedHeaders: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'Required if CorsRule element is present. A list of response headers to expose to CORS clients.'\n                  },\n                  allowedHeaders: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'Required if CorsRule element is present. A list of headers allowed to be part of the cross-origin request.'\n                  }\n                },\n                required: [\n                  'allowedOrigins',\n                  'allowedMethods',\n                  'maxAgeInSeconds',\n                  'exposedHeaders',\n                  'allowedHeaders'\n                ]\n              },\n              description: 'The List of CORS rules. You can include up to five CorsRule elements in the request. '\n            }\n          }\n        }\n      },\n      'x-ms-client-flatten': true,\n      'x-ms-client-name': 'TableServiceProperties',\n      description: 'The properties of a storage account\u2019s Table service.'\n    }\n  },\n  allOf: [\n    {\n      title: 'Resource',\n      description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n      type: 'object',\n      properties: {\n        id: {\n          readOnly: true,\n          type: 'string',\n          description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n        },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'The name of the resource'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'The properties of a storage account\u2019s Table service.'\n}\n")),(0,s.kt)("h2",{id:"misc"},"Misc"),(0,s.kt)("p",null,"The resource version is ",(0,s.kt)("inlineCode",{parentName:"p"},"2021-06-01"),"."),(0,s.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/storage/resource-manager/Microsoft.Storage/stable/2021-06-01/table.json"},"here"),"."))}d.isMDXComponent=!0}}]);