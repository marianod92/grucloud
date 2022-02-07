"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5809],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return y}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,m=d["".concat(s,".").concat(y)]||d[y]||l[y]||i;return n?t.createElement(m,c(c({ref:r},u),{},{components:n})):t.createElement(m,c({ref:r},u))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99018:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={id:"EncryptionScope",title:"EncryptionScope"},s=void 0,p={unversionedId:"azure/resources/Storage/EncryptionScope",id:"azure/resources/Storage/EncryptionScope",isDocsHomePage:!1,title:"EncryptionScope",description:"Provides a EncryptionScope from the Storage group",source:"@site/docs/azure/resources/Storage/EncryptionScope.md",sourceDirName:"azure/resources/Storage",slug:"/azure/resources/Storage/EncryptionScope",permalink:"/docs/azure/resources/Storage/EncryptionScope",tags:[],version:"current",frontMatter:{id:"EncryptionScope",title:"EncryptionScope"},sidebar:"docs",previous:{title:"BlobService",permalink:"/docs/azure/resources/Storage/BlobService"},next:{title:"FileService",permalink:"/docs/azure/resources/Storage/FileService"}},u=[{value:"Examples",id:"examples",children:[{value:"StorageAccountPutEncryptionScope",id:"storageaccountputencryptionscope",children:[],level:3},{value:"StorageAccountPutEncryptionScopeWithInfrastructureEncryption",id:"storageaccountputencryptionscopewithinfrastructureencryption",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"EncryptionScope")," from the ",(0,i.kt)("strong",{parentName:"p"},"Storage")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"storageaccountputencryptionscope"},"StorageAccountPutEncryptionScope"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.Storage.makeEncryptionScope({\n  name: "myEncryptionScope",\n  dependencies: ({}) => ({\n    resourceGroup: "myResourceGroup",\n    account: "myStorageAccount",\n  }),\n});\n\n')),(0,i.kt)("h3",{id:"storageaccountputencryptionscopewithinfrastructureencryption"},"StorageAccountPutEncryptionScopeWithInfrastructureEncryption"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.Storage.makeEncryptionScope({\n  name: "myEncryptionScope",\n  properties: () => ({ properties: { requireInfrastructureEncryption: true } }),\n  dependencies: ({}) => ({\n    resourceGroup: "myResourceGroup",\n    account: "myStorageAccount",\n  }),\n});\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Storage/StorageAccount"},"StorageAccount"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      'x-ms-client-name': 'EncryptionScopeProperties',\n      description: 'Properties of the encryption scope.',\n      properties: {\n        source: {\n          type: 'string',\n          enum: [ 'Microsoft.Storage', 'Microsoft.KeyVault' ],\n          'x-ms-enum': { name: 'EncryptionScopeSource', modelAsString: true },\n          description: 'The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault.'\n        },\n        state: {\n          type: 'string',\n          enum: [ 'Enabled', 'Disabled' ],\n          'x-ms-enum': { name: 'EncryptionScopeState', modelAsString: true },\n          description: 'The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled.'\n        },\n        creationTime: {\n          readOnly: true,\n          type: 'string',\n          format: 'date-time',\n          description: 'Gets the creation date and time of the encryption scope in UTC.'\n        },\n        lastModifiedTime: {\n          readOnly: true,\n          type: 'string',\n          format: 'date-time',\n          description: 'Gets the last modification date and time of the encryption scope in UTC.'\n        },\n        keyVaultProperties: {\n          description: \"The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'.\",\n          properties: {\n            keyUri: {\n              type: 'string',\n              description: 'The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope.'\n            },\n            currentVersionedKeyIdentifier: {\n              type: 'string',\n              readOnly: true,\n              description: 'The object identifier of the current versioned Key Vault Key in use.'\n            },\n            lastKeyRotationTimestamp: {\n              type: 'string',\n              readOnly: true,\n              format: 'date-time',\n              description: 'Timestamp of last rotation of the Key Vault Key.'\n            }\n          }\n        },\n        requireInfrastructureEncryption: {\n          type: 'boolean',\n          description: 'A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest.'\n        }\n      }\n    }\n  },\n  allOf: [\n    {\n      title: 'Resource',\n      description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n      type: 'object',\n      properties: {\n        id: {\n          readOnly: true,\n          type: 'string',\n          description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n        },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'The name of the resource'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'The Encryption Scope resource.'\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-08-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/storage.json"},"here"),"."))}d.isMDXComponent=!0}}]);