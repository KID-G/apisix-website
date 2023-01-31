"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[97110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,k=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21143:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Enable authentication and restriction"},l=void 0,o={unversionedId:"tutorials/enable-authentication-and-restriction",id:"version-1.6.0/tutorials/enable-authentication-and-restriction",isDocsHomePage:!1,title:"Enable authentication and restriction",description:"Consumers are used for the authentication method controlled by Apache APISIX, if users want to use their own auth system or 3rd party systems, use OIDC.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.0/tutorials/enable-authentication-and-restriction.md",sourceDirName:"tutorials",slug:"/tutorials/enable-authentication-and-restriction",permalink:"/zh/docs/ingress-controller/tutorials/enable-authentication-and-restriction",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.0/docs/zh/latest/tutorials/enable-authentication-and-restriction.md",tags:[],version:"1.6.0",frontMatter:{title:"Enable authentication and restriction"},sidebar:"version-1.6.0/docs",previous:{title:"Manage Ingress Certificates With Cert Manager",permalink:"/zh/docs/ingress-controller/tutorials/manage-ingress-certificates-with-cert-manager"},next:{title:"How to access Apache APISIX Prometheus metrics on Kubernetes",permalink:"/zh/docs/ingress-controller/tutorials/how-to-access-Apache-APISIX-Prometheus-Metrics-on-k8s"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Restriction",id:"restriction",children:[]}]},{value:"Example",id:"example",children:[{value:"Prepare env",id:"prepare-env",children:[]},{value:"How to enable <code>Authentication</code>",id:"how-to-enable-authentication",children:[]},{value:"How to enable <code>Restriction</code>",id:"how-to-enable-restriction",children:[]},{value:"Disable authentication and restriction",id:"disable-authentication-and-restriction",children:[]}]}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Consumers are used for the authentication method controlled by Apache APISIX, if users want to use their own auth system or 3rd party systems, use OIDC."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("h4",{id:"key-auth"},"Key Auth"),(0,i.kt)("p",null,"Consumers add their key either in a header or query string parameter to authenticate their requests. For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"Key Auth"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/key-auth/"},"APISIX key-auth plugin"),".\nAlso, we can using the ",(0,i.kt)("inlineCode",{parentName:"p"},"secretRef")," field to reference a K8s Secret object so that we can avoid the hardcoded sensitive data in the ApisixConsumer object. For reference Secret use example, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#key-auth-reference-secret-object"},"key-auth-reference-secret-object"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Key Auth yaml configure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: ${name}\nspec:\n  authParameter:\n    keyAuth:\n      value:\n        key: ${key} #required\n"))),(0,i.kt)("h4",{id:"basic-auth"},"Basic Auth"),(0,i.kt)("p",null,"Consumers add their key in a header to authenticate their requests. For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"Basic Auth"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/basic-auth/"},"APISIX basic-auth plugin"),".\nAlso, we can using the ",(0,i.kt)("inlineCode",{parentName:"p"},"secretRef")," field to reference a K8s Secret object so that we can avoid the hardcoded sensitive data in the ApisixConsumer object. For reference Secret use example, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#key-auth-reference-secret-object"},"key-auth-reference-secret-object"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Basic Auth yaml configure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: ${name}\nspec:\n  authParameter:\n    basicAuth:\n      value:\n        username: ${username} #required\n        password: ${password} #required\n"))),(0,i.kt)("h4",{id:"jwt-auth"},"JWT Auth"),(0,i.kt)("p",null,"The consumer then adds its key to the query string parameter, request header, or cookie to verify its request. For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"JWT Auth"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/jwt-auth/"},"APISIX jwt-auth plugin"),".\nAlso, we can using the ",(0,i.kt)("inlineCode",{parentName:"p"},"secretRef")," field to reference a K8s Secret object so that we can avoid the hardcoded sensitive data in the ApisixConsumer object. For reference Secret use example, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#key-auth-reference-secret-object"},"key-auth-reference-secret-object"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Need to expose API")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This plugin will add ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," to sign. You may need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to expose it."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JWT Auth yaml configure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: ${name}\nspec:\n  authParameter:\n    wolfRbac:\n      value:\n        key: "${key}"                                    #required\n        secret: "${secret}"                              #optional\n        public_key: "${public_key}"                      #optional, required when algorithm attribute selects RS256 algorithm.\n        private_key: "{private_key}"                     #optional, required when algorithm attribute selects RS256 algorithm.\n        algorithm: "${HS256 | HS512 | RS256}"            #optional\n        exp: ${ 86400 | token\'s expire time, in seconds} #optional\n        algorithm: ${true | false}                       #optional\n'))),(0,i.kt)("h4",{id:"wolf-rbac"},(0,i.kt)("inlineCode",{parentName:"h4"},"Wolf RBAC")),(0,i.kt)("p",null,"To use wolfRbac authentication, you need to start and install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/quick-start-with-docker/README.md"},"wolf-server"),". For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"Wolf RBAC"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/wolf-rbac/"},"APISIX wolf-rbac plugin"),".\nAlso, we can using the ",(0,i.kt)("inlineCode",{parentName:"p"},"secretRef")," field to reference a K8s Secret object so that we can avoid the hardcoded sensitive data in the ApisixConsumer object. For reference Secret use example, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"#key-auth-reference-secret-object"},"key-auth-reference-secret-object"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"This plugin will add several APIs")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/login"),(0,i.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/change_pwd"),(0,i.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/user_info")),(0,i.kt)("p",{parentName:"div"},"You may need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," plugin to expose it."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Wolf RBAC yaml configure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: ${name}\nspec:\n  authParameter:\n    wolfRBAC:\n      value:\n      server: "${server of wolf-rbac}"                            #optional\n      appid: "${appid of wolf-rbac}"                              #optional\n      header_prefix: "${X- | X-UserId | X-Username | X-Nickname}" #optional\n'))),(0,i.kt)("h3",{id:"restriction"},(0,i.kt)("a",{parentName:"h3",href:"https://apisix.apache.org/docs/apisix/plugins/consumer-restriction/"},"Restriction")),(0,i.kt)("h4",{id:"whitelist-or-blacklist"},(0,i.kt)("inlineCode",{parentName:"h4"},"whitelist")," or ",(0,i.kt)("inlineCode",{parentName:"h4"},"blacklist")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"whitelist"),": Grant full access to all users specified in the provided list, ",(0,i.kt)("strong",{parentName:"p"},"has the priority over ",(0,i.kt)("inlineCode",{parentName:"strong"},"allowed_by_methods")),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"blacklist"),": Reject connection to all users specified in the provided list, ",(0,i.kt)("strong",{parentName:"p"},"has the priority over ",(0,i.kt)("inlineCode",{parentName:"strong"},"whitelist"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"whitelist or blacklist with consumer-restriction yaml configure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'plugins:\n- name: consumer-restriction\n  enable: true\n  config:\n    blacklist:\n    - "${consumer_name}"\n    - "${consumer_name}"\n'))),(0,i.kt)("h4",{id:"allowed_by_methods"},(0,i.kt)("inlineCode",{parentName:"h4"},"allowed_by_methods")),(0,i.kt)("p",null,"HTTP methods can be ",(0,i.kt)("inlineCode",{parentName:"p"},'methods:["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS", "CONNECT", "TRACE", "PURGE"]')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"allowed_by_methods with consumer-restriction yaml configure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'plugins:\n- name: consumer-restriction\n  enable: true\n  config:\n    allowed_by_methods:\n    - user: "${consumer_name}"\n      methods:\n      - "${GET | POST | PUT |...}"\n      - "${GET | POST | PUT |...}"\n    - user: "${consumer_name}"\n      methods:\n      - "${GET | POST | PUT |...}"\n'))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../../../test/e2e/suite-plugins/suite-plugins-authentication/"},"Refer to the corresponding e2e test case.")),(0,i.kt)("h3",{id:"prepare-env"},"Prepare env"),(0,i.kt)("p",null,"To use this tutorial, you must deploy ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress APISIX")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin")," in Kubernetes cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Installing ",(0,i.kt)("a",{parentName:"li",href:"/zh/docs/ingress-controller/deployments/minikube"},(0,i.kt)("inlineCode",{parentName:"a"},"Ingress APISIX")),"."),(0,i.kt)("li",{parentName:"ul"},"Deploy ",(0,i.kt)("inlineCode",{parentName:"li"},"httpbin")," service.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#Now, try to deploy httpbin to your Kubernetes cluster:\nkubectl run httpbin --image kennethreitz/httpbin --port 80\nkubectl expose pod httpbin --port 80\n")),(0,i.kt)("h3",{id:"how-to-enable-authentication"},"How to enable ",(0,i.kt)("inlineCode",{parentName:"h3"},"Authentication")),(0,i.kt)("h4",{id:"enable-keyauth"},"Enable ",(0,i.kt)("inlineCode",{parentName:"h4"},"keyAuth")),(0,i.kt)("p",null,"The following is an example. The ",(0,i.kt)("inlineCode",{parentName:"p"},"keyAuth")," is enabled on the specified route to restrict user access."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an ApisixConsumer, and set the attributes of plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"key-auth"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: foo\nspec:\n  authParameter:\n    keyAuth:\n      value:\n        key: foo-key\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an ApisixRoute, and enable plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"key-auth"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  http:\n  - name: rule1\n    match:\n      hosts:\n      - httpbin.org\n      paths:\n      - /*\n    backends:\n    - serviceName: httpbin\n      servicePort: 80\n    authentication:\n      enable: true\n      type: keyAuth\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requests from foo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX}  -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'apikey:foo-key' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,i.kt)("h5",{id:"key-auth-reference-secret-object"},"Key Auth reference Secret object"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"ApisixRoute with keyAuth consumer using secret example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates a ",(0,i.kt)("inlineCode",{parentName:"li"},"Secret")," object:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: foovalue\ndata:\n  key: Zm9vLWtleQ==\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an ApisixConsumer and reference ",(0,i.kt)("inlineCode",{parentName:"li"},"Secret")," object:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: foo\nspec:\n  authParameter:\n    keyAuth:\n      secretRef:\n        name: foovalue\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an ApisixRoute, and enables plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"key-auth"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  http:\n  - name: rule1\n    match:\n      hosts:\n      - httpbin.org\n      paths:\n      - /*\n    backends:\n    - serviceName: httpbin\n      servicePort: 80\n    authentication:\n      enable: true\n      type: keyAuth\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requests from foo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX}  -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'apikey:foo-key' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n"))),(0,i.kt)("h4",{id:"enable-jwt-auth"},"Enable ",(0,i.kt)("inlineCode",{parentName:"h4"},"JWT Auth")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an ApisixConsumer, and set the attributes of plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"jwt-auth"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: foo2\nspec:\n  authParameter:\n    jwtAuth:\n      value:\n        key: foo2-key\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"public-api")," plugin to expose the public API:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: default\nspec:\n  http:\n  - name: public-api\n    match:\n      paths:\n      - /apisix/plugin/jwt/sign\n    backends:\n    - serviceName: apisix-admin\n      servicePort: 9180\n    plugins:\n    - name: public-api\n      enable: true\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an ApisixRoute, and enable the jwt-auth plugin:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n name: httpbin-route\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - httpbin.org\n     paths:\n       - /*\n   backends:\n   - serviceName: httpbin\n     servicePort: 80\n   authentication:\n     enable: true\n     type: jwtAuth\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get the token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=foo2-key -H 'Host: httpbin.org' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Without token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401\n...\n{"message":"Missing JWT token in request"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request header with token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,i.kt)("h3",{id:"how-to-enable-restriction"},"How to enable ",(0,i.kt)("inlineCode",{parentName:"h3"},"Restriction")),(0,i.kt)("p",null,"We can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," Plugin to restrict our user from accessing the API."),(0,i.kt)("h4",{id:"how-to-restrict-consumer_name"},"How to restrict ",(0,i.kt)("inlineCode",{parentName:"h4"},"consumer_name")),(0,i.kt)("p",null,"The following is an example. The ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," plugin is enabled on the specified route to restrict ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_name")," access."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"consumer_name"),": Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," to a whitelist or blacklist (supporting single or multiple consumers) to restrict access to services or routes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create ApisixConsumer jack1:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: jack1\nspec:\n  authParameter:\n    keyAuth:\n      value:\n        key: jack1-key\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create ApisixConsumer jack2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixConsumer\nmetadata:\n  name: jack2\nspec:\n  authParameter:\n    keyAuth:\n      value:\n        key: jack2-key\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an ApisixRoute, and enable config ",(0,i.kt)("inlineCode",{parentName:"li"},"whitelist"),"  of the plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"consumer-restriction"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n name: httpserver-route\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - httpbin.org\n     paths:\n       - /*\n   backends:\n   - serviceName: httpbin\n     servicePort: 80\n   authentication:\n     enable: true\n     type: keyAuth\n   plugins:\n   - name: consumer-restriction\n     enable: true\n     config:\n       whitelist:\n       - "default_jack1"\nEOF\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"The ",(0,i.kt)("inlineCode",{parentName:"h5"},"default_jack1")," generation rules:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"view ApisixConsumer resource object from this namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"default")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apisixconsumers.apisix.apache.org -n default\nNAME    AGE\nfoo     14h\njack1   14h\njack2   14h\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"${consumer_name}")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"${namespace}_${ApisixConsumer_name}")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"default_foo"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"${consumer_name}")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"${namespace}_${ApisixConsumer_name}")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"default_jack1"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"${consumer_name}")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"${namespace}_${ApisixConsumer_name}")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"default_jack2")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requests from jack1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'apikey:jack1-key' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requests from jack2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'apikey:jack2-key' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 403 Forbidden\n...\n{"message":"The consumer_name is forbidden."}\n')),(0,i.kt)("h4",{id:"how-to-restrict-allowed_by_methods"},"How to restrict ",(0,i.kt)("inlineCode",{parentName:"h4"},"allowed_by_methods")),(0,i.kt)("p",null,"This example restrict the user ",(0,i.kt)("inlineCode",{parentName:"p"},"jack2")," to only ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," on the resource."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates an ApisixRoute, and enable config ",(0,i.kt)("inlineCode",{parentName:"li"},"allowed_by_methods"),"  of the plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"consumer-restriction"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n name: httpserver-route\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - httpbin.org\n     paths:\n       - /*\n   backends:\n   - serviceName: httpbin\n     servicePort: 80\n   authentication:\n     enable: true\n     type: keyAuth\n   plugins:\n   - name: consumer-restriction\n     enable: true\n     config:\n       allowed_by_methods:\n       - user: "default_jack1"\n         methods:\n         - "POST"\n         - "GET"\n       - user: "default_jack2"\n         methods:\n         - "GET"\nEOF\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requests from jack1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'apikey:jack1-key' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'apikey:jack1-key' -d '' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requests from jack2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'apikey:jack2-key' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX} -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -H 'apikey:jack2-key' -d '' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403 Forbidden\n...\n")),(0,i.kt)("h3",{id:"disable-authentication-and-restriction"},"Disable authentication and restriction"),(0,i.kt)("p",null,"To disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer-restriction")," Plugin, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"enable: false")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," configuration.\nAlso, disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"keyAuth"),", you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"enable: false")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"authentication")," configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f - <<EOF\napiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n name: httpserver-route\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - httpbin.org\n     paths:\n       - /*\n   backends:\n   - serviceName: httpbin\n     servicePort: 80\n   authentication:\n     enable: false\n     type: keyAuth\n   plugins:\n   - name: consumer-restriction\n     enable: false\n     config:\n       allowed_by_methods:\n       - user: "default_jack1"\n         methods:\n         - "POST"\n         - "GET"\n       - user: "default_jack2"\n         methods:\n         - "GET"\nEOF\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  exec -it -n ${namespace of Apache APISIX} ${pod of Apache APISIX}  -- curl http://127.0.0.1:9080/anything -H 'Host: httpbin.org' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\n")))}c.isMDXComponent=!0}}]);