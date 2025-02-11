---
id: SiteSlot
title: SiteSlot
---
Provides a **SiteSlot** from the **Web** group
## Examples
## Dependencies
- [ResourceGroup](../Resources/ResourceGroup.md)
- [ServerFarm](../Web/ServerFarm.md)
- [HostingEnvironment](../Web/HostingEnvironment.md)
- [WebApp](../Web/WebApp.md)
- [Site](../Web/Site.md)
## Swagger Schema
```js
{
  description: 'Represents a web app',
  type: 'object',
  allOf: [
    {
      required: [ 'location' ],
      properties: {
        id: { description: 'Resource Id', type: 'string' },
        name: { description: 'Resource Name', type: 'string' },
        kind: { description: 'Kind of resource', type: 'string' },
        location: { description: 'Resource Location', type: 'string' },
        type: { description: 'Resource type', type: 'string' },
        tags: {
          description: 'Resource tags',
          type: 'object',
          additionalProperties: { type: 'string' }
        }
      },
      'x-ms-azure-resource': true
    }
  ],
  properties: {
    properties: {
      required: [ 'usageState', 'availabilityState' ],
      properties: {
        name: { description: 'Name of web app', type: 'string' },
        state: {
          description: 'State of the web app',
          type: 'string',
          readOnly: true
        },
        hostNames: {
          description: 'Hostnames associated with web app',
          type: 'array',
          items: { type: 'string' },
          readOnly: true
        },
        repositorySiteName: {
          description: 'Name of repository site',
          type: 'string',
          readOnly: true
        },
        usageState: {
          description: 'State indicating whether web app has exceeded its quota usage',
          enum: [ 'Normal', 'Exceeded' ],
          type: 'string',
          readOnly: true,
          'x-ms-enum': { name: 'UsageState', modelAsString: false }
        },
        enabled: {
          description: 'True if the site is enabled; otherwise, false. Setting this  value to false disables the site (takes the site off line).',
          type: 'boolean'
        },
        enabledHostNames: {
          description: 'Hostnames for the web app that are enabled. Hostnames need to be assigned and enabled. If some hostnames are assigned but not enabled\r\n' +
            '            the app is not served on those hostnames',
          type: 'array',
          items: { type: 'string' },
          readOnly: true
        },
        availabilityState: {
          description: 'Management information availability state for the web app. Possible values are Normal or Limited. \r\n' +
            '            Normal means that the site is running correctly and that management information for the site is available. \r\n' +
            '            Limited means that only partial management information for the site is available and that detailed site information is unavailable.',
          enum: [ 'Normal', 'Limited', 'DisasterRecoveryMode' ],
          type: 'string',
          readOnly: true,
          'x-ms-enum': { name: 'SiteAvailabilityState', modelAsString: false }
        },
        hostNameSslStates: {
          description: "Hostname SSL states are  used to manage the SSL bindings for site's hostnames.",
          type: 'array',
          items: {
            description: 'Object that represents a SSL-enabled host name.',
            required: [ 'sslState' ],
            type: 'object',
            properties: {
              name: { description: 'Host name', type: 'string' },
              sslState: {
                description: 'SSL type',
                enum: [ 'Disabled', 'SniEnabled', 'IpBasedEnabled' ],
                type: 'string',
                'x-ms-enum': { name: 'SslState', modelAsString: false }
              },
              virtualIP: {
                description: 'Virtual IP address assigned to the host name if IP based SSL is enabled',
                type: 'string'
              },
              thumbprint: { description: 'SSL cert thumbprint', type: 'string' },
              toUpdate: {
                description: 'Set this flag to update existing host name',
                type: 'boolean'
              }
            }
          }
        },
        serverFarmId: { type: 'string' },
        lastModifiedTimeUtc: {
          format: 'date-time',
          description: 'Last time web app was modified in UTC',
          type: 'string',
          readOnly: true
        },
        siteConfig: {
          description: 'Configuration of web app',
          type: 'object',
          allOf: [
            {
              required: [ 'location' ],
              properties: {
                id: { description: 'Resource Id', type: 'string' },
                name: { description: 'Resource Name', type: 'string' },
                kind: { description: 'Kind of resource', type: 'string' },
                location: { description: 'Resource Location', type: 'string' },
                type: { description: 'Resource type', type: 'string' },
                tags: {
                  description: 'Resource tags',
                  type: 'object',
                  additionalProperties: { type: 'string' }
                }
              },
              'x-ms-azure-resource': true
            }
          ],
          properties: {
            properties: {
              properties: {
                numberOfWorkers: {
                  format: 'int32',
                  description: 'Number of workers',
                  type: 'integer'
                },
                defaultDocuments: {
                  description: 'Default documents',
                  type: 'array',
                  items: { type: 'string' }
                },
                netFrameworkVersion: {
                  description: 'Net Framework Version',
                  type: 'string'
                },
                phpVersion: { description: 'Version of PHP', type: 'string' },
                pythonVersion: { description: 'Version of Python', type: 'string' },
                nodeVersion: { description: 'Version of Node', type: 'string' },
                requestTracingEnabled: {
                  description: 'Enable request tracing',
                  type: 'boolean'
                },
                requestTracingExpirationTime: {
                  format: 'date-time',
                  description: 'Request tracing expiration time',
                  type: 'string'
                },
                remoteDebuggingEnabled: {
                  description: 'Remote Debugging Enabled',
                  type: 'boolean'
                },
                remoteDebuggingVersion: {
                  description: 'Remote Debugging Version',
                  type: 'string'
                },
                httpLoggingEnabled: {
                  description: 'HTTP logging Enabled',
                  type: 'boolean'
                },
                logsDirectorySizeLimit: {
                  format: 'int32',
                  description: 'HTTP Logs Directory size limit',
                  type: 'integer'
                },
                detailedErrorLoggingEnabled: {
                  description: 'Detailed error logging enabled',
                  type: 'boolean'
                },
                publishingUsername: { description: 'Publishing user name', type: 'string' },
                publishingPassword: { description: 'Publishing password', type: 'string' },
                appSettings: {
                  description: 'Application Settings',
                  type: 'array',
                  items: {
                    description: 'Name value pair',
                    type: 'object',
                    properties: {
                      name: { description: 'Pair name', type: 'string' },
                      value: { description: 'Pair value', type: 'string' }
                    }
                  }
                },
                metadata: {
                  description: 'Site Metadata',
                  type: 'array',
                  items: {
                    description: 'Name value pair',
                    type: 'object',
                    properties: {
                      name: { description: 'Pair name', type: 'string' },
                      value: { description: 'Pair value', type: 'string' }
                    }
                  }
                },
                connectionStrings: {
                  description: 'Connection strings',
                  type: 'array',
                  items: {
                    description: 'Represents database connection string information',
                    required: [ 'type' ],
                    type: 'object',
                    properties: {
                      name: {
                        description: 'Name of connection string',
                        type: 'string'
                      },
                      connectionString: {
                        description: 'Connection string value',
                        type: 'string'
                      },
                      type: {
                        description: 'Type of database',
                        enum: [ 'MySql', 'SQLServer', 'SQLAzure', 'Custom' ],
                        type: 'string',
                        'x-ms-enum': {
                          name: 'DatabaseServerType',
                          modelAsString: false
                        }
                      }
                    }
                  }
                },
                handlerMappings: {
                  description: 'Handler mappings',
                  type: 'array',
                  items: {
                    description: 'The IIS handler mappings used to define which handler processes HTTP requests with certain extension. \r\n' +
                      '            For example it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.',
                    type: 'object',
                    properties: {
                      extension: {
                        description: 'Requests with this extension will be handled using the specified FastCGI application.',
                        type: 'string'
                      },
                      scriptProcessor: {
                        description: 'The absolute path to the FastCGI application.',
                        type: 'string'
                      },
                      arguments: {
                        description: 'Command-line arguments to be passed to the script processor.',
                        type: 'string'
                      }
                    }
                  }
                },
                documentRoot: { description: 'Document root', type: 'string' },
                scmType: { description: 'SCM type', type: 'string' },
                use32BitWorkerProcess: {
                  description: 'Use 32 bit worker process',
                  type: 'boolean'
                },
                webSocketsEnabled: { description: 'Web socket enabled.', type: 'boolean' },
                alwaysOn: { description: 'Always On', type: 'boolean' },
                javaVersion: { description: 'Java version', type: 'string' },
                javaContainer: { description: 'Java container', type: 'string' },
                javaContainerVersion: {
                  description: 'Java container version',
                  type: 'string'
                },
                appCommandLine: {
                  description: 'App Command Line to launch',
                  type: 'string'
                },
                managedPipelineMode: {
                  description: 'Managed pipeline mode',
                  enum: [ 'Integrated', 'Classic' ],
                  type: 'string',
                  'x-ms-enum': { name: 'ManagedPipelineMode', modelAsString: false }
                },
                virtualApplications: {
                  description: 'Virtual applications',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      virtualPath: { type: 'string' },
                      physicalPath: { type: 'string' },
                      preloadEnabled: { type: 'boolean' },
                      virtualDirectories: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            virtualPath: { type: 'string' },
                            physicalPath: { type: 'string' }
                          }
                        }
                      }
                    }
                  }
                },
                loadBalancing: {
                  description: 'Site load balancing',
                  enum: [
                    'WeightedRoundRobin',
                    'LeastRequests',
                    'LeastResponseTime',
                    'WeightedTotalTraffic',
                    'RequestHash'
                  ],
                  type: 'string',
                  'x-ms-enum': { name: 'SiteLoadBalancing', modelAsString: false }
                },
                experiments: {
                  description: 'This is work around for polymorphic types',
                  type: 'object',
                  properties: {
                    rampUpRules: {
                      description: 'List of {Microsoft.Web.Hosting.Administration.RampUpRule} objects.',
                      type: 'array',
                      items: {
                        description: 'Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance',
                        type: 'object',
                        properties: {
                          actionHostName: {
                            description: 'Hostname of a slot to which the traffic will be redirected if decided to. E.g. mysite-stage.azurewebsites.net',
                            type: 'string'
                          },
                          reroutePercentage: {
                            format: 'double',
                            description: 'Percentage of the traffic which will be redirected to {Microsoft.Web.Hosting.Administration.RampUpRule.ActionHostName}',
                            type: 'number'
                          },
                          changeStep: {
                            format: 'double',
                            description: '[Optional] In auto ramp up scenario this is the step to add/remove from {Microsoft.Web.Hosting.Administration.RampUpRule.ReroutePercentage} until it reaches \r\n' +
                              '            {Microsoft.Web.Hosting.Administration.RampUpRule.MinReroutePercentage} or {Microsoft.Web.Hosting.Administration.RampUpRule.MaxReroutePercentage}. Site metrics are checked every N minutes specified in {Microsoft.Web.Hosting.Administration.RampUpRule.ChangeIntervalInMinutes}.\r\n' +
                              '            Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified in {Microsoft.Web.Hosting.Administration.RampUpRule.ChangeDecisionCallbackUrl}',
                            type: 'number'
                          },
                          changeIntervalInMinutes: {
                            format: 'int32',
                            description: '[Optional] Specifies interval in minutes to reevaluate ReroutePercentage',
                            type: 'integer'
                          },
                          minReroutePercentage: {
                            format: 'double',
                            description: '[Optional] Specifies lower boundary above which ReroutePercentage will stay.',
                            type: 'number'
                          },
                          maxReroutePercentage: {
                            format: 'double',
                            description: '[Optional] Specifies upper boundary below which ReroutePercentage will stay.',
                            type: 'number'
                          },
                          changeDecisionCallbackUrl: {
                            description: 'Custom decision algorithm can be provided in TiPCallback site extension which Url can be specified. See TiPCallback site extension for the scaffold and contracts.\r\n' +
                              '            https://www.siteextensions.net/packages/TiPCallback/',
                            type: 'string'
                          },
                          name: {
                            description: 'Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment.',
                            type: 'string'
                          }
                        }
                      }
                    }
                  }
                },
                limits: {
                  description: 'Site limits',
                  type: 'object',
                  properties: {
                    maxPercentageCpu: {
                      format: 'double',
                      description: 'Maximum allowed CPU usage percentage',
                      type: 'number'
                    },
                    maxMemoryInMb: {
                      format: 'int64',
                      description: 'Maximum allowed memory usage in MB',
                      type: 'integer'
                    },
                    maxDiskSizeInMb: {
                      format: 'int64',
                      description: 'Maximum allowed disk size usage in MB',
                      type: 'integer'
                    }
                  }
                },
                autoHealEnabled: { description: 'Auto heal enabled', type: 'boolean' },
                autoHealRules: {
                  description: 'Auto heal rules',
                  type: 'object',
                  properties: {
                    triggers: {
                      description: 'Triggers - Conditions that describe when to execute the auto-heal actions',
                      type: 'object',
                      properties: {
                        requests: {
                          description: 'Requests - Defines a rule based on total requests',
                          type: 'object',
                          properties: {
                            count: {
                              format: 'int32',
                              description: 'Count',
                              type: 'integer'
                            },
                            timeInterval: {
                              description: 'TimeInterval',
                              type: 'string'
                            }
                          }
                        },
                        privateBytesInKB: {
                          format: 'int32',
                          description: 'PrivateBytesInKB - Defines a rule based on private bytes',
                          type: 'integer'
                        },
                        statusCodes: {
                          description: 'StatusCodes - Defines a rule based on status codes',
                          type: 'array',
                          items: {
                            description: 'StatusCodeBasedTrigger',
                            type: 'object',
                            properties: {
                              status: {
                                format: 'int32',
                                description: 'HTTP status code',
                                type: 'integer'
                              },
                              subStatus: {
                                format: 'int32',
                                description: 'SubStatus',
                                type: 'integer'
                              },
                              win32Status: {
                                format: 'int32',
                                description: 'Win32 error code',
                                type: 'integer'
                              },
                              count: {
                                format: 'int32',
                                description: 'Count',
                                type: 'integer'
                              },
                              timeInterval: {
                                description: 'TimeInterval',
                                type: 'string'
                              }
                            }
                          }
                        },
                        slowRequests: {
                          description: 'SlowRequests - Defines a rule based on request execution time',
                          type: 'object',
                          properties: {
                            timeTaken: {
                              description: 'TimeTaken',
                              type: 'string'
                            },
                            count: {
                              format: 'int32',
                              description: 'Count',
                              type: 'integer'
                            },
                            timeInterval: {
                              description: 'TimeInterval',
                              type: 'string'
                            }
                          }
                        }
                      }
                    },
                    actions: {
                      description: 'Actions - Actions to be executed when a rule is triggered',
                      required: [ 'actionType' ],
                      type: 'object',
                      properties: {
                        actionType: {
                          description: 'ActionType - predefined action to be taken',
                          enum: [ 'Recycle', 'LogEvent', 'CustomAction' ],
                          type: 'string',
                          'x-ms-enum': {
                            name: 'AutoHealActionType',
                            modelAsString: false
                          }
                        },
                        customAction: {
                          description: 'CustomAction - custom action to be taken',
                          type: 'object',
                          properties: {
                            exe: {
                              description: 'Executable to be run',
                              type: 'string'
                            },
                            parameters: {
                              description: 'Parameters for the executable',
                              type: 'string'
                            }
                          }
                        },
                        minProcessExecutionTime: {
                          description: 'MinProcessExecutionTime - minimum time the process must execute\r\n' +
                            '            before taking the action',
                          type: 'string'
                        }
                      }
                    }
                  }
                },
                tracingOptions: { description: 'Tracing options', type: 'string' },
                vnetName: { description: 'Vnet name', type: 'string' },
                cors: {
                  description: 'Cross-Origin Resource Sharing (CORS) settings.',
                  type: 'object',
                  properties: {
                    allowedOrigins: {
                      description: 'Gets or sets the list of origins that should be allowed to make cross-origin\r\n' +
                        '            calls (for example: http://example.com:12345). Use "*" to allow all.',
                      type: 'array',
                      items: { type: 'string' }
                    }
                  }
                },
                apiDefinition: {
                  description: 'Information about the formal API definition for the web app.',
                  type: 'object',
                  properties: {
                    url: {
                      description: 'The URL of the API definition.',
                      type: 'string'
                    }
                  }
                },
                autoSwapSlotName: { description: 'Auto swap slot name', type: 'string' },
                localMySqlEnabled: { description: 'Local mysql enabled', type: 'boolean' },
                ipSecurityRestrictions: {
                  description: 'Ip Security restrictions',
                  type: 'array',
                  items: {
                    description: 'Represents an ip security restriction on a web app.',
                    type: 'object',
                    properties: {
                      ipAddress: {
                        description: 'IP address the security restriction is valid for',
                        type: 'string'
                      },
                      subnetMask: {
                        description: 'Subnet mask for the range of IP addresses the restriction is valid for',
                        type: 'string'
                      }
                    }
                  }
                }
              },
              'x-ms-client-flatten': true
            }
          }
        },
        trafficManagerHostNames: {
          description: 'Read-only list of Azure Traffic manager hostnames associated with web app',
          type: 'array',
          items: { type: 'string' },
          readOnly: true
        },
        premiumAppDeployed: {
          description: 'If set indicates whether web app is deployed as a premium app',
          type: 'boolean',
          readOnly: true
        },
        scmSiteAlsoStopped: {
          description: 'If set indicates whether to stop SCM (KUDU) site when the web app is stopped. Default is false.',
          type: 'boolean'
        },
        targetSwapSlot: {
          description: 'Read-only property that specifies which slot this app will swap into',
          type: 'string',
          readOnly: true
        },
        hostingEnvironmentProfile: {
          description: 'Specification for the hosting environment (App Service Environment) to use for the web app',
          type: 'object',
          properties: {
            id: {
              description: 'Resource id of the hostingEnvironment (App Service Environment)',
              type: 'string'
            },
            name: {
              description: 'Name of the hostingEnvironment (App Service Environment) (read only)',
              type: 'string'
            },
            type: {
              description: 'Resource type of the hostingEnvironment (App Service Environment) (read only)',
              type: 'string'
            }
          }
        },
        microService: { description: '', type: 'string' },
        gatewaySiteName: {
          description: 'Name of gateway app associated with web app',
          type: 'string'
        },
        clientAffinityEnabled: {
          description: 'Specifies if the client affinity is enabled when load balancing http request for multiple instances of the web app',
          type: 'boolean'
        },
        clientCertEnabled: {
          description: 'Specifies if the client certificate is enabled for the web app',
          type: 'boolean'
        },
        hostNamesDisabled: {
          description: 'Specifies if the public hostnames are disabled the web app.\r\n' +
            '            If set to true the app is only accessible via API Management process',
          type: 'boolean'
        },
        outboundIpAddresses: {
          description: 'List of comma separated IP addresses that this web app uses for outbound connections. Those can be used when configuring firewall rules for databases accessed by this web app.',
          type: 'string',
          readOnly: true
        },
        containerSize: {
          format: 'int32',
          description: 'Size of a function container',
          type: 'integer'
        },
        maxNumberOfWorkers: {
          format: 'int32',
          description: 'Maximum number of workers\r\n' +
            '            This only applies to function container',
          type: 'integer'
        },
        cloningInfo: {
          description: 'This is only valid for web app creation. If specified, web app is cloned from \r\n' +
            '            a source web app',
          type: 'object',
          properties: {
            correlationId: {
              description: 'Correlation Id of cloning operation. This id ties multiple cloning operations\r\n' +
                '            together to use the same snapshot',
              type: 'string'
            },
            overwrite: {
              description: 'Overwrite destination web app',
              type: 'boolean'
            },
            cloneCustomHostNames: {
              description: 'If true, clone custom hostnames from source web app',
              type: 'boolean'
            },
            cloneSourceControl: {
              description: 'Clone source control from source web app',
              type: 'boolean'
            },
            sourceWebAppId: {
              description: 'ARM resource id of the source web app. Web app resource id is of the form \r\n' +
                '            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and \r\n' +
                '            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots',
              type: 'string'
            },
            hostingEnvironment: { description: 'Hosting environment', type: 'string' },
            appSettingsOverrides: {
              description: 'Application settings overrides for cloned web app. If specified these settings will override the settings cloned \r\n' +
                '            from source web app. If not specified, application settings from source web app are retained.',
              type: 'object',
              additionalProperties: { type: 'string' }
            },
            configureLoadBalancing: {
              description: 'If specified configure load balancing for source and clone site',
              type: 'boolean'
            },
            trafficManagerProfileId: {
              description: 'ARM resource id of the traffic manager profile to use if it exists. Traffic manager resource id is of the form \r\n' +
                '            /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}',
              type: 'string'
            },
            trafficManagerProfileName: {
              description: 'Name of traffic manager profile to create. This is only needed if traffic manager profile does not already exist',
              type: 'string'
            }
          }
        },
        resourceGroup: {
          description: 'Resource group web app belongs to',
          type: 'string',
          readOnly: true
        },
        isDefaultContainer: {
          description: 'Site is a default container',
          type: 'boolean',
          readOnly: true
        },
        defaultHostName: {
          description: 'Default hostname of the web app',
          type: 'string',
          readOnly: true
        }
      },
      'x-ms-client-flatten': true
    }
  }
}
```
## Misc
The resource version is `2015-08-01`.

The Swagger schema used to generate this documentation can be found [here](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2015-08-01/service.json).
