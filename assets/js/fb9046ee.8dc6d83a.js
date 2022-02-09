"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7184],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(y,a(a({ref:r},u),{},{components:t})):n.createElement(y,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42897:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"FirewallPolicyIdpsSignaturesOverride",title:"FirewallPolicyIdpsSignaturesOverride"},l=void 0,c={unversionedId:"azure/resources/Network/FirewallPolicyIdpsSignaturesOverride",id:"azure/resources/Network/FirewallPolicyIdpsSignaturesOverride",isDocsHomePage:!1,title:"FirewallPolicyIdpsSignaturesOverride",description:"Provides a FirewallPolicyIdpsSignaturesOverride from the Network group",source:"@site/docs/azure/resources/Network/FirewallPolicyIdpsSignaturesOverride.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/FirewallPolicyIdpsSignaturesOverride",permalink:"/docs/azure/resources/Network/FirewallPolicyIdpsSignaturesOverride",tags:[],version:"current",frontMatter:{id:"FirewallPolicyIdpsSignaturesOverride",title:"FirewallPolicyIdpsSignaturesOverride"},sidebar:"docs",previous:{title:"FirewallPolicy",permalink:"/docs/azure/resources/Network/FirewallPolicy"},next:{title:"FirewallPolicyRuleCollectionGroup",permalink:"/docs/azure/resources/Network/FirewallPolicyRuleCollectionGroup"}},u=[{value:"Examples",id:"examples",children:[{value:"put signature overrides",id:"put-signature-overrides",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],p={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"FirewallPolicyIdpsSignaturesOverride")," from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"put-signature-overrides"},"put signature overrides"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Network.makeFirewallPolicyIdpsSignaturesOverride({\n  name: "myFirewallPolicyIdpsSignaturesOverride",\n  properties: () => ({\n    id: "/subscriptions/e747cc13-97d4-4a79-b463-42d7f4e558f2/resourceGroups/rg1/providers/Microsoft.Network/firewallPolicies/firewallPolicy/signatureOverrides/default",\n    name: "default",\n    type: "Microsoft.Network/firewallPolicies/signatureOverrides",\n    properties: { signatures: { 2000105: "Off", 2000106: "Deny" } },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    securityPartnerProvider:\n      resources.Network.SecurityPartnerProvider["mySecurityPartnerProvider"],\n    firewallPolicy: resources.Network.FirewallPolicy["myFirewallPolicy"],\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/SecurityPartnerProvider"},"SecurityPartnerProvider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/FirewallPolicy"},"FirewallPolicy"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  'x-ms-azure-resource': true,\n  type: 'object',\n  description: 'Contains all specific policy signatures overrides for the IDPS',\n  properties: {\n    name: {\n      type: 'string',\n      description: 'Contains the name of the resource (default)'\n    },\n    id: {\n      description: 'Will contain the resource id of the signature override resource',\n      type: 'string'\n    },\n    type: {\n      type: 'string',\n      description: 'Will contain the type of the resource: Microsoft.Network/firewallPolicies/intrusionDetectionSignaturesOverrides'\n    },\n    properties: {\n      type: 'object',\n      description: 'Will contain the properties of the resource (the actual signature overrides)',\n      properties: {\n        signatures: { type: 'object', additionalProperties: { type: 'string' } }\n      }\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/firewallPolicy.json"},"here"),"."))}d.isMDXComponent=!0}}]);