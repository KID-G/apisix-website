"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1526],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,y=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u76f4\u64ad\u9884\u544a | Apache APISIX \xd7 Apache RocketMQ \u7ebf\u4e0a\u5206\u4eab",keywords:["Apache APISIX","Apache RocketMQ","Kubernetes","\u5c0f\u7ea2\u4e66","Wasm"],description:"API \u7f51\u5173 Apache APISIX \u793e\u533a\u8054\u5408 Apache RockMQ \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5305\u542b\u4e86\u5c0f\u7ea2\u4e66\u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u8fd0\u7ef4\u5b9e\u8df5\u4e0e\u6cbb\u7406\u4e4b\u8def, \u57fa\u4e8e WASM \u7684 Apache APISIX \u591a\u8bed\u8a00\u63d2\u4ef6\u65b9\u6848\u7b49\u4e3b\u9898\u5206\u4eab\u3002",tags:["Community"]},c=void 0,i={permalink:"/zh/blog/2021/12/16/apisix-with-rocketmq-meetup",source:"@site/blog/2021/12/16/apisix-with-rocketmq-meetup.md",title:"\u76f4\u64ad\u9884\u544a | Apache APISIX \xd7 Apache RocketMQ \u7ebf\u4e0a\u5206\u4eab",description:"API \u7f51\u5173 Apache APISIX \u793e\u533a\u8054\u5408 Apache RockMQ \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5305\u542b\u4e86\u5c0f\u7ea2\u4e66\u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u8fd0\u7ef4\u5b9e\u8df5\u4e0e\u6cbb\u7406\u4e4b\u8def, \u57fa\u4e8e WASM \u7684 Apache APISIX \u591a\u8bed\u8a00\u63d2\u4ef6\u65b9\u6848\u7b49\u4e3b\u9898\u5206\u4eab\u3002",date:"2021-12-16T00:00:00.000Z",formattedDate:"2021\u5e7412\u670816\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:4.52,truncated:!0,authors:[],prevItem:{title:"\u5229\u7528 APISIX Ingress \u5b9e\u73b0 Istio \u670d\u52a1\u7684\u5b89\u5168\u66b4\u9732",permalink:"/zh/blog/2021/12/17/exposure-istio-with-apisix-ingress"},nextItem:{title:"\u4e24\u79cd\u65b9\u5f0f\u6559\u4f60\u5728 K8s \u4e2d\u8f7b\u677e\u90e8\u7f72 Apache APISIX",permalink:"/zh/blog/2021/12/15/deploy-apisix-in-kubernetes"}},p={authorsImageUrls:[]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"12 \u6708 26 \u65e5\uff0cApache APISIX \u793e\u533a\u8054\u5408 Apache RockMQ \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427\u3002")))}s.isMDXComponent=!0}}]);