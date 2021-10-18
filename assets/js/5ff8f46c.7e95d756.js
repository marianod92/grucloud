(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(8),p=(t(0),t(232)),c={id:"AppSyncGraphqlApi",title:"GraphqlApi"},o={unversionedId:"aws/resources/AppSync/AppSyncGraphqlApi",id:"aws/resources/AppSync/AppSyncGraphqlApi",isDocsHomePage:!1,title:"GraphqlApi",description:"Manages an AppSync GraphqlApi.",source:"@site/docs/aws/resources/AppSync/AppSyncGraphqlApi.md",sourceDirName:"aws/resources/AppSync",slug:"/aws/resources/AppSync/AppSyncGraphqlApi",permalink:"/docs/aws/resources/AppSync/AppSyncGraphqlApi",version:"current",frontMatter:{id:"AppSyncGraphqlApi",title:"GraphqlApi"},sidebar:"docs",previous:{title:"DataSource",permalink:"/docs/aws/resources/AppSync/AppSyncDataSource"},next:{title:"Resolver",permalink:"/docs/aws/resources/AppSync/AppSyncResolver"}},i=[{value:"Sample code",id:"sample-code",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Used By",id:"used-by",children:[]},{value:"Full Examples",id:"full-examples",children:[]},{value:"List",id:"list",children:[]}],s={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Manages an ",Object(p.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/appsync/home?#/apis"},"AppSync GraphqlApi"),"."),Object(p.b)("h2",{id:"sample-code"},"Sample code"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},'provider.AppSync.makeGraphqlApi({\n  name: "notes-api",\n  properties: ({ config }) => ({\n    authenticationType: "API_KEY",\n    xrayEnabled: true,\n    schemaFile: "my-api.graphql",\n    apiKeys: [{ description: "Graphql Api Keys" }],\n  }),\n});\n')),Object(p.b)("h2",{id:"properties"},"Properties"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appsync/interfaces/creategraphqlapicommandinput.html"},"create properties"))),Object(p.b)("h2",{id:"used-by"},"Used By"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/docs/aws/resources/AppSync/AppSyncResolver"},"Resolver")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"/docs/aws/resources/AppSync/AppSyncDataSource"},"Data Source"))),Object(p.b)("h2",{id:"full-examples"},"Full Examples"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/appSync/graphql"},"Simple example"))),Object(p.b)("h2",{id:"list"},"List"),Object(p.b)("p",null,"The grpahql api can be filtered with the ",Object(p.b)("em",{parentName:"p"},"GraphqlApi")," type:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t GraphqlApi\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 AppSync::GraphqlApi from aws                                                    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: cdk-notes-appsync-api                                                       \u2502\n\u2502 managedByUs: Yes                                                                  \u2502\n\u2502 live:                                                                             \u2502\n\u2502   name: cdk-notes-appsync-api                                                     \u2502\n\u2502   apiId: memv4evddfe6lotdew4gewoyzm                                               \u2502\n\u2502   authenticationType: API_KEY                                                     \u2502\n\u2502   arn: arn:aws:appsync:eu-west-2:840541460064:apis/memv4evddfe6lotdew4gewoyzm     \u2502\n\u2502   uris:                                                                           \u2502\n\u2502     REALTIME: wss://f3zefikzkfgx3n3tzaj7wcr2aq.appsync-realtime-api.eu-west-2.am\u2026 \u2502\n\u2502     GRAPHQL: https://f3zefikzkfgx3n3tzaj7wcr2aq.appsync-api.eu-west-2.amazonaws.\u2026 \u2502\n\u2502   tags:                                                                           \u2502\n\u2502     gc-managed-by: grucloud                                                       \u2502\n\u2502     gc-project-name: aws-appsync-graphql                                          \u2502\n\u2502     gc-data-source-lambdaDatasource: lambdaDatasource                             \u2502\n\u2502     gc-stage: dev                                                                 \u2502\n\u2502     gc-created-by-provider: aws                                                   \u2502\n\u2502     Name: cdk-notes-appsync-api                                                   \u2502\n\u2502   xrayEnabled: true                                                               \u2502\n\u2502   wafWebAclArn: null                                                              \u2502\n\u2502   schema: schema {                                                                \u2502\n\u2502   query: Query                                                                    \u2502\n\u2502   mutation: Mutation                                                              \u2502\n\u2502   subscription: Subscription                                                      \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 type Mutation {                                                                   \u2502\n\u2502   createNote(note: NoteInput!): Note                                              \u2502\n\u2502   deleteNote(noteId: String!): String                                             \u2502\n\u2502   updateNote(note: UpdateNoteInput!): Note                                        \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 type Note {                                                                       \u2502\n\u2502   completed: Boolean!                                                             \u2502\n\u2502   id: ID!                                                                         \u2502\n\u2502   name: String!                                                                   \u2502\n\u2502   title: String                                                                   \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 type Query {                                                                      \u2502\n\u2502   getNoteById(noteId: String!): Note                                              \u2502\n\u2502   listNotes: [Note]                                                               \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 type Subscription {                                                               \u2502\n\u2502   onCreateNote: Note @aws_subscribe(mutations : ["createNote"])                   \u2502\n\u2502   onDeleteNote: String @aws_subscribe(mutations : ["deleteNote"])                 \u2502\n\u2502   onUpdateNote: Note @aws_subscribe(mutations : ["updateNote"])                   \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 input NoteInput {                                                                 \u2502\n\u2502   completed: Boolean!                                                             \u2502\n\u2502   id: ID!                                                                         \u2502\n\u2502   name: String!                                                                   \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 input UpdateNoteInput {                                                           \u2502\n\u2502   completed: Boolean                                                              \u2502\n\u2502   id: ID!                                                                         \u2502\n\u2502   name: String                                                                    \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502   apiKeys:                                                                        \u2502\n\u2502     - id: da2-xohuctlwfnhsxeu5gesxqkfl7e                                          \u2502\n\u2502       description: Graphql Api Keys                                               \u2502\n\u2502       expires: 1635004800                                                         \u2502\n\u2502       deletes: 1640188800                                                         \u2502\n\u2502                                                                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AppSync::GraphqlApi \u2502 cdk-notes-appsync-api                                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t GraphqlApi" executed in 5s\n')))}l.isMDXComponent=!0},232:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||p;return t?a.a.createElement(b,o(o({ref:n},s),{},{components:t})):a.a.createElement(b,o({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<p;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);