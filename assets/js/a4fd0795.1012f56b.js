"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3147],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return m}});var i=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},c=Object.keys(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var g=i.createContext({}),I=function(e){var t=i.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},o=function(e){var t=I(e.components);return i.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,c=e.originalType,g=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),d=I(a),m=l,N=d["".concat(g,".").concat(m)]||d[m]||s[m]||c;return a?i.createElement(N,n(n({ref:t},o),{},{components:a})):i.createElement(N,n({ref:t},o))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=a.length,n=new Array(c);n[0]=d;var r={};for(var g in t)hasOwnProperty.call(t,g)&&(r[g]=t[g]);r.originalType=e,r.mdxType="string"==typeof e?e:l,n[1]=r;for(var I=2;I<c;I++)n[I]=a[I];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37783:function(e,t,a){a.d(t,{Z:function(){return n}});var i=a(67294),l="tableOfContentsInline_0DDH",c=a(25002);var n=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return i.createElement("div",{className:l},i.createElement(c.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:n,className:"table-of-contents",linkClassName:null}))}},25002:function(e,t,a){a.d(t,{Z:function(){return I}});var i=a(87462),l=a(63366),c=a(67294),n=a(32822),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var t=e.toc,a=e.className,i=e.linkClassName,l=e.isChild;return t.length?c.createElement("ul",{className:l?void 0:a},t.map((function(e){return c.createElement("li",{key:e.id},c.createElement("a",{href:"#"+e.id,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:e.value}}),c.createElement(g,{isChild:!0,toc:e.children,className:a,linkClassName:i}))}))):null}function I(e){var t=e.toc,a=e.className,I=void 0===a?"table-of-contents table-of-contents__left-border":a,o=e.linkClassName,s=void 0===o?"table-of-contents__link":o,d=e.linkActiveClassName,m=void 0===d?void 0:d,N=e.minHeadingLevel,M=e.maxHeadingLevel,u=(0,l.Z)(e,r),p=(0,n.LU)(),b=null!=N?N:p.tableOfContents.minHeadingLevel,D=null!=M?M:p.tableOfContents.maxHeadingLevel,Z=(0,n.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:D}),G=(0,c.useMemo)((function(){if(s&&m)return{linkClassName:s,linkActiveClassName:m,minHeadingLevel:b,maxHeadingLevel:D}}),[s,m,b,D]);return(0,n.Si)(G),c.createElement(g,(0,i.Z)({toc:Z,className:I,linkClassName:s},u))}},61561:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return g},contentTitle:function(){return I},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var i=a(87462),l=a(63366),c=(a(67294),a(3905)),n=a(37783),r=["components"],g={id:"GoogleGettingStarted",title:"GCP Getting Started"},I=void 0,o={unversionedId:"google/GoogleGettingStarted",id:"google/GoogleGettingStarted",isDocsHomePage:!1,title:"GCP Getting Started",description:"This document describes how to get started with GruCloud on the Google Cloud Platform.",source:"@site/docs/google/GoogleGettingStarted.md",sourceDirName:"google",slug:"/google/GoogleGettingStarted",permalink:"/docs/google/GoogleGettingStarted",tags:[],version:"current",frontMatter:{id:"GoogleGettingStarted",title:"GCP Getting Started"},sidebar:"docs",previous:{title:"Aws Getting Started",permalink:"/docs/aws/AwsGettingStarted"},next:{title:"Azure Getting Started",permalink:"/docs/azure/AzureGettingStarted"}},s=[{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Workflow",id:"workflow",children:[],level:2},{value:"Requirements",id:"requirements",children:[{value:"GCP Account",id:"gcp-account",children:[],level:3},{value:"gcloud",id:"gcloud",children:[],level:3},{value:"Installing the GruCloud CLI",id:"installing-the-grucloud-cli",children:[],level:3}],level:2},{value:"GruCloud CLI commands",id:"grucloud-cli-commands",children:[{value:"<code>gc new</code> Create a new project",id:"gc-new-create-a-new-project",children:[],level:3},{value:"<code>gc init</code> Initialisation",id:"gc-init-initialisation",children:[],level:3},{value:"<code>gc list</code> List the live resources",id:"gc-list-list-the-live-resources",children:[],level:3},{value:"<code>gc gencode</code> Code Generation",id:"gc-gencode-code-generation",children:[],level:3},{value:"<code>gc graph</code> Target Graph",id:"gc-graph-target-graph",children:[],level:3},{value:"<code>gc tree</code> Resource mind map",id:"gc-tree-resource-mind-map",children:[],level:3},{value:"<code>gc apply</code> Update",id:"gc-apply-update",children:[],level:3},{value:"<code>gc destroy</code> Destroy",id:"gc-destroy-destroy",children:[],level:3}],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],d={toc:s};function m(e){var t=e.components,g=(0,l.Z)(e,r);return(0,c.kt)("wrapper",(0,i.Z)({},d,g,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This document describes how to get started with GruCloud on the Google Cloud Platform."),(0,c.kt)(n.Z,{toc:s,mdxType:"TOCInline"}),(0,c.kt)("h2",{id:"use-cases"},"Use Cases"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"usecase.svg",src:a(49717).Z})),(0,c.kt)("h2",{id:"workflow"},"Workflow"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"gc-new-workflow",src:a(33653).Z})),(0,c.kt)("h2",{id:"requirements"},"Requirements"),(0,c.kt)("h3",{id:"gcp-account"},"GCP Account"),(0,c.kt)("p",null,"Access to the ",(0,c.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/home/dashboard"},"GCP console")," is required to run this tutorial."),(0,c.kt)("h3",{id:"gcloud"},"gcloud"),(0,c.kt)("p",null,"Ensure the GCP CLI called ",(0,c.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"gcloud")," is installed:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"$ gcloud -v\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-txt"},"Google Cloud SDK 363.0.0\nbeta 2021.10.29\nbq 2.0.71\ncore 2021.10.29\ngsutil 5.4\n")),(0,c.kt)("h3",{id:"installing-the-grucloud-cli"},"Installing the GruCloud CLI"),(0,c.kt)("p",null,"The GruCloud CLI, ",(0,c.kt)("inlineCode",{parentName:"p"},"gc"),", is written in Javascript running on ",(0,c.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")),(0,c.kt)("p",null,"Install it globally with:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -g @grucloud/core\n")),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"gc-cli-install.svg",src:a(94641).Z})),(0,c.kt)("h2",{id:"grucloud-cli-commands"},"GruCloud CLI commands"),(0,c.kt)("h3",{id:"gc-new-create-a-new-project"},(0,c.kt)("inlineCode",{parentName:"h3"},"gc new")," Create a new project"),(0,c.kt)("p",null,"The ",(0,c.kt)("a",{parentName:"p",href:"/docs/cli/New"},"new")," command guides you on how to create and configure a new project."),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/docusaurus/plantuml/gc-new-google.svg",alt:"gc-new-aws"})),(0,c.kt)("p",null,"Below is the screencast of ",(0,c.kt)("strong",{parentName:"p"},"gc new"),":"),(0,c.kt)("div",null,(0,c.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/lskiblzLpXqnPsZ5Z1W7Bf2Kd/iframe?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"100%",height:"600px"}})),"The boilerplate project is now created and configured.",(0,c.kt)("h3",{id:"gc-init-initialisation"},(0,c.kt)("inlineCode",{parentName:"h3"},"gc init")," Initialisation"),(0,c.kt)("p",null,"A few actions need to be performed before deploying the resources."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Setup billing for that project"),(0,c.kt)("li",{parentName:"ul"},"Enable the API services"),(0,c.kt)("li",{parentName:"ul"},"Create a service account"),(0,c.kt)("li",{parentName:"ul"},"Create and save the credential file for this service account"),(0,c.kt)("li",{parentName:"ul"},"Update the IAM policy by binding roles to the service account")),(0,c.kt)("p",null,"Don't worry, these preparation steps are fully automated:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"gc init\n")),(0,c.kt)("div",null,(0,c.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/7ZjVCYhCV5IpFJix3o8MWCfpm/iframe?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"100%",height:"600px"}})),(0,c.kt)("h3",{id:"gc-list-list-the-live-resources"},(0,c.kt)("inlineCode",{parentName:"h3"},"gc list")," List the live resources"),(0,c.kt)("p",null,"Visualize your current infrastructure with the ",(0,c.kt)("a",{parentName:"p",href:"/docs/cli/List"},"list")," command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"gc list --graph\n")),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/google/vm/artifacts/diagram-live.svg",alt:"diagram-live.svg"})),(0,c.kt)("h3",{id:"gc-gencode-code-generation"},(0,c.kt)("inlineCode",{parentName:"h3"},"gc gencode")," Code Generation"),(0,c.kt)("p",null,"The ",(0,c.kt)("a",{parentName:"p",href:"/docs/cli/GenCode"},"gencode")," command fetches the live resources and generate the code in ",(0,c.kt)("inlineCode",{parentName:"p"},"resource.js")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"gc gencode\n")),(0,c.kt)("p",null,"The following flowchart explains in more detail the process of generating the code from the live infrastructure."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"gc-gencode.svg",src:a(41969).Z})),(0,c.kt)("div",null,(0,c.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/cG8dNLRpUbjcpGmg1HajmZdcJ/iframe?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"100%",height:"610px"}})),(0,c.kt)("p",null,"Congratulation, the infrastructure code has been created automatically."),(0,c.kt)("h3",{id:"gc-graph-target-graph"},(0,c.kt)("inlineCode",{parentName:"h3"},"gc graph")," Target Graph"),(0,c.kt)("p",null,"The ",(0,c.kt)("a",{parentName:"p",href:"/docs/cli/Graph"},"graph")," command creates a dependency graph of the target resources:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"gc graph\n")),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/google/vm/artifacts/diagram-target.svg",alt:"diagram-live.svg"})),(0,c.kt)("h3",{id:"gc-tree-resource-mind-map"},(0,c.kt)("inlineCode",{parentName:"h3"},"gc tree")," Resource mind map"),(0,c.kt)("p",null,"Given the target resources defined in ",(0,c.kt)("em",{parentName:"p"},"resources.js"),", let's generate a mindmap of the target resources by group and type."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"gc tree\n")),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/grucloud/grucloud/main/examples/google/vm/artifacts/resources-mindmap.svg",alt:"diagram-live.svg"})),(0,c.kt)("h3",{id:"gc-apply-update"},(0,c.kt)("inlineCode",{parentName:"h3"},"gc apply")," Update"),(0,c.kt)("p",null,"To update the infrastructure, either use the GCP console and run ",(0,c.kt)("strong",{parentName:"p"},"gc gencode"),", or modify directly the file ",(0,c.kt)("strong",{parentName:"p"},"resource.js"),".\nOnce done, use the ",(0,c.kt)("a",{parentName:"p",href:"/docs/cli/Apply"},"apply")," command to update the infrastructure:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"gc apply\n")),(0,c.kt)("div",null,(0,c.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/0VjCmyE8bW8Jq4FdEnFxyjaFd/iframe?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"100%",height:"640px"}})),(0,c.kt)("h3",{id:"gc-destroy-destroy"},(0,c.kt)("inlineCode",{parentName:"h3"},"gc destroy")," Destroy"),(0,c.kt)("p",null,"To destroy the infrastructure, use the ",(0,c.kt)("a",{parentName:"p",href:"/docs/cli/Destroy"},"destroy")," command:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"gc destroy\n")),(0,c.kt)("div",null,(0,c.kt)("iframe",{"data-autoplay":!0,src:"https://asciinema.org/a/Rla0m3E70stbH5faMTS5ZWAIw/iframe?autoplay=true&speed=1&loop=true",id:"asciicast-iframe-13761",name:"asciicast-iframe-13761",scrolling:"no",style:{width:"100%",height:"640px"}})),(0,c.kt)("h2",{id:"next-steps"},"Next Steps"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Browse the various ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/tree/main/examples/google"},"examples")," which helps to find out how to use this software.")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Available ",(0,c.kt)("a",{parentName:"p",href:"/docs/google/ResourcesList"},"GCP Resources")))))}m.isMDXComponent=!0},41969:function(e,t,a){t.Z=a.p+"assets/images/gc-gencode-063db0529fef36735cc43749fcb35ce8.svg"},33653:function(e,t,a){t.Z=a.p+"assets/images/gc-new-workflow-9e3174ee3771bf5c4f08ac5b8ad0a357.svg"},49717:function(e,t){t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjb250ZW50U2NyaXB0VHlwZT0iYXBwbGljYXRpb24vZWNtYXNjcmlwdCIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIGhlaWdodD0iNDk4cHgiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHN0eWxlPSJ3aWR0aDo3MzJweDtoZWlnaHQ6NDk4cHg7YmFja2dyb3VuZDojRkZGRkZGOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNzMyIDQ5OCIgd2lkdGg9IjczMnB4IiB6b29tQW5kUGFuPSJtYWduaWZ5Ij48ZGVmcy8+PGc+PCEtLU1ENT1bZDNjNjEyYTY0ZDhhNmIwMDQ5NGI0MWNlOWQ0ZGFjZTddCmNsdXN0ZXIgR3J1Q2xvdWQgdXNlIGNhc2VzLS0+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNDUsMTIuMTE5MSwzOTUsMTIuMTE5MSw0MDIsNDQuODU2NCw1NDUsNDQuODU2NCw1NDUsNDkxLjExOTEsMTQ1LDQ5MS4xMTkxLDE0NSwxMi4xMTkxIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiIHgxPSIxNDUiIHgyPSI0MDIiIHkxPSI0NC44NTY0IiB5Mj0iNDQuODU2NCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIyNDQiIHg9IjE0OSIgeT0iMzYuMjM3MyI+R3J1Q2xvdWQgdXNlIGNhc2VzPC90ZXh0PjxlbGxpcHNlIGN4PSIzNDUuMDE5OCIgY3k9Ijg5LjAyMzEiIGZpbGw9IiNGRkZGRkYiIHJ4PSIxNDUuMDE5OCIgcnk9IjMxLjQwNCIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IlZlcmRhbmEiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMjU5IiB4PSIyMTUuNTE5OCIgeT0iOTIuNTkxIj5EaXNwbGF5IGRpYWdyYW1zIGZyb20gbGl2ZSByZXNvdXJjZXM8L3RleHQ+PGVsbGlwc2UgY3g9IjM0NS4wNjczIiBjeT0iMTk1LjMzMjYiIGZpbGw9IiNGRkZGRkYiIHJ4PSIxODQuMDY3MyIgcnk9IjM5LjIxMzUiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjM0MCIgeD0iMTc1LjA2NzMiIHk9IjE5OC45MDA1Ij5HZW5lcmF0ZSBpbmZyYXN0cnVjdHVyZSBjb2RlIGZyb20gbGl2ZSByZXNvdXJjZXM8L3RleHQ+PGVsbGlwc2UgY3g9IjM0NC44MzIxIiBjeT0iMjk5LjI4NTYiIGZpbGw9IiNGRkZGRkYiIHJ4PSIxMzguODMyMSIgcnk9IjMwLjE2NjQiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjI0NiIgeD0iMjIxLjgzMjEiIHk9IjMwMi44NTM0Ij5EZXBsb3kgcmVzb3VyY2VzIHRvIHZhcmlvdXMgcGhhc2VzPC90ZXh0PjxlbGxpcHNlIGN4PSIzNDQuOTQwNiIgY3k9IjM4Mi45MDczIiBmaWxsPSIjRkZGRkZGIiByeD0iODEuOTQwNiIgcnk9IjE4Ljc4ODEiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEyMSIgeD0iMjg0LjQ0MDYiIHk9IjM4Ni40NzUxIj5VcGRhdGUgcmVzb3VyY2VzPC90ZXh0PjxlbGxpcHNlIGN4PSIzNDUuMTMyNiIgY3k9IjQ1Ni4yNDU3IiBmaWxsPSIjRkZGRkZGIiByeD0iODMuNjMyNiIgcnk9IjE5LjEyNjUiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJWZXJkYW5hIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEyNSIgeD0iMjgyLjYzMjYiIHk9IjQ1OS44MTM1Ij5EZXN0cm95IHJlc291cmNlczwvdGV4dD48IS0tTUQ1PVswMTFkYjFkMjcyNzRjODY2OTE4NzFiYzUxYjEyYmViOF0KZW50aXR5IGQtLT48ZWxsaXBzZSBjeD0iNTYiIGN5PSIyNjkuMTE5MSIgZmlsbD0iI0ZGRkZGRiIgcng9IjgiIHJ5PSI4IiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNNTYsMjc3LjExOTEgTDU2LDMwNC4xMTkxIE00MywyODUuMTE5MSBMNjksMjg1LjExOTEgTTU2LDMwNC4xMTkxIEw0MywzMTkuMTE5MSBNNTYsMzA0LjExOTEgTDY5LDMxOS4xMTkxICIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IlZlcmRhbmEiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iOTAiIHg9IjExIiB5PSIzMzUuMTk0MyI+RGV2T3BzIFVzZXI8L3RleHQ+PHBhdGggZD0iTTU4OSwyODYuMTE5MSBMNTg5LDI5NS4xMTkxIEw0ODQuMjMsMjk5LjExOTEgTDU4OSwzMDMuMTE5MSBMNTg5LDMxMS45MTg1IEEwLDAgMCAwIDAgNTg5LDMxMS45MTg1IEw3MjUsMzExLjkxODUgQTAsMCAwIDAgMCA3MjUsMzExLjkxODUgTDcyNSwyOTYuMTE5MSBMNzE1LDI4Ni4xMTkxIEw1ODksMjg2LjExOTEgQTAsMCAwIDAgMCA1ODksMjg2LjExOTEgIiBmaWxsPSIjRkZGRkZGIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cGF0aCBkPSJNNzE1LDI4Ni4xMTkxIEw3MTUsMjk2LjExOTEgTDcyNSwyOTYuMTE5MSBMNzE1LDI4Ni4xMTkxICIgZmlsbD0iI0ZGRkZGRiIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IlZlcmRhbmEiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTE1IiB4PSI1OTUiIHk9IjMwNC4xODkiPnByb2QsIHRlc3QsIGV0YyAuLi48L3RleHQ+PCEtLU1ENT1bNTk0ZGZkMjliYjc4NTE0NmQwNDJlNDZiYTY3MGIxZjFdCmxpbmsgZCB0byBVQzEtLT48cGF0aCBkPSJNNjYuMjIsMjU5Ljg3OTEgQzc2Ljk2LDIyMi45MjkxIDk4LjM4LDE2OC43NzkxIDEzNywxMzguMTE5MSBDMTU3LjQsMTIxLjkxOTEgMTgyLjI4LDExMC45MjkxIDIwNy42MiwxMDMuNDk5MSAiIGZpbGw9Im5vbmUiIGlkPSJkLXRvLVVDMSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIyMTIuNjksMTAyLjA1OTEsMjAyLjkzODUsMTAwLjY3NzksMjA3Ljg4MTMsMTAzLjQyOSwyMDUuMTMwMiwxMDguMzcxOCwyMTIuNjksMTAyLjA1OTEiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjwhLS1NRDU9WzlhNzBhYjkwMDQ2OTViZjI4NmMyZWM4NjVkYjViYzQ3XQpsaW5rIGQgdG8gVUMyLS0+PHBhdGggZD0iTTEwMS4xMiwyNjkuNjk5MSBDMTEyLjQ5LDI2Mi45NDkxIDEyNC45MywyNTYuMjU5MSAxMzcsMjUxLjExOTEgQzE2MC44NSwyNDAuOTY5MSAxODcuMDMsMjMyLjE5OTEgMjEyLjUxLDIyNC44MDkxICIgZmlsbD0ibm9uZSIgaWQ9ImQtdG8tVUMyIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cG9seWdvbiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjIxNy42LDIyMy4zNDkxLDIwNy44NDM3LDIyMi4wMDI0LDIxMi43OTYyLDIyNC43MzYsMjEwLjA2MjYsMjI5LjY4ODUsMjE3LjYsMjIzLjM0OTEiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjwhLS1NRDU9WzZkZmYxMjg5ZDU3ZWNjM2MzZGY1MTNjNmZkZDAzNDI0XQpsaW5rIGQgdG8gVUMzLS0+PHBhdGggZD0iTTEwMS4yMSwyOTkuMTE5MSBDMTI4LjE5LDI5OS4xMTkxIDE2NC4zNSwyOTkuMTE5MSAyMDAuNTEsMjk5LjExOTEgIiBmaWxsPSJub25lIiBpZD0iZC10by1VQzMiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjA1Ljg0LDI5OS4xMTkxLDE5Ni44NCwyOTUuMTE5MSwyMDAuODQsMjk5LjExOTEsMTk2Ljg0LDMwMy4xMTkxLDIwNS44NCwyOTkuMTE5MSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PCEtLU1ENT1bZDEwYzVhMzNmYTIxMmM5NWYxN2MzNGQ4NzQ2ZTcyMjVdCmxpbmsgZCB0byBVQzQtLT48cGF0aCBkPSJNMTAxLjMxLDMyOC44NzkxIEMxMTIuNTcsMzM1LjM4OTEgMTI0LjkxLDM0MS42NDkxIDEzNywzNDYuMTE5MSBDMTc3LjMxLDM2MS4wMTkxIDIyNC4zMiwzNzAuMDM5MSAyNjMuMzQsMzc1LjQzOTEgIiBmaWxsPSJub25lIiBpZD0iZC10by1VQzQiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4wOyIvPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIHBvaW50cz0iMjY4LjU0LDM3Ni4xMzkxLDI2MC4xNjAzLDM3MC45NjQxLDI2My41ODU1LDM3NS40NjYxLDI1OS4wODM1LDM3OC44OTEzLDI2OC41NCwzNzYuMTM5MSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PCEtLU1ENT1bYWEyYmY2NGUxZDYxMjQ3YTJkYTg3OGMyNDIyZmM5YzhdCmxpbmsgZCB0byBVQzUtLT48cGF0aCBkPSJNNzMuMDUsMzM4LjI5OTEgQzg2LjIsMzY1LjMzOTEgMTA3LjQ3LDM5OS43NzkxIDEzNyw0MTkuMTE5MSBDMTcxLjkzLDQ0MS45OTkxIDIxNi45Niw0NTEuODE5MSAyNTYuMSw0NTUuNjc5MSAiIGZpbGw9Im5vbmUiIGlkPSJkLXRvLVVDNSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjA7Ii8+PHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIyNjEuMzMsNDU2LjE2OTEsMjUyLjc0NjUsNDUxLjMzOTcsMjU2LjM1MjIsNDU1LjY5ODUsMjUxLjk5MzQsNDU5LjMwNDIsMjYxLjMzLDQ1Ni4xNjkxIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMDsiLz48IS0tTUQ1PVs3NmJkZGQxZTcxNjIwZDViY2FkZTA3ZTdiMjJkZjgwOV0KQHN0YXJ0dW1sDQoNCiF0aGVtZSBwbGFpbg0KbGVmdCB0byByaWdodCBkaXJlY3Rpb24NCmFjdG9yICJEZXZPcHMgVXNlciIgYXMgZA0KDQpwYWNrYWdlICJHcnVDbG91ZCB1c2UgY2FzZXMiIHsNCiAgdXNlY2FzZSAiRGlzcGxheSBkaWFncmFtcyBmcm9tIGxpdmUgcmVzb3VyY2VzIiBhcyBVQzENCiAgdXNlY2FzZSAiR2VuZXJhdGUgaW5mcmFzdHJ1Y3R1cmUgY29kZSBmcm9tIGxpdmUgcmVzb3VyY2VzIiBhcyBVQzINCiAgdXNlY2FzZSAiRGVwbG95IHJlc291cmNlcyB0byB2YXJpb3VzIHBoYXNlcyIgYXMgVUMzDQogIHVzZWNhc2UgIlVwZGF0ZSByZXNvdXJjZXMiIGFzIFVDNA0KICB1c2VjYXNlICJEZXN0cm95IHJlc291cmNlcyIgYXMgVUM1DQp9DQoNCm5vdGUgcmlnaHQgb2YgVUMzDQpwcm9kLCB0ZXN0LCBldGMgLi4uDQplbmQgbm90ZQ0KDQpkIC0gLT4gVUMxDQpkIC0gLT4gVUMyDQpkIC0gLT4gVUMzDQpkIC0gLT4gVUM0DQpkIC0gLT4gVUM1DQoNCkBlbmR1bWwNCgpAc3RhcnR1bWwNCg0KDQoNCg0KDQoNCg0KDQo8c3R5bGU+DQogIHJvb3Qgew0KICAgIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KICAgIEZvbnRDb2xvciBibGFjaw0KICAgIEZvbnROYW1lIFZlcmRhbmENCiAgICBIeXBlckxpbmtDb2xvciBibHVlDQogICAgTGluZUNvbG9yIGJsYWNrDQogICAgTGluZVRoaWNrbmVzcyAxDQogICAgTWFyZ2luIDUNCiAgfQ0KICBjYXB0aW9uIHsNCiAgICBMaW5lVGhpY2tuZXNzIDANCiAgfQ0KICBmb290ZXIgew0KICAgIExpbmVUaGlja25lc3MgMA0KICB9DQogIGhlYWRlciB7DQogICAgTGluZVRoaWNrbmVzcyAwDQogIH0NCiAgbm9kZSB7DQogICAgTWF4aW11bVdpZHRoIDMwMA0KICB9DQogIHRpdGxlIHsNCiAgICBGb250U2l6ZSAyMg0KICAgIExpbmVUaGlja25lc3MgMA0KICB9DQo8L3N0eWxlPg0KDQpza2lucGFyYW0gQXJyb3dMb2xsaXBvcENvbG9yIGJsYWNrDQpza2lucGFyYW0gQmFja2dyb3VuZENvbG9yIHdoaXRlDQpza2lucGFyYW0gRGVmYXVsdEZvbnROYW1lIFZlcmRhbmENCnNraW5wYXJhbSBEZWZhdWx0TW9ub3NwYWNlZEZvbnROYW1lIENvdXJpZXINCnNraW5wYXJhbSBMaWZlbGluZVN0cmF0ZWd5IG5vc29saWQNCnNraW5wYXJhbSBQYXJ0aWNpcGFudFBhZGRpbmcgMTANCnNraW5wYXJhbSBTZXF1ZW5jZUxpZmVMaW5lQm9yZGVyQ29sb3IgYmxhY2sNCnNraW5wYXJhbSBTaGFkb3dpbmcgZmFsc2UNCnNraW5wYXJhbSBVc2VCZXRhU3R5bGUgdHJ1ZQ0KDQpza2lucGFyYW0gQWN0aXZpdHkgew0KICBCYWNrZ3JvdW5kQ29sb3Igd2hpdGUNCiAgQmFyQ29sb3IgYmxhY2sNCiAgQm9yZGVyQ29sb3IgYmxhY2sNCiAgRm9udENvbG9yIGJsYWNrDQogIEZvbnROYW1lIFZlcmRhbmENCn0NCnNraW5wYXJhbSBCb3VuZGFyeSB7DQogIEZvbnRDb2xvciBibGFjaw0KfQ0Kc2tpbnBhcmFtIEJveCB7DQogIFBhZGRpbmcgNQ0KfQ0Kc2tpbnBhcmFtIENpcmNsZWRDaGFyYWN0ZXIgew0KICBGb250Q29sb3IgYmxhY2sNCiAgRm9udE5hbWUgQ291cmllcg0KICBSYWRpdXMgOQ0KfQ0Kc2tpbnBhcmFtIENsYXNzIHsNCiAgQmFja2dyb3VuZENvbG9yIHdoaXRlDQogIEJvcmRlckNvbG9yIGJsYWNrDQogIEZvbnRDb2xvciBibGFjaw0KICBGb250TmFtZSBWZXJkYW5hDQp9DQpza2lucGFyYW0gQ2xhc3NBdHRyaWJ1dGUgew0KICBGb250Q29sb3IgYmxhY2sNCiAgRm9udE5hbWUgVmVyZGFuYQ0KfQ0Kc2tpbnBhcmFtIENsYXNzU3RlcmVvdHlwZSB7DQogIEZvbnRDb2xvciBibGFjaw0KICBGb250TmFtZSBWZXJkYW5hDQp9DQpza2lucGFyYW0gRm9vdGVyIHsNCiAgRm9udENvbG9yIGJsYWNrDQogIEZvbnROYW1lIFZlcmRhbmENCn0NCnNraW5wYXJhbSBIZWFkZXIgew0KICBGb250Q29sb3IgYmxhY2sNCiAgRm9udE5hbWUgVmVyZGFuYQ0KfQ0Kc2tpbnBhcmFtIEh5cGVybGluayB7DQogIENvbG9yIGJsdWUNCn0NCnNraW5wYXJhbSBJY29uUGFja2FnZSB7DQogIENvbG9yIGJsYWNrDQogIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KfQ0Kc2tpbnBhcmFtIEljb25Qcml2YXRlIHsNCiAgQ29sb3IgYmxhY2sNCiAgQmFja2dyb3VuZENvbG9yIHdoaXRlDQp9DQpza2lucGFyYW0gSWNvblByb3RlY3RlZCB7DQogIENvbG9yIGJsYWNrDQogIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KfQ0Kc2tpbnBhcmFtIEljb25QdWJsaWMgew0KICBDb2xvciBibGFjaw0KICBCYWNrZ3JvdW5kQ29sb3Igd2hpdGUNCn0NCnNraW5wYXJhbSBOb3RlIHsNCiAgRm9udENvbG9yIGJsYWNrDQogIEZvbnROYW1lIFZlcmRhbmENCn0NCnNraW5wYXJhbSBPYmplY3Qgew0KICBCb3JkZXJDb2xvciBibGFjaw0KfQ0Kc2tpbnBhcmFtIFBhY2thZ2Ugew0KICBCb3JkZXJDb2xvciBibGFjaw0KICBGb250Q29sb3IgYmxhY2sNCiAgRm9udE5hbWUgVmVyZGFuYQ0KfQ0Kc2tpbnBhcmFtIFN0YXRlIHsNCiAgQmFja2dyb3VuZENvbG9yIHdoaXRlDQogIEJvcmRlckNvbG9yIGJsYWNrDQp9DQpza2lucGFyYW0gU3RlcmVvdHlwZUEgew0KICBCYWNrZ3JvdW5kQ29sb3Igd2hpdGUNCiAgQm9yZGVyQ29sb3IgYmxhY2sNCn0NCnNraW5wYXJhbSBTdGVyZW90eXBlQyB7DQogIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KICBCb3JkZXJDb2xvciBibGFjaw0KfQ0Kc2tpbnBhcmFtIFN0ZXJlb3R5cGVFIHsNCiAgQmFja2dyb3VuZENvbG9yIHdoaXRlDQogIEJvcmRlckNvbG9yIGJsYWNrDQp9DQpza2lucGFyYW0gU3RlcmVvdHlwZUkgew0KICBCYWNrZ3JvdW5kQ29sb3Igd2hpdGUNCiAgQm9yZGVyQ29sb3IgYmxhY2sNCn0NCnNraW5wYXJhbSBTdGVyZW90eXBlTiB7DQogIEJhY2tncm91bmRDb2xvciB3aGl0ZQ0KICBCb3JkZXJDb2xvciBibGFjaw0KfQ0Kc2tpbnBhcmFtIFVzZUNhc2VTdGVyZW9UeXBlIHsNCiAgRm9udENvbG9yIGJsYWNrDQogIEZvbnROYW1lIFZlcmRhbmENCn0NCmxlZnQgdG8gcmlnaHQgZGlyZWN0aW9uDQphY3RvciAiRGV2T3BzIFVzZXIiIGFzIGQNCg0KcGFja2FnZSAiR3J1Q2xvdWQgdXNlIGNhc2VzIiB7DQogIHVzZWNhc2UgIkRpc3BsYXkgZGlhZ3JhbXMgZnJvbSBsaXZlIHJlc291cmNlcyIgYXMgVUMxDQogIHVzZWNhc2UgIkdlbmVyYXRlIGluZnJhc3RydWN0dXJlIGNvZGUgZnJvbSBsaXZlIHJlc291cmNlcyIgYXMgVUMyDQogIHVzZWNhc2UgIkRlcGxveSByZXNvdXJjZXMgdG8gdmFyaW91cyBwaGFzZXMiIGFzIFVDMw0KICB1c2VjYXNlICJVcGRhdGUgcmVzb3VyY2VzIiBhcyBVQzQNCiAgdXNlY2FzZSAiRGVzdHJveSByZXNvdXJjZXMiIGFzIFVDNQ0KfQ0KDQpub3RlIHJpZ2h0IG9mIFVDMw0KcHJvZCwgdGVzdCwgZXRjIC4uLg0KZW5kIG5vdGUNCg0KZCAtIC0+IFVDMQ0KZCAtIC0+IFVDMg0KZCAtIC0+IFVDMw0KZCAtIC0+IFVDNA0KZCAtIC0+IFVDNQ0KDQpAZW5kdW1sDQoKUGxhbnRVTUwgdmVyc2lvbiAxLjIwMjEuMTQoRnJpIE5vdiAxMiAxMTo0Njo1MCBDT1QgMjAyMSkKKEdQTCBzb3VyY2UgZGlzdHJpYnV0aW9uKQpKYXZhIFJ1bnRpbWU6IE9wZW5KREsgUnVudGltZSBFbnZpcm9ubWVudApKVk06IE9wZW5KREsgNjQtQml0IFNlcnZlciBWTQpEZWZhdWx0IEVuY29kaW5nOiBVVEYtOApMYW5ndWFnZTogZW4KQ291bnRyeTogR0IKLS0+PC9nPjwvc3ZnPg=="},94641:function(e,t,a){t.Z=a.p+"assets/images/grucloud-cli-install-6714dbcfdd7a87d2a06784a4d2c0ac46.svg"}}]);