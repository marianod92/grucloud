(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{229:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||s;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,c=new Array(s);c[0]=b;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<s;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),s=(r(0),r(229)),c={id:"ElasticIpAddress",title:"Elastic Ip Address"},o={unversionedId:"aws/resources/EC2/ElasticIpAddress",id:"aws/resources/EC2/ElasticIpAddress",isDocsHomePage:!1,title:"Elastic Ip Address",description:"Provides an Elastic Ip Address to be associated to an EC2 instance",source:"@site/docs/aws/resources/EC2/ElasticIpAddress.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/ElasticIpAddress",permalink:"/docs/aws/resources/EC2/ElasticIpAddress",version:"current",frontMatter:{id:"ElasticIpAddress",title:"Elastic Ip Address"},sidebar:"docs",previous:{title:"EC2 Instance",permalink:"/docs/aws/resources/EC2/EC2"},next:{title:"AMI",permalink:"/docs/aws/resources/EC2/Image"}},i=[{value:"Examples",id:"examples",children:[]},{value:"Used By",id:"used-by",children:[]}],l={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Provides an ",Object(s.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html"},"Elastic Ip Address")," to be associated to an EC2 instance"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'const ip = provider.EC2.makeElasticIpAddress({\n  name: "myip",\n});\n')),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2/iac.js"},"simple example")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ec2/ec2-vpc/iac.js"},"example with internet gateway and routing table"))),Object(s.b)("h3",{id:"used-by"},"Used By"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./EC2"},"EC2")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./EC2"},"NatGateway"))))}p.isMDXComponent=!0}}]);