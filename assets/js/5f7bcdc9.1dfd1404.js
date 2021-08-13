(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{131:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),a=(t(0),t(201)),c={id:"Hook",title:"Run Hooks"},l={unversionedId:"cli/Hook",id:"cli/Hook",isDocsHomePage:!1,title:"Run Hooks",description:"The run command executes the hooks when the infrastructure is being deployed and destroyed.",source:"@site/docs/cli/Hook.md",sourceDirName:"cli",slug:"/cli/Hook",permalink:"/docs/cli/Hook",version:"current",frontMatter:{id:"Hook",title:"Run Hooks"},sidebar:"docs",previous:{title:"Plan Destroy",permalink:"/docs/cli/PlanDestroy"}},i=[{value:"Command options",id:"command-options",children:[]}],u={toc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"run")," command executes the hooks when the infrastructure is being deployed and destroyed."),Object(a.b)("p",null,"They are 2 types of hooks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"provider hook: run per provider."),Object(a.b)("li",{parentName:"ul"},"global hook: run globally for all providers.")),Object(a.b)("p",null,"Execute the provider hooks when the infrastructure is deployed:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc run --onDeployed\n")),Object(a.b)("p",null,"Execute the global hook when the infrastructure is deployed:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"gc run --onDeployedGlobal\n")),Object(a.b)("h2",{id:"command-options"},"Command options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"gc run --help\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Usage: gc run|r [options]\n\nRun the hooks\n\nOptions:\n  --onDeployed            Run Post Deploy Hook\n  --onDeployedGlobal      Run Global Post Deploy Hook\n  --onDestroyed           Run Post Destroy Hook\n  --onDestroyedGlobal     Run Global Post Destroy Hook\n  -p, --provider <value>  Filter by provider, multiple values allowed\n  -h, --help              display help for command\n")))}p.isMDXComponent=!0},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(m,l(l({ref:n},u),{},{components:t})):o.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);