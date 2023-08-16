"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1076],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var N=n.createContext({}),d=function(t){var e=n.useContext(N),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(N.Provider,{value:e},t.children)},f="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,N=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),f=d(a),m=r,c=f["".concat(N,".").concat(m)]||f[m]||s[m]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var N in e)hasOwnProperty.call(e,N)&&(o[N]=e[N]);o.originalType=t,o[f]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9694:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="Init",o={unversionedId:"fundamentals/configuration/init",id:"fundamentals/configuration/init",title:"Init",description:"| Property                 | Env Variable                                   | Description                                                                                                                                                         | Default                   |",source:"@site/docs/02-fundamentals/04-configuration/init.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/init",permalink:"/docs/fundamentals/configuration/init",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/init.md",tags:[],version:"current",lastUpdatedAt:1692227448,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hive",permalink:"/docs/fundamentals/configuration/hive"},next:{title:"JsonRpc",permalink:"/docs/fundamentals/configuration/jsonrpc"}},N={},d=[],p={toc:d},f="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(f,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"init"},"Init"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AutoDump"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_AUTODUMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Auto dump on bad blocks for diagnostics, Possible values ","[None, Receipts, Parity, Geth, All]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Receipts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BaseDbPath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_BASEDBPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Base directory path for all the nethermind databases."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"db"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ChainSpecPath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_CHAINSPECPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the chain definition file (Parity chainspec or Geth genesis file)."),(0,r.kt)("td",{parentName:"tr",align:"left"},"chainspec/foundation.json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DiagnosticMode"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_DIAGNOSTICMODE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Diagnostics modes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DiscoveryEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_DISCOVERYENABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'false' then the node does not try to find nodes beyond the bootnodes configured."),(0,r.kt)("td",{parentName:"tr",align:"left"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EnableUnsecuredDevWallet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_ENABLEUNSECUREDDEVWALLET"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'true' then it enables the wallet / key store in the application."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GenesisHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_GENESISHASH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hash of the genesis block - if the default null value is left then the genesis block validity will not be checked which is useful for ad hoc test/private networks."),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HiveChainSpecPath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_HIVECHAINSPECPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the chain definition file created by Hive for test purpouse"),(0,r.kt)("td",{parentName:"tr",align:"left"},"chainspec/test.json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IsMining"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_ISMINING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'true' then the node will try to seal/mine new blocks"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KeepDevWalletInMemory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_KEEPDEVWALLETINMEMORY"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'true' then any accounts created will be only valid during the session and deleted when application closes."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"KzgSetupPath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_KZGSETUPPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kzg trusted setup file path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LogDirectory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_LOGDIRECTORY"),(0,r.kt)("td",{parentName:"tr",align:"left"},"In case of null, the path is set to ","[applicationDirectiory]","\\logs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"logs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LogFileName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_LOGFILENAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the log file generated (useful when launching multiple networks with the same log folder)."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"log.txt"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LogRules"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_LOGRULES"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Overrides for default logs in format LogPath:LogLevel;*"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MemoryHint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_MEMORYHINT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A hint for the max memory that will allow us to configure the DB and Netty memory allocations."),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PeerManagerEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_PEERMANAGERENABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'false' then the node does not connect to newly discovered peers.."),(0,r.kt)("td",{parentName:"tr",align:"left"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ProcessingEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_PROCESSINGENABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'false' then the node does not download/process new blocks.."),(0,r.kt)("td",{parentName:"tr",align:"left"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RpcDbUrl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_RPCDBURL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Url for remote node that will be used as DB source when 'DiagnosticMode' is set to'RpcDb'"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"StaticNodesPath"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_STATICNODESPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the file with a list of static nodes."),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Data/static-nodes.json"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"WebSocketsEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_INITCONFIG_WEBSOCKETSENABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines whether the WebSockets service is enabled on node startup at the 'HttpPort' - e.g. ws://localhost:8545/ws/json-rpc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true")))))}s.isMDXComponent=!0}}]);