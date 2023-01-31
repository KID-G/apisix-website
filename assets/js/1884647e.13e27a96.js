"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[94058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,s(s({ref:t},c),{},{components:n})):i.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99664:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={title:"Ingress Controller"},s=void 0,o={unversionedId:"design",id:"version-1.2.0/design",isDocsHomePage:!1,title:"Ingress Controller",description:"Apache APISIX ingress for Kubernetes.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.2.0/design.md",sourceDirName:".",slug:"/design",permalink:"/docs/ingress-controller/1.2.0/design",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.2.0/docs/en/latest/design.md",tags:[],version:"1.2.0",frontMatter:{title:"Ingress Controller"},sidebar:"version-1.2.0/docs",previous:{title:"ApisixUpstream",permalink:"/docs/ingress-controller/1.2.0/concepts/apisix_upstream"},next:{title:"Developing for Apache APISIX Ingress Controller",permalink:"/docs/ingress-controller/1.2.0/development"}},l=[{value:"Modules",id:"modules",children:[{value:"1.Ingress-types",id:"1ingress-types",children:[]},{value:"2.Types",id:"2types",children:[]},{value:"3.Seven",id:"3seven",children:[]},{value:"4.Ingress-controller",id:"4ingress-controller",children:[]}]},{value:"CRD design",id:"crd-design",children:[]},{value:"Monitoring CRDs",id:"monitoring-crds",children:[{value:"Timing diagram",id:"timing-diagram",children:[]},{value:"Conversion structure",id:"conversion-structure",children:[]},{value:"Cascade update",id:"cascade-update",children:[]},{value:"Diff rules",id:"diff-rules",children:[]},{value:"Service Discovery",id:"service-discovery",children:[]},{value:"Annotation implementation",id:"annotation-implementation",children:[]}]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache APISIX ingress for Kubernetes."),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v1.2.0/docs/assets/images/modules.png",alt:"Architecture"})),(0,r.kt)("h3",{id:"1ingress-types"},"1.Ingress-types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defines the CRD(CustomResourceDefinition) needed by Apache APISIX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"currently supports ApisixRoute/ApisixUpstream\uff0cand other service and route level plugins;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"can be packaged as a stand-alone binary, keep in sync with the ingress definition;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/3"},"CRD design")))),(0,r.kt)("h3",{id:"2types"},"2.Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"define interface objects to match concepts from Apache APISIX like route, service, upstream, and plugin;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"can be a packaged as a stand-alone binary, need to match with compatible Apache APISIX version;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add new types to this module to support new features;"))),(0,r.kt)("h3",{id:"3seven"},"3.Seven"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"contains main application logic;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sync the k8s cluster states to Apache APISIX, based on Apisix-types object;"))),(0,r.kt)("h3",{id:"4ingress-controller"},"4.Ingress-controller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"driver process for ingress controller; watches k8s apiserver;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"match and covert Apisix-ingress-types to Apisix-types before handing the control over to the above module seven;"))),(0,r.kt)("h2",{id:"crd-design"},"CRD design"),(0,r.kt)("p",null,"Currently ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," CRDs consist of 3 parts: ApisixRoute/ApisixUpstream. The design follows the following ideas."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The most important part of the gateway is the route part, which is used to define the distribution rules of the gateway traffics."),(0,r.kt)("li",{parentName:"ol"},"In order to facilitate understanding and configuration, the design structure of ",(0,r.kt)("inlineCode",{parentName:"li"},"ApisixRoute")," is basically similar to Kubernetes Ingress."),(0,r.kt)("li",{parentName:"ol"},"In the design of annotation, the structure of Kubernetes Ingress is used for reference, but the internal implementation is based on the plug-in of Apache APISIX."),(0,r.kt)("li",{parentName:"ol"},"In the simplest case, you only need to define ",(0,r.kt)("inlineCode",{parentName:"li"},"ApisixRoute"),", and the Ingress controller will automatically add ",(0,r.kt)("inlineCode",{parentName:"li"},"ApisixUpstream"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ApisixUpstream")," can define some details on Apache APISIX upstream, such as load balancing/health check, etc.")),(0,r.kt)("h2",{id:"monitoring-crds"},"Monitoring CRDs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," is responsible for interacting with the Kubernetes Apiserver, applying for accessible resource permissions (RBAC), monitoring changes, and implementing object conversion within the Ingress controller, comparing the changes, and then synchronizing to Apache APISIX."),(0,r.kt)("h3",{id:"timing-diagram"},"Timing diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v1.2.0/docs/assets/images/flow.png",alt:"flow"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here is a flowchart that introduces the main logic of ",(0,r.kt)("inlineCode",{parentName:"li"},"ApisixRoute")," and other CRDs during synchronization.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v1.2.0/docs/assets/images/sync-logic-controller.png",alt:"logic"})),(0,r.kt)("h3",{id:"conversion-structure"},"Conversion structure"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," provides external configuration methods for CRDs. It is aimed at operators such as daily operation and maintenance, who often need to process a large number of routes in batches, hoping to handle all related services in the same configuration file, and at the same time have convenient and understandable management capabilities. Apache APISIX is designed from the perspective of the gateway, and all routes are independent. This leads to obvious differences in the data structure between the two. One focuses on batch definition, while the other is discrete implementation."),(0,r.kt)("p",null,"Taking into account the usage habits of different groups of people, the data structure of CRDs draws on the data structure of Kubernetes Ingress, and is basically the same in shape."),(0,r.kt)("p",null,"A simple comparison is as follows, they have different definitions:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v1.2.0/docs/assets/images/struct-compare.png",alt:"strut-compare"})),(0,r.kt)("p",null,"They are a many-to-many relationship.Therefore, ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," has to do some conversion of CRDs to adapt to different gateways."),(0,r.kt)("h3",{id:"cascade-update"},"Cascade update"),(0,r.kt)("p",null,"At present, we have defined multiple CRDs, and these CRDs are responsible for the definition of their respective fields. ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute"),"/ ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixUpstream")," correspond to objects such as ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),"/ ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream")," in Apache APISIX. As the strong binding relationship between APISIX objects, when modifying and deleting batch data structures such as CRDs, you have to consider the impact of cascading between objects."),(0,r.kt)("p",null,"So, in ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller"),", a broadcast notification mechanism is designed through ",(0,r.kt)("inlineCode",{parentName:"p"},"channel"),", that is, the definition of any object must be notified to other objects related to it and trigger the corresponding behavior."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v1.2.0/docs/assets/images/cascade-update.png",alt:"hierarchical"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We can initiate discussions in this area and propose a more reasonable design plan")),(0,r.kt)("h3",{id:"diff-rules"},"Diff rules"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"seven")," module internally saves memory data structures, which is currently very similar to the Apache Apisix resource object. When the Kubernetes resource object is newly changed, ",(0,r.kt)("inlineCode",{parentName:"p"},"seven")," will compare the memory objects and update incrementally according to the result of the comparison."),(0,r.kt)("p",null,"The current comparison rule is based on the grouping of ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream")," resource objects, compare them separately, and make corresponding broadcast notifications after finding the differences."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v1.2.0/docs/assets/images/diff-rules.png",alt:"diff-flow"})),(0,r.kt)("h3",{id:"service-discovery"},"Service Discovery"),(0,r.kt)("p",null,"According to the ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixUpstream")," resource object, ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," will register the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoints")," node information in the ",(0,r.kt)("inlineCode",{parentName:"p"},"running")," state to the nodes in Apache APISIX Upstream. And according to Kubernetes Endpoint status is synchronized in real time."),(0,r.kt)("p",null,"Based on service discovery, Apache APISIX Ingress can directly access backend Pod nodes. Bypassing Kubernetes Service, it is possible to implement customized load balancing strategies."),(0,r.kt)("h3",{id:"annotation-implementation"},"Annotation implementation"),(0,r.kt)("p",null,"Unlike the implementation of Kubernetes Nginx Ingress, the implementation of Annotation by ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," is based on the plug-in mechanism of Apache APISIX."),(0,r.kt)("p",null,"For example, the settings of the black and white list can be configured through the ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/whitelist-source-range")," annotation in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApisixRoute")," resource object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2beta1\nkind: ApisixRoute\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/whitelist-source-range: 1.2.3.4,2.2.0.0/16\n  name: httpserver-route\nspec:\n    ...\n")),(0,r.kt)("p",null,"The black and white list here is implemented by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/ip-restriction.md"},"ip-restriction")," plugin."),(0,r.kt)("p",null,"There will be more annotation implementations in the future to facilitate the definition of some common configurations, such as CORS."),(0,r.kt)("p",null,"If you have some annotation needs, welcome to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"issue")," to discuss, let\u2019s discuss how to implement it."))}c.isMDXComponent=!0}}]);