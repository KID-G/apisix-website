"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[79692],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37019:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const s={title:"Install APISIX Ingress with Kubernetes manifest files",keywords:["APISIX Ingress","Apache APISIX","Kubernetes Ingress","Kubernetes manifest"],description:"A guide to check the synchronization status of APISIX CRDs."},r=void 0,o={unversionedId:"tutorials/the-hard-way",id:"tutorials/the-hard-way",isDocsHomePage:!1,title:"Install APISIX Ingress with Kubernetes manifest files",description:"A guide to check the synchronization status of APISIX CRDs.",source:"@site/docs/apisix-ingress-controller/tutorials/the-hard-way.md",sourceDirName:"tutorials",slug:"/tutorials/the-hard-way",permalink:"/docs/ingress-controller/next/tutorials/the-hard-way",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/tutorials/the-hard-way.md",tags:[],version:"current",frontMatter:{title:"Install APISIX Ingress with Kubernetes manifest files",keywords:["APISIX Ingress","Apache APISIX","Kubernetes Ingress","Kubernetes manifest"],description:"A guide to check the synchronization status of APISIX CRDs."},sidebar:"docs",previous:{title:"Configuring Mutual Authentication via ApisixTls",permalink:"/docs/ingress-controller/next/tutorials/mtls"},next:{title:"Configuring Ingress with Kubernetes Ingress resource",permalink:"/docs/ingress-controller/next/tutorials/proxy-the-httpbin-service-with-ingress"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installing etcd",id:"installing-etcd",children:[]},{value:"Installing APISIX",id:"installing-apisix",children:[]},{value:"Deploying httpbin",id:"deploying-httpbin",children:[]},{value:"Configuring a Route",id:"configuring-a-route",children:[]},{value:"Installing APISIX Ingress controller",id:"installing-apisix-ingress-controller",children:[]}],p={toc:l};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will walk you through installing APISIX and APISIX Ingress controller with Kubernetes manifest files."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you move on, make sure you have access to a Kubernetes cluster. This tutorial uses ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")," to create the cluster."),(0,i.kt)("p",null,"Create a namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," in your cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns apisix\n")),(0,i.kt)("h2",{id:"installing-etcd"},"Installing etcd"),(0,i.kt)("p",null,"For this example, we will deploy a single-node etcd cluster without authentication."),(0,i.kt)("p",null,"This tutorial also assumes that you have a storage provisioner. If you are using kind, it would be created for you automatically. If you don't have a storage provisioner or don't want to use a persistence volume, you could use ",(0,i.kt)("inlineCode",{parentName:"p"},"emptyDir")," as your volume."),(0,i.kt)("p",null,"The yaml file below will install etcd:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="etcd.yaml"',title:'"etcd.yaml"'},'apiVersion: v1\nkind: Service\nmetadata:\n  name: etcd-headless\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: etcd\n  annotations:\n    service.alpha.kubernetes.io/tolerate-unready-endpoints: "true"\nspec:\n  type: ClusterIP\n  clusterIP: None\n  ports:\n    - name: "client"\n      port: 2379\n      targetPort: client\n    - name: "peer"\n      port: 2380\n      targetPort: peer\n  selector:\n    app.kubernetes.io/name: etcd\n---\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: etcd\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: etcd\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: etcd\n  serviceName: etcd-headless\n  podManagementPolicy: Parallel\n  replicas: 1\n  updateStrategy:\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: etcd\n    spec:\n      securityContext:\n        fsGroup: 1001\n        runAsUser: 1001\n      containers:\n        - name: etcd\n          image: docker.io/bitnami/etcd:3.4.14-debian-10-r0\n          imagePullPolicy: "IfNotPresent"\n          # command:\n            # - /scripts/setup.sh\n          env:\n            - name: BITNAMI_DEBUG\n              value: "false"\n            - name: MY_POD_IP\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n            - name: MY_POD_NAME\n              valueFrom:\n                fieldRef:\n                  fieldPath: metadata.name\n            - name: ETCDCTL_API\n              value: "3"\n            - name: ETCD_NAME\n              value: "$(MY_POD_NAME)"\n            - name: ETCD_DATA_DIR\n              value: /etcd/data\n            - name: ETCD_ADVERTISE_CLIENT_URLS\n              value: "http://$(MY_POD_NAME).etcd-headless.apisix.svc.cluster.local:2379"\n            - name: ETCD_LISTEN_CLIENT_URLS\n              value: "http://0.0.0.0:2379"\n            - name: ETCD_INITIAL_ADVERTISE_PEER_URLS\n              value: "http://$(MY_POD_NAME).etcd-headless.apisix.svc.cluster.local:2380"\n            - name: ETCD_LISTEN_PEER_URLS\n              value: "http://0.0.0.0:2380"\n            - name: ALLOW_NONE_AUTHENTICATION\n              value: "yes"\n          ports:\n            - name: client\n              containerPort: 2379\n            - name: peer\n              containerPort: 2380\n          volumeMounts:\n            - name: data\n              mountPath: /etcd\n      # if you don\'t have a storage provisioner or don\'t want to use a persistent volume\n      # volumes:\n      #   - name: data\n      #     emptyDir: {}\n  volumeClaimTemplates:\n    - metadata:\n        name: data\n      spec:\n        accessModes:\n          - "ReadWriteOnce"\n        resources:\n          requests:\n            storage: "8Gi"\n')),(0,i.kt)("p",null,"Once you have applied these files, you can wait for some time and run a health check to ensure everything is running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it etcd-0 -- etcdctl endpoint health\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="output"',title:'"output"'},"127.0.0.1:2379 is healthy: successfully committed proposal: took = 1.741883ms\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This etcd installation is simple and not meant for production scenarios. If you want to deploy a production ready etcd cluster, see ",(0,i.kt)("a",{parentName:"p",href:"https://bitnami.com/stack/etcd/helm"},"bitnami/etcd"),"."))),(0,i.kt)("h2",{id:"installing-apisix"},"Installing APISIX"),(0,i.kt)("p",null,"Before deploying APISIX, we will first create a configuration file."),(0,i.kt)("p",null,"APISIX Ingress controller will need to communicate with the APISIX Admin API, so we need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.allow_admin")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: apisix-conf\n  namespace: apisix\ndata:\n  config.yaml: |-\n    apisix:\n      node_listen: 9080             # APISIX listening port\n      enable_heartbeat: true\n      enable_admin: true\n      enable_admin_cors: true\n      enable_debug: false\n      enable_dev_mode: false          # when set to true, sets Nginx worker_processes to 1\n      enable_reuseport: true          # when set to true, enables nginx SO_REUSEPORT switch\n      enable_ipv6: true\n      config_center: etcd             # use etcd to store configuration\n\n      allow_admin:                  # see: http://nginx.org/en/docs/http/ngx_http_access_module.html#allow\n        - 0.0.0.0/0\n      port_admin: 9180\n\n      # default token used when calling the Admin API\n      # it is recommended to modify this value in production\n      # when disabled, Admin API won\'t require any authentication\n      admin_key:\n        # admin: full access to configuration data\n        - name: "admin"\n          key: edd1c9f034335f136f87ad84b625c8f1\n          role: admin\n        # viewer: can only view the configuration data\n        - name: "viewer"\n          key: 4054f7cf07e344346cd3f287985e76a2\n          role: viewer\n      # dns_resolver:\n      #   - 127.0.0.1\n      dns_resolver_valid: 30\n      resolver_timeout: 5\n\n    nginx_config:                     # template configuration to generate nginx.conf\n      error_log: "/dev/stderr"\n      error_log_level: "warn"         # warn, error\n      worker_rlimit_nofile: 20480     # number of files a worker process can open. Should be larger than worker_connections\n      event:\n        worker_connections: 10620\n      http:\n        access_log: "/dev/stdout"\n        keepalive_timeout: 60s         # timeout for which a keep-alive client connection will stay open on the server side\n        client_header_timeout: 60s     # timeout for reading client request header, then 408 (Request Time-out) error is returned to the client\n        client_body_timeout: 60s       # timeout for reading client request body, then 408 (Request Time-out) error is returned to the client\n        send_timeout: 10s              # timeout for transmitting a response to the client, then the connection is closed\n        underscores_in_headers: "on"   # enables the use of underscores in client request header fields\n        real_ip_header: "X-Real-IP"    # see: http://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_header\n        real_ip_from:                  # see: http://nginx.org/en/docs/http/ngx_http_realip_module.html#set_real_ip_from\n          - 127.0.0.1\n          - \'unix:\'\n\n    etcd:\n      host:\n        - "http://etcd-headless.apisix.svc.cluster.local:2379"\n      prefix: "/apisix"     # APISIX configurations prefix\n      timeout: 30   # in seconds\n    plugins:                          # list of APISIX Plugins\n      - api-breaker\n      - authz-keycloak\n      - basic-auth\n      - batch-requests\n      - consumer-restriction\n      - cors\n      - echo\n      - fault-injection\n      - grpc-transcode\n      - hmac-auth\n      - http-logger\n      - ip-restriction\n      - jwt-auth\n      - kafka-logger\n      - key-auth\n      - limit-conn\n      - limit-count\n      - limit-req\n      - node-status\n      - openid-connect\n      - prometheus\n      - proxy-cache\n      - proxy-mirror\n      - proxy-rewrite\n      - redirect\n      - referer-restriction\n      - request-id\n      - request-validation\n      - response-rewrite\n      - serverless-post-function\n      - serverless-pre-function\n      - sls-logger\n      - syslog\n      - tcp-logger\n      - udp-logger\n      - uri-blocker\n      - wolf-rbac\n      - zipkin\n      - traffic-split\n    stream_plugins:\n      - mqtt-proxy\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure that ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd.host")," matches the headless etcd service we created first. In this case, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://etcd-headless.apisix.svc.cluster.local:2379"),"."))),(0,i.kt)("p",null,"The Admin API key (",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml"),") will be used to configure APISIX later."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The key used in the example above is the default key and should be changed in production environments."))),(0,i.kt)("p",null,"We can now create a ConfigMap from this configuration file. To do this, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix apply -f ./apisix-config.yaml\n")),(0,i.kt)("p",null,"We can mount this ConfigMap to the APISIX deployment."),(0,i.kt)("p",null,"The yaml file below will deploy APISIX:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apisix-dep.yaml"',title:'"apisix-dep.yaml"'},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: apisix\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: apisix\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: apisix\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: apisix\n    spec:\n      containers:\n        - name: apisix\n          image: "apache/apisix:2.15-alpine"\n          imagePullPolicy: IfNotPresent\n          ports:\n            - name: http\n              containerPort: 9080\n              protocol: TCP\n            - name: tls\n              containerPort: 9443\n              protocol: TCP\n            - name: admin\n              containerPort: 9180\n              protocol: TCP\n          readinessProbe:\n            failureThreshold: 6\n            initialDelaySeconds: 10\n            periodSeconds: 10\n            successThreshold: 1\n            tcpSocket:\n              port: 9080\n            timeoutSeconds: 1\n          lifecycle:\n            preStop:\n              exec:\n                command:\n                - /bin/sh\n                - -c\n                - "sleep 30"\n          volumeMounts:\n            - mountPath: /usr/local/apisix/conf/config.yaml\n              name: apisix-config\n              subPath: config.yaml\n          resources: {}\n      volumes:\n        - configMap:\n            name: apisix-conf\n          name: apisix-config\n')),(0,i.kt)("p",null,"APISIX will be ready in some time. You can check the pod name of APISIX by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name\n")),(0,i.kt)("p",null,"The examples below use the pod name ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-7644966c4d-cl4k6"),"."),(0,i.kt)("p",null,"You can check if APISIX is deployed correctly by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it apisix-7644966c4d-cl4k6 -- curl http://127.0.0.1:9080\n")),(0,i.kt)("p",null,"If you are on Linux or macOS, you can run the command below instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl http://127.0.0.1:9080\n")),(0,i.kt)("p",null,'APISIX should show a "Route not found" message as we haven\'t configured it yet:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"error_msg":"404 Route Not Found"}\n')),(0,i.kt)("h2",{id:"deploying-httpbin"},"Deploying httpbin"),(0,i.kt)("p",null,"We will deploy a sample application to test APISIX. We are using ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," and we will deploy it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns demo\nkubectl -n demo run httpbin --image-pull-policy=IfNotPresent --image kennethreitz/httpbin --port 80\nkubectl -n demo expose pod httpbin --port 80\n")),(0,i.kt)("p",null,"Once httpbin is running, we can access it in the APISIX pod using the created service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl http://httpbin.demo/get\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="output"',title:'"output"'},'{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.demo",\n    "User-Agent": "curl/7.67.0"\n  },\n  "origin": "172.17.0.1",\n  "url": "http://httpbin.demo/get"\n}\n')),(0,i.kt)("h2",{id:"configuring-a-route"},"Configuring a Route"),(0,i.kt)("p",null,"Now, we will create a Route in APISIX to forward traffic to the httpbin service."),(0,i.kt)("p",null,"The below command will configure APISIX to Route all requests with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"/httpbin")," with the Header ",(0,i.kt)("inlineCode",{parentName:"p"},"Host: httpbin.org"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/*",\n  "host": "httpbin.org",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.demo:80": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"This will create a Route and will give back a response as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="output"',title:'"output"'},'{\n   "action":"set",\n   "node":{\n      "key":"\\/apisix\\/routes\\/1",\n      "value":{\n         "status":1,\n         "create_time":1621408897,\n         "upstream":{\n            "pass_host":"pass",\n            "type":"roundrobin",\n            "hash_on":"vars",\n            "nodes":{\n               "httpbin.demo:80":1\n            },\n            "scheme":"http"\n         },\n         "update_time":1621408897,\n         "priority":0,\n         "host":"httpbin.org",\n         "id":"1",\n         "uri":"\\/*"\n      }\n   }\n}\n')),(0,i.kt)("p",null,"Now we can test the created Route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl \"http://127.0.0.1:9080/get\" -H 'Host: httpbin.org'\n")),(0,i.kt)("p",null,"This will give back a response from httpbin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="output"',title:'"output"'},'{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.67.0",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "origin": "127.0.0.1",\n  "url": "http://httpbin.org/get"\n}\n')),(0,i.kt)("h2",{id:"installing-apisix-ingress-controller"},"Installing APISIX Ingress controller"),(0,i.kt)("p",null,"Till now, we manually sent requests to the Admin API to configure APISIX. Installing APISIX Ingress controller will allow you to configure APISIX using Kubernetes resources."),(0,i.kt)("p",null,"APISIX Ingress controller supports the Kubernetes Ingress API, Gateway API, and APISIX custom CRDs for configuration."),(0,i.kt)("p",null,"First we will create a ServiceAccount and a corresponding ClusterRole to ensure that the Ingress controller has sufficient permissions to access the required resources:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apisix-ingress-sa.yaml"',title:'"apisix-ingress-sa.yaml"'},'apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: apisix-ingress-controller\n  namespace: apisix\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: apisix-clusterrole\n  namespace: apisix\nrules:\n  - apiGroups:\n      - ""\n    resources:\n      - configmaps\n      - endpoints\n      - persistentvolumeclaims\n      - pods\n      - replicationcontrollers\n      - replicationcontrollers/scale\n      - serviceaccounts\n      - services\n      - secrets\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - bindings\n      - events\n      - limitranges\n      - namespaces/status\n      - pods/log\n      - pods/status\n      - replicationcontrollers/status\n      - resourcequotas\n      - resourcequotas/status\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - namespaces\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - apps\n    resources:\n      - controllerrevisions\n      - daemonsets\n      - deployments\n      - deployments/scale\n      - replicasets\n      - replicasets/scale\n      - statefulsets\n      - statefulsets/scale\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - autoscaling\n    resources:\n      - horizontalpodautoscalers\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - batch\n    resources:\n      - cronjobs\n      - jobs\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - extensions\n    resources:\n      - daemonsets\n      - deployments\n      - deployments/scale\n      - ingresses\n      - networkpolicies\n      - replicasets\n      - replicasets/scale\n      - replicationcontrollers/scale\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - policy\n    resources:\n      - poddisruptionbudgets\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - networking.k8s.io\n    resources:\n      - ingresses\n      - networkpolicies\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - metrics.k8s.io\n    resources:\n      - pods\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - apisix.apache.org\n    resources:\n      - apisixroutes\n      - apisixroutes/status\n      - apisixupstreams\n      - apisixupstreams/status\n      - apisixtlses\n      - apisixtlses/status\n      - apisixclusterconfigs\n      - apisixclusterconfigs/status\n      - apisixconsumers\n      - apisixconsumers/status\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - coordination.k8s.io\n    resources:\n      - leases\n    verbs:\n      - \'*\'\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: apisix-clusterrolebinding\n  namespace: apisix\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: apisix-clusterrole\nsubjects:\n  - kind: ServiceAccount\n    name: apisix-ingress-controller\n    namespace: apisix\n')),(0,i.kt)("p",null,"Once you apply it to your cluster, you have to create the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/concepts/apisix_route"},"ApisixRoute")," CRD:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/apisix-ingress-controller.git --depth 1\ncd apisix-ingress-controller/\nkubectl apply -k samples/deploy/crd\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/apache/apisix-ingress-controller/blob/master/samples/deploy/crd"},"samples")," for details."),(0,i.kt)("p",null,"For the Ingress controller to work with APISIX, you need to create a config file containing the APISIX Admin API URL and key. You can do this by creating a ConfigMap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apisix-config.yaml"',title:'"apisix-config.yaml"'},'apiVersion: v1\ndata:\n  config.yaml: |\n    # log options\n    log_level: "debug"\n    log_output: "stderr"\n    http_listen: ":8080"\n    enable_profiling: true\n    kubernetes:\n      kubeconfig: ""\n      resync_interval: "30s"\n      namespace_selector:\n      - "apisix.ingress=watching"\n      ingress_class: "apisix"\n      ingress_version: "networking/v1"\n      apisix_route_version: "apisix.apache.org/v2"\n    apisix:\n      default_cluster_base_url: "http://apisix-admin.apisix:9180/apisix/admin"\n      default_cluster_admin_key: "edd1c9f034335f136f87ad84b625c8f1"\nkind: ConfigMap\nmetadata:\n  name: apisix-configmap\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: ingress-controller\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"http://github.com/apache/apisix-ingress-controller/blob/master/conf/config-default.yaml"},"conf/config-default.yaml")," for a list of all the available configurations."),(0,i.kt)("p",null,"Now we will create a Service for the Ingress controller to access the Admin API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="ingress-service.yaml"',title:'"ingress-service.yaml"'},"apiVersion: v1\nkind: Service\nmetadata:\n  name: apisix-admin\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: apisix\nspec:\n  type: ClusterIP\n  ports:\n  - name: apisix-admin\n    port: 9180\n    targetPort: 9180\n    protocol: TCP\n  selector:\n    app.kubernetes.io/name: apisix\n")),(0,i.kt)("p",null,"We can delete the existing Route in APISIX through the Admin API before we create a new Route. This is to prevent any error due to data structure mismatches which will be fixed in the future:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl "http://127.0.0.1:9180/apisix/admin/routes/1" -X DELETE -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1"\n')),(0,i.kt)("p",null,"Now we can create a Deployment to install the Ingress controller in our cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="ingress-deployment.yaml"',title:'"ingress-deployment.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: apisix-ingress-controller\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: ingress-controller\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: ingress-controller\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: ingress-controller\n    spec:\n      serviceAccountName: apisix-ingress-controller\n      volumes:\n        - name: configuration\n          configMap:\n            name: apisix-configmap\n            items:\n              - key: config.yaml\n                path: config.yaml\n      initContainers:\n        - name: wait-apisix-admin\n          image: busybox:1.28\n          command: ['sh', '-c', \"until nc -z apisix-admin.apisix.svc.cluster.local 9180 ; do echo waiting for apisix-admin; sleep 2; done;\"]\n      containers:\n        - name: ingress-controller\n          command:\n            - /ingress-apisix/apisix-ingress-controller\n            - ingress\n            - --config-path\n            - /ingress-apisix/conf/config.yaml\n          image: \"apache/apisix-ingress-controller:1.4.0\"\n          imagePullPolicy: IfNotPresent\n          ports:\n            - name: http\n              containerPort: 8080\n              protocol: TCP\n          livenessProbe:\n            httpGet:\n              path: /healthz\n              port: 8080\n          readinessProbe:\n            httpGet:\n              path: /healthz\n              port: 8080\n          resources:\n            {}\n          volumeMounts:\n            - mountPath: /ingress-apisix/conf\n              name: configuration\n")),(0,i.kt)("p",null,"Once the Ingress controller is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," state, you can create a Route using the ApisixRoute resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="httpbin-route.yaml"',title:'"httpbin-route.yaml"'},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\n  namespace: demo\nspec:\n  http:\n  - name: httpbin\n    match:\n      hosts:\n      - local.httpbin.org\n      paths:\n      - /*\n    backends:\n      - serviceName: httpbin\n        servicePort: 80\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"apiVersion")," field should match the created ConfigMap and the ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceName")," here is the ",(0,i.kt)("inlineCode",{parentName:"p"},"httpbin")," service."),(0,i.kt)("p",null,"The ApisixRoute should be created in the same namespace as the service. In our example, this is the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," namespace."),(0,i.kt)("p",null,"Now if you send requests to APISIX, it will be routed to the httpbin service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl "http://127.0.0.1:9080/get" -H "Host: local.httpbin.org"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="output"',title:'"output"'},'{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "local.httpbin.org",\n    "User-Agent": "curl/7.67.0",\n    "X-Forwarded-Host": "local.httpbin.org"\n  },\n  "origin": "127.0.0.1",\n  "url": "http://local2.httpbin.org/get"\n}\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/deployments/minikube"},"Installation")," for more installation methods."))}c.isMDXComponent=!0}}]);