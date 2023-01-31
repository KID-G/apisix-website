"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48697:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={title:"ApisixTls",keywords:["APISIX ingress","Apache APISIX","ApisixTls"],description:"Guide to using ApisixTls custom Kubernetes resource."},a=void 0,o={unversionedId:"concepts/apisix_tls",id:"version-1.6.0/concepts/apisix_tls",isDocsHomePage:!1,title:"ApisixTls",description:"Guide to using ApisixTls custom Kubernetes resource.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.0/concepts/apisix_tls.md",sourceDirName:"concepts",slug:"/concepts/apisix_tls",permalink:"/zh/docs/ingress-controller/concepts/apisix_tls",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.0/docs/zh/latest/concepts/apisix_tls.md",tags:[],version:"1.6.0",frontMatter:{title:"ApisixTls",keywords:["APISIX ingress","Apache APISIX","ApisixTls"],description:"Guide to using ApisixTls custom Kubernetes resource."},sidebar:"version-1.6.0/docs",previous:{title:"ApisixUpstream",permalink:"/zh/docs/ingress-controller/concepts/apisix_upstream"},next:{title:"ApisixClusterConfig",permalink:"/zh/docs/ingress-controller/concepts/apisix_cluster_config"}},c=[],p={toc:c};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApisixTls")," is a Kubernetes CRD object used to create an ",(0,i.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/admin-api#ssl"},"APISIX SSL object"),". It uses a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kubernetes secret")," with two keys, ",(0,i.kt)("inlineCode",{parentName:"p"},"cert")," containing the certificate, and ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," containing the private key in PEM format."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/references/apisix_tls_v2"},"reference")," for the full API documentation."),(0,i.kt)("p",null,"The example below shows how you can configure an ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixTls")," resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixTls\nmetadata:\n  name: sample-tls\nspec:\n  hosts:\n  - httpbin.org\n  secret:\n    name: htpbin-cert\n    namespace: default\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"hosts")," field is accurate. APISIX uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," field to match the correct certificate. It should also match the ",(0,i.kt)("a",{parentName:"p",href:"https://www.globalsign.com/en/blog/what-is-server-name-indication#:~:text=Server%20Name%20Indication%20(SNI)%20allows,in%20the%20CLIENT%20HELLO%20message"},"Server Name Indication")," extension in TLS, or the TLS handshake might fail."))),(0,i.kt)("p",null,"APISIX Ingress will watch the secret resources referred by ",(0,i.kt)("inlineCode",{parentName:"p"},"ApisixTls")," objects and re-translates it to APISIX resources if they are changed."))}l.isMDXComponent=!0}}]);