(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=(t(0),t(193));const a={id:"AwsConfig",title:"Configuration"},i={unversionedId:"aws/AwsConfig",id:"aws/AwsConfig",isDocsHomePage:!1,title:"Configuration",description:"By default, credentials and config are obtained through files managed by the AWS CLI. These credentials and config can be overidden.",source:"@site/docs/aws/AwsConfig.md",sourceDirName:"aws",slug:"/aws/AwsConfig",permalink:"/docs/aws/AwsConfig",version:"current",frontMatter:{id:"AwsConfig",title:"Configuration"}},c=[{value:"Environment file",id:"environment-file",children:[]},{value:"Config file",id:"config-file",children:[]}],l={toc:c};function s({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, credentials and config are obtained through files managed by the AWS CLI. These credentials and config can be overidden."),Object(o.b)("h2",{id:"environment-file"},"Environment file"),Object(o.b)("p",null,"Create ",Object(o.b)("strong",{parentName:"p"},"default.env")," and set the correct values:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"AWSAccessKeyId=\nAWSSecretKey=\n")),Object(o.b)("h2",{id:"config-file"},"Config file"),Object(o.b)("p",null,"Edit ",Object(o.b)("strong",{parentName:"p"},"config.js")," and set region and zone:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'module.exports = () => ({\n  region: "eu-west-2",\n  zone: "eu-west-2a",\n});\n')),Object(o.b)("p",null,"To find out the list of regions:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"aws ec2 describe-regions\n")),Object(o.b)("p",null,"Choose a region close to your location, at this point select a zone name in the given region:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"aws ec2 describe-availability-zones --region eu-west-2\n")))}s.isMDXComponent=!0},193:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),b=r,d=f["".concat(i,".").concat(b)]||f[b]||p[b]||a;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);