"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2552],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=s(n),g=r,d=h["".concat(u,".").concat(g)]||h[g]||l[g]||o;return n?a.createElement(d,c(c({ref:t},p),{},{components:n})):a.createElement(d,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const o={title:"Why Apache APISIX chose Nginx and Lua to build API Gateway",slug:"2021/08/25/why-apache-apisix-chose-nginx-and-lua",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["APISIX","Apache APISIX","Lua","Nginx","API Gateway"],description:"This article introduces the historical background of Apache APISIX's choice of Nginx + Lua technology stack and the advantages they bring to APISIX.",tags:["Ecosystem"]},c=void 0,i={permalink:"/blog/2021/08/25/why-apache-apisix-chose-nginx-and-lua",source:"@site/blog/2021/08/25/Why-Apache-APISIX-chose-Nginx-and-Lua.md",title:"Why Apache APISIX chose Nginx and Lua to build API Gateway",description:"This article introduces the historical background of Apache APISIX's choice of Nginx + Lua technology stack and the advantages they bring to APISIX.",date:"2021-08-25T00:00:00.000Z",formattedDate:"August 25, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.925,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Centralized authentication using the OpenID Connect plugin for Apache APISIX",permalink:"/blog/2021/08/25/using-the-apache-apisix-openid-connect-plugin-for-centralized-authentication"},nextItem:{title:"Apache APISIX Meetup in Shanghai",permalink:"/blog/2021/08/24/shanghai-meetup-recap"}},u={authorsImageUrls:[void 0]},s=[],p={toc:s};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article was written by Zexuan Luo, engineer of ",(0,r.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai"),", and introduced the historical background of Apache APISIX's selection of Nginx + Lua technology stack and the advantages this technology stack brings to Apache APISIX. Zexuan Luo is an OpenResty developer and Apache APISIX PMC.")))}l.isMDXComponent=!0}}]);