(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),l=n(8),a=(n(0),n(229)),c={id:"List",title:"List Resources"},i={unversionedId:"cli/List",id:"cli/List",isDocsHomePage:!1,title:"List Resources",description:"The list commands lists the live resources.",source:"@site/docs/cli/List.md",sourceDirName:"cli",slug:"/cli/List",permalink:"/docs/cli/List",version:"current",frontMatter:{id:"List",title:"List Resources"},sidebar:"docs",previous:{title:"Plan Apply",permalink:"/docs/cli/PlanApply"},next:{title:"Tree",permalink:"/docs/cli/Tree"}},o=[{value:"Command Options",id:"command-options",children:[{value:"graph",id:"graph",children:[]},{value:"all",id:"all",children:[]},{value:"name",id:"name",children:[]},{value:"id",id:"id",children:[]},{value:"types",id:"types",children:[]},{value:"types-exclude",id:"types-exclude",children:[]},{value:"our",id:"our",children:[]},{value:"canBeDeleted",id:"canbedeleted",children:[]},{value:"--default-exclude",id:"--default-exclude",children:[]},{value:"provider",id:"provider",children:[]}]}],s={toc:o};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"list")," commands lists the live resources."),Object(a.b)("h2",{id:"command-options"},"Command Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"gc help list\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Usage: gc list|l [options]\n\nList the live resources\n\nOptions:\n  -g, --graph                  create an SVG representation of the live infrastructure\n  -a, --all                    List also read-only resources\n  -n, --name <value>           List by name\n  --id <value>                 List by id\n  -o, --our                    List only our managed resources\n  --default-exclude            Exclude the default resources, i.e VPC and Subnet\n  -e, --types-exclude <value>  Exclude by type, multiple values allowed\n  -d, --canBeDeleted           display resources which can be deleted, a.k.a non default resources\n  -p, --provider <value>       Filter by provider, multiple values allowed\n  -t, --types <value>          Include by type, multiple values allowed\n  -h, --help                   display help for command\n")),Object(a.b)("h3",{id:"graph"},"graph"),Object(a.b)("p",null,"Produce a diagram depicting the lives resources and their associations."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc list --graph\n")),Object(a.b)("h3",{id:"all"},"all"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"all")," option also display list-only resources which are resources not created/deleted by this application. For instance the AWS KeyPair resource is a considered as list-only."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc list --all\n")),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"name")," option lists the resource given its name:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc list --name web-server\n")),Object(a.b)("h3",{id:"id"},"id"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"id")," option lists the resource given its id:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc list --name ewBMe9BLC\n")),Object(a.b)("h3",{id:"types"},"types"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"types")," option lists the resources filtering by types"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc list --types Server\n")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"types")," option is repeatable:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc list --types Server --types SecurityGroup\n")),Object(a.b)("h3",{id:"types-exclude"},"types-exclude"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"--types-exclude")," option excludes one or more types:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"gc list --graph  --types-exclude Certificate --types-exclude Route53Domain --types-exclude NetworkInterface\n")),Object(a.b)("h3",{id:"our"},"our"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"our")," option only list resources deployed by this application"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"gc list --our\n")),Object(a.b)("h3",{id:"canbedeleted"},"canBeDeleted"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"canBeDeleted")," option only lists resources that can be deleted by this application. For instance, the default AWS VPC for instance cannot be deleted and will not show up with this option."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"gc list --canBeDeleted\n")),Object(a.b)("h3",{id:"--default-exclude"},"--default-exclude"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"--default-exclude")," option excludes the default resources such as VPC, subnet and security group."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"gc list --default-exclude\n")),Object(a.b)("h3",{id:"provider"},"provider"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"provider")," option only lists resources for a given provider"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"gc list --provider=aws\n")))}p.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?l.a.createElement(m,i(i({ref:t},s),{},{components:n})):l.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);