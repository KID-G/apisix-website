"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1092],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,g=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const o={title:"GCP, AWS, Azure, and OCI ARM-Based Server Performance Comparison",authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"},{name:"Yilia",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4"}],keywords:["API gateway","ARM","Azure","AWS","Google","Oracle","Apache APISIX"],description:"This article compares the performance of Google, AWS, Azure, and Oracle ARM-based servers in network IO-intensive scenarios through the API gateway Apache APISIX.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/10/18/634e6963ea45f.png"},i=void 0,c={permalink:"/blog/2022/08/12/arm-performance-google-aws-azure-with-apisix",source:"@site/blog/2022/08/12/arm-performance-google-aws-azure-with-apisix.md",title:"GCP, AWS, Azure, and OCI ARM-Based Server Performance Comparison",description:"This article compares the performance of Google, AWS, Azure, and Oracle ARM-based servers in network IO-intensive scenarios through the API gateway Apache APISIX.",date:"2022-08-12T00:00:00.000Z",formattedDate:"August 12, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.415,truncated:!0,authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png",imageURL:"https://github.com/soulbird.png"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"},{name:"Yilia",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4",imageURL:"https://avatars.githubusercontent.com/u/114121331?v=4"}],prevItem:{title:"Backend-for-Frontend: the demo",permalink:"/blog/2022/08/17/backend-for-frontend-demo"},nextItem:{title:"Biweekly Report (Jul 16 - Jul 31)",permalink:"/blog/2022/08/09/weekly-report-0731"}},l={authorsImageUrls:[void 0,void 0,void 0]},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article uses  Apache APISIX to compare the performance of AWS, Google, Azure, and Oracle ARM-based servers in network IO-intensive scenarios.")))}p.isMDXComponent=!0}}]);