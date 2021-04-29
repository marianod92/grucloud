(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{193:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||c;return r?o.a.createElement(b,s(s({ref:t},i),{},{components:r})):o.a.createElement(b,s({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var i=2;i<c;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),c=(r(0),r(193)),a={id:"NetworkAcl",title:"Network Access Control List"},s={unversionedId:"aws/resources/EC2/NetworkAcl",id:"aws/resources/EC2/NetworkAcl",isDocsHomePage:!1,title:"Network Access Control List",description:"List Network Access Control List",source:"@site/docs/aws/resources/EC2/NetworkAcl.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/NetworkAcl",permalink:"/docs/aws/resources/EC2/NetworkAcl",version:"current",frontMatter:{id:"NetworkAcl",title:"Network Access Control List"},sidebar:"docs",previous:{title:"Nat Gateway",permalink:"/docs/aws/resources/EC2/NatGateway"},next:{title:"Route",permalink:"/docs/aws/resources/EC2/Route"}},l=[{value:"List",id:"list",children:[]}],i={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"List ",Object(c.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html"},"Network Access Control List")),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("p",null,"List only the Network ACL with the ",Object(c.b)("em",{parentName:"p"},"NetworkAcl")," filter:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t NetworkAcl\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 NetworkAcl from aws                                                                 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name         \u2502 Data                                                            \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 acl-f57a5a9d \u2502 Associations:                                                   \u2502 NO   \u2502\n\u2502              \u2502   - NetworkAclAssociationId: aclassoc-0fce9c09b0776e224         \u2502      \u2502\n\u2502              \u2502     NetworkAclId: acl-f57a5a9d                                  \u2502      \u2502\n\u2502              \u2502     SubnetId: subnet-0f6f085fc384bf8ce                          \u2502      \u2502\n\u2502              \u2502 Entries:                                                        \u2502      \u2502\n\u2502              \u2502   - CidrBlock: 0.0.0.0/0                                        \u2502      \u2502\n\u2502              \u2502     Egress: true                                                \u2502      \u2502\n\u2502              \u2502     Protocol: -1                                                \u2502      \u2502\n\u2502              \u2502     RuleAction: allow                                           \u2502      \u2502\n\u2502              \u2502     RuleNumber: 100                                             \u2502      \u2502\n\u2502              \u2502   - CidrBlock: 0.0.0.0/0                                        \u2502      \u2502\n\u2502              \u2502     Egress: true                                                \u2502      \u2502\n\u2502              \u2502     Protocol: -1                                                \u2502      \u2502\n\u2502              \u2502     RuleAction: deny                                            \u2502      \u2502\n\u2502              \u2502     RuleNumber: 32767                                           \u2502      \u2502\n\u2502              \u2502   - CidrBlock: 0.0.0.0/0                                        \u2502      \u2502\n\u2502              \u2502     Egress: false                                               \u2502      \u2502\n\u2502              \u2502     Protocol: -1                                                \u2502      \u2502\n\u2502              \u2502     RuleAction: allow                                           \u2502      \u2502\n\u2502              \u2502     RuleNumber: 1                                               \u2502      \u2502\n\u2502              \u2502   - CidrBlock: 0.0.0.0/0                                        \u2502      \u2502\n\u2502              \u2502     Egress: false                                               \u2502      \u2502\n\u2502              \u2502     Protocol: -1                                                \u2502      \u2502\n\u2502              \u2502     RuleAction: allow                                           \u2502      \u2502\n\u2502              \u2502     RuleNumber: 100                                             \u2502      \u2502\n\u2502              \u2502   - CidrBlock: 0.0.0.0/0                                        \u2502      \u2502\n\u2502              \u2502     Egress: false                                               \u2502      \u2502\n\u2502              \u2502     Protocol: -1                                                \u2502      \u2502\n\u2502              \u2502     RuleAction: deny                                            \u2502      \u2502\n\u2502              \u2502     RuleNumber: 32767                                           \u2502      \u2502\n\u2502              \u2502 IsDefault: true                                                 \u2502      \u2502\n\u2502              \u2502 NetworkAclId: acl-f57a5a9d                                      \u2502      \u2502\n\u2502              \u2502 Tags: []                                                        \u2502      \u2502\n\u2502              \u2502 VpcId: vpc-bbbafcd3                                             \u2502      \u2502\n\u2502              \u2502 OwnerId: 840541460064                                           \u2502      \u2502\n\u2502              \u2502                                                                 \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                                  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 NetworkAcl         \u2502 acl-f57a5a9d                                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t NetworkAcl" executed in 2s\n')))}u.isMDXComponent=!0}}]);