"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={},o="JSON RPC",c={unversionedId:"interacting-with-nethermind/json-rpc-api/README",id:"interacting-with-nethermind/json-rpc-api/README",title:"JSON RPC",description:"JSON RPC is available via HTTP and WS.",source:"@site/docs/03-interacting-with-nethermind/02-json-rpc-api/README.md",sourceDirName:"03-interacting-with-nethermind/02-json-rpc-api",slug:"/interacting-with-nethermind/json-rpc-api/",permalink:"/docs/interacting-with-nethermind/json-rpc-api/",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/03-interacting-with-nethermind/02-json-rpc-api/README.md",tags:[],version:"current",lastUpdatedAt:1692227448,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interacting With Nethermind",permalink:"/docs/category/interacting-with-nethermind"},next:{title:"Engine JsonRpc Config Example",permalink:"/docs/interacting-with-nethermind/json-rpc-api/engine-jsonrpc-config-example"}},p={},l=[],s={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"json-rpc"},"JSON RPC"),(0,i.kt)("p",null,"JSON RPC is available via HTTP and WS."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"JSON RPC needs to be explicitly switched on in the Netherming ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," file.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="goerli.cfg"',title:'"goerli.cfg"'},'  "JsonRpc": {\n    "Enabled": true,\n    "Host": "127.0.0.1",\n    "Port": 8545\n  }\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"JSON RPC can be also enabled by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Enabled true")," flag to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Nethermind.Runner")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Nethermind.Launcher")," arguments.")),(0,i.kt)("p",null,"WebSockets, when enabled, will be accessible on the same address/port as HTTP by default, just using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ws://")," protocol instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"http://")," protocol.  You can change the WebSocket port to something else like 8546 if desired."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="goerli.cfg"',title:'"goerli.cfg"'},'  "Init": {\n    "WebSocketsEnabled": true\n  },\n  "JsonRpc": {\n    "WebSocketsPort": 8545\n  }\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"WebSockets can also be enabled by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--Init.WebSocketsEnabled true")," as show below:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./Nethermind.Runner --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545\n")),(0,i.kt)("p",{parentName:"admonition"},"or"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./Nethermind.Launcher --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545\n"))),(0,i.kt)("p",null,"Some of the methods listed in this section are not implemented by Nethermind (they will be marked)."))}m.isMDXComponent=!0}}]);