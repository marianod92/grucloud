(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(0),t(160)),c={id:"gc",title:"gc"},i={id:"cli/gc",isDocsHomePage:!1,title:"gc",description:"The gc command line interface is a short for GruCloud.",source:"@site/docs/cli/gc.md",permalink:"/docs/cli/gc",sidebar:"someSidebar",previous:{title:"TL;DR",permalink:"/docs/TLDR"},next:{title:"Plan Query",permalink:"/docs/cli/PlanQuery"}},p=[],l={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"gc")," command line interface is a short for GruCloud.\nIt is a ",Object(a.b)("em",{parentName:"p"},"node js")," application which can be installed with ",Object(a.b)("em",{parentName:"p"},"npm")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g @grucloud/core\n")),Object(a.b)("p",null,"Now check that ",Object(a.b)("strong",{parentName:"p"},"gc")," is installed correctly:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"gc\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Usage: gc [options] [command]\n\nOptions:\n  -V, --version        output the version number\n  -i, --infra <file>   infrastructure default is iac.js\n  -c, --config <file>  config file, default is config.js\n  -j, --json <file>    write result to a file in json format\n  -h, --help           display help for command\n\nCommands:\n  plan|p               Query the plan\n  apply|a [options]    Apply the plan, a.k.a deploy the resources\n  destroy|d [options]  Destroy the resources\n  list|l [options]     List the resources\n  help [command]       display help for command\n")))}s.isMDXComponent=!0},160:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return t?o.a.createElement(b,i(i({ref:n},l),{},{components:t})):o.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);