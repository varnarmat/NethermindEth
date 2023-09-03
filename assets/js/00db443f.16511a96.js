"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="JSON RPC",c={unversionedId:"interacting/json-rpc/README",id:"interacting/json-rpc/README",title:"JSON RPC",description:"JSON RPC is available via HTTP and WS.",source:"@site/docs/interacting/json-rpc/README.md",sourceDirName:"interacting/json-rpc",slug:"/interacting/json-rpc/",permalink:"/docs/interacting/json-rpc/",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/interacting/json-rpc/README.md",tags:[],version:"current",lastUpdatedAt:1693728027,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Engine JsonRpc Config Example",permalink:"/docs/interacting/json-rpc/engine-jsonrpc-config-example"},next:{title:"Admin",permalink:"/docs/interacting/json-rpc/admin"}},p={},l=[],s={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-rpc"},"JSON RPC"),(0,a.kt)("p",null,"JSON RPC is available via HTTP and WS."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"JSON RPC needs to be explicitly switched on in the Netherming ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="goerli.cfg"',title:'"goerli.cfg"'},'  "JsonRpc": {\n    "Enabled": true,\n    "Host": "127.0.0.1",\n    "Port": 8545\n  }\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"JSON RPC can be also enabled by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Enabled true")," flag to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Nethermind.Runner")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Nethermind.Launcher")," arguments.")),(0,a.kt)("p",null,"WebSockets, when enabled, will be accessible on the same address/port as HTTP by default, just using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ws://")," protocol instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," protocol.  You can change the WebSocket port to something else like 8546 if desired."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="goerli.cfg"',title:'"goerli.cfg"'},'  "Init": {\n    "WebSocketsEnabled": true\n  },\n  "JsonRpc": {\n    "WebSocketsPort": 8545\n  }\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"WebSockets can also be enabled by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"--Init.WebSocketsEnabled true")," as show below:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./Nethermind.Runner --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545\n")),(0,a.kt)("p",{parentName:"admonition"},"or"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./Nethermind.Launcher --Init.WebSocketsEnabled true --JsonRpc.WebSocketsPort 8545\n"))),(0,a.kt)("p",null,"Some of the methods listed in this section are not implemented by Nethermind (they will be marked)."))}m.isMDXComponent=!0}}]);