"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8757],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return y}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),y=i,g=d["".concat(p,".").concat(y)]||d[y]||l[y]||s;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92847:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var t=r(87462),i=r(63366),s=(r(67294),r(3905)),o=["components"],a={id:"NetworkVirtualAppliance",title:"NetworkVirtualAppliance"},p=void 0,c={unversionedId:"azure/resources/Network/NetworkVirtualAppliance",id:"azure/resources/Network/NetworkVirtualAppliance",isDocsHomePage:!1,title:"NetworkVirtualAppliance",description:"Provides a NetworkVirtualAppliance from the Network group",source:"@site/docs/azure/resources/Network/NetworkVirtualAppliance.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/NetworkVirtualAppliance",permalink:"/docs/azure/resources/Network/NetworkVirtualAppliance",tags:[],version:"current",frontMatter:{id:"NetworkVirtualAppliance",title:"NetworkVirtualAppliance"},sidebar:"docs",previous:{title:"NetworkSecurityPerimeter",permalink:"/docs/azure/resources/Network/NetworkSecurityPerimeter"},next:{title:"NetworkWatcher",permalink:"/docs/azure/resources/Network/NetworkWatcher"}},u=[{value:"Examples",id:"examples",children:[{value:"Create NetworkVirtualAppliance",id:"create-networkvirtualappliance",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function d(e){var n=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("strong",{parentName:"p"},"NetworkVirtualAppliance")," from the ",(0,s.kt)("strong",{parentName:"p"},"Network")," group"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"create-networkvirtualappliance"},"Create NetworkVirtualAppliance"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeNetworkVirtualAppliance({\n  name: "myNetworkVirtualAppliance",\n  properties: () => ({\n    tags: { key1: "value1" },\n    identity: {\n      type: "UserAssigned",\n      userAssignedIdentities: {\n        "/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1":\n          {},\n      },\n    },\n    location: "West US",\n    properties: {\n      nvaSku: {\n        vendor: "Cisco SDWAN",\n        bundledScaleUnit: "1",\n        marketPlaceVersion: "12.1",\n      },\n      virtualHub: {\n        id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1",\n      },\n      bootStrapConfigurationBlobs: [\n        "https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig",\n      ],\n      cloudInitConfigurationBlobs: [\n        "https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig",\n      ],\n      virtualApplianceAsn: 10000,\n    },\n  }),\n  dependencies: ({}) => ({\n    resourceGroup: "myResourceGroup",\n    managedIdentities: ["myUserAssignedIdentity"],\n    virtualHub: "myVirtualHub",\n  }),\n});\n\n')),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/ManagedIdentity/UserAssignedIdentity"},"UserAssignedIdentity")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualHub"},"VirtualHub"))),(0,s.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the Network Virtual Appliance.',\n      properties: {\n        nvaSku: {\n          readOnly: false,\n          description: 'Network Virtual Appliance SKU.',\n          properties: {\n            vendor: {\n              type: 'string',\n              readOnly: false,\n              description: 'Virtual Appliance Vendor.'\n            },\n            bundledScaleUnit: {\n              type: 'string',\n              readOnly: false,\n              description: 'Virtual Appliance Scale Unit.'\n            },\n            marketPlaceVersion: {\n              type: 'string',\n              readOnly: false,\n              description: 'Virtual Appliance Version.'\n            }\n          }\n        },\n        addressPrefix: {\n          type: 'string',\n          readOnly: true,\n          description: 'Address Prefix.'\n        },\n        bootStrapConfigurationBlobs: {\n          type: 'array',\n          readOnly: false,\n          description: 'BootStrapConfigurationBlobs storage URLs.',\n          items: { type: 'string' }\n        },\n        virtualHub: {\n          readOnly: false,\n          description: 'The Virtual Hub where Network Virtual Appliance is being deployed.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        },\n        cloudInitConfigurationBlobs: {\n          type: 'array',\n          readOnly: false,\n          description: 'CloudInitConfigurationBlob storage URLs.',\n          items: { type: 'string' }\n        },\n        cloudInitConfiguration: {\n          type: 'string',\n          readOnly: false,\n          description: 'CloudInitConfiguration string in plain text.'\n        },\n        virtualApplianceAsn: {\n          type: 'integer',\n          readOnly: false,\n          format: 'int64',\n          minimum: 0,\n          maximum: 4294967295,\n          description: 'VirtualAppliance ASN.'\n        },\n        sshPublicKey: {\n          type: 'string',\n          readOnly: false,\n          description: 'Public key for SSH login.'\n        },\n        virtualApplianceNics: {\n          type: 'array',\n          readOnly: true,\n          description: 'List of Virtual Appliance Network Interfaces.',\n          items: {\n            properties: {\n              name: {\n                type: 'string',\n                readOnly: true,\n                description: 'NIC name.'\n              },\n              publicIpAddress: {\n                type: 'string',\n                readOnly: true,\n                description: 'Public IP address.'\n              },\n              privateIpAddress: {\n                type: 'string',\n                readOnly: true,\n                description: 'Private IP address.'\n              }\n            },\n            description: 'Network Virtual Appliance NIC properties.'\n          }\n        },\n        virtualApplianceSites: {\n          type: 'array',\n          readOnly: true,\n          description: 'List of references to VirtualApplianceSite.',\n          items: {\n            properties: { id: { type: 'string', description: 'Resource ID.' } },\n            description: 'Reference to another subresource.',\n            'x-ms-azure-resource': true\n          }\n        },\n        inboundSecurityRules: {\n          type: 'array',\n          readOnly: true,\n          description: 'List of references to InboundSecurityRules.',\n          items: {\n            properties: { id: { type: 'string', description: 'Resource ID.' } },\n            description: 'Reference to another subresource.',\n            'x-ms-azure-resource': true\n          }\n        },\n        provisioningState: {\n          description: 'The provisioning state of the resource.',\n          readOnly: true,\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        }\n      }\n    },\n    identity: {\n      description: 'The service principal that has read access to cloud-init and config blob.',\n      properties: {\n        principalId: {\n          readOnly: true,\n          type: 'string',\n          description: 'The principal id of the system assigned identity. This property will only be provided for a system assigned identity.'\n        },\n        tenantId: {\n          readOnly: true,\n          type: 'string',\n          description: 'The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.'\n        },\n        type: {\n          type: 'string',\n          description: \"The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.\",\n          enum: [\n            'SystemAssigned',\n            'UserAssigned',\n            'SystemAssigned, UserAssigned',\n            'None'\n          ],\n          'x-ms-enum': { name: 'ResourceIdentityType', modelAsString: false }\n        },\n        userAssignedIdentities: {\n          type: 'object',\n          additionalProperties: {\n            type: 'object',\n            properties: {\n              principalId: {\n                readOnly: true,\n                type: 'string',\n                description: 'The principal id of user assigned identity.'\n              },\n              clientId: {\n                readOnly: true,\n                type: 'string',\n                description: 'The client id of user assigned identity.'\n              }\n            }\n          },\n          description: \"The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.\"\n        }\n      }\n    },\n    etag: {\n      type: 'string',\n      readOnly: true,\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'NetworkVirtualAppliance Resource.'\n}\n")),(0,s.kt)("h2",{id:"misc"},"Misc"),(0,s.kt)("p",null,"The resource version is ",(0,s.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,s.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/networkVirtualAppliance.json"},"here"),"."))}d.isMDXComponent=!0}}]);