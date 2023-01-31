"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[97948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60569:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const l={title:"Deployment modes",keywords:["API gateway","Apache APISIX","APISIX deployment modes"],description:"Documentation about the three deployment modes of Apache APISIX."},r=void 0,i={unversionedId:"deployment-modes",id:"deployment-modes",isDocsHomePage:!1,title:"Deployment modes",description:"Documentation about the three deployment modes of Apache APISIX.",source:"@site/docs/apisix/deployment-modes.md",sourceDirName:".",slug:"/deployment-modes",permalink:"/docs/apisix/next/deployment-modes",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/deployment-modes.md",tags:[],version:"current",frontMatter:{title:"Deployment modes",keywords:["API gateway","Apache APISIX","APISIX deployment modes"],description:"Documentation about the three deployment modes of Apache APISIX."},sidebar:"docs",previous:{title:"xRPC",permalink:"/docs/apisix/next/xrpc"},next:{title:"Router radixtree",permalink:"/docs/apisix/next/router-radixtree"}},p=[{value:"Traditional",id:"traditional",children:[]},{value:"Decoupled",id:"decoupled",children:[]},{value:"Standalone",id:"standalone",children:[]}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"APISIX has three different deployment modes for different production use cases. The table below summarises the deployment modes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Deployment mode"),(0,o.kt)("th",{parentName:"tr",align:null},"Roles"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"traditional"),(0,o.kt)("td",{parentName:"tr",align:null},"traditional"),(0,o.kt)("td",{parentName:"tr",align:null},"Data plane and control plane are deployed together. ",(0,o.kt)("inlineCode",{parentName:"td"},"enable_admin")," attribute should be disabled manually.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"decoupled"),(0,o.kt)("td",{parentName:"tr",align:null},"data_plane / control_plane"),(0,o.kt)("td",{parentName:"tr",align:null},"Data plane and control plane are deployed independently.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"standalone"),(0,o.kt)("td",{parentName:"tr",align:null},"data_plane"),(0,o.kt)("td",{parentName:"tr",align:null},"Only data plane is deployed and the configurations are loaded from a local YAML file.")))),(0,o.kt)("p",null,"Each of these deployment modes are explained in detail below."),(0,o.kt)("h2",{id:"traditional"},"Traditional"),(0,o.kt)("p",null,"In the traditional deployment mode, one instance of APISIX will be both the data plane and the control plane."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/deployment-traditional.png",alt:"traditional deployment mode"})),(0,o.kt)("p",null,"There will be a conf server that listens on the UNIX socket and acts as a proxy between APISIX and etcd. Both the data and the control planes connect to this conf server via HTTP."),(0,o.kt)("p",null,"An example configuration of the traditional deployment mode is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"apisix:\n    node_listen:\n        - port: 9080\ndeployment:\n    role: traditional\n    role_traditional:\n        config_provider: etcd\n    admin:\n        admin_listen:\n            port: 9180\n    etcd:\n       host:\n           - http://${etcd_IP}:${etcd_Port}\n       prefix: /apisix\n       timeout: 30\n")),(0,o.kt)("p",null,"The instance of APISIX deployed as the traditional role will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Listen on port ",(0,o.kt)("inlineCode",{parentName:"li"},"9080")," to handle user requests, controlled by ",(0,o.kt)("inlineCode",{parentName:"li"},"node_listen"),"."),(0,o.kt)("li",{parentName:"ol"},"Listen on port ",(0,o.kt)("inlineCode",{parentName:"li"},"9180")," to handle Admin API requests, controlled by ",(0,o.kt)("inlineCode",{parentName:"li"},"admin_listen"),".")),(0,o.kt)("h2",{id:"decoupled"},"Decoupled"),(0,o.kt)("p",null,"In the decoupled deployment mode the data plane and control plane instances of APISIX are deployed separately. i.e one instance of APISIX is configured to be a data plane and the other to be a control plane."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/deployment-cp_and_dp.png",alt:"decoupled"})),(0,o.kt)("p",null,"The instance of APISIX deployed as the data plane will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fetch the configuration from the control plane. The default port is ",(0,o.kt)("inlineCode",{parentName:"li"},"9280"),"."),(0,o.kt)("li",{parentName:"ol"},"Performs a health check on all configured control plane addresses before starting the service.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If the control plane addresses are unavailable, the startup fails and an exception is thrown."),(0,o.kt)("li",{parentName:"ol"},"If at least one control plane address is available, it prints the unhealthy control planes logs, and starts the APISIX service."),(0,o.kt)("li",{parentName:"ol"},"If all control planes are normal, APISIX service is started normally."))),(0,o.kt)("li",{parentName:"ol"},"Once the service is started, it will handle the user requests.")),(0,o.kt)("p",null,"The example below shows the configuration of an APISIX instance as data plane in the decoupled mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: data_plane\n    role_data_plane:\n       config_provider: control_plane\n       control_plane:\n           host:\n               - https://${Control_Plane_IP}:9280\n           prefix: /apisix\n           timeout: 30\n    certs:\n        cert: /path/to/ca-cert\n        cert_key: /path/to/ca-cert\n        trusted_ca_cert: /path/to/ca-cert\n")),(0,o.kt)("p",null,"The instance of APISIX deployed as the control plane will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Listen on port ",(0,o.kt)("inlineCode",{parentName:"li"},"9180")," and handle Admin API requests."),(0,o.kt)("li",{parentName:"ol"},"Provide the conf server which will listen on port ",(0,o.kt)("inlineCode",{parentName:"li"},"9280"),". Both the control plane and the data plane will connect to this via HTTPS enforced by mTLS.")),(0,o.kt)("p",null,"The example below shows the configuration of an APISIX instance as control plane in the decoupled mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: control_plane\n    role_control_plane:\n        config_provider: etcd\n        conf_server:\n            listen: 0.0.0.0:9280\n            cert: /path/to/ca-cert\n            cert_key: /path/to/ca-cert\n            client_ca_cert: /path/to/ca-cert\n    etcd:\n       host:\n           - https://${etcd_IP}:${etcd_Port}\n       prefix: /apisix\n       timeout: 30\n    certs:\n        cert: /path/to/ca-cert\n        cert_key: /path/to/ca-cert\n        trusted_ca_cert: /path/to/ca-cert\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As OpenResty <= 1.21.4 does not support sending mTLS requests, to accept connections from APISIX running on these OpenResty versions, you need to disable the client certificate verification in the control plane instance as shown below:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: control_plane\n    role_control_plane:\n        config_provider: etcd\n        conf_server:\n            listen: 0.0.0.0:9280\n            cert: /path/to/ca-cert\n            cert_key: /path/to/ca-cert\n    etcd:\n       host:\n           - https://${etcd_IP}:${etcd_Port}\n       prefix: /apisix\n       timeout: 30\n    certs:\n        trusted_ca_cert: /path/to/ca-cert\n")))),(0,o.kt)("h2",{id:"standalone"},"Standalone"),(0,o.kt)("p",null,"In the standalone deployment mode, APISIX is deployed as a data plane and it reads in configurations from a YAML file (",(0,o.kt)("inlineCode",{parentName:"p"},"apisix.yaml"),") in the local file system."),(0,o.kt)("p",null,"This deployment mode is useful when you have to declaratively define the configuration or when you are using a different configuration center other than etcd."),(0,o.kt)("p",null,"To configure APISIX in standalone mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: data_plane\n    role_data_plane:\n       config_provider: yaml\n")))}c.isMDXComponent=!0}}]);