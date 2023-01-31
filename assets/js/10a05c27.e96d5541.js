"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[45151],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function h(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),o=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,d=h(t,["components","mdxType","originalType","parentName"]),p=o(a),u=r,m=p["".concat(c,".").concat(u)]||p[u]||s[u]||l;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=p;var h={};for(var c in e)hasOwnProperty.call(e,c)&&(h[c]=e[c]);h.originalType=t,h.mdxType="string"==typeof t?t:r,i[1]=h;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},22678:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"Health Check",keywords:["APISIX","API Gateway","Health Check"],description:"This article describes how to use the health check feature of API Gateway Apache APISIX to check the health status of upstream nodes."},i=void 0,h={unversionedId:"tutorials/health-check",id:"tutorials/health-check",isDocsHomePage:!1,title:"Health Check",description:"This article describes how to use the health check feature of API Gateway Apache APISIX to check the health status of upstream nodes.",source:"@site/docs/apisix/tutorials/health-check.md",sourceDirName:"tutorials",slug:"/tutorials/health-check",permalink:"/docs/apisix/next/tutorials/health-check",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/tutorials/health-check.md",tags:[],version:"current",frontMatter:{title:"Health Check",keywords:["APISIX","API Gateway","Health Check"],description:"This article describes how to use the health check feature of API Gateway Apache APISIX to check the health status of upstream nodes."},sidebar:"docs",previous:{title:"Add multiple API versions",permalink:"/docs/apisix/next/tutorials/add-multiple-api-versions"},next:{title:"Configure mTLS for client to APISIX",permalink:"/docs/apisix/next/tutorials/client-to-apisix-mtls"}},c=[{value:"Description",id:"description",children:[]},{value:"Active check",id:"active-check",children:[]},{value:"Passive check",id:"passive-check",children:[{value:"Configuration instructions",id:"configuration-instructions",children:[]},{value:"Configuration example",id:"configuration-example",children:[]}]}],o={toc:c};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This article mainly introduces the health check function of Apache APISIX. The health check function can proxy requests to healthy nodes when the upstream node fails or migrates, avoiding the problem of service unavailability to the greatest extent. The health check function of APISIX is implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-healthcheck"},"lua-resty-healthcheck"),", which is divided into active check and passive check."),(0,r.kt)("h2",{id:"active-check"},"Active check"),(0,r.kt)("p",null,"Active health check mainly means that APISIX actively detects the survivability of upstream nodes through preset probe types. APISIX supports three probe types: ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPS"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"TCP"),"."),(0,r.kt)("p",null,"When N consecutive probes sent to healthy node ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," fail, the node will be marked as unhealthy, and the unhealthy node will be ignored by APISIX's load balancer and cannot receive requests; if For an unhealthy node, if M consecutive probes are successful, the node will be re-marked as healthy and can be proxied."),(0,r.kt)("h2",{id:"passive-check"},"Passive check"),(0,r.kt)("p",null,"Passive health check refers to judging whether the corresponding upstream node is healthy by judging the response status of the request forwarded from APISIX to the upstream node. Compared with the active health check, the passive health check method does not need to initiate additional probes, but it cannot sense the node status in advance, and there may be a certain amount of failed requests."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," consecutive requests to a healthy node A fail, the node will be marked as unhealthy."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since unhealthy nodes cannot receive requests, nodes cannot be re-marked as healthy using the passive health check strategy alone, so combining the active health check strategy is usually necessary."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"We only start the health check when the upstream is hit by a request. There won't be any health check if an upstream is configured but isn't in used."),(0,r.kt)("li",{parentName:"ul"},"If there is no healthy node can be chosen, we will continue to access the upstream."),(0,r.kt)("li",{parentName:"ul"},"We won't start the health check when the upstream only has one node, as we will access it whether this unique node is healthy or not.")))),(0,r.kt)("h3",{id:"configuration-instructions"},"Configuration instructions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Configuration type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value type"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http")," ",(0,r.kt)("inlineCode",{parentName:"td"},"https")," ",(0,r.kt)("inlineCode",{parentName:"td"},"tcp")),(0,r.kt)("td",{parentName:"tr",align:null},"http"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of active check.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The timeout period of the active check (unit: second).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.concurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of targets to be checked at the same time during the active check.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.http_path"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"The HTTP request path that is actively checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.host"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"${upstream.node.host}"),(0,r.kt)("td",{parentName:"tr",align:null},"The hostname of the HTTP request actively checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.port"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"65535")),(0,r.kt)("td",{parentName:"tr",align:null},"${upstream.node.port}"),(0,r.kt)("td",{parentName:"tr",align:null},"The host port of the HTTP request that is actively checked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.https_verify_certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check whether to check the SSL certificate of the remote host when HTTPS type checking is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.req_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check When using HTTP or HTTPS type checking, set additional request header information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">= 1")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node) check interval (unit: second)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"599")),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 302]"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node) HTTP or HTTPS type check, the HTTP status code of the healthy node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.healthy.successes"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (healthy node) determine the number of times a node is healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">= 1")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) check interval (unit: second)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"599")),(0,r.kt)("td",{parentName:"tr",align:null},"[429, 404, 500, 501, 502, 503, 504, 505]"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) HTTP or HTTPS type check, the HTTP status code of the non-healthy node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.http_failures"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) HTTP or HTTPS type check, determine the number of times that the node is not healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.tcp_failures"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) TCP type check, determine the number of times that the node is not healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.active.unhealthy.timeouts"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Active check (unhealthy node) to determine the number of timeouts for unhealthy nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.type"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http")," ",(0,r.kt)("inlineCode",{parentName:"td"},"https")," ",(0,r.kt)("inlineCode",{parentName:"td"},"tcp")),(0,r.kt)("td",{parentName:"tr",align:null},"http"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of passive check.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.healthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"599")),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308]"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (healthy node) HTTP or HTTPS type check, the HTTP status code of the healthy node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.healthy.successes"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (healthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive checks (healthy node) determine the number of times a node is healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"599")),(0,r.kt)("td",{parentName:"tr",align:null},"[429, 500, 503]"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node) HTTP or HTTPS type check, the HTTP status code of the non-healthy node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.tcp_failures"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node) When TCP type is checked, determine the number of times that the node is not healthy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.timeouts"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive checks (unhealthy node) determine the number of timeouts for unhealthy nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream.checks.passive.unhealthy.http_failures"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"254")),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Passive check (unhealthy node) The number of times that the node is not healthy during HTTP or HTTPS type checking.")))),(0,r.kt)("h3",{id:"configuration-example"},"Configuration example"),(0,r.kt)("p",null,"You can enable health checks in routes via the Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n         "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1970": 1\n        },\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "timeout": 5,\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                },\n                "req_headers": ["User-Agent: curl/7.29.0"]\n            },\n            "passive": {\n                "healthy": {\n                    "http_statuses": [200, 201],\n                    "successes": 3\n                },\n                "unhealthy": {\n                    "http_statuses": [500],\n                    "http_failures": 3,\n                    "tcp_failures": 3\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"If APISIX detects an unhealthy node, the following logs will be output in the error log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"enabled healthcheck passive while logging request\nfailed to receive status line from 'nil (127.0.0.1:1980)': closed\nunhealthy TCP increment (1/2) for '(127.0.0.1:1980)'\nfailed to receive status line from 'nil (127.0.0.1:1980)': closed\nunhealthy TCP increment (2/2) for '(127.0.0.1:1980'\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To observe the above log information, you need to adjust the error log level to ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),"."))),(0,r.kt)("p",null,"The health check status can be fetched via ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck")," in ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/control-api"},"Control API"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\ncurl http://127.0.0.1:9090/v1/healthcheck/upstreams/healthycheck -s | jq .\n\n")))}d.isMDXComponent=!0}}]);