"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2656],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const o={title:"Rewriting the Apache APISIX response-rewrite plugin in Rust",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258"}],keywords:["API gateway","Apache APISIX","Rust","WebAssembly"],description:"This article describes how to redevelop the response-rewrite plugin using Rust and WebAssembly.",tags:["Case Studies"],image:"https://static.apiseven.com/2022/10/28/635b5378cdd1f.png"},i=void 0,l={permalink:"/blog/2022/10/05/rust-apisix",source:"@site/blog/2022/10/05/rust-apisix.md",title:"Rewriting the Apache APISIX response-rewrite plugin in Rust",description:"This article describes how to redevelop the response-rewrite plugin using Rust and WebAssembly.",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"Case Studies",permalink:"/blog/tags/case-studies"}],readingTime:7.13,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258",imageURL:"https://avatars.githubusercontent.com/u/752258"}],prevItem:{title:"Deploy and Run Apache APISIX on Scaleway Cloud",permalink:"/blog/2022/10/19/deploy-apisix-on-scaleway-cloud"},nextItem:{title:"Apache APISIX loves Rust!",permalink:"/blog/2022/09/28/rust-loves-apisix"}},s={authorsImageUrls:[void 0]},p=[{value:"Adding a hard-coded header",id:"adding-a-hard-coded-header",children:[],level:2},{value:"Making the plugin configurable",id:"making-the-plugin-configurable",children:[],level:2},{value:"Hooking into Nginx variables",id:"hooking-into-nginx-variables",children:[],level:2},{value:"Rewriting the body",id:"rewriting-the-body",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article describes how to redevelop the response-rewrite plugin using Rust and WebAssembly.")),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://blog.frankel.ch/rust-apisix/2/"})),(0,r.kt)("p",null,"Last week, I described the basics on ",(0,r.kt)("a",{parentName:"p",href:"https://blog.frankel.ch/rust-apisix/1/"},"how to develop and deploy a Rust plugin for Apache APISIX"),". The plugin just logged a message when it received the request. Today, I want to leverage what we learned to create something more valuable: write part of the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/response-rewrite/"},"response-rewrite")," plugin with Rust."),(0,r.kt)("h2",{id:"adding-a-hard-coded-header"},"Adding a hard-coded header"),(0,r.kt)("p",null,"Let's start small and add a hard-coded response header. Last week, we used the ",(0,r.kt)("inlineCode",{parentName:"p"},"on_http_request_headers()")," function. The ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy_wasm")," specification defines several function hooks for each step in a request-response lifecycle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fn on_http_request_headers()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fn on_http_request_body()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fn on_http_request_trailers()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fn on_http_response_headers()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fn on_http_response_body()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fn on_http_response_trailers()"))),(0,r.kt)("p",null,"It looks like we need to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"on_http_response_headers()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl Context for HttpCall {}\n\nimpl HttpContext for HttpCall {\n    fn on_http_response_headers(&mut self, _num_headers: usize, end_of_stream: bool) -> Action {\n        warn!("on_http_response_headers");\n        if end_of_stream {                                      // 1\n            self.add_http_response_header("Hello", "World");    // 2\n        }\n        Action::Continue                                        // 3\n    }\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If we reached the end of the stream..."),(0,r.kt)("li",{parentName:"ol"},"...add the header"),(0,r.kt)("li",{parentName:"ol"},"Continue the rest of the lifecycle")),(0,r.kt)("h2",{id:"making-the-plugin-configurable"},"Making the plugin configurable"),(0,r.kt)("p",null,"Adding hard-coded headers is fun but not helpful. The ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin allows configuring the headers to add and their value."),(0,r.kt)("p",null,"Imagine that we want to add the following headers in the configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /*\n    upstream:\n      type: roundrobin\n      nodes:\n        "httpbin.org:80": 1\n    plugins:\n      sample:\n       conf: |                       # 1\n         {\n           "headers": {\n             "add": {                # 2\n               "Hello": "World",\n               "Foo": "Bar"\n             }\n           }\n         }\n#END\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Plugin configuration"),(0,r.kt)("li",{parentName:"ol"},"Headers to add. The Lua plugin also allows setting headers. In the following, we'll focus on add, while the GitHub repo shows both add and set.")),(0,r.kt)("p",null,"The configuration is in JSON format, so we need additional dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nserde = { version = "1.0", features = ["derive"] }\nserde_derive = { version = "1.0", default-features = false }\nserde_json = { version = "1.0", default-features = false, features = ["alloc"] }\n')),(0,r.kt)("p",null,"The idea is to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read the configuration when APISIX creates the root context"),(0,r.kt)("li",{parentName:"ul"},"Pass it along each time APISIX creates the HTTP context")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Config")," object is pretty straightforward:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use serde_json::{Map, Value};\nuse serde::Deserialize;\n\n#[derive(Deserialize, Clone)]        // 1-2\nstruct Config {\n    headers: Headers,                // 3\n}\n\n#[derive(Deserialize, Clone)]        // 1-2\nstruct Headers {\n    add: Option<Map<String, Value>>, // 4\n    set: Option<Map<String, Value>>, // 4\n}\n\nstruct HttpCall {\n    config: Config,\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Deserialize")," allows reading the string into a JSON structure"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Clone")," allows passing the structure from the root context to the HTTP context"),(0,r.kt)("li",{parentName:"ol"},"Standard JSON structure"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Option")," manages the case when the user didn't use the attribute")),(0,r.kt)("p",null,"We need to read the configuration when APISIX creates the root context - it happens once. For this, we need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"RootContext")," trait and create a structure that implements it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'struct HttpCallRoot {\n    config: Config,                                                                   // 1\n}\n\nimpl Context for HttpCallRoot {}                                                      // 2\n\nimpl RootContext for HttpCallRoot {\n    fn on_configure(&mut self, _: usize) -> bool {\n        if let Some(config_bytes) = self.get_plugin_configuration() {                 // 3\n            let result = String::from_utf8(config_bytes)                              // 4\n                .map_err(|e| e.utf8_error().to_string())                              // 5\n                .and_then(|s| serde_json::from_str(&s).map_err(|e| e.to_string()));   // 6\n            return match result {\n                Ok(config) => {\n                    self.config = config;                                             // 7\n                    true\n                }\n                Err(message) => {\n                    error!("An error occurred while reading the configuration file: {}", message);\n                    false\n                }\n            };\n        }\n        true\n    }\n\n    fn create_http_context(&self, _context_id: u32) -> Option<Box<dyn HttpContext>> {\n        Some(Box::new(HttpCall {\n            config: self.config.clone(),                                              // 8\n        }))\n    }\n\n    fn get_type(&self) -> Option<ContextType> {\n        Some(ContextType::HttpContext)                                                // 9\n    }\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a structure to store the configuration"),(0,r.kt)("li",{parentName:"ol"},"Mandatory"),(0,r.kt)("li",{parentName:"ol"},"Read the plugin configuration in a byte array"),(0,r.kt)("li",{parentName:"ol"},"Stringify the byte array"),(0,r.kt)("li",{parentName:"ol"},"Map the error to satisfy the compiler"),(0,r.kt)("li",{parentName:"ol"},"JSONify the string"),(0,r.kt)("li",{parentName:"ol"},"If everything has worked out, store the ",(0,r.kt)("inlineCode",{parentName:"li"},"config")," ",(0,r.kt)("inlineCode",{parentName:"li"},"struct")," in the root context"),(0,r.kt)("li",{parentName:"ol"},"See below"),(0,r.kt)("li",{parentName:"ol"},"Two types are available, ",(0,r.kt)("inlineCode",{parentName:"li"},"HttpContext")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"StreamContext"),". We implemented the former.")),(0,r.kt)("p",null,"We need to make the WASM proxy aware of the root context. Previously, we configured the creation of an HTTP context. We need to replace it with the creation of a root context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn new_root() -> HttpCallRoot {\n    HttpCallRoot { config: Config { headers: Headers { add: None, set: None } } }       // 1\n}\n\nproxy_wasm::main! {{\n    proxy_wasm::set_log_level(LogLevel::Trace);\n    proxy_wasm::set_root_context(|_| -> Box<dyn RootContext> { Box::new(new_root()) }); // 2\n}}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Utility function"),(0,r.kt)("li",{parentName:"ol"},"Create the root context instead of the HTTP one. The former knows how to create the latter via the ",(0,r.kt)("inlineCode",{parentName:"li"},"create_http_context")," implementation.")),(0,r.kt)("p",null,"The easiest part is to read the configuration from the HTTP context and write the headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl HttpContext for HttpCall {\n    fn on_http_response_headers(&mut self, _num_headers: usize, end_of_stream: bool) -> Action {\n        warn!("on_http_response_headers");\n        if end_of_stream {\n            if self.config.headers.add.is_some() {                               // 1\n                let add_headers = self.config.headers.add.as_ref().unwrap();     // 2\n                for (key, value) in add_headers.into_iter() {                    // 3\n                    self.add_http_response_header(key, value.as_str().unwrap()); // 4\n                }\n            }\n            if self.config.headers.set.is_some() {\n                // Same as above for setting\n            }\n        }\n        Action::Continue\n    }\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the user configured added headers..."),(0,r.kt)("li",{parentName:"ol"},"... get them"),(0,r.kt)("li",{parentName:"ol"},"Loop over the key-value pairs"),(0,r.kt)("li",{parentName:"ol"},"Write them as response headers")),(0,r.kt)("h2",{id:"hooking-into-nginx-variables"},"Hooking into Nginx variables"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin knows how to make use of Nginx variables. Let's implement this feature."),(0,r.kt)("p",null,"The idea is to check whether a value starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," is an Nginx variable: if it exists, return its value; otherwise, return the variable name as if it was a standard configuration value."),(0,r.kt)("p",null,"Note that it's a simplification; one can also wrap an Nginx variable in curly braces. But it's good enough for this blog post."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn get_nginx_variable_if_possible(ctx: &HttpCall, value: &Value) -> String {\n    let value = value.as_str().unwrap();\n    if value.starts_with('$') {                                        // 1\n        let option = ctx.get_property(vec![&value[1..value.len()]])    // 2\n            .and_then(|bytes| String::from_utf8(bytes).ok());\n        return if let Some(nginx_value) = option {\n            nginx_value                                                // 3\n        } else {\n            value.to_string()                                          // 4\n        }\n    }\n    value.to_string()                                                  // 5\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the value is potentially an Nginx variable"),(0,r.kt)("li",{parentName:"ol"},"Try to get the property value (without the trailing ",(0,r.kt)("inlineCode",{parentName:"li"},"$"),")"),(0,r.kt)("li",{parentName:"ol"},"Found the value, return it"),(0,r.kt)("li",{parentName:"ol"},"Didn't find the value, return the variable"),(0,r.kt)("li",{parentName:"ol"},"It was not a property, to begin with; return the variable")),(0,r.kt)("p",null,"We can then try to get the variable before writing the header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"for (key, value) in add_headers.into_iter() {\n    let value = get_nginx_variable_if_possible(self, value);\n    self.add_http_response_header(key, &value);\n}\n")),(0,r.kt)("h2",{id:"rewriting-the-body"},"Rewriting the body"),(0,r.kt)("p",null,"Another feature of the original ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin is to change the body. To be clear, it doesn't work at the moment. If you're interested, what's the reason, please read further."),(0,r.kt)("p",null,"Let's update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Config")," object to add a body section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Deserialize, Clone)]\nstruct Config {\n    headers: Headers,\n    body: String,\n}\n")),(0,r.kt)("p",null,"The documentation states that to rewrite the body, we need to let Nginx know during the headers phase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl HttpContext for HttpCall {\n    fn on_http_response_headers(&mut self, _num_headers: usize, end_of_stream: bool) -> Action {\n        warn!("on_http_response_headers");\n            // Add headers as above\n            let body = &self.config.body;\n            if !body.is_empty() {\n                warn!("Rewrite body is configured, letting Nginx know about it");\n                self.set_property(vec!["wasm_process_resp_body"], Some("true".as_bytes()));   // 1\n                warn!("Rewrite body is configured, resetting Content-Length");\n                self.set_http_response_header("Content-Length", None)                         // 2\n            }\n        }\n        Action::Continue\n    }\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ping Nginx, we will rewrite the body"),(0,r.kt)("li",{parentName:"ol"},"Reset the ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Length")," as it won't be possible later on")),(0,r.kt)("p",null,"Now, we can rewrite it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl HttpContext for HttpCall {\n    fn on_http_response_body(&mut self, _body_size: usize, end_of_stream: bool) -> Action {\n        warn!("on_http_response_body");\n        let body = &self.config.body;\n        if !body.is_empty() {\n            if end_of_stream {\n                warn!("Rewrite body is configured, rewriting {}", body);\n                let body = self.config.body.as_bytes();\n                self.set_http_response_body(0, body.len(),body);\n            } else {\n                return Action::Pause;\n            }\n        }\n        Action::Continue\n    }\n}\n')),(0,r.kt)("p",null,"If we try to curl ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9080"),", Apache APISIX's log shows the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rust-wasm-plugin-apisix-1  | 2022/09/29 08:29:50 [emerg] 44#44: *57096 panicked at \'unexpected status: 12\', /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/proxy-wasm-0.2.0/src/hostcalls.rs:135:23 while sending to client, client: 172.25.0.1, server: _, request: "GET / HTTP/1.1", upstream: "http://44.207.168.240:80/", host: "localhost:9080"\n')),(0,r.kt)("p",null,"The reason is that the WASM Nginx module doesn't implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-wasm")," feature to rewrite the body at the moment."),(0,r.kt)("p",null,"Status 12 comes from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/wasm-nginx-module/blob/main/src/proxy_wasm/proxy_wasm_types.h"},"proxy_wasm_types.h"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef enum {\n    PROXY_RESULT_UNIMPLEMENTED = 12,\n} proxy_result_t;\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this post, we went beyond a dummy plugin to duplicate some of the features of the ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin. By writing the plugin in Rust, we can leverage its compile-time security to avoid most errors at runtime. Note that some of the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-wasm")," features are not implemented at the moment: be careful before diving head first."),(0,r.kt)("p",null,"The source code is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ajavageek/apisix-rust-plugin"},"GitHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To go further:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/proxy-wasm/spec"},"proxy-wasm spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/api7/wasm-nginx-module"},"WASM Nginx module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/proxy-wasm/proxy-wasm-rust-sdk"},"WebAssembly for Proxies (Rust SDK)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/wasm/"},"Apache APISIX WASM"))))}d.isMDXComponent=!0}}]);