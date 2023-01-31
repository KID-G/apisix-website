"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[57736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96595:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(55064),l=n(58215);const o={title:"Getting started",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress"],description:"Guide to get started with Apache APISIX ingress controller."},s=void 0,p={unversionedId:"getting-started",id:"version-1.6.0/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Guide to get started with Apache APISIX ingress controller.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/ingress-controller/getting-started",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.0/docs/en/latest/getting-started.md",tags:[],version:"1.6.0",frontMatter:{title:"Getting started",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress"],description:"Guide to get started with Apache APISIX ingress controller."},sidebar:"version-1.6.0/docs",next:{title:"minikube",permalink:"/docs/ingress-controller/deployments/minikube"}},c=[{value:"Features",id:"features",children:[]},{value:"Get involved",id:"get-involved",children:[]},{value:"Compatibility with APISIX",id:"compatibility-with-apisix",children:[]}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"APISIX ingress controller is a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"Kubernetes ingress controller")," using ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," as the high performance reverse proxy."),(0,a.kt)("p",null,"APISIX ingress controller can be configured using native Kubernetes ingress resources as well as a declarative and easy to use custom resources provided by APISIX. The APISIX ingress controller converts these resources to APISIX configuration."),(0,a.kt)("p",null,"The examples below show how these differ. Both the examples configure a Route in APISIX that routes to an httpbin service as the Upstream."),(0,a.kt)(i.Z,{groupId:"resources",defaultValue:"apisix",values:[{label:"APISIX Ingress custom resource",value:"apisix"},{label:"Kubernetes ingress resource",value:"kubernetes"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"apisix",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="httpbin-route.yaml"',title:'"httpbin-route.yaml"'},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpbin-route\nspec:\n  http:\n    - name: route-1\n      match:\n        hosts:\n          - local.httpbin.org\n        paths:\n          - /*\n      backends:\n        - serviceName: httpbin\n          servicePort: 80\n"))),(0,a.kt)(l.Z,{value:"kubernetes",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="httpbin-route.yaml"',title:'"httpbin-route.yaml"'},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: httpbin-route\nspec:\n  ingressClassName: apisix\n  rules:\n    - host: local.httpbin.org\n      http:\n        paths:\n          - backend:\n              service:\n                name: httpbin\n                port:\n                  number: 80\n            path: /\n            pathType: Prefix\n")))),(0,a.kt)("p",null,"APISIX ingress controller defines the CRDs ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/concepts/apisix_route"},"ApisixRoute"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/concepts/apisix_upstream"},"ApisixUpstream"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/concepts/apisix_tls"},"ApisixTls"),", and ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/concepts/apisix_cluster_config"},"ApisixClusterConfig"),"."),(0,a.kt)("p",null,"APISIX also supports ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/discovery/kubernetes/"},"service discovery")," through ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes service")," abstraction."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/v1.6.0/docs/assets/images/scene.png",alt:"scene"})),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/design"},"Design")," to learn more about how APISIX ingress controller works under the hood."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"To summarize, APISIX ingress controller has the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declarative configuration with CRDs."),(0,a.kt)("li",{parentName:"ul"},"Fully dynamic configuration."),(0,a.kt)("li",{parentName:"ul"},"Supports native Kubernetes Ingress resource (both v1 and v1beta1)."),(0,a.kt)("li",{parentName:"ul"},"Supports service discovery through Kubernetes Service."),(0,a.kt)("li",{parentName:"ul"},"Out-of-the-box node health check support."),(0,a.kt)("li",{parentName:"ul"},"Supports load balancing based on pods (Upstream nodes)."),(0,a.kt)("li",{parentName:"ul"},"Rich ",(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/next/plugins/batch-requests/"},"Plugins")," with ",(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/next/plugin-develop/"},"custom Plugin")," support.")),(0,a.kt)("h2",{id:"get-involved"},"Get involved"),(0,a.kt)("p",null,"You can contribute to the development of APISIX ingress controller. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/contribute"},"Development guide")," for instructions on setting up the project locally."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/contributor-guide/"},"Contribute to APISIX")," section for details on the contributing flow."),(0,a.kt)("h2",{id:"compatibility-with-apisix"},"Compatibility with APISIX"),(0,a.kt)("p",null,"The table below shows the compatibility between APISIX ingress controller and the APISIX proxy."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"APISIX ingress controller"),(0,a.kt)("th",{parentName:"tr",align:null},"Supported APISIX versions"),(0,a.kt)("th",{parentName:"tr",align:null},"Recommended APISIX version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"master")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.15")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.15"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.5.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.15"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.4.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.11"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.3.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.10"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.2.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.8"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.1.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.7"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.1.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.7"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1.0.0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.7")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.7"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0.6")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.6")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.6"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0.5")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.4")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"2.5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0.4")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">= 2.4")),(0,a.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);const a=function(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),a=n(79443);const i=function(){const e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(86010);const o="tabItem_vU9c",s="tabItemActive_cw6a";const p=function(e){var t;const{lazy:n,block:a,defaultValue:p,values:c,groupId:d,className:u}=e,m=r.Children.toArray(e.children),g=null!=c?c:m.map((e=>({value:e.props.value,label:e.props.label}))),k=null!=p?p:null==(t=m.find((e=>e.props.default)))?void 0:t.props.value,{tabGroupChoices:h,setTabGroupChoices:b}=i(),[N,f]=(0,r.useState)(k),v=[];if(null!=d){const e=h[d];null!=e&&e!==N&&g.some((t=>t.value===e))&&f(e)}const y=e=>{const t=e.currentTarget,n=v.indexOf(t),r=g[n].value;f(r),null!=d&&(b(d,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:l}=window;return t>=0&&a<=l&&r<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case"ArrowLeft":{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},u)},g.map((e=>{let{value:t,label:n}=e;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:e=>v.push(e),onKeyDown:I,onFocus:y,onClick:y},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}},79443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)(void 0)},86010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a});const a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}}}]);