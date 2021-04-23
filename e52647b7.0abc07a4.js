(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(222)),l={id:"List",title:"List Resources"},i={id:"cli/List",isDocsHomePage:!1,title:"List Resources",description:"The list commands lists the live resources.",source:"@site/docs/cli/List.md",permalink:"/docs/cli/List",sidebar:"someSidebar",previous:{title:"Plan Apply",permalink:"/docs/cli/PlanApply"},next:{title:"Plan Destroy",permalink:"/docs/cli/PlanDestroy"}},o=[{value:"Command Options",id:"command-options",children:[{value:"graph",id:"graph",children:[]},{value:"all",id:"all",children:[]},{value:"name",id:"name",children:[]},{value:"id",id:"id",children:[]},{value:"types",id:"types",children:[]},{value:"our",id:"our",children:[]},{value:"canBeDeleted",id:"canbedeleted",children:[]},{value:"--default-exclude",id:"--default-exclude",children:[]},{value:"provider",id:"provider",children:[]}]}],s={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"list")," commands lists the live resources."),Object(c.b)("h2",{id:"command-options"},"Command Options"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gc help list\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Usage: gc list|l [options]\n\nList the live resources\n\nOptions:\n  -g, --graph             create an SVG representation of the live infrastructure\n  -a, --all               List also read-only resources\n  -n, --name <value>      List by name\n  --id <value>            List by id\n  -o, --our               List only our managed resources\n  --default-exclude       Exclude the default resources, i.e VPC and Subnet\n  -d, --canBeDeleted      display resources which can be deleted, a.k.a non default\n                          resources\n  -p, --provider <value>  Filter by provider, multiple values allowed\n  -t, --types <value>     Filter by type, multiple values allowed\n  -h, --help              display help for command\n")),Object(c.b)("h3",{id:"graph"},"graph"),Object(c.b)("p",null,"Produce a diagram depicting the lives resources and their associations."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc list --graph\n")),Object(c.b)("h3",{id:"all"},"all"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"all")," option also display list-only resources which are resources not created/deleted by this application. For instance the AWS KeyPair resource is a considered as list-only."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc list --all\n")),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"name")," option lists the resource given its name:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc list --name web-server\n")),Object(c.b)("h3",{id:"id"},"id"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"id")," option lists the resource given its id:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc list --name ewBMe9BLC\n")),Object(c.b)("h3",{id:"types"},"types"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"types")," option lists the resources filtering by types"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc list --types Server\n")),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"types")," option is repeatable:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc list --types Server --types SecurityGroup\n")),Object(c.b)("h3",{id:"our"},"our"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"our")," option only list resources deployed by this application"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gc list --our\n")),Object(c.b)("h3",{id:"canbedeleted"},"canBeDeleted"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"canBeDeleted")," option only lists resources that can be deleted by this application. For instance, the default AWS VPC for instance cannot be deleted and will not show up with this option."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gc list --canBeDeleted\n")),Object(c.b)("h3",{id:"--default-exclude"},"--default-exclude"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"--default-exclude")," option excludes the default resources such as VPC, subnet and security group."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gc list --default-exclude\n")),Object(c.b)("h3",{id:"provider"},"provider"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"provider")," option only lists resources for a given provider"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gc list --provider=aws\n")))}p.isMDXComponent=!0},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,O=b["".concat(l,".").concat(d)]||b[d]||u[d]||c;return n?a.a.createElement(O,i(i({ref:t},s),{},{components:n})):a.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);