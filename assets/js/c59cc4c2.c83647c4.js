"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6314],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,y=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94114:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],a={id:"ProximityPlacementGroup",title:"ProximityPlacementGroup"},p=void 0,c={unversionedId:"azure/resources/Compute/ProximityPlacementGroup",id:"azure/resources/Compute/ProximityPlacementGroup",isDocsHomePage:!1,title:"ProximityPlacementGroup",description:"Provides a ProximityPlacementGroup from the Compute group",source:"@site/docs/azure/resources/Compute/ProximityPlacementGroup.md",sourceDirName:"azure/resources/Compute",slug:"/azure/resources/Compute/ProximityPlacementGroup",permalink:"/docs/azure/resources/Compute/ProximityPlacementGroup",tags:[],version:"current",frontMatter:{id:"ProximityPlacementGroup",title:"ProximityPlacementGroup"},sidebar:"docs",previous:{title:"Image",permalink:"/docs/azure/resources/Compute/Image"},next:{title:"RestorePoint",permalink:"/docs/azure/resources/Compute/RestorePoint"}},u=[{value:"Examples",id:"examples",children:[{value:"Create or Update a proximity placement group.",id:"create-or-update-a-proximity-placement-group",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"ProximityPlacementGroup")," from the ",(0,o.kt)("strong",{parentName:"p"},"Compute")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-or-update-a-proximity-placement-group"},"Create or Update a proximity placement group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "ProximityPlacementGroup",\n    group: "Compute",\n    name: "myProximityPlacementGroup",\n    properties: () => ({\n      location: "westus",\n      properties: { proximityPlacementGroupType: "Standard" },\n    }),\n    dependencies: ({}) => ({ resourceGroup: "myResourceGroup" }),\n  },\n];\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Describes the properties of a Proximity Placement Group.',\n      properties: {\n        proximityPlacementGroupType: {\n          type: 'string',\n          description: 'Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.',\n          enum: [ 'Standard', 'Ultra' ],\n          'x-ms-enum': { name: 'ProximityPlacementGroupType', modelAsString: true }\n        },\n        virtualMachines: {\n          readOnly: true,\n          type: 'array',\n          items: {\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource Id' } },\n                'x-ms-azure-resource': true\n              }\n            ],\n            properties: {\n              colocationStatus: {\n                properties: {\n                  code: { type: 'string', description: 'The status code.' },\n                  level: {\n                    type: 'string',\n                    description: 'The level code.',\n                    enum: [ 'Info', 'Warning', 'Error' ],\n                    'x-ms-enum': { name: 'StatusLevelTypes', modelAsString: false }\n                  },\n                  displayStatus: {\n                    type: 'string',\n                    description: 'The short localizable label for the status.'\n                  },\n                  message: {\n                    type: 'string',\n                    description: 'The detailed status message, including for alerts and error messages.'\n                  },\n                  time: {\n                    type: 'string',\n                    format: 'date-time',\n                    description: 'The time of the status.'\n                  }\n                },\n                description: 'Instance view status.'\n              }\n            }\n          },\n          description: 'A list of references to all virtual machines in the proximity placement group.'\n        },\n        virtualMachineScaleSets: {\n          readOnly: true,\n          type: 'array',\n          items: {\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource Id' } },\n                'x-ms-azure-resource': true\n              }\n            ],\n            properties: {\n              colocationStatus: {\n                properties: {\n                  code: { type: 'string', description: 'The status code.' },\n                  level: {\n                    type: 'string',\n                    description: 'The level code.',\n                    enum: [ 'Info', 'Warning', 'Error' ],\n                    'x-ms-enum': { name: 'StatusLevelTypes', modelAsString: false }\n                  },\n                  displayStatus: {\n                    type: 'string',\n                    description: 'The short localizable label for the status.'\n                  },\n                  message: {\n                    type: 'string',\n                    description: 'The detailed status message, including for alerts and error messages.'\n                  },\n                  time: {\n                    type: 'string',\n                    format: 'date-time',\n                    description: 'The time of the status.'\n                  }\n                },\n                description: 'Instance view status.'\n              }\n            }\n          },\n          description: 'A list of references to all virtual machine scale sets in the proximity placement group.'\n        },\n        availabilitySets: {\n          readOnly: true,\n          type: 'array',\n          items: {\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource Id' } },\n                'x-ms-azure-resource': true\n              }\n            ],\n            properties: {\n              colocationStatus: {\n                properties: {\n                  code: { type: 'string', description: 'The status code.' },\n                  level: {\n                    type: 'string',\n                    description: 'The level code.',\n                    enum: [ 'Info', 'Warning', 'Error' ],\n                    'x-ms-enum': { name: 'StatusLevelTypes', modelAsString: false }\n                  },\n                  displayStatus: {\n                    type: 'string',\n                    description: 'The short localizable label for the status.'\n                  },\n                  message: {\n                    type: 'string',\n                    description: 'The detailed status message, including for alerts and error messages.'\n                  },\n                  time: {\n                    type: 'string',\n                    format: 'date-time',\n                    description: 'The time of the status.'\n                  }\n                },\n                description: 'Instance view status.'\n              }\n            }\n          },\n          description: 'A list of references to all availability sets in the proximity placement group.'\n        },\n        colocationStatus: {\n          properties: {\n            code: { type: 'string', description: 'The status code.' },\n            level: {\n              type: 'string',\n              description: 'The level code.',\n              enum: [ 'Info', 'Warning', 'Error' ],\n              'x-ms-enum': { name: 'StatusLevelTypes', modelAsString: false }\n            },\n            displayStatus: {\n              type: 'string',\n              description: 'The short localizable label for the status.'\n            },\n            message: {\n              type: 'string',\n              description: 'The detailed status message, including for alerts and error messages.'\n            },\n            time: {\n              type: 'string',\n              format: 'date-time',\n              description: 'The time of the status.'\n            }\n          },\n          description: 'Instance view status.'\n        }\n      }\n    }\n  },\n  allOf: [\n    {\n      description: 'The Resource model definition.',\n      properties: {\n        id: { readOnly: true, type: 'string', description: 'Resource Id' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type'\n        },\n        location: { type: 'string', description: 'Resource location' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags'\n        }\n      },\n      required: [ 'location' ],\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Specifies information about the proximity placement group.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-11-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/compute.json"},"here"),"."))}m.isMDXComponent=!0}}]);