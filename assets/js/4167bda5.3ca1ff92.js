(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{117:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),o=(t(0),t(201)),s={id:"Deployment",title:"Deployment"},l={unversionedId:"k8s/resources/Deployment",id:"k8s/resources/Deployment",isDocsHomePage:!1,title:"Deployment",description:"Provides a Kubernetes Deployment.",source:"@site/docs/k8s/resources/Deployment.md",sourceDirName:"k8s/resources",slug:"/k8s/resources/Deployment",permalink:"/docs/k8s/resources/Deployment",version:"current",frontMatter:{id:"Deployment",title:"Deployment"},sidebar:"docs",previous:{title:"ConfigMap",permalink:"/docs/k8s/resources/ConfigMap"},next:{title:"Ingress",permalink:"/docs/k8s/resources/Ingress"}},c=[{value:"Examples",id:"examples",children:[{value:"Create a deployment for nginx",id:"create-a-deployment-for-nginx",children:[]}]},{value:"Source Code Examples",id:"source-code-examples",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Listing",id:"listing",children:[]}],i={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Provides a ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Kubernetes Deployment"),"."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"create-a-deployment-for-nginx"},"Create a deployment for nginx"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const labelApp = "myApp";\n\nconst namespace = provider.makeNamespace({\n  name: "myNamespace",\n});\n\nconst deployment = provider.makeDeployment({\n  name: "myDeployment",\n  dependencies: { namespace },\n  properties: ({}) => ({\n    metadata: {\n      labels: {\n        app: labelApp,\n      },\n    },\n    spec: {\n      replicas: 3,\n      selector: {\n        matchLabels: {\n          app: labelApp,\n        },\n      },\n      template: {\n        metadata: {\n          labels: {\n            app: labelApp,\n          },\n        },\n        spec: {\n          containers: [\n            {\n              name: "nginx",\n              image: "nginx:1.14.2",\n              ports: [\n                {\n                  containerPort: 80,\n                },\n              ],\n            },\n          ],\n        },\n      },\n    },\n  }),\n});\n')),Object(o.b)("h2",{id:"source-code-examples"},"Source Code Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/k8s/starhackit/base/charts/web-server.js#L56"},"web server")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/k8s/starhackit/base/charts/rest-server.js#L111"},"rest server"))),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"./Namespace"},"Namespace"))),Object(o.b)("h2",{id:"listing"},"Listing"),Object(o.b)("p",null,"The following commands list the ",Object(o.b)("strong",{parentName:"p"},"Deployment")," type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc list --types Deployment\n")),Object(o.b)("p",null,"Short version:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Dep\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'List Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Deployment         \u2502 cert-manager                                                \u2502\n\u2502                    \u2502 cert-manager-cainjector                                     \u2502\n\u2502                    \u2502 cert-manager-webhook                                        \u2502\n\u2502                    \u2502 rest                                                        \u2502\n\u2502                    \u2502 web                                                         \u2502\n\u2502                    \u2502 aws-load-balancer-controller                                \u2502\n\u2502                    \u2502 coredns                                                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n7 resources, 1 type, 2 providers\nCommand "gc list --types Deployment" executed in 5s\n\n')),Object(o.b)("p",null,"To inquire about a specific deployment:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"gc l -t Dep -n aws-load-balancer-controller\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},'Listing resources on 2 providers: aws, k8s\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing\n\u2713 k8s\n  \u2713 Initialising\n  \u2713 Listing 6/6\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 Deployment from k8s                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Name                         \u2502 Data                                        \u2502 Our  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 aws-load-balancer-controller \u2502 metadata:                                   \u2502 Yes  \u2502\n\u2502                              \u2502   name: aws-load-balancer-controller        \u2502      \u2502\n\u2502                              \u2502   namespace: kube-system                    \u2502      \u2502\n\u2502                              \u2502   selfLink: /apis/apps/v1/namespaces/kube-\u2026 \u2502      \u2502\n\u2502                              \u2502   uid: 7c525208-5787-47fe-8f5f-fa8865d9a256 \u2502      \u2502\n\u2502                              \u2502   resourceVersion: 133066                   \u2502      \u2502\n\u2502                              \u2502   generation: 1                             \u2502      \u2502\n\u2502                              \u2502   creationTimestamp: 2021-03-23T16:33:39Z   \u2502      \u2502\n\u2502                              \u2502   labels:                                   \u2502      \u2502\n\u2502                              \u2502     app.kubernetes.io/component: controller \u2502      \u2502\n\u2502                              \u2502     app.kubernetes.io/name: aws-load-balan\u2026 \u2502      \u2502\n\u2502                              \u2502   annotations:                              \u2502      \u2502\n\u2502                              \u2502     CreatedByProvider: k8s                  \u2502      \u2502\n\u2502                              \u2502     ManagedBy: GruCloud                     \u2502      \u2502\n\u2502                              \u2502     Name: aws-load-balancer-controller      \u2502      \u2502\n\u2502                              \u2502     deployment.kubernetes.io/revision: 1    \u2502      \u2502\n\u2502                              \u2502     stage: dev                              \u2502      \u2502\n\u2502                              \u2502 spec:                                       \u2502      \u2502\n\u2502                              \u2502   replicas: 1                               \u2502      \u2502\n\u2502                              \u2502   selector:                                 \u2502      \u2502\n\u2502                              \u2502     matchLabels:                            \u2502      \u2502\n\u2502                              \u2502       app.kubernetes.io/component: control\u2026 \u2502      \u2502\n\u2502                              \u2502       app.kubernetes.io/name: aws-load-bal\u2026 \u2502      \u2502\n\u2502                              \u2502   template:                                 \u2502      \u2502\n\u2502                              \u2502     metadata:                               \u2502      \u2502\n\u2502                              \u2502       creationTimestamp: null               \u2502      \u2502\n\u2502                              \u2502       labels:                               \u2502      \u2502\n\u2502                              \u2502         app.kubernetes.io/component: contr\u2026 \u2502      \u2502\n\u2502                              \u2502         app.kubernetes.io/name: aws-load-b\u2026 \u2502      \u2502\n\u2502                              \u2502     spec:                                   \u2502      \u2502\n\u2502                              \u2502       volumes:                              \u2502      \u2502\n\u2502                              \u2502         - name: cert                        \u2502      \u2502\n\u2502                              \u2502           secret:                           \u2502      \u2502\n\u2502                              \u2502             secretName: aws-load-balancer-\u2026 \u2502      \u2502\n\u2502                              \u2502             defaultMode: 420                \u2502      \u2502\n\u2502                              \u2502       containers:                           \u2502      \u2502\n\u2502                              \u2502         - name: controller                  \u2502      \u2502\n\u2502                              \u2502           image: amazon/aws-alb-ingress-co\u2026 \u2502      \u2502\n\u2502                              \u2502           args:                             \u2502      \u2502\n\u2502                              \u2502             - "--cluster-name=cluster"      \u2502      \u2502\n\u2502                              \u2502             - "--ingress-class=alb"         \u2502      \u2502\n\u2502                              \u2502           ports:                            \u2502      \u2502\n\u2502                              \u2502             - name: webhook-server          \u2502      \u2502\n\u2502                              \u2502               containerPort: 9443           \u2502      \u2502\n\u2502                              \u2502               protocol: TCP                 \u2502      \u2502\n\u2502                              \u2502           resources:                        \u2502      \u2502\n\u2502                              \u2502             limits:                         \u2502      \u2502\n\u2502                              \u2502               cpu: 200m                     \u2502      \u2502\n\u2502                              \u2502               memory: 500Mi                 \u2502      \u2502\n\u2502                              \u2502             requests:                       \u2502      \u2502\n\u2502                              \u2502               cpu: 100m                     \u2502      \u2502\n\u2502                              \u2502               memory: 200Mi                 \u2502      \u2502\n\u2502                              \u2502           volumeMounts:                     \u2502      \u2502\n\u2502                              \u2502             - name: cert                    \u2502      \u2502\n\u2502                              \u2502               readOnly: true                \u2502      \u2502\n\u2502                              \u2502               mountPath: /tmp/k8s-webhook-\u2026 \u2502      \u2502\n\u2502                              \u2502           livenessProbe:                    \u2502      \u2502\n\u2502                              \u2502             httpGet:                        \u2502      \u2502\n\u2502                              \u2502               path: /healthz                \u2502      \u2502\n\u2502                              \u2502               port: 61779                   \u2502      \u2502\n\u2502                              \u2502               scheme: HTTP                  \u2502      \u2502\n\u2502                              \u2502             initialDelaySeconds: 30         \u2502      \u2502\n\u2502                              \u2502             timeoutSeconds: 10              \u2502      \u2502\n\u2502                              \u2502             periodSeconds: 10               \u2502      \u2502\n\u2502                              \u2502             successThreshold: 1             \u2502      \u2502\n\u2502                              \u2502             failureThreshold: 2             \u2502      \u2502\n\u2502                              \u2502           terminationMessagePath: /dev/ter\u2026 \u2502      \u2502\n\u2502                              \u2502           terminationMessagePolicy: File    \u2502      \u2502\n\u2502                              \u2502           imagePullPolicy: IfNotPresent     \u2502      \u2502\n\u2502                              \u2502           securityContext:                  \u2502      \u2502\n\u2502                              \u2502             runAsNonRoot: true              \u2502      \u2502\n\u2502                              \u2502             readOnlyRootFilesystem: true    \u2502      \u2502\n\u2502                              \u2502             allowPrivilegeEscalation: false \u2502      \u2502\n\u2502                              \u2502       restartPolicy: Always                 \u2502      \u2502\n\u2502                              \u2502       terminationGracePeriodSeconds: 10     \u2502      \u2502\n\u2502                              \u2502       dnsPolicy: ClusterFirst               \u2502      \u2502\n\u2502                              \u2502       serviceAccountName: aws-load-balance\u2026 \u2502      \u2502\n\u2502                              \u2502       serviceAccount: aws-load-balancer-co\u2026 \u2502      \u2502\n\u2502                              \u2502       securityContext:                      \u2502      \u2502\n\u2502                              \u2502         fsGroup: 1337                       \u2502      \u2502\n\u2502                              \u2502       schedulerName: default-scheduler      \u2502      \u2502\n\u2502                              \u2502   strategy:                                 \u2502      \u2502\n\u2502                              \u2502     type: RollingUpdate                     \u2502      \u2502\n\u2502                              \u2502     rollingUpdate:                          \u2502      \u2502\n\u2502                              \u2502       maxUnavailable: 25%                   \u2502      \u2502\n\u2502                              \u2502       maxSurge: 25%                         \u2502      \u2502\n\u2502                              \u2502   revisionHistoryLimit: 10                  \u2502      \u2502\n\u2502                              \u2502   progressDeadlineSeconds: 600              \u2502      \u2502\n\u2502                              \u2502 status:                                     \u2502      \u2502\n\u2502                              \u2502   observedGeneration: 1                     \u2502      \u2502\n\u2502                              \u2502   replicas: 1                               \u2502      \u2502\n\u2502                              \u2502   updatedReplicas: 1                        \u2502      \u2502\n\u2502                              \u2502   readyReplicas: 1                          \u2502      \u2502\n\u2502                              \u2502   availableReplicas: 1                      \u2502      \u2502\n\u2502                              \u2502   conditions:                               \u2502      \u2502\n\u2502                              \u2502     - type: Available                       \u2502      \u2502\n\u2502                              \u2502       status: True                          \u2502      \u2502\n\u2502                              \u2502       lastUpdateTime: 2021-03-23T16:33:42Z  \u2502      \u2502\n\u2502                              \u2502       lastTransitionTime: 2021-03-23T16:33\u2026 \u2502      \u2502\n\u2502                              \u2502       reason: MinimumReplicasAvailable      \u2502      \u2502\n\u2502                              \u2502       message: Deployment has minimum avai\u2026 \u2502      \u2502\n\u2502                              \u2502     - type: Progressing                     \u2502      \u2502\n\u2502                              \u2502       status: True                          \u2502      \u2502\n\u2502                              \u2502       lastUpdateTime: 2021-03-23T16:33:42Z  \u2502      \u2502\n\u2502                              \u2502       lastTransitionTime: 2021-03-23T16:33\u2026 \u2502      \u2502\n\u2502                              \u2502       reason: NewReplicaSetAvailable        \u2502      \u2502\n\u2502                              \u2502       message: ReplicaSet    aws-load-balan \u2502      \u2502\n\u2502                              \u2502                                             \u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nProvider: k8s\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 k8s                                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Deployment         \u2502 aws-load-balancer-controller                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 2 providers\nCommand "gc l -t Dep -n aws-load-balancer-controller" executed in 7s\n')))}p.isMDXComponent=!0},201:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.a.createElement(b,l(l({ref:n},i),{},{components:t})):r.a.createElement(b,l({ref:n},i))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);