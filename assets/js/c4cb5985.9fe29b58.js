"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9686],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5793:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Import OpenAPI Guide"},o=void 0,p={unversionedId:"IMPORT_OPENAPI_USER_GUIDE",id:"version-2.5/IMPORT_OPENAPI_USER_GUIDE",isDocsHomePage:!1,title:"Import OpenAPI Guide",description:"The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection.",source:"@site/docs-apisix-dashboard_versioned_docs/version-2.5/IMPORT_OPENAPI_USER_GUIDE.md",sourceDirName:".",slug:"/IMPORT_OPENAPI_USER_GUIDE",permalink:"/docs/dashboard/2.5/IMPORT_OPENAPI_USER_GUIDE",editUrl:"/edit#https://github.com/apache/apisix-dashboard/edit/release/2.5/docs/en/latest/IMPORT_OPENAPI_USER_GUIDE.md",tags:[],version:"2.5",frontMatter:{title:"Import OpenAPI Guide"},sidebar:"version-2.5/docs",previous:{title:"User Guide",permalink:"/docs/dashboard/2.5/USER_GUIDE"},next:{title:"API doc of Manager API.",permalink:"/docs/dashboard/2.5/api/api"}},s=[{value:"OAS3.0 Compatibility",id:"oas30-compatibility",children:[]},{value:"Extended fields",id:"extended-fields",children:[]}],l={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection."),(0,n.kt)("p",null,"Apache APISIX Dashboard supports importing ",(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenApi3.0"),"(we will use OAS3.0 for short) files to create the Route. Currently we support support most of the OpenApi specifications, but there are some differences, which are in terms of compatibility and extended fields."),(0,n.kt)("h2",{id:"oas30-compatibility"},"OAS3.0 Compatibility"),(0,n.kt)("p",null,"when we import routes from OAS3.0, some fields in OAS will be missed because there are not corresponding fields in APISIX's Route:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/api-general-info/"},"API General Info"),": used to describe the general information about your API, some times, a oas file contains a series of apis which belong to a app, so this info is different from the api's name and extra basic info.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/api-host-and-base-path/"},"API server and base path"),": upsream url + url prefix(options).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/describing-parameters/"},"Path params"),": api params described in path.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/describing-parameters/"},"Query params"),": api params described in query.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/describing-responses/"},"Responses description and links"),": Define the responses for a API operations."))),(0,n.kt)("h2",{id:"extended-fields"},"Extended fields"),(0,n.kt)("p",null,"There are some fields required in APISIX Route but are not included in the properties of OAS3.0, we added some extended fields such as upstream, plugins, hosts and so on. All extensions start with x-apisix. See ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/admin-api/#route"},"reference")," For more details of the APISIX Route Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Extended fields"),(0,n.kt)("th",{parentName:"tr",align:null},"APISIX Route Properties"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-plugins"),(0,n.kt)("td",{parentName:"tr",align:null},"plugins")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-script"),(0,n.kt)("td",{parentName:"tr",align:null},"script")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-upstream"),(0,n.kt)("td",{parentName:"tr",align:null},"upstream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-service_protocol"),(0,n.kt)("td",{parentName:"tr",align:null},"service_protocol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-host"),(0,n.kt)("td",{parentName:"tr",align:null},"host")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-hosts"),(0,n.kt)("td",{parentName:"tr",align:null},"hosts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-remote_addr"),(0,n.kt)("td",{parentName:"tr",align:null},"remote_addr")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-priority"),(0,n.kt)("td",{parentName:"tr",align:null},"priority")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-vars"),(0,n.kt)("td",{parentName:"tr",align:null},"vars")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-filter_func"),(0,n.kt)("td",{parentName:"tr",align:null},"filter_func")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-labels"),(0,n.kt)("td",{parentName:"tr",align:null},"labels")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-enable_websocket"),(0,n.kt)("td",{parentName:"tr",align:null},"enable_websocket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-status"),(0,n.kt)("td",{parentName:"tr",align:null},"status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-create_time"),(0,n.kt)("td",{parentName:"tr",align:null},"create_time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"x-apisix-update_time"),(0,n.kt)("td",{parentName:"tr",align:null},"update_time")))))}d.isMDXComponent=!0}}]);