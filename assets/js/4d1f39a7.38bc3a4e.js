"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7400],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),g=o,h=m["".concat(c,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const a={title:"Run Ingress APISIX on Amazon EKS",author:"Chao Zhang",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars0.githubusercontent.com/u/10428333?s=60&v=4",keywords:["API Gateway","APISIX","Apache APISIX","Ingress","Amazon EKS"],description:"This article details how to run the cloud-native API gateway Apache APISIX and apisix-ingress-controller on Amazon EKS.",tags:["Ecosystem"]},i=void 0,s={permalink:"/blog/2021/01/21/run-ingress-apisix-on-amazon-eks",source:"@site/blog/2021/01/21/run-ingress-apisix-on-amazon-eks.md",title:"Run Ingress APISIX on Amazon EKS",description:"This article details how to run the cloud-native API gateway Apache APISIX and apisix-ingress-controller on Amazon EKS.",date:"2021-01-21T00:00:00.000Z",formattedDate:"January 21, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:4.225,truncated:!0,authors:[{name:"Chao Zhang",url:"https://github.com/tokers",imageURL:"https://avatars0.githubusercontent.com/u/10428333?s=60&v=4"}],prevItem:{title:"Stable Product Delivery with Cypress",permalink:"/blog/2021/02/08/stable-product-delivery-with-cypress"},nextItem:{title:"Apache APISIX Contributor Interview | Pengcheng Wang from PricewaterhouseCoopers",permalink:"/blog/2021/01/11/interview-apache-apisix-contributor-wang-pengcheng-senior-security-advisor-of-pwc-south-china-data-security-and-privacy-protection-team"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Amazon EKS provides flexibility to start, run, and scale Kubernetes applications in the AWS cloud or on-premises. This article explains how to run Ingress APISIX on it.This article explains how to run Ingress APISIX on Amazon EKS.")))}u.isMDXComponent=!0}}]);