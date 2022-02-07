"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7670],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return y}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=d(t),y=i,m=g["".concat(p,".").concat(y)]||g[y]||u[y]||s;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=g;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var d=2;d<s;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},60703:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return g}});var r=t(87462),i=t(63366),s=(t(67294),t(3905)),o=["components"],a={id:"TaskRun",title:"TaskRun"},p=void 0,d={unversionedId:"azure/resources/ContainerRegistry/TaskRun",id:"azure/resources/ContainerRegistry/TaskRun",isDocsHomePage:!1,title:"TaskRun",description:"Provides a TaskRun from the ContainerRegistry group",source:"@site/docs/azure/resources/ContainerRegistry/TaskRun.md",sourceDirName:"azure/resources/ContainerRegistry",slug:"/azure/resources/ContainerRegistry/TaskRun",permalink:"/docs/azure/resources/ContainerRegistry/TaskRun",tags:[],version:"current",frontMatter:{id:"TaskRun",title:"TaskRun"},sidebar:"docs",previous:{title:"Task",permalink:"/docs/azure/resources/ContainerRegistry/Task"},next:{title:"Token",permalink:"/docs/azure/resources/ContainerRegistry/Token"}},c=[{value:"Examples",id:"examples",children:[{value:"TaskRuns_Create",id:"taskruns_create",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],u={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("strong",{parentName:"p"},"TaskRun")," from the ",(0,s.kt)("strong",{parentName:"p"},"ContainerRegistry")," group"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"taskruns_create"},"TaskRuns_Create"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'provider.ContainerRegistry.makeTaskRun({\n  name: "myTaskRun",\n  properties: () => ({\n    properties: {\n      forceUpdateTag: "test",\n      runRequest: {\n        type: "EncodedTaskRunRequest",\n        encodedTaskContent:\n          "c3RlcHM6IAogIC0gY21kOiB7eyAuVmFsdWVzLmNvbW1hbmQgfX0K",\n        encodedValuesContent:\n          "Y29tbWFuZDogYmFzaCBlY2hvIHt7LlJ1bi5SZWdpc3RyeX19Cg==",\n        values: [],\n        platform: { os: "Linux", architecture: "amd64" },\n        credentials: {},\n      },\n    },\n  }),\n  dependencies: ({}) => ({\n    resourceGroup: "myResourceGroup",\n    managedIdentities: ["myUserAssignedIdentity"],\n    registry: "myRegistry",\n  }),\n});\n\n')),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/ManagedIdentity/UserAssignedIdentity"},"UserAssignedIdentity")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/ContainerRegistry/Registry"},"Registry"))),(0,s.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'The task run that has the ARM resource and properties. \\r\\n' +\n    'The task run will have the information of request and result of a run.',\n  type: 'object',\n  allOf: [\n    {\n      description: 'The resource model definition for a ARM proxy resource. It will have everything other than required location and tags.',\n      properties: {\n        id: {\n          description: 'The resource ID.',\n          type: 'string',\n          readOnly: true\n        },\n        name: {\n          description: 'The name of the resource.',\n          type: 'string',\n          readOnly: true\n        },\n        type: {\n          description: 'The type of the resource.',\n          type: 'string',\n          readOnly: true\n        },\n        systemData: {\n          description: 'Metadata pertaining to creation and last modification of the resource.',\n          type: 'object',\n          readOnly: true,\n          properties: {\n            createdBy: {\n              description: 'The identity that created the resource.',\n              type: 'string'\n            },\n            createdByType: {\n              description: 'The type of identity that created the resource.',\n              enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n              type: 'string',\n              'x-ms-enum': { name: 'createdByType', modelAsString: true }\n            },\n            createdAt: {\n              format: 'date-time',\n              description: 'The timestamp of resource creation (UTC).',\n              type: 'string'\n            },\n            lastModifiedBy: {\n              description: 'The identity that last modified the resource.',\n              type: 'string'\n            },\n            lastModifiedByType: {\n              description: 'The type of identity that last modified the resource.',\n              enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n              type: 'string',\n              'x-ms-enum': { name: 'lastModifiedByType', modelAsString: true }\n            },\n            lastModifiedAt: {\n              format: 'date-time',\n              description: 'The timestamp of resource modification (UTC).',\n              type: 'string'\n            }\n          }\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    identity: {\n      description: 'Identity for the resource.',\n      type: 'object',\n      properties: {\n        principalId: {\n          description: 'The principal ID of resource identity.',\n          type: 'string'\n        },\n        tenantId: { description: 'The tenant ID of resource.', type: 'string' },\n        type: {\n          description: 'The identity type.',\n          enum: [\n            'SystemAssigned',\n            'UserAssigned',\n            'SystemAssigned, UserAssigned',\n            'None'\n          ],\n          type: 'string',\n          'x-ms-enum': { name: 'ResourceIdentityType', modelAsString: false }\n        },\n        userAssignedIdentities: {\n          description: 'The list of user identities associated with the resource. The user identity \\r\\n' +\n            'dictionary key references will be ARM resource ids in the form: \\r\\n' +\n            \"'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/\\r\\n\" +\n            \"    providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.\",\n          type: 'object',\n          additionalProperties: {\n            type: 'object',\n            properties: {\n              principalId: {\n                description: 'The principal id of user assigned identity.',\n                type: 'string'\n              },\n              clientId: {\n                description: 'The client id of user assigned identity.',\n                type: 'string'\n              }\n            }\n          }\n        }\n      }\n    },\n    properties: {\n      description: 'The properties associated with the task run, i.e., request and result of the run',\n      'x-ms-client-flatten': true,\n      type: 'object',\n      properties: {\n        provisioningState: {\n          description: 'The provisioning state of this task run',\n          enum: [\n            'Creating',\n            'Updating',\n            'Deleting',\n            'Succeeded',\n            'Failed',\n            'Canceled'\n          ],\n          type: 'string',\n          readOnly: true,\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        runRequest: {\n          description: 'The request parameters for scheduling a run.',\n          required: [ 'type' ],\n          type: 'object',\n          properties: {\n            type: {\n              description: 'The type of the run request.',\n              type: 'string'\n            },\n            isArchiveEnabled: {\n              description: 'The value that indicates whether archiving is enabled for the run or not.',\n              default: false,\n              type: 'boolean'\n            },\n            agentPoolName: {\n              description: 'The dedicated agent pool for the run.',\n              type: 'string'\n            },\n            logTemplate: {\n              description: 'The template that describes the repository and tag information for run log artifact.',\n              type: 'string'\n            }\n          },\n          discriminator: 'type'\n        },\n        runResult: {\n          description: 'Run resource properties',\n          type: 'object',\n          allOf: [\n            {\n              description: 'The resource model definition for a ARM proxy resource. It will have everything other than required location and tags.',\n              properties: {\n                id: {\n                  description: 'The resource ID.',\n                  type: 'string',\n                  readOnly: true\n                },\n                name: {\n                  description: 'The name of the resource.',\n                  type: 'string',\n                  readOnly: true\n                },\n                type: {\n                  description: 'The type of the resource.',\n                  type: 'string',\n                  readOnly: true\n                },\n                systemData: {\n                  description: 'Metadata pertaining to creation and last modification of the resource.',\n                  type: 'object',\n                  readOnly: true,\n                  properties: {\n                    createdBy: {\n                      description: 'The identity that created the resource.',\n                      type: 'string'\n                    },\n                    createdByType: {\n                      description: 'The type of identity that created the resource.',\n                      enum: [\n                        'User',\n                        'Application',\n                        'ManagedIdentity',\n                        'Key'\n                      ],\n                      type: 'string',\n                      'x-ms-enum': { name: 'createdByType', modelAsString: true }\n                    },\n                    createdAt: {\n                      format: 'date-time',\n                      description: 'The timestamp of resource creation (UTC).',\n                      type: 'string'\n                    },\n                    lastModifiedBy: {\n                      description: 'The identity that last modified the resource.',\n                      type: 'string'\n                    },\n                    lastModifiedByType: {\n                      description: 'The type of identity that last modified the resource.',\n                      enum: [\n                        'User',\n                        'Application',\n                        'ManagedIdentity',\n                        'Key'\n                      ],\n                      type: 'string',\n                      'x-ms-enum': {\n                        name: 'lastModifiedByType',\n                        modelAsString: true\n                      }\n                    },\n                    lastModifiedAt: {\n                      format: 'date-time',\n                      description: 'The timestamp of resource modification (UTC).',\n                      type: 'string'\n                    }\n                  }\n                }\n              },\n              'x-ms-azure-resource': true\n            }\n          ],\n          properties: {\n            properties: {\n              description: 'The properties of a run.',\n              'x-ms-client-flatten': true,\n              type: 'object',\n              properties: {\n                runId: {\n                  description: 'The unique identifier for the run.',\n                  type: 'string'\n                },\n                status: {\n                  description: 'The current status of the run.',\n                  enum: [\n                    'Queued',  'Started',\n                    'Running', 'Succeeded',\n                    'Failed',  'Canceled',\n                    'Error',   'Timeout'\n                  ],\n                  type: 'string',\n                  'x-ms-enum': { name: 'RunStatus', modelAsString: true }\n                },\n                lastUpdatedTime: {\n                  format: 'date-time',\n                  description: 'The last updated time for the run.',\n                  type: 'string'\n                },\n                runType: {\n                  description: 'The type of run.',\n                  enum: [ 'QuickBuild', 'QuickRun', 'AutoBuild', 'AutoRun' ],\n                  type: 'string',\n                  'x-ms-enum': { name: 'RunType', modelAsString: true }\n                },\n                agentPoolName: {\n                  description: 'The dedicated agent pool for the run.',\n                  type: 'string'\n                },\n                createTime: {\n                  format: 'date-time',\n                  description: 'The time the run was scheduled.',\n                  type: 'string'\n                },\n                startTime: {\n                  format: 'date-time',\n                  description: 'The time the run started.',\n                  type: 'string'\n                },\n                finishTime: {\n                  format: 'date-time',\n                  description: 'The time the run finished.',\n                  type: 'string'\n                },\n                outputImages: {\n                  description: 'The list of all images that were generated from the run. This is applicable if the run generates base image dependencies.',\n                  type: 'array',\n                  items: {\n                    description: 'Properties for a registry image.',\n                    type: 'object',\n                    properties: {\n                      registry: {\n                        description: 'The registry login server.',\n                        type: 'string'\n                      },\n                      repository: {\n                        description: 'The repository name.',\n                        type: 'string'\n                      },\n                      tag: { description: 'The tag name.', type: 'string' },\n                      digest: {\n                        description: 'The sha256-based digest of the image manifest.',\n                        type: 'string'\n                      }\n                    }\n                  }\n                },\n                task: {\n                  description: 'The task against which run was scheduled.',\n                  type: 'string'\n                },\n                imageUpdateTrigger: {\n                  description: 'The image update trigger that caused the run. This is applicable if the task has base image trigger configured.',\n                  type: 'object',\n                  properties: {\n                    id: {\n                      description: 'The unique ID of the trigger.',\n                      type: 'string'\n                    },\n                    timestamp: {\n                      format: 'date-time',\n                      description: 'The timestamp when the image update happened.',\n                      type: 'string'\n                    },\n                    images: {\n                      description: 'The list of image updates that caused the build.',\n                      type: 'array',\n                      items: {\n                        description: 'Properties for a registry image.',\n                        type: 'object',\n                        properties: {\n                          registry: {\n                            description: 'The registry login server.',\n                            type: 'string'\n                          },\n                          repository: {\n                            description: 'The repository name.',\n                            type: 'string'\n                          },\n                          tag: {\n                            description: 'The tag name.',\n                            type: 'string'\n                          },\n                          digest: {\n                            description: 'The sha256-based digest of the image manifest.',\n                            type: 'string'\n                          }\n                        }\n                      }\n                    }\n                  }\n                },\n                sourceTrigger: {\n                  description: 'The source trigger that caused the run.',\n                  type: 'object',\n                  properties: {\n                    id: {\n                      description: 'The unique ID of the trigger.',\n                      type: 'string'\n                    },\n                    eventType: {\n                      description: 'The event type of the trigger.',\n                      type: 'string'\n                    },\n                    commitId: {\n                      description: 'The unique ID that identifies a commit.',\n                      type: 'string'\n                    },\n                    pullRequestId: {\n                      description: 'The unique ID that identifies pull request.',\n                      type: 'string'\n                    },\n                    repositoryUrl: {\n                      description: 'The repository URL.',\n                      type: 'string'\n                    },\n                    branchName: {\n                      description: 'The branch name in the repository.',\n                      type: 'string'\n                    },\n                    providerType: {\n                      description: 'The source control provider type.',\n                      type: 'string'\n                    }\n                  }\n                },\n                timerTrigger: {\n                  description: 'The timer trigger that caused the run.',\n                  type: 'object',\n                  properties: {\n                    timerTriggerName: {\n                      description: 'The timer trigger name that caused the run.',\n                      type: 'string'\n                    },\n                    scheduleOccurrence: {\n                      description: 'The occurrence that triggered the run.',\n                      type: 'string'\n                    }\n                  }\n                },\n                platform: {\n                  description: 'The platform properties against which the run will happen.',\n                  required: [ 'os' ],\n                  type: 'object',\n                  properties: {\n                    os: {\n                      description: 'The operating system type required for the run.',\n                      enum: [ 'Windows', 'Linux' ],\n                      type: 'string',\n                      'x-ms-enum': { name: 'OS', modelAsString: true }\n                    },\n                    architecture: {\n                      description: 'The OS architecture.',\n                      enum: [ 'amd64', 'x86', '386', 'arm', 'arm64' ],\n                      type: 'string',\n                      'x-ms-enum': { name: 'Architecture', modelAsString: true }\n                    },\n                    variant: {\n                      description: 'Variant of the CPU.',\n                      enum: [ 'v6', 'v7', 'v8' ],\n                      type: 'string',\n                      'x-ms-enum': { name: 'Variant', modelAsString: true }\n                    }\n                  }\n                },\n                agentConfiguration: {\n                  description: 'The machine configuration of the run agent.',\n                  type: 'object',\n                  properties: {\n                    cpu: {\n                      format: 'int32',\n                      description: 'The CPU configuration in terms of number of cores required for the run.',\n                      type: 'integer'\n                    }\n                  }\n                },\n                sourceRegistryAuth: {\n                  description: 'The scope of the credentials that were used to login to the source registry during this run.',\n                  type: 'string'\n                },\n                customRegistries: {\n                  description: 'The list of custom registries that were logged in during this run.',\n                  type: 'array',\n                  items: { type: 'string' }\n                },\n                runErrorMessage: {\n                  description: 'The error message received from backend systems after the run is scheduled.',\n                  type: 'string',\n                  readOnly: true\n                },\n                updateTriggerToken: {\n                  description: 'The update trigger token passed for the Run.',\n                  type: 'string'\n                },\n                logArtifact: {\n                  description: 'Properties for a registry image.',\n                  type: 'object',\n                  properties: {\n                    registry: {\n                      description: 'The registry login server.',\n                      type: 'string'\n                    },\n                    repository: {\n                      description: 'The repository name.',\n                      type: 'string'\n                    },\n                    tag: { description: 'The tag name.', type: 'string' },\n                    digest: {\n                      description: 'The sha256-based digest of the image manifest.',\n                      type: 'string'\n                    }\n                  },\n                  readOnly: true\n                },\n                provisioningState: {\n                  description: 'The provisioning state of a run.',\n                  enum: [\n                    'Creating',\n                    'Updating',\n                    'Deleting',\n                    'Succeeded',\n                    'Failed',\n                    'Canceled'\n                  ],\n                  type: 'string',\n                  'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                },\n                isArchiveEnabled: {\n                  description: 'The value that indicates whether archiving is enabled or not.',\n                  default: false,\n                  type: 'boolean'\n                }\n              }\n            }\n          },\n          readOnly: true\n        },\n        forceUpdateTag: {\n          description: 'How the run should be forced to rerun even if the run request configuration has not changed',\n          type: 'string'\n        }\n      }\n    },\n    location: { description: 'The location of the resource', type: 'string' }\n  }\n}\n")),(0,s.kt)("h2",{id:"misc"},"Misc"),(0,s.kt)("p",null,"The resource version is ",(0,s.kt)("inlineCode",{parentName:"p"},"2019-06-01-preview"),"."),(0,s.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/containerregistry_build.json"},"here"),"."))}g.isMDXComponent=!0}}]);