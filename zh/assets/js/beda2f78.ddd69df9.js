"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2035],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),g=r,k=d["".concat(o,".").concat(g)]||d[g]||s[g]||a;return t?l.createElement(k,p(p({ref:n},c),{},{components:t})):l.createElement(k,p({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<a;u++)p[u]=t[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41267:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var l=t(87462),r=(t(67294),t(3905));const a={title:"splunk-hec-logging",keywords:["APISIX","API \u7f51\u5173","\u63d2\u4ef6","Splunk","\u65e5\u5fd7"],description:"API \u7f51\u5173 Apache APISIX \u7684 splunk-hec-logging \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 Splunk HTTP \u4e8b\u4ef6\u6536\u96c6\u5668\uff08HEC\uff09\u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"},p=void 0,i={unversionedId:"plugins/splunk-hec-logging",id:"version-3.0/plugins/splunk-hec-logging",isDocsHomePage:!1,title:"splunk-hec-logging",description:"API \u7f51\u5173 Apache APISIX \u7684 splunk-hec-logging \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 Splunk HTTP \u4e8b\u4ef6\u6536\u96c6\u5668\uff08HEC\uff09\u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/plugins/splunk-hec-logging.md",sourceDirName:"plugins",slug:"/plugins/splunk-hec-logging",permalink:"/zh/docs/apisix/plugins/splunk-hec-logging",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/plugins/splunk-hec-logging.md",tags:[],version:"3.0",frontMatter:{title:"splunk-hec-logging",keywords:["APISIX","API \u7f51\u5173","\u63d2\u4ef6","Splunk","\u65e5\u5fd7"],description:"API \u7f51\u5173 Apache APISIX \u7684 splunk-hec-logging \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 Splunk HTTP \u4e8b\u4ef6\u6536\u96c6\u5668\uff08HEC\uff09\u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"},sidebar:"version-3.0/docs",previous:{title:"google-cloud-logging",permalink:"/zh/docs/apisix/plugins/google-cloud-logging"},next:{title:"file-logger",permalink:"/zh/docs/apisix/plugins/file-logger"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:o};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 Splunk HTTP \u4e8b\u4ef6\u6536\u96c6\u5668\uff08HEC\uff09\u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u542f\u7528\u8be5\u63d2\u4ef6\u540e\uff0cAPISIX \u5c06\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Log Phase")," \u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f\uff0c\u5e76\u5c06\u5176\u5e8f\u5217\u5316\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/FormateventsforHTTPEventCollector#Event_metadata"},"Splunk Event Data \u683c\u5f0f")," \u540e\u63d0\u4ea4\u5230\u6279\u5904\u7406\u961f\u5217\u4e2d\uff0c\u5f53\u89e6\u53d1\u6279\u5904\u7406\u961f\u5217\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u5bb9\u91cf\u6216\u5237\u65b0\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\u65f6\u4f1a\u5c06\u961f\u5217\u4e2d\u7684\u6570\u636e\u63d0\u4ea4\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Splunk HEC")," \u4e2d\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC \u7aef\u70b9\u914d\u7f6e\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.uri"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC \u4e8b\u4ef6\u6536\u96c6 API\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.token"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC \u8eab\u4efd\u4ee4\u724c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.channel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC \u53d1\u9001\u6e20\u9053\u6807\u8bc6\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"https://docs.splunk.com/Documentation/Splunk/8.2.3/Data/AboutHECIDXAck"},"About HTTP Event Collector Indexer Acknowledgment"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Splunk HEC \u6570\u636e\u63d0\u4ea4\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"SSL")," \u9a8c\u8bc1\u3002")))),(0,r.kt)("p",null,"\u672c\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7\u548c\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u8be5\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6bcf ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\uff0c\u6279\u5904\u7406\u5668\u4f1a\u81ea\u52a8\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u6216\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor"),"\u3002"),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C",\n                "channel":"FE0ECFAD-13D5-401B-847D-77833BD77131",\n                "timeout":60\n            },\n            "buffer_duration":60,\n            "max_retry_count":0,\n            "retry_delay":1,\n            "inactive_timeout":2,\n            "batch_max_size":10\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6700\u5c0f\u5316\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C"\n            }\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5411 APISIX \u53d1\u51fa\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/splunk.do?q=hello\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("p",null,"\u8bbf\u95ee\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u767b\u5f55 Splunk \u63a7\u5236\u53f0\u68c0\u7d22\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.0/docs/assets/images/plugin/splunk-hec-admin-cn.png",alt:"splunk hec search view"})),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);