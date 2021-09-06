(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),c=(n(0),n(229)),s={id:"AwsRequirements",title:"Requirements"},o={unversionedId:"aws/AwsRequirements",id:"aws/AwsRequirements",isDocsHomePage:!1,title:"Requirements",description:"Ensure that you have the AWS necessary tools, accounts, keys, etc...",source:"@site/docs/aws/AwsRequirements.md",sourceDirName:"aws",slug:"/aws/AwsRequirements",permalink:"/docs/aws/AwsRequirements",version:"current",frontMatter:{id:"AwsRequirements",title:"Requirements"},sidebar:"docs",previous:{title:"Parameter",permalink:"/docs/aws/resources/SSM/SSMParameter"},next:{title:"Address",permalink:"/docs/google/resources/Compute/Address"}},i=[{value:"AWS account",id:"aws-account",children:[]},{value:"AWS CLI",id:"aws-cli",children:[]},{value:"Access Key",id:"access-key",children:[]},{value:"Configure AWS CLI",id:"configure-aws-cli",children:[]},{value:"Key Pair",id:"key-pair",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Ensure that you have the AWS necessary tools, accounts, keys, etc..."),Object(c.b)("h2",{id:"aws-account"},"AWS account"),Object(c.b)("p",null,"Ensure access to the ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com"},"amazon cloud console")," and create an account if necessary."),Object(c.b)("h2",{id:"aws-cli"},"AWS CLI"),Object(c.b)("p",null,"Ensure the ",Object(c.b)("em",{parentName:"p"},"AWS CLI")," is installed and configured:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"aws --version\n")),Object(c.b)("p",null,"If not, visit ",Object(c.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html"},"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html")),Object(c.b)("h2",{id:"access-key"},"Access Key"),Object(c.b)("p",null,"Visit the ",Object(c.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/iam/home#/security_credentials"},"security credentials")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Click on ",Object(c.b)("strong",{parentName:"li"},"Access key (access key ID and secret access key).")),Object(c.b)("li",{parentName:"ul"},"Click on the button ",Object(c.b)("strong",{parentName:"li"},"Create New Access Key"),".")),Object(c.b)("p",null,"Write down the ",Object(c.b)("strong",{parentName:"p"},"AWSAccessKeyId")," and ",Object(c.b)("strong",{parentName:"p"},"AWSSecretKey")),Object(c.b)("h2",{id:"configure-aws-cli"},"Configure AWS CLI"),Object(c.b)("p",null,"Configure the account, region and zone:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"aws configure\n")),Object(c.b)("h2",{id:"key-pair"},"Key Pair"),Object(c.b)("p",null,"Let's create an ssh key pair to access the server."),Object(c.b)("p",null,"Some key pairs may already have been created, here is how to list all existing key pairs:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"aws ec2 describe-key-pairs\n")),Object(c.b)("p",null,"If you need to create a new key pair, go to the ",Object(c.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"},"AWS documentation for ec2 key pair")))}u.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||c;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<c;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);