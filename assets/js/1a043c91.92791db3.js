"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[53536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73123:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={title:"Kubernetes",keywords:["Kubernetes","Apache APISIX","Service discovery","Cluster","API Gateway"],description:"This article introduce how to perform service discovery based on Kubernetes in Apache APISIX and summarize related issues."},o=void 0,i={unversionedId:"discovery/kubernetes",id:"discovery/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"This article introduce how to perform service discovery based on Kubernetes in Apache APISIX and summarize related issues.",source:"@site/docs/apisix/discovery/kubernetes.md",sourceDirName:"discovery",slug:"/discovery/kubernetes",permalink:"/docs/apisix/next/discovery/kubernetes",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/discovery/kubernetes.md",tags:[],version:"current",frontMatter:{title:"Kubernetes",keywords:["Kubernetes","Apache APISIX","Service discovery","Cluster","API Gateway"],description:"This article introduce how to perform service discovery based on Kubernetes in Apache APISIX and summarize related issues."},sidebar:"docs",previous:{title:"Control Plane Service Discovery",permalink:"/docs/apisix/next/discovery/control-plane-service-discovery"},next:{title:"PubSub",permalink:"/docs/apisix/next/pubsub"}},c=[{value:"Summary",id:"summary",children:[]},{value:"How To Use",id:"how-to-use",children:[{value:"Single-Cluster Mode Configuration",id:"single-cluster-mode-configuration",children:[]},{value:"Single-Cluster Mode Query Interface",id:"single-cluster-mode-query-interface",children:[]},{value:"Multi-Cluster Mode Configuration",id:"multi-cluster-mode-configuration",children:[]},{value:"Multi-Cluster Mode Query Interface",id:"multi-cluster-mode-query-interface",children:[]}]},{value:"Q&amp;A",id:"qa",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},(0,r.kt)("em",{parentName:"a"},"Kubernetes"))," service discovery ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/"},(0,r.kt)("em",{parentName:"a"},"List-Watch"))," real-time changes of ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},(0,r.kt)("em",{parentName:"a"},"Endpoints"))," resources, then store theirs value into ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx.shared.DICT"),"."),(0,r.kt)("p",null,"Discovery also provides a node query interface in accordance with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/discovery.md"},(0,r.kt)("em",{parentName:"a"},"APISIX Discovery Specification")),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"use kubernetes discovery in L4 require OpenResty version >= 1.19.9.1"))),(0,r.kt)("h2",{id:"how-to-use"},"How To Use"),(0,r.kt)("p",null,"Kubernetes service discovery both support single-cluster and multi-cluster mode, applicable to the case where the service is distributed in a single or multiple Kubernetes clusters."),(0,r.kt)("h3",{id:"single-cluster-mode-configuration"},"Single-Cluster Mode Configuration"),(0,r.kt)("p",null,"A detailed configuration for single-cluster mode Kubernetes service discovery is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  kubernetes:\n    service:\n      # apiserver schema, options [http, https]\n      schema: https #default https\n\n      # apiserver host, options [ipv4, ipv6, domain, environment variable]\n      host: ${KUBERNETES_SERVICE_HOST} #default ${KUBERNETES_SERVICE_HOST}\n\n      # apiserver port, options [port number, environment variable]\n      port: ${KUBERNETES_SERVICE_PORT}  #default ${KUBERNETES_SERVICE_PORT}\n\n    client:\n      # serviceaccount token or token_file\n      token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n\n      #token: |-\n       # eyJhbGciOiJSUzI1NiIsImtpZCI6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEif\n       # 6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEifeyJhbGciOiJSUzI1NiIsImtpZCI\n\n    default_weight: 50 # weight assigned to each discovered endpoint. default 50, minimum 0\n\n    # kubernetes discovery support namespace_selector\n    # you can use one of [equal, not_equal, match, not_match] filter namespace\n    namespace_selector:\n      # only save endpoints with namespace equal default\n      equal: default\n\n      # only save endpoints with namespace not equal default\n      #not_equal: default\n\n      # only save endpoints with namespace match one of [default, ^my-[a-z]+$]\n      #match:\n       #- default\n       #- ^my-[a-z]+$\n\n      # only save endpoints with namespace not match one of [default, ^my-[a-z]+$ ]\n      #not_match:\n       #- default\n       #- ^my-[a-z]+$\n\n    # kubernetes discovery support label_selector\n    # for the expression of label_selector, please refer to https://kubernetes.io/docs/concepts/overview/working-with-objects/labels\n    label_selector: |-\n      first="a",second="b"\n\n    # reserved lua shared memory size,1m memory can store about 1000 pieces of endpoint\n    shared_size: 1m #default 1m\n')),(0,r.kt)("p",null,"If the Kubernetes service discovery runs inside a pod, you can use minimal configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  kubernetes: { }\n")),(0,r.kt)("p",null,"If the Kubernetes service discovery runs outside a pod, you need to create or select a specified ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount")),", then get its token value, and use following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  kubernetes:\n    service:\n      schema: https\n      host: # enter apiserver host value here\n      port: # enter apiserver port value here\n    client:\n      token: # enter serviceaccount token value here\n      #token_file: # enter file path here\n")),(0,r.kt)("h3",{id:"single-cluster-mode-query-interface"},"Single-Cluster Mode Query Interface"),(0,r.kt)("p",null,"The Kubernetes service discovery provides a query interface in accordance with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/discovery.md"},(0,r.kt)("em",{parentName:"a"},"APISIX Discovery Specification")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"function:"),"\nnodes(service_name)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"description:"),"\nnodes() function attempts to look up the ngx.shared.DICT for nodes corresponding to service",(0,r.kt)("em",{parentName:"p"},"name, \\\nservice_name should match pattern: "),"[namespace]","/","[name]",":","[portName]","_"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"namespace: The namespace where the Kubernetes endpoints is located")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"name: The name of the Kubernetes endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"portName: The ports.name value in the Kubernetes endpoints, if there is no ports.name, use targetPort, port instead"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"return value:"),"\nif the Kubernetes endpoints value is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Endpoints\nmetadata:\n  name: plat-dev\n  namespace: default\nsubsets:\n  - addresses:\n      - ip: "10.5.10.109"\n      - ip: "10.5.10.110"\n    ports:\n      - port: 3306\n        name: port\n')),(0,r.kt)("p",null,'  a nodes("default/plat-dev:port") call will get follow result:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' {\n     {\n         host="10.5.10.109",\n         port= 3306,\n         weight= 50,\n     },\n     {\n         host="10.5.10.110",\n         port= 3306,\n         weight= 50,\n     },\n }\n')),(0,r.kt)("h3",{id:"multi-cluster-mode-configuration"},"Multi-Cluster Mode Configuration"),(0,r.kt)("p",null,"A detailed configuration for multi-cluster mode Kubernetes service discovery is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  kubernetes:\n  - id: release  # a custom name refer to the cluster, pattern ^[a-z0-9]{1,8}\n    service:\n      # apiserver schema, options [http, https]\n      schema: https #default https\n\n      # apiserver host, options [ipv4, ipv6, domain, environment variable]\n      host: "1.cluster.com"\n\n      # apiserver port, options [port number, environment variable]\n      port: "6443"\n\n    client:\n      # serviceaccount token or token_file\n      token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n\n      #token: |-\n       # eyJhbGciOiJSUzI1NiIsImtpZCI6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEif\n       # 6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEifeyJhbGciOiJSUzI1NiIsImtpZCI\n\n    default_weight: 50 # weight assigned to each discovered endpoint. default 50, minimum 0\n\n    # kubernetes discovery support namespace_selector\n    # you can use one of [equal, not_equal, match, not_match] filter namespace\n    namespace_selector:\n      # only save endpoints with namespace equal default\n      equal: default\n\n      # only save endpoints with namespace not equal default\n      #not_equal: default\n\n      # only save endpoints with namespace match one of [default, ^my-[a-z]+$]\n      #match:\n       #- default\n       #- ^my-[a-z]+$\n\n      # only save endpoints with namespace not match one of [default, ^my-[a-z]+$]\n      #not_match:\n       #- default\n       #- ^my-[a-z]+$\n\n    # kubernetes discovery support label_selector\n    # for the expression of label_selector, please refer to https://kubernetes.io/docs/concepts/overview/working-with-objects/labels\n    label_selector: |-\n      first="a",second="b"\n\n    # reserved lua shared memory size,1m memory can store about 1000 pieces of endpoint\n    shared_size: 1m #default 1m\n')),(0,r.kt)("p",null,"Multi-Kubernetes service discovery does not fill default values for service and client fields, you need to fill them according to the cluster configuration."),(0,r.kt)("h3",{id:"multi-cluster-mode-query-interface"},"Multi-Cluster Mode Query Interface"),(0,r.kt)("p",null,"The Kubernetes service discovery provides a query interface in accordance with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/discovery.md"},(0,r.kt)("em",{parentName:"a"},"APISIX Discovery Specification")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"function:"),"\nnodes(service_name)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"description:"),"\nnodes() function attempts to look up the ngx.shared.DICT for nodes corresponding to service",(0,r.kt)("em",{parentName:"p"},"name, \\\nservice_name should match pattern: "),"[id]","/","[namespace]","/","[name]",":","[portName]","_"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"id: value defined in service discovery configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"namespace: The namespace where the Kubernetes endpoints is located")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"name: The name of the Kubernetes endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"portName: The ports.name value in the Kubernetes endpoints, if there is no ports.name, use targetPort, port instead"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"return value:"),"\nif the Kubernetes endpoints value is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Endpoints\nmetadata:\n  name: plat-dev\n  namespace: default\nsubsets:\n  - addresses:\n      - ip: "10.5.10.109"\n      - ip: "10.5.10.110"\n    ports:\n      - port: 3306\n        name: port\n')),(0,r.kt)("p",null,'a nodes("release/default/plat-dev:port") call will get follow result:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' {\n     {\n         host="10.5.10.109",\n         port= 3306,\n         weight= 50,\n     },\n     {\n         host="10.5.10.110",\n         port= 3306,\n         weight= 50,\n     },\n }\n')),(0,r.kt)("h2",{id:"qa"},"Q&A"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Why only support configuration token to access ",(0,r.kt)("em",{parentName:"strong"},"Kubernetes APIServer"),"?")),(0,r.kt)("p",null,"A: Usually, we will use three ways to complete the authentication of ",(0,r.kt)("em",{parentName:"p"},"Kubernetes APIServer"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mTLS"),(0,r.kt)("li",{parentName:"ul"},"Token"),(0,r.kt)("li",{parentName:"ul"},"Basic authentication")),(0,r.kt)("p",null,"Because lua-resty-http does not currently support mTLS, and basic authentication is not recommended, so currently only the token authentication method is implemented."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: APISIX inherits Nginx's multiple process model, does it mean that each nginx worker process will ",(0,r.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/"},(0,r.kt)("em",{parentName:"a"},"List-Watch"))," kubernetes endpoints resources?")),(0,r.kt)("p",null,"A: The Kubernetes service discovery only uses privileged processes to ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts/"},(0,r.kt)("em",{parentName:"a"},"List-Watch"))," Kubernetes endpoints resources, then store theirs value into ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx.shared.DICT"),", worker processes get results by querying ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx.shared.DICT"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What permissions do ",(0,r.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount"))," require?")),(0,r.kt)("p",null,"A: ServiceAccount requires the permissions of cluster-level ","[ get, list, watch ]"," endpoints resources, the declarative definition is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n name: apisix-test\n namespace: default\n---\n\nkind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n name: apisix-test\nrules:\n- apiGroups: [ "" ]\n  resources: [ endpoints ]\n  verbs: [ get,list,watch ]\n---\n\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n name: apisix-test\nroleRef:\n apiGroup: rbac.authorization.k8s.io\n kind: ClusterRole\n name: apisix-test\nsubjects:\n - kind: ServiceAccount\n   name: apisix-test\n   namespace: default\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: How to get ",(0,r.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount"))," token value?")),(0,r.kt)("p",null,"A: Assume your ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount"))," located in namespace apisix and name is Kubernetes-discovery, you can use the following steps to get token value."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get secret name. You can execute the following command, the output of the first column is the secret name we want:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix get secrets | grep kubernetes-discovery\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get token value. Assume secret resources name is kubernetes-discovery-token-c64cv, you can execute the following command, the output is the service account token value we want:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix get secret kubernetes-discovery-token-c64cv -o jsonpath={.data.token} | base64 -d\n")))))}p.isMDXComponent=!0}}]);