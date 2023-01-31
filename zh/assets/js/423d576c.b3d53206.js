"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[14441],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var g=a.createContext({}),p=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(g.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,g=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=l,m=c["".concat(g,".").concat(s)]||c[s]||d[s]||r;return n?a.createElement(m,o(o({ref:e},u),{},{components:n})):a.createElement(m,o({ref:e},u))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var g in e)hasOwnProperty.call(e,g)&&(i[g]=e[g]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93030:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var a=n(87462),l=(n(67294),n(3905));const r={title:"google-cloud-logging",keywords:["APISIX","API \u7f51\u5173","\u63d2\u4ef6","Splunk","\u65e5\u5fd7"],description:"API \u7f51\u5173 Apache APISIX \u7684 google-cloud-logging \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 Google Cloud Logging Service \u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"},o=void 0,i={unversionedId:"plugins/google-cloud-logging",id:"version-3.0/plugins/google-cloud-logging",isDocsHomePage:!1,title:"google-cloud-logging",description:"API \u7f51\u5173 Apache APISIX \u7684 google-cloud-logging \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 Google Cloud Logging Service \u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/plugins/google-cloud-logging.md",sourceDirName:"plugins",slug:"/plugins/google-cloud-logging",permalink:"/zh/docs/apisix/plugins/google-cloud-logging",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/plugins/google-cloud-logging.md",tags:[],version:"3.0",frontMatter:{title:"google-cloud-logging",keywords:["APISIX","API \u7f51\u5173","\u63d2\u4ef6","Splunk","\u65e5\u5fd7"],description:"API \u7f51\u5173 Apache APISIX \u7684 google-cloud-logging \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 Google Cloud Logging Service \u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"},sidebar:"version-3.0/docs",previous:{title:"sls-logger",permalink:"/zh/docs/apisix/plugins/sls-logger"},next:{title:"splunk-hec-logging",permalink:"/zh/docs/apisix/plugins/splunk-hec-logging"}},g=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],p={toc:g};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"google-cloud-logging")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u65e5\u5fd7\u53d1\u9001\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/"},"Google Cloud Logging Service")," \u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auth_config")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"auth_file")," \u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.private_key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c37\u6b4c\u670d\u52a1\u5e10\u53f7\u7684\u79c1\u94a5\u53c2\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.project_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c37\u6b4c\u670d\u52a1\u5e10\u53f7\u7684\u9879\u76ee ID\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.token_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://oauth2.googleapis.com/token"},"https://oauth2.googleapis.com/token")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u8c37\u6b4c\u670d\u52a1\u5e10\u6237\u7684\u4ee4\u724c\u7684 URI\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.entries_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://logging.googleapis.com/v2/entries:write"},"https://logging.googleapis.com/v2/entries:write")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c37\u6b4c\u65e5\u5fd7\u670d\u52a1\u5199\u5165\u65e5\u5fd7\u6761\u76ee\u7684 API\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_config.scopes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c37\u6b4c\u670d\u52a1\u8d26\u53f7\u7684\u8bbf\u95ee\u8303\u56f4\uff0c\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/oauth2/scopes#logging"},"OAuth 2.0 Scopes for Google APIs"),'\u3002\u53ef\u9009\u9879\uff1a"',(0,l.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/logging.read%22%E3%80%81%22https://www.googleapis.com/auth/logging.write%22%E3%80%81%22https://www.googleapis.com/auth/logging.admin%22%E3%80%81%22https://www.googleapis.com/auth/cloud-platform%22%E3%80%82"},'https://www.googleapis.com/auth/logging.read"\u3001"https://www.googleapis.com/auth/logging.write"\u3001"https://www.googleapis.com/auth/logging.admin"\u3001"https://www.googleapis.com/auth/cloud-platform"\u3002'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth_file"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auth_config")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"auth_file")," \u5fc5\u987b\u914d\u7f6e\u4e00\u4e2a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"SSL")," \u9a8c\u8bc1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'{"type": "global"}'),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c37\u6b4c\u76d1\u63a7\u8d44\u6e90\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource"},"MonitoredResource"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"apisix.apache.org%2Flogs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c37\u6b4c\u65e5\u5fd7 ID\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry"},"LogEntry"),"\u3002")))),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7\u548c\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u8be5\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6bcf ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\uff0c\u6279\u5904\u7406\u5668\u4f1a\u81ea\u52a8\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u6216\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch Processor"),"\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "google-cloud-logging": {\n            "auth_config":{\n                "project_id":"apisix",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----",\n                "token_uri":"https://oauth2.googleapis.com/token",\n                "scopes":[\n                    "https://www.googleapis.com/auth/logging.admin"\n                ],\n                "entries_uri":"https://logging.googleapis.com/v2/entries:write"\n            },\n            "resource":{\n                "type":"global"\n            },\n            "log_id":"apisix.apache.org%2Flogs",\n            "inactive_timeout":10,\n            "max_retry_count":0,\n            "max_retry_count":0,\n            "buffer_duration":60,\n            "retry_delay":1,\n            "batch_max_size":1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6700\u5c0f\u5316\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "google-cloud-logging": {\n            "auth_config":{\n                "project_id":"apisix",\n                "private_key":"-----BEGIN RSA PRIVATE KEY-----your private key-----END RSA PRIVATE KEY-----"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5411 APISIX \u53d1\u51fa\u8bf7\u6c42\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("p",null,"\u8bbf\u95ee\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u767b\u5f55 ",(0,l.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/logs/viewer"},"Google Cloud Logging Service")," \u67e5\u770b\u76f8\u5173\u65e5\u5fd7\u3002"),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);