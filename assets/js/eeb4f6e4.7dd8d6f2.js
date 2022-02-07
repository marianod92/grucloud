"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8350],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,y=d["".concat(c,".").concat(m)]||d[m]||l[m]||s;return t?n.createElement(y,a(a({ref:r},u),{},{components:t})):n.createElement(y,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46280:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={id:"LocalUser",title:"LocalUser"},c=void 0,p={unversionedId:"azure/resources/Storage/LocalUser",id:"azure/resources/Storage/LocalUser",isDocsHomePage:!1,title:"LocalUser",description:"Provides a LocalUser from the Storage group",source:"@site/docs/azure/resources/Storage/LocalUser.md",sourceDirName:"azure/resources/Storage",slug:"/azure/resources/Storage/LocalUser",permalink:"/docs/azure/resources/Storage/LocalUser",tags:[],version:"current",frontMatter:{id:"LocalUser",title:"LocalUser"},sidebar:"docs",previous:{title:"FileShare",permalink:"/docs/azure/resources/Storage/FileShare"},next:{title:"ObjectReplicationPolicy",permalink:"/docs/azure/resources/Storage/ObjectReplicationPolicy"}},u=[{value:"Examples",id:"examples",children:[{value:"CreateLocalUser",id:"createlocaluser",children:[],level:3},{value:"UpdateLocalUser",id:"updatelocaluser",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("strong",{parentName:"p"},"LocalUser")," from the ",(0,s.kt)("strong",{parentName:"p"},"Storage")," group"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"createlocaluser"},"CreateLocalUser"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'provider.Storage.makeLocalUser({\n  name: "myLocalUser",\n  properties: () => ({\n    properties: {\n      permissionScopes: [\n        { permissions: "rwd", service: "file", resourceName: "share1" },\n        { permissions: "rw", service: "file", resourceName: "share2" },\n      ],\n      homeDirectory: "homedirectory",\n      hasSshPassword: true,\n      sshAuthorizedKeys: [\n        { description: "key name", key: "ssh-rsa keykeykeykeykey=" },\n      ],\n    },\n  }),\n  dependencies: ({}) => ({\n    resourceGroup: "myResourceGroup",\n    account: "myStorageAccount",\n  }),\n});\n\n')),(0,s.kt)("h3",{id:"updatelocaluser"},"UpdateLocalUser"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'provider.Storage.makeLocalUser({\n  name: "myLocalUser",\n  properties: () => ({\n    properties: {\n      homeDirectory: "homedirectory2",\n      hasSharedKey: false,\n      hasSshPassword: false,\n      hasSshKey: false,\n    },\n  }),\n  dependencies: ({}) => ({\n    resourceGroup: "myResourceGroup",\n    account: "myStorageAccount",\n  }),\n});\n\n')),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Storage/StorageAccount"},"StorageAccount"))),(0,s.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'object',\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Storage account local user properties.',\n      type: 'object',\n      properties: {\n        permissionScopes: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              permissions: {\n                type: 'string',\n                description: 'The permissions for the local user. Possible values include: Read (r), Write (w), Delete (d), List (l), and Create (c).'\n              },\n              service: {\n                type: 'string',\n                description: 'The service used by the local user, e.g. blob, file.'\n              },\n              resourceName: {\n                type: 'string',\n                description: 'The name of resource, normally the container name or the file share name, used by the local user.'\n              }\n            },\n            required: [ 'permissions', 'service', 'resourceName' ]\n          },\n          description: 'The permission scopes of the local user.'\n        },\n        homeDirectory: {\n          type: 'string',\n          description: 'Optional, local user home directory.'\n        },\n        sshAuthorizedKeys: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              description: {\n                type: 'string',\n                description: 'Optional. It is used to store the function/usage of the key'\n              },\n              key: {\n                type: 'string',\n                description: \"Ssh public key base64 encoded. The format should be: '<keyType> <keyData>', e.g. ssh-rsa AAAABBBB\"\n              }\n            }\n          },\n          description: 'Optional, local user ssh authorized keys for SFTP.'\n        },\n        sid: {\n          readOnly: true,\n          type: 'string',\n          description: 'A unique Security Identifier that is generated by the server.'\n        },\n        hasSharedKey: {\n          type: 'boolean',\n          description: 'Indicates whether shared key exists. Set it to false to remove existing shared key.'\n        },\n        hasSshKey: {\n          type: 'boolean',\n          description: 'Indicates whether ssh key exists. Set it to false to remove existing SSH key.'\n        },\n        hasSshPassword: {\n          type: 'boolean',\n          description: 'Indicates whether ssh password exists. Set it to false to remove existing SSH password.'\n        }\n      }\n    },\n    systemData: {\n      description: 'Metadata pertaining to creation and last modification of the resource.',\n      type: 'object',\n      readOnly: true,\n      properties: {\n        createdBy: {\n          type: 'string',\n          description: 'The identity that created the resource.'\n        },\n        createdByType: {\n          type: 'string',\n          description: 'The type of identity that created the resource.',\n          enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n          'x-ms-enum': { name: 'createdByType', modelAsString: true }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time',\n          description: 'The timestamp of resource creation (UTC).'\n        },\n        lastModifiedBy: {\n          type: 'string',\n          description: 'The identity that last modified the resource.'\n        },\n        lastModifiedByType: {\n          type: 'string',\n          description: 'The type of identity that last modified the resource.',\n          enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n          'x-ms-enum': { name: 'createdByType', modelAsString: true }\n        },\n        lastModifiedAt: {\n          type: 'string',\n          format: 'date-time',\n          description: 'The timestamp of resource last modification (UTC)'\n        }\n      }\n    }\n  },\n  allOf: [\n    {\n      title: 'Resource',\n      description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n      type: 'object',\n      properties: {\n        id: {\n          readOnly: true,\n          type: 'string',\n          description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n        },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'The name of the resource'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'The local user associated with the storage accounts.'\n}\n")),(0,s.kt)("h2",{id:"misc"},"Misc"),(0,s.kt)("p",null,"The resource version is ",(0,s.kt)("inlineCode",{parentName:"p"},"2021-08-01"),"."),(0,s.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/storage.json"},"here"),"."))}d.isMDXComponent=!0}}]);