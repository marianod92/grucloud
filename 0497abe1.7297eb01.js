(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),s=t(6),a=(t(0),t(224)),o={id:"PersistentVolumeClaim",title:"Persistent Volume Claim"},i={id:"k8s/resources/PersistentVolumeClaim",isDocsHomePage:!1,title:"Persistent Volume Claim",description:"Manages a Kubernetes Persistent Volume Claim",source:"@site/docs/k8s/resources/PersistentVolumeClaim.md",permalink:"/docs/k8s/resources/PersistentVolumeClaim",sidebar:"someSidebar",previous:{title:"PersistentVolume",permalink:"/docs/k8s/resources/PersistentVolume"},next:{title:"Role",permalink:"/docs/k8s/resources/Role"}},c=[{value:"List",id:"list",children:[]},{value:"UsedBy",id:"usedby",children:[]}],l={rightToc:c};function u(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Manages a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"}),"Kubernetes Persistent Volume Claim")),Object(a.b)("h2",{id:"list"},"List"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"gc list --types PersistentVolumeClaim\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'Listing resources on 1 provider: k8s\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing 4/4\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 PersistentVolumeClaim from k8s                                               \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name             \u2502 Data                                                 \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 pv-db-postgres-0 \u2502 metadata:                                            \u2502 NO   \u2502\n\u2502                  \u2502   name: pv-db-postgres-0                             \u2502      \u2502\n\u2502                  \u2502   namespace: default                                 \u2502      \u2502\n\u2502                  \u2502   selfLink: /api/v1/namespaces/default/persistentvo\u2026 \u2502      \u2502\n\u2502                  \u2502   uid: 414be8cc-d38b-43ba-a1b6-6e1a96f4ac55          \u2502      \u2502\n\u2502                  \u2502   resourceVersion: 118331                            \u2502      \u2502\n\u2502                  \u2502   creationTimestamp: 2021-03-23T15:36:24Z            \u2502      \u2502\n\u2502                  \u2502   labels:                                            \u2502      \u2502\n\u2502                  \u2502     app: db                                          \u2502      \u2502\n\u2502                  \u2502   annotations:                                       \u2502      \u2502\n\u2502                  \u2502     pv.kubernetes.io/bind-completed: yes             \u2502      \u2502\n\u2502                  \u2502     pv.kubernetes.io/bound-by-controller: yes        \u2502      \u2502\n\u2502                  \u2502     volume.beta.kubernetes.io/storage-provisioner: \u2026 \u2502      \u2502\n\u2502                  \u2502     volume.kubernetes.io/selected-node: ip-192-168-\u2026 \u2502      \u2502\n\u2502                  \u2502   finalizers:                                        \u2502      \u2502\n\u2502                  \u2502     - "kubernetes.io/pvc-protection"                 \u2502      \u2502\n\u2502                  \u2502 spec:                                                \u2502      \u2502\n\u2502                  \u2502   accessModes:                                       \u2502      \u2502\n\u2502                  \u2502     - "ReadWriteOnce"                                \u2502      \u2502\n\u2502                  \u2502   resources:                                         \u2502      \u2502\n\u2502                  \u2502     requests:                                        \u2502      \u2502\n\u2502                  \u2502       storage: 1Gi                                   \u2502      \u2502\n\u2502                  \u2502   volumeName: pvc-414be8cc-d38b-43ba-a1b6-6e1a96f4a\u2026 \u2502      \u2502\n\u2502                  \u2502   storageClassName: gp2                              \u2502      \u2502\n\u2502                  \u2502   volumeMode: Filesystem                             \u2502      \u2502\n\u2502                  \u2502 status:                                              \u2502      \u2502\n\u2502                  \u2502   phase: Bound                                       \u2502      \u2502\n\u2502                  \u2502   accessModes:                                       \u2502      \u2502\n\u2502                  \u2502     - "ReadWriteOnce"                                \u2502      \u2502\n\u2502                  \u2502   capacity:                                          \u2502      \u2502\n\u2502                  \u2502     storage: 1Gi                                     \u2502      \u2502\n\u2502                  \u2502                                                      \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 PersistentVolumeC\u2026 \u2502 pv-db-postgres-0                                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc list --types PersistentVolumeClaim" executed in 2s\n')),Object(a.b)("h2",{id:"usedby"},"UsedBy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./PersistentVolume"}),"PersistentVolume"))))}u.isMDXComponent=!0},224:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),u=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},b=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||a;return t?s.a.createElement(d,i(i({ref:n},l),{},{components:t})):s.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);