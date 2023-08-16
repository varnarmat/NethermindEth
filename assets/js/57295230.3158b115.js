"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6879],{3905:(t,e,n)=>{n.d(e,{Zo:()=>f,kt:()=>u});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},f=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),s=c(n),m=a,u=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(u,o(o({ref:e},f),{},{components:n})):r.createElement(u,o({ref:e},f))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},574:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Hive",l={unversionedId:"fundamentals/configuration/hive",id:"fundamentals/configuration/hive",title:"Hive",description:"These items need only be set when testing with Hive (Ethereum Foundation tool)",source:"@site/docs/02-fundamentals/04-configuration/hive.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/hive",permalink:"/docs/fundamentals/configuration/hive",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/hive.md",tags:[],version:"current",lastUpdatedAt:1692227448,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HealthChecks",permalink:"/docs/fundamentals/configuration/healthchecks"},next:{title:"Init",permalink:"/docs/fundamentals/configuration/init"}},p={},c=[],f={toc:c},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hive"},"Hive"),(0,a.kt)("p",null,"These items need only be set when testing with Hive (Ethereum Foundation tool)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"BlocksDir"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HIVECONFIG_BLOCKSDIR"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Path to a directory with additional blocks."),(0,a.kt)("td",{parentName:"tr",align:"left"},'"/blocks"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ChainFile"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HIVECONFIG_CHAINFILE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Path to a file with a test chain definition."),(0,a.kt)("td",{parentName:"tr",align:"left"},'"/chain.rlp"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HIVECONFIG_ENABLED"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enabling hive for debugging purpose"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"GenesisFilePath"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HIVECONFIG_GENESISFILEPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Path to genesis block."),(0,a.kt)("td",{parentName:"tr",align:"left"},'"/genesis.json"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"KeysDir"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HIVECONFIG_KEYSDIR"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Path to a test key store directory."),(0,a.kt)("td",{parentName:"tr",align:"left"},'"/keys"')))))}d.isMDXComponent=!0}}]);