(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{193:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||r;return a?s.a.createElement(d,i(i({ref:t},l),{},{components:a})):s.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(3),s=(a(0),a(193));const r={id:"AwsMisc",title:"Miscellaneous"},c={unversionedId:"aws/AwsMisc",id:"aws/AwsMisc",isDocsHomePage:!1,title:"Miscellaneous",description:"Commands",source:"@site/docs/aws/AwsMisc.md",sourceDirName:"aws",slug:"/aws/AwsMisc",permalink:"/docs/aws/AwsMisc",version:"current",frontMatter:{id:"AwsMisc",title:"Miscellaneous"}},i=[{value:"Commands",id:"commands",children:[]},{value:"Useful Links",id:"useful-links",children:[]},{value:"LocalStack",id:"localstack",children:[]}],o={toc:i};function l({components:e,...t}){return Object(s.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"commands"},"Commands"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'aws configure\naws ec2 describe-regions\naws ec2 describe-availability-zones --region eu-west-2\naws ec2 create-default-subnet --availability-zone eu-west-2a\naws ec2 describe-instances\naws ec2 describe-instances --filters "Name=tag:name,Values=web-server"\naws ec2 describe-tags\naws ec2 describe-account-attributes\naws ec2 describe-images --filters "Name=name,Values=ubuntu*"\naws ec2 describe-images --filters "Name=Description,Values=*20.04*"\n\naws ec2 describe-images --filters "Name=description,Values=Ubuntu Server 20.04 LTS" "Name=architecture,Values=x86_64"\n\naws iam list-users\naws iam list-user-tags --user-name Alice\n')),Object(s.b)("h2",{id:"useful-links"},"Useful Links"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/"},"https://docs.aws.amazon.com/")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ec2-example-creating-an-instance.html"},"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ec2-example-creating-an-instance.html")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html"},"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Welcome.html"},"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Welcome.html")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/awsdocs/aws-doc-sdk-examples"},"https://github.com/awsdocs/aws-doc-sdk-examples")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://aws.amazon.com/sdk-for-node-js/"},"https://aws.amazon.com/sdk-for-node-js/")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/aws/aws-sdk-js-v3"},"https://github.com/aws/aws-sdk-js-v3"))),Object(s.b)("h2",{id:"localstack"},"LocalStack"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"sudo easy_install pip\npip install awscli\npip install awscli-local\n")))}l.isMDXComponent=!0}}]);