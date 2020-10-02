(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{129:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(2),a=t(6),c=(t(0),t(160)),o={id:"IamGroup",title:"Iam Group"},i={id:"aws/resources/IAM/IamGroup",isDocsHomePage:!1,title:"Iam Group",description:"Provides an Iam Group.",source:"@site/docs/aws/resources/IAM/IamGroup.md",permalink:"/docs/aws/resources/IAM/IamGroup",sidebar:"someSidebar",previous:{title:"Iam Instance Profile",permalink:"/docs/aws/resources/IAM/IamInstanceProfile"},next:{title:"Iam Policy",permalink:"/docs/aws/resources/IAM/IamPolicy"}},p=[{value:"Examples",id:"examples",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]}],l={rightToc:p};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides an Iam Group."),Object(c.b)("p",null,"This example creates a group called Admin, creates a user and add it to the group, create a policy and attach it to the group."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const iamGroup = await provider.makeIamGroup({\n  name: "Admin",\n  properties: () => ({}),\n});\n\nconst iamUser = await provider.makeIamUser({\n  name: "Alice",\n  dependencies: { iamGroups: [iamGroup] },\n  properties: () => ({}),\n});\n\nconst iamPolicyToGroup = await provider.makeIamPolicy({\n  name: "policy-ec2-describe",\n  dependencies: { iamGroup },\n  properties: () => ({\n    PolicyDocument: {\n      Version: "2012-10-17",\n      Statement: [\n        {\n          Action: ["ec2:Describe*"],\n          Effect: "Allow",\n          Resource: "*",\n        },\n      ],\n    },\n    Description: "Allow ec2:Describe",\n  }),\n});\n')),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/grucloud/grucloud/blob/master/examples/aws/iam/iac.js"}),"simple example"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#createGroup-property"}),"properties list"))),Object(c.b)("h3",{id:"dependencies"},"Dependencies"),Object(c.b)("h3",{id:"used-by"},"Used By"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"./IamPolicy"}),"IamPolicy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"./IamUser"}),"IamUser"))),Object(c.b)("h3",{id:"aws-cli"},"AWS CLI"),Object(c.b)("p",null,"List all iam groups"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"aws iam list-groups\n")),Object(c.b)("p",null,"Delete a group:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"aws iam delete-group --group-name Admin\n")))}s.isMDXComponent=!0},160:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||c;return t?a.a.createElement(d,i(i({ref:r},l),{},{components:t})):a.a.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);