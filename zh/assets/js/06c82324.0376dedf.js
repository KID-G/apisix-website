"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[93749],{3905:(t,a,e)=>{e.d(a,{Zo:()=>g,kt:()=>m});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var k=n.createContext({}),d=function(t){var a=n.useContext(k),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},g=function(t){var a=d(t.components);return n.createElement(k.Provider,{value:a},t.children)},o={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,k=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),u=d(e),m=l,N=u["".concat(k,".").concat(m)]||u[m]||o[m]||r;return e?n.createElement(N,i(i({ref:a},g),{},{components:e})):n.createElement(N,i({ref:a},g))}));function m(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=u;var p={};for(var k in a)hasOwnProperty.call(a,k)&&(p[k]=a[k]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},54139:(t,a,e)=>{e.r(a),e.d(a,{contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>k});var n=e(87462),l=(e(67294),e(3905));const r={title:"error-log-logger",keywords:["APISIX","API \u7f51\u5173","\u9519\u8bef\u65e5\u5fd7","Plugin"],description:"API \u7f51\u5173 Apache APISIX error-log-logger \u63d2\u4ef6\u7528\u4e8e\u5c06 APISIX \u7684\u9519\u8bef\u65e5\u5fd7\u63a8\u9001\u5230 TCP\u3001Apache SkyWalking\u3001Apache Kafka \u6216 ClickHouse \u670d\u52a1\u5668\u3002"},i=void 0,p={unversionedId:"plugins/error-log-logger",id:"plugins/error-log-logger",isDocsHomePage:!1,title:"error-log-logger",description:"API \u7f51\u5173 Apache APISIX error-log-logger \u63d2\u4ef6\u7528\u4e8e\u5c06 APISIX \u7684\u9519\u8bef\u65e5\u5fd7\u63a8\u9001\u5230 TCP\u3001Apache SkyWalking\u3001Apache Kafka \u6216 ClickHouse \u670d\u52a1\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/error-log-logger.md",sourceDirName:"plugins",slug:"/plugins/error-log-logger",permalink:"/zh/docs/apisix/next/plugins/error-log-logger",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/error-log-logger.md",tags:[],version:"current",frontMatter:{title:"error-log-logger",keywords:["APISIX","API \u7f51\u5173","\u9519\u8bef\u65e5\u5fd7","Plugin"],description:"API \u7f51\u5173 Apache APISIX error-log-logger \u63d2\u4ef6\u7528\u4e8e\u5c06 APISIX \u7684\u9519\u8bef\u65e5\u5fd7\u63a8\u9001\u5230 TCP\u3001Apache SkyWalking\u3001Apache Kafka \u6216 ClickHouse \u670d\u52a1\u5668\u3002"},sidebar:"docs",previous:{title:"log-rotate",permalink:"/zh/docs/apisix/next/plugins/log-rotate"},next:{title:"sls-logger",permalink:"/zh/docs/apisix/next/plugins/sls-logger"}},k=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u914d\u7f6e TCP \u670d\u52a1\u5668\u5730\u5740",id:"\u914d\u7f6e-tcp-\u670d\u52a1\u5668\u5730\u5740",children:[]},{value:"\u914d\u7f6e SkyWalking OAP \u670d\u52a1\u5668\u5730\u5740",id:"\u914d\u7f6e-skywalking-oap-\u670d\u52a1\u5668\u5730\u5740",children:[]},{value:"\u914d\u7f6e ClickHouse \u6570\u636e\u5e93",id:"\u914d\u7f6e-clickhouse-\u6570\u636e\u5e93",children:[]},{value:"\u914d\u7f6e Kafka",id:"\u914d\u7f6e-kafka",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],d={toc:k};function g(t){let{components:a,...e}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"error-log-logger")," \u63d2\u4ef6\u7528\u4e8e\u5c06 APISIX \u7684\u9519\u8bef\u65e5\u5fd7 (",(0,l.kt)("inlineCode",{parentName:"p"},"error.log"),") \u63a8\u9001\u5230 TCP\u3001Apache SkyWalking\u3001Apache Kafka \u6216 ClickHouse \u670d\u52a1\u5668\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u9519\u8bef\u65e5\u5fd7\u7ea7\u522b\u4ee5\u5c06\u65e5\u5fd7\u53d1\u9001\u5230\u670d\u52a1\u5668\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"TCP \u670d\u52a1\u7684 IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u6267\u884c SSL \u9a8c\u8bc1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tcp.tls_server_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"TLS \u670d\u52a1\u540d\u79f0\u6807\u8bb0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12900/v3/logs"},"http://127.0.0.1:12900/v3/logs")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"SkyWalking \u7684 HTTP endpoint \u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12800%E3%80%82"},"http://127.0.0.1:12800\u3002"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.service_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"APISIX"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"SkyWalking \u4e0a\u62a5\u7684 service \u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skywalking.service_instance_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"APISIX Instance Name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"SkyWalking \u4e0a\u62a5\u7684 service \u5b9e\u4f8b\u540d\uff0c\u5982\u679c\u5e0c\u671b\u76f4\u63a5\u83b7\u53d6\u672c\u673a\u4e3b\u673a\u540d\u8bf7\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"$hostname"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.endpoint_addr"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:8213"},"http://127.0.0.1:8213")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse \u7684 HTTP endpoint \u5730\u5740\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"http://127.0.0.1:8213"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse \u7684\u7528\u6237\u540d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse \u7684\u5bc6\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse \u7684\u7528\u4e8e\u63a5\u6536\u65e5\u5fd7\u7684\u6570\u636e\u5e93\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clickhouse.logtable"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ClickHouse \u7684\u7528\u4e8e\u63a5\u6536\u65e5\u5fd7\u7684\u8868\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.brokers"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u63a8\u9001\u7684 Kafka broker \u5217\u8868\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.brokers.host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka broker \u7684\u8282\u70b9 host \u914d\u7f6e\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"192.168.1.1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.brokers.port"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka broker \u7684\u8282\u70b9\u7aef\u53e3\u914d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.brokers.sasl_config"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka broker \u4e2d\u7684 sasl_config")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.brokers.sasl_config.mechanism"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"PLAIN"'),(0,l.kt)("td",{parentName:"tr",align:null},'["PLAIN"]'),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka broker \u4e2d\u7684 sasl \u8ba4\u8bc1\u673a\u5236")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.brokers.sasl_config.user"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka broker \u4e2d sasl \u914d\u7f6e\u4e2d\u7684 user\uff0c\u5982\u679c sasl_config \u5b58\u5728\uff0c\u5219\u5fc5\u987b\u586b\u5199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.brokers.sasl_config.password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka broker \u4e2d sasl \u914d\u7f6e\u4e2d\u7684 password\uff0c\u5982\u679c sasl_config \u5b58\u5728\uff0c\u5219\u5fc5\u987b\u586b\u5199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.kafka_topic"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u63a8\u9001\u7684 Kafka topic\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.producer_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"async"),(0,l.kt)("td",{parentName:"tr",align:null},'["async", "sync"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u4ea7\u8005\u53d1\u9001\u6d88\u606f\u7684\u6a21\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.required_acks"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 1, -1]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u4ea7\u8005\u5728\u786e\u8ba4\u4e00\u4e2a\u8bf7\u6c42\u53d1\u9001\u5b8c\u6210\u4e4b\u524d\u9700\u8981\u6536\u5230\u7684\u53cd\u9988\u4fe1\u606f\u7684\u6570\u91cf\u3002\u8be5\u53c2\u6570\u662f\u4e3a\u4e86\u4fdd\u8bc1\u53d1\u9001\u8bf7\u6c42\u7684\u53ef\u9760\u6027\u3002\u8be5\u5c5e\u6027\u7684\u914d\u7f6e\u4e0e Kafka ",(0,l.kt)("inlineCode",{parentName:"td"},"acks")," \u5c5e\u6027\u76f8\u540c\uff0c\u5177\u4f53\u914d\u7f6e\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://kafka.apache.org/documentation/#producerconfigs_acks"},"Apache Kafka \u6587\u6863"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6d88\u606f\u5206\u533a\u800c\u5206\u914d\u7684\u5bc6\u94a5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kafka.cluster_name"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka \u96c6\u7fa4\u7684\u540d\u79f0\uff0c\u5f53\u6709\u4e24\u4e2a\u53ca\u4ee5\u4e0a Kafka \u96c6\u7fa4\u65f6\u4f7f\u7528\u3002\u53ea\u6709\u5f53 ",(0,l.kt)("inlineCode",{parentName:"td"},"producer_type")," \u8bbe\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"async")," \u6a21\u5f0f\u65f6\u624d\u53ef\u4ee5\u4f7f\u7528\u8be5\u5c5e\u6027\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u548c\u53d1\u9001\u6570\u636e\u8d85\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u590d\u7528\u8fde\u63a5\u65f6\uff0c\u8fde\u63a5\u4fdd\u6301\u7684\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"WARN"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fdb\u884c\u9519\u8bef\u65e5\u5fd7\u7b5b\u9009\u7684\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"WARN"),"\uff0c\u53d6\u503c ",'["STDERR", "EMERG", "ALERT", "CRIT", "ERR", "ERROR", "WARN", "NOTICE", "INFO", "DEBUG"]',"\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"td"},"ERR")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"ERROR")," \u7ea7\u522b\u4e00\u81f4\u3002")))),(0,l.kt)("p",null,"\u6ce8\u610f\uff1aschema \u4e2d\u8fd8\u5b9a\u4e49\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"clickhouse.password"}'),"\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u5b57\u6bb5\u5c06\u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u5177\u4f53\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugin-develop#%E5%8A%A0%E5%AF%86%E5%AD%98%E5%82%A8%E5%AD%97%E6%AE%B5"},"\u52a0\u5bc6\u5b58\u50a8\u5b57\u6bb5"),"\u3002"),(0,l.kt)("p",null,"\u672c\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6216\u81ea\u5b9a\u4e49\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor")," \u914d\u7f6e\u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u9ed8\u8ba4\u4e3a\u7981\u7528\u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u4e2d\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"error-log-logger")," \u63d2\u4ef6\u3002\u4f60\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u793a\u4f8b\u542f\u7528\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=\u201c./conf/config.yaml\u201d",title:"\u201c./conf/config.yaml\u201d"},"plugins:                          # plugin list\n  ......\n  - request-id\n  - hmac-auth\n  - api-breaker\n  - error-log-logger              # enable plugin `error-log-logger\n")),(0,l.kt)("p",null,"\u5b8c\u6210\u63d2\u4ef6\u914d\u7f6e\u540e\uff0c\u4f60\u9700\u8981\u91cd\u65b0\u52a0\u8f7d APISIX\uff0c\u63d2\u4ef6\u624d\u4f1a\u751f\u6548\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8be5\u63d2\u4ef6\u5c5e\u4e8e APISIX \u5168\u5c40\u6027\u63d2\u4ef6\uff0c\u4e0d\u9700\u8981\u5728\u4efb\u4f55\u8def\u7531\u6216\u670d\u52a1\u4e2d\u7ed1\u5b9a\u3002"))),(0,l.kt)("h3",{id:"\u914d\u7f6e-tcp-\u670d\u52a1\u5668\u5730\u5740"},"\u914d\u7f6e TCP \u670d\u52a1\u5668\u5730\u5740"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e\u6765\u8bbe\u7f6e TCP \u670d\u52a1\u5668\u5730\u5740\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/error-log-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "tcp": {\n    "host": "127.0.0.1",\n    "port": 1999\n  },\n  "inactive_timeout": 1\n}\'\n')),(0,l.kt)("h3",{id:"\u914d\u7f6e-skywalking-oap-\u670d\u52a1\u5668\u5730\u5740"},"\u914d\u7f6e SkyWalking OAP \u670d\u52a1\u5668\u5730\u5740"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e SkyWalking OAP \u670d\u52a1\u5668\u5730\u5740\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/error-log-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "skywalking": {\n    "endpoint_addr": "http://127.0.0.1:12800/v3/logs"\n  },\n  "inactive_timeout": 1\n}\'\n')),(0,l.kt)("h3",{id:"\u914d\u7f6e-clickhouse-\u6570\u636e\u5e93"},"\u914d\u7f6e ClickHouse \u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u5c06\u9519\u8bef\u65e5\u5fd7\u4f5c\u4e3a\u5b57\u7b26\u4e32\u53d1\u9001\u5230 ClickHouse \u670d\u52a1\u5668\u4e2d\u5bf9\u5e94\u8868\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," \u5b57\u6bb5\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/error-log-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "clickhouse": {\n      "user": "default",\n      "password": "a",\n      "database": "error_log",\n      "logtable": "t",\n      "endpoint_addr": "http://127.0.0.1:8123"\n  }\n}\'\n')),(0,l.kt)("h3",{id:"\u914d\u7f6e-kafka"},"\u914d\u7f6e Kafka"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u5c06\u9519\u8bef\u65e5\u5fd7\u53d1\u9001\u5230 Kafka\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/error-log-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n   "kafka":{\n      "brokers":[\n         {\n            "host":"127.0.0.1",\n            "port":9092\n         }\n      ],\n      "kafka_topic":"test2"\n   },\n   "level":"ERROR",\n   "inactive_timeout":1\n}\'\n')),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u4e0d\u518d\u9700\u8981\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ea\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"./conf/config.yaml")," \u4e2d\u5220\u9664\u6216\u6ce8\u91ca\u8be5\u63d2\u4ef6\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  ... ...\n  - request-id\n  - hmac-auth\n  - api-breaker\n  #- error-log-logger              # enable plugin `error-log-logger\n")))}g.isMDXComponent=!0}}]);