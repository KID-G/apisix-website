"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[19231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2511:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"splunk-hec-logging"},i=void 0,o={unversionedId:"plugins/splunk-hec-logging",id:"version-2.12/plugins/splunk-hec-logging",isDocsHomePage:!1,title:"splunk-hec-logging",description:"Name",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/splunk-hec-logging.md",sourceDirName:"plugins",slug:"/plugins/splunk-hec-logging",permalink:"/docs/apisix/2.12/plugins/splunk-hec-logging",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.12/docs/en/latest/plugins/splunk-hec-logging.md",tags:[],version:"2.12",frontMatter:{title:"splunk-hec-logging"},sidebar:"version-2.12/docs",previous:{title:"google-cloud-logging",permalink:"/docs/apisix/2.12/plugins/google-cloud-logging"},next:{title:"serverless",permalink:"/docs/apisix/2.12/plugins/serverless"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[{value:"Full configuration",id:"full-configuration",children:[]},{value:"Minimize configuration",id:"minimize-configuration",children:[]}]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#name"},(0,r.kt)("strong",{parentName:"a"},"Name"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attributes"},(0,r.kt)("strong",{parentName:"a"},"Attributes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,r.kt)("strong",{parentName:"a"},"How To Enable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#test-plugin"},(0,r.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,r.kt)("strong",{parentName:"a"},"Disable Plugin")))),(0,r.kt)("h2",{id:"name"},"Name"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," plugin is used to forward the request log of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Splunk HTTP Event Collector (HEC)")," for analysis and storage. After the plugin is enabled, ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," will obtain request context information in ",(0,r.kt)("inlineCode",{parentName:"p"},"Log Phase")," serialize it into ",(0,r.kt)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/FormateventsforHTTPEventCollector#Event_metadata"},"Splunk Event Data format")," and submit it to the batch queue. When the maximum processing capacity of each batch of the batch processing queue or the maximum time to refresh the buffer is triggered, the data in the queue will be submitted to ",(0,r.kt)("inlineCode",{parentName:"p"},"Splunk HEC"),"."),(0,r.kt)("p",null,"For more info on Batch-Processor in Apache APISIX please refer to:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.12/batch-processor"},"Batch-Processor")),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC endpoint configuration info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.uri"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC event collector API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.token"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC authentication token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.channel"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC send data channel identifier, refer to: ",(0,r.kt)("a",{parentName:"td",href:"https://docs.splunk.com/Documentation/Splunk/8.2.3/Data/AboutHECIDXAck"},"About HTTP Event Collector Indexer Acknowledgment"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC send data timeout, time unit: (seconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"enable ",(0,r.kt)("inlineCode",{parentName:"td"},"SSL")," verification, option as per ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"max number of retries before removing from the processing pipe line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"number of seconds the process execution should be delayed if the execution fails")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"max age in seconds of the oldest entry in a batch before the batch must be processed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"max age in seconds when the buffer will be flushed if inactive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"max size of each batch")))),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("p",null,"The following is an example of how to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," for a specific route."),(0,r.kt)("h3",{id:"full-configuration"},"Full configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C",\n                "channel":"FE0ECFAD-13D5-401B-847D-77833BD77131",\n                "timeout":60\n            },\n            "buffer_duration":60,\n            "max_retry_count":0,\n            "retry_delay":1,\n            "inactive_timeout":2,\n            "batch_max_size":10\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,r.kt)("h3",{id:"minimize-configuration"},"Minimize configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C"\n            }\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send request to route configured with the ",(0,r.kt)("inlineCode",{parentName:"li"},"splunk-hec-logging")," plugin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/splunk.do?q=hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Login to Splunk Dashboard to search and view")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.12/docs/assets/images/plugin/splunk-hec-admin-en.png",alt:"splunk hec search view"})),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"Disabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," plugin is very simple, just remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," configuration corresponding to ",(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);