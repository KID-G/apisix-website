"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[58382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49772:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Upgrade Guide"},o=void 0,s={unversionedId:"upgrade",id:"upgrade",isDocsHomePage:!1,title:"Upgrade Guide",description:"Note: Before upgrading APISIX Ingress, you need to update the corresponding CRD resource first, k8s will automatically replace it with the default CRD resource version, incompatible items will be discarded, and its configuration needs to be updated to the current version.",source:"@site/docs/apisix-ingress-controller/upgrade.md",sourceDirName:".",slug:"/upgrade",permalink:"/zh/docs/ingress-controller/next/upgrade",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/upgrade.md",tags:[],version:"current",frontMatter:{title:"Upgrade Guide"}},l=[{value:"Upgrade using Helm chart",id:"upgrade-using-helm-chart",children:[{value:"Operating Step",id:"operating-step",children:[]},{value:"Precautions",id:"precautions",children:[]},{value:"Compatible upgrade",id:"compatible-upgrade",children:[]},{value:"Incompatible upgrade",id:"incompatible-upgrade",children:[]}]},{value:"Version change",id:"version-change",children:[{value:"<strong><em>1.6.0</em></strong>",id:"160",children:[]},{value:"<strong><em>1.5.0</em></strong>",id:"150",children:[]},{value:"<strong><em>1.4.0</em></strong>",id:"140",children:[]}]},{value:"Validate Compatibility",id:"validate-compatibility",children:[]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"upgrade-using-helm-chart"},"Upgrade using Helm chart"),(0,r.kt)("p",null,"Note: Before upgrading APISIX Ingress, you need to update the corresponding CRD resource first, k8s will automatically replace it with the default CRD resource version, incompatible items will be discarded, and its configuration needs to be updated to the current version."),(0,r.kt)("h3",{id:"operating-step"},"Operating Step"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update Helm repo")),(0,r.kt)("p",null,"Before upgrading, you need to update the helm repo to ensure that the resources in the repo are up to date."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo update\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Upgrade CRDs")),(0,r.kt)("p",null,"When the CRD exists, Helm Chart will not automatically update the CRD when upgrading or installing, so you need to update the CRD resource yourself"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using Helm (Helm version >= 3.7.0)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm show crds apisix/apisix-ingress-controller | kubectl apply -f -\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the Helm version does not support it, you need to obtain it from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"apisix-helm-chart")," repository.\nCRDs directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"charts/apisix-ingress-controller/crds/customresourcedefinitions.yaml")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f  https://raw.githubusercontent.com/apache/apisix-helm-chart/apisix-0.11.1/charts/apisix-ingress-controller/crds/customresourcedefinitions.yaml\n"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"UpgradeAPISIX Ingress")),(0,r.kt)("p",null,"Just as an example, the specific configuration needs to be modified by yourself. If you want to upgrade to a specific chart version, please add this flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--version x.x.x"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\n")),(0,r.kt)("h3",{id:"precautions"},"Precautions"),(0,r.kt)("p",null,"It is recommended not to upgrade across major versions."),(0,r.kt)("h3",{id:"compatible-upgrade"},"Compatible upgrade"),(0,r.kt)("p",null,"Compatible upgrades can be made without changing any resources."),(0,r.kt)("h4",{id:"15-to-16"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("em",{parentName:"strong"},"1.5 to 1.6"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix *** # omit some configuration\n")),(0,r.kt)("h4",{id:"14-to-15"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("em",{parentName:"strong"},"1.4 to 1.5"))),(0,r.kt)("p",null,"The chart version corresponding to chart version 1.5:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-0.11.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller-0.10.1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix --version 0.11.3 ***  # omit some configuration\n")),(0,r.kt)("h3",{id:"incompatible-upgrade"},"Incompatible upgrade"),(0,r.kt)("h4",{id:"13-to-14"},(0,r.kt)("strong",{parentName:"h4"},(0,r.kt)("em",{parentName:"strong"},"1.3 to 1.4"))),(0,r.kt)("p",null,"The chart version corresponding to chart version 1.4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-0.10.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller-0.9.3"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"helm upgrade apisix apisix/apisix --version 0.10.2 ***  # omit some configuration\n")),(0,r.kt)("p",null,"Incompatible upgrade, need to change resources.\nApisixRoute ",(0,r.kt)("inlineCode",{parentName:"p"},"object(http[].backend)")," has been removed in V2beta3 and needs to be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"array(http[].backends)"),". It is recommended not to upgrade across major versions."),(0,r.kt)("h2",{id:"version-change"},"Version change"),(0,r.kt)("h3",{id:"160"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"1.6.0"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No breaking changes in this release.")),(0,r.kt)("h3",{id:"150"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"1.5.0"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRD has been upgraded to the V2 version, and V2beta3 has been marked as deprecated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app_namespace")," is deprecated, you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace_selector")," instead.")),(0,r.kt)("h3",{id:"140"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("em",{parentName:"strong"},"1.4.0"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRD unified upgrade to V2beta3, delete resource v2alpha1 and v1 versions")),(0,r.kt)("h2",{id:"validate-compatibility"},"Validate Compatibility"),(0,r.kt)("p",null,"Apache APISIX Ingress project is a continuously actively developed project.\nIn order to make it better, some broken changes will be added when the new version is released.\nFor users, how to upgrade safely becomes very important."),(0,r.kt)("p",null,"The policy directory of this project contains these compatibility check strategies,\nyou can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/conftest"},(0,r.kt)("inlineCode",{parentName:"a"},"conftest"))," tool to check the compatibility."),(0,r.kt)("p",null,"Here's a quick example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n name: httpbin-route\nspec:\n http:\n - name: rule1\n   match:\n     hosts:\n     - httpbin.org\n     paths:\n       - /ip\n     exprs:\n     - subject:\n         scope: Header\n         name: X-Foo\n       op: Equal\n       value: bar\n   backends:\n   - serviceName: httpbin\n     servicePort: 80\n")),(0,r.kt)("p",null,"It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.http.backend")," field that has been removed.\nSave as httpbin-route.yaml."),(0,r.kt)("p",null,"Use conftest for compatibility check."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ conftest test httpbin-route.yaml\nFAIL - httpbin-route.yaml - main - ApisixRoute/httpbin-route: rule1 field http.backend has been removed, use http.backends instead.\n\n2 tests, 1 passed, 0 warnings, 1 failure, 0 exceptions\n")),(0,r.kt)("p",null,"Incompatible parts will generate errors."))}c.isMDXComponent=!0}}]);