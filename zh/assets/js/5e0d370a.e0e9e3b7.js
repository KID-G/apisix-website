"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[35146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),h=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=h(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=h(n),u=r,m=g["".concat(o,".").concat(u)]||g[u]||p[u]||s;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var h=2;h<s;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},99607:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const s={title:"HMAC Generate Signature Examples"},i=void 0,c={unversionedId:"examples/plugins-hmac-auth-generate-signature",id:"version-2.15/examples/plugins-hmac-auth-generate-signature",isDocsHomePage:!1,title:"HMAC Generate Signature Examples",description:"",source:"@site/docs-apisix_versioned_docs/version-2.15/examples/plugins-hmac-auth-generate-signature.md",sourceDirName:"examples",slug:"/examples/plugins-hmac-auth-generate-signature",permalink:"/zh/docs/apisix/2.15/examples/plugins-hmac-auth-generate-signature",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.15/docs/zh/latest/examples/plugins-hmac-auth-generate-signature.md",tags:[],version:"2.15",frontMatter:{title:"HMAC Generate Signature Examples"}},o=[{value:"Python 3",id:"python-3",children:[]},{value:"Java",id:"java",children:[]},{value:"Go",id:"go",children:[]},{value:"Ruby",id:"ruby",children:[]},{value:"NodeJs",id:"nodejs",children:[]},{value:"JavaScript ES6",id:"javascript-es6",children:[]},{value:"PHP",id:"php",children:[]},{value:"Lua",id:"lua",children:[]},{value:"Shell",id:"shell",children:[]}],h={toc:o};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"python-3"},"Python 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport hashlib\nimport hmac\n\nsecret = bytes('the shared secret key here', 'utf-8')\nmessage = bytes('this is signature string', 'utf-8')\n\n\nhash = hmac.new(secret, message, hashlib.sha256)\n\n# to lowercase hexits\nhash.hexdigest()\n\n# to lowercase base64\nbase64.b64encode(hash.digest())\n")),(0,r.kt)("h2",{id:"java"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import javax.crypto.Mac;\nimport javax.crypto.spec.SecretKeySpec;\nimport java.security.InvalidKeyException;\nimport java.security.NoSuchAlgorithmException;\nimport javax.xml.bind.DatatypeConverter;\n\nclass Main {\n  public static void main(String[] args) {\n   try {\n     String secret = "the shared secret key here";\n     String message = "this is signature string";\n\n     Mac hasher = Mac.getInstance("HmacSHA256");\n     hasher.init(new SecretKeySpec(secret.getBytes(), "HmacSHA256"));\n\n     byte[] hash = hasher.doFinal(message.getBytes());\n\n     // to lowercase hexits\n     DatatypeConverter.printHexBinary(hash);\n\n     // to base64\n     DatatypeConverter.printBase64Binary(hash);\n   }\n   catch (NoSuchAlgorithmException e) {}\n   catch (InvalidKeyException e) {}\n  }\n}\n')),(0,r.kt)("h2",{id:"go"},"Go"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "crypto/hmac"\n    "crypto/sha256"\n    "encoding/base64"\n    "encoding/hex"\n)\n\nfunc main() {\n    secret := []byte("the shared secret key here")\n    message := []byte("this is signature string")\n\n    hash := hmac.New(sha256.New, secret)\n    hash.Write(message)\n\n    // to lowercase hexits\n    hex.EncodeToString(hash.Sum(nil))\n\n    // to base64\n    base64.StdEncoding.EncodeToString(hash.Sum(nil))\n}\n')),(0,r.kt)("h2",{id:"ruby"},"Ruby"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'base64'\nrequire 'openssl'\n\nsecret = 'the shared secret key here'\nmessage = 'this is signature string'\n\n# to lowercase hexits\nOpenSSL::HMAC.hexdigest('sha256', secret, message)\n\n# to base64\nBase64.encode64(OpenSSL::HMAC.digest('sha256', secret, message))\n")),(0,r.kt)("h2",{id:"nodejs"},"NodeJs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var crypto = require('crypto');\n\nvar secret = 'the shared secret key here';\nvar message = 'this is signature string';\n\nvar hash = crypto.createHmac('sha256', secret).update(message);\n\n// to lowercase hexits\nhash.digest('hex');\n\n// to base64\nhash.digest('base64');\n")),(0,r.kt)("h2",{id:"javascript-es6"},"JavaScript ES6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const secret = 'the shared secret key here';\nconst message = 'this is signature string';\n\nconst getUtf8Bytes = str =>\n  new Uint8Array(\n    [...unescape(encodeURIComponent(str))].map(c => c.charCodeAt(0))\n  );\n\nconst secretBytes = getUtf8Bytes(secret);\nconst messageBytes = getUtf8Bytes(message);\n\nconst cryptoKey = await crypto.subtle.importKey(\n  'raw', secretBytes, { name: 'HMAC', hash: 'SHA-256' },\n  true, ['sign']\n);\nconst sig = await crypto.subtle.sign('HMAC', cryptoKey, messageBytes);\n\n// to lowercase hexits\n[...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');\n\n// to base64\nbtoa(String.fromCharCode(...new Uint8Array(sig)));\n")),(0,r.kt)("h2",{id:"php"},"PHP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$secret = 'the shared secret key here';\n$message = 'this is signature string';\n\n// to lowercase hexits\nhash_hmac('sha256', $message, $secret);\n\n// to base64\nbase64_encode(hash_hmac('sha256', $message, $secret, true));\n")),(0,r.kt)("h2",{id:"lua"},"Lua"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local hmac = require(\"resty.hmac\")\nlocal secret = 'the shared secret key here'\nlocal message = 'this is signature string'\nlocal digest = hmac:new(secret, hmac.ALGOS.SHA256):final(message)\n\n--to lowercase hexits\nngx.say(digest)\n\n--to base64\nngx.say(ngx.encode_base64(digest))\n")),(0,r.kt)("h2",{id:"shell"},"Shell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'SECRET="the shared secret key here"\nMESSAGE="this is signature string"\n\n# to lowercase hexits\necho -e $MESSAGE | openssl dgst -sha256 -hmac $SECRET\n\n# to base64\necho -e $MESSAGE | openssl dgst -sha256 -hmac $SECRET -binary | base64\n')))}l.isMDXComponent=!0}}]);