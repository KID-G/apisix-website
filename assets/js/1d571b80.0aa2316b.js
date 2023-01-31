"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4254],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1415:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"aws-lambda",keywords:["APISIX","Plugin","AWS Lambda","aws-lambda"],description:"This document contains information about the Apache APISIX aws-lambda Plugin."},i=void 0,o={unversionedId:"plugins/aws-lambda",id:"plugins/aws-lambda",isDocsHomePage:!1,title:"aws-lambda",description:"This document contains information about the Apache APISIX aws-lambda Plugin.",source:"@site/docs/apisix/plugins/aws-lambda.md",sourceDirName:"plugins",slug:"/plugins/aws-lambda",permalink:"/docs/apisix/next/plugins/aws-lambda",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/aws-lambda.md",tags:[],version:"current",frontMatter:{title:"aws-lambda",keywords:["APISIX","Plugin","AWS Lambda","aws-lambda"],description:"This document contains information about the Apache APISIX aws-lambda Plugin."},sidebar:"docs",previous:{title:"openwhisk",permalink:"/docs/apisix/next/plugins/openwhisk"},next:{title:"workflow",permalink:"/docs/apisix/next/plugins/workflow"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"IAM Authorization Schema",id:"iam-authorization-schema",children:[]}]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[{value:"Configuring path forwarding",id:"configuring-path-forwarding",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"aws-lambda")," Plugin is used for integrating APISIX with ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda")," as a dynamic upstream to proxy all requests for a particular URI to the AWS Cloud."),(0,r.kt)("p",null,"When enabled, the Plugin terminates the ongoing request to the configured URI and initiates a new request to the AWS Lambda Gateway URI on behalf of the client with configured authorization details, request headers, body and parameters (all three passed from the original request). It returns back the response with headers, status code and the body to the client that initiated the request with APISIX."),(0,r.kt)("p",null,"This Plugin supports authorization via AWS API key and AWS IAM secrets."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AWS API Gateway endpoint which triggers the lambda serverless function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization credentials to access the cloud function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorization.apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generated API Key to authorize requests to the AWS Gateway endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorization.iam"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Used for AWS IAM role based authorization performed via AWS v4 request signing. See ",(0,r.kt)("a",{parentName:"td",href:"#iam-authorization-schema"},"IAM authorization schema"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3000"),(0,r.kt)("td",{parentName:"tr",align:null},"[100,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Proxy request timeout in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," performs SSL verification.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," keeps the connection alive for reuse.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of requests that can be sent on this connection before closing it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"60000"),(0,r.kt)("td",{parentName:"tr",align:null},"[1000,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Time is ms for connection to remain idle without closing.")))),(0,r.kt)("h3",{id:"iam-authorization-schema"},"IAM Authorization Schema"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accesskey"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generated access key ID from AWS IAM console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Generated access key secret from AWS IAM console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws_region"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"us-east-1"'),(0,r.kt)("td",{parentName:"tr",align:null},"AWS region where the request is being sent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"execute-api"'),(0,r.kt)("td",{parentName:"tr",align:null},"The service that is receiving the request. For HTTP trigger, it is ",(0,r.kt)("inlineCode",{parentName:"td"},'"execute-api"'),".")))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"The example below shows how you can configure the Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://x9w6z07gb9.execute-api.us-east-1.amazonaws.com/default/test-apisix",\n            "authorization": {\n                "apikey": "<Generated API Key from aws console>",\n            },\n            "ssl_verify":false\n        }\n    },\n    "uri": "/aws"\n}\'\n')),(0,r.kt)("p",null,"Now, any requests (HTTP/1.1, HTTPS, HTTP2) to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/aws")," will invoke the configured AWS Functions URI and the response will be proxied back to the client."),(0,r.kt)("p",null,'In the example below, AWS Lambda takes in name from the query and returns a message "Hello $name":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET localhost:9080/aws\\?name=APISIX\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: application/json\nConnection: keep-alive\nDate: Sat, 27 Nov 2021 13:08:27 GMT\nx-amz-apigw-id: JdwXuEVxIAMFtKw=\nx-amzn-RequestId: 471289ab-d3b7-4819-9e1a-cb59cac611e0\nContent-Length: 16\nX-Amzn-Trace-Id: Root=1-61a22dca-600c552d1c05fec747fd6db0;Sampled=0\nServer: APISIX/2.10.2\n\n"Hello, APISIX!"\n')),(0,r.kt)("p",null,"Another example of a request where the client communicates with APISIX via HTTP/2 is shown below (make sure you have configured ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_http2: true")," for a in your default configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"config-default.yaml"),"). You can do this by uncommenting the port ",(0,r.kt)("inlineCode",{parentName:"p"},"9081")," from the field ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix.node_listen"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET --http2 --http2-prior-knowledge localhost:9081/aws\\?name=APISIX\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/2 200\ncontent-type: application/json\ncontent-length: 16\nx-amz-apigw-id: JdwulHHrIAMFoFg=\ndate: Sat, 27 Nov 2021 13:10:53 GMT\nx-amzn-trace-id: Root=1-61a22e5d-342eb64077dc9877644860dd;Sampled=0\nx-amzn-requestid: a2c2b799-ecc6-44ec-b586-38c0e3b11fe4\nserver: APISIX/2.10.2\n\n"Hello, APISIX!"\n')),(0,r.kt)("p",null,"Similarly the function can be triggered via AWS API Gateway by using AWS IAM permissions for authorization. The Plugin includes authentication signatures in HTTP calls via AWS v4 request signing. The example below shows this method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://ajycz5e0v9.execute-api.us-east-1.amazonaws.com/default/test-apisix",\n            "authorization": {\n                "iam": {\n                    "accesskey": "<access key>",\n                    "secretkey": "<access key secret>"\n                }\n            },\n            "ssl_verify": false\n        }\n    },\n    "uri": "/aws"\n}\'\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This approach assumes that you have already an IAM user with programmatic access enabled with the required permissions (",(0,r.kt)("inlineCode",{parentName:"p"},"AmazonAPIGatewayInvokeFullAccess"),") to access the endpoint."))),(0,r.kt)("h3",{id:"configuring-path-forwarding"},"Configuring path forwarding"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"aws-lambda")," Plugins also supports URL path forwarding while proxying requests to the AWS upstream. Extensions to the base request path gets appended to the ",(0,r.kt)("inlineCode",{parentName:"p"},"function_uri")," specified in the Plugin configuration."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," configured on a Route must end with ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," for this feature to work properly. APISIX Routes are matched strictly and the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," implies that any subpath to this URI would be matched to the same Route."))),(0,r.kt)("p",null,"The example below configures this feature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "aws-lambda": {\n            "function_uri": "https://x9w6z07gb9.execute-api.us-east-1.amazonaws.com",\n            "authorization": {\n                "apikey": "<Generate API key>"\n            },\n            "ssl_verify":false\n        }\n    },\n    "uri": "/aws/*"\n}\'\n')),(0,r.kt)("p",null,"Now, any requests to the path ",(0,r.kt)("inlineCode",{parentName:"p"},"aws/default/test-apisix")," will invoke the AWS Lambda Function and the added path is forwarded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -XGET http://127.0.0.1:9080/aws/default/test-apisix\\?name\\=APISIX\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: application/json\nConnection: keep-alive\nDate: Wed, 01 Dec 2021 14:23:27 GMT\nX-Amzn-Trace-Id: Root=1-61a7855f-0addc03e0cf54ddc683de505;Sampled=0\nx-amzn-RequestId: f5f4e197-9cdd-49f9-9b41-48f0d269885b\nContent-Length: 16\nx-amz-apigw-id: JrHG8GC4IAMFaGA=\nServer: APISIX/2.11.0\n\n"Hello, APISIX!"\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws-lambda")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/aws",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);