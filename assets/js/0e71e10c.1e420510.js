"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,f=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={description:"A quick start example for G\xf6rli Testnet Nethermind synchronization"},r="Explaining Nethermind logs",l={unversionedId:"fundamentals/logs/logs",id:"fundamentals/logs/logs",title:"Explaining Nethermind logs",description:"A quick start example for G\xf6rli Testnet Nethermind synchronization",source:"@site/docs/02-fundamentals/06-logs/logs.md",sourceDirName:"02-fundamentals/06-logs",slug:"/fundamentals/logs/logs",permalink:"/docs/fundamentals/logs/logs",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/06-logs/logs.md",tags:[],version:"current",lastUpdatedAt:1692227448,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{description:"A quick start example for G\xf6rli Testnet Nethermind synchronization"},sidebar:"tutorialSidebar",previous:{title:"Logging Configuration",permalink:"/docs/fundamentals/logs/logging-configuration"},next:{title:"Database",permalink:"/docs/fundamentals/database"}},s={},d=[],p={toc:d},c="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"explaining-nethermind-logs"},"Explaining Nethermind logs"),(0,i.kt)("p",null,"You can check the supported operating systems, architectures and hardware requirements\nhere: ",(0,i.kt)("a",{parentName:"p",href:"/docs/get-started/system-requirements"},"system-requirements.md")),(0,i.kt)("p",null,"After the node starts, you will see some initial info about the node and then the sync will start. G\xf6rli fast sync uses\na ",(0,i.kt)("inlineCode",{parentName:"p"},"fast blocks")," sync mode initially. The ",(0,i.kt)("inlineCode",{parentName:"p"},"fast blocks")," sync picks some known ",(0,i.kt)("inlineCode",{parentName:"p"},"pivot block")," from the past and\ndownloads ",(0,i.kt)("inlineCode",{parentName:"p"},"headers"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bodies"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"receipts")," downwards all the way to ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis block"),". All blocks from 0 to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"pivot block")," are showed as ",(0,i.kt)("inlineCode",{parentName:"p"},"Old Headers")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"fast blocks sync")," logs. The console display shows the number\ngrowing from 0 to pivot, but this is just to make the display more user-friendly."),(0,i.kt)("p",null,"You will see some information about the sync progress, like below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Shows the number of already downloaded ",(0,i.kt)("inlineCode",{parentName:"li"},"headers"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bodies")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"receipts")," under the name ",(0,i.kt)("inlineCode",{parentName:"li"},"Downloaded")," out of all to\nbe downloaded in the fast blocks stage."),(0,i.kt)("li",{parentName:"ol"},"Shows the current queue of already downloaded ",(0,i.kt)("inlineCode",{parentName:"li"},"blocks"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"headers")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"receipts")," waiting for being saved to the\ndatabase."),(0,i.kt)("li",{parentName:"ol"},"Shows the current download speed (blocks per second - bps)."),(0,i.kt)("li",{parentName:"ol"},"Shows the average download speed (blocks per second - bps).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fast blocks sync logs",src:n(7535).Z,width:"1219",height:"572"})),(0,i.kt)("p",null,"When the fast blocks stage finishes, there will be some period of downloading blocks between the ",(0,i.kt)("inlineCode",{parentName:"p"},"pivot")," and\nthe",(0,i.kt)("inlineCode",{parentName:"p"},"latest blocks")," which will have some additional info:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Shows the last entry from the fast blocks stage."),(0,i.kt)("li",{parentName:"ol"},"Shows the mode transition moment."),(0,i.kt)("li",{parentName:"ol"},"Displays the speed (in blocks per second) of all ",(0,i.kt)("inlineCode",{parentName:"li"},"headers"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bodies")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"receipts")," at the same time."),(0,i.kt)("li",{parentName:"ol"},"Additional info will appear every 30000 blocks with information about the G\xf6rli epoch being stored.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"G\xf6rli fast sync logs",src:n(6833).Z,width:"1528",height:"643"})),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"fast sync")," part finished, the node will transition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"state sync stage")," when the ",(0,i.kt)("inlineCode",{parentName:"p"},"state trie")," is being\ndownloaded. Much information is displayed about the progress, as this process may take a long time on mainnet (a few\nhours)."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Total elapsed time in ",(0,i.kt)("inlineCode",{parentName:"li"},"state sync")," is displayed."),(0,i.kt)("li",{parentName:"ol"},"The total percentage of downloaded DB size is displayed (on mainnet the sync finishes around 34GB in March 2020, on\nG\xf6rli around 800MB)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"branches")," stands for the percentage of downloaded branches."),(0,i.kt)("li",{parentName:"ol"},"Download speed in kilobytes per second is displayed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"accounts")," stands for the number of accounts data downloaded already."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"nodes")," stands for the number of ",(0,i.kt)("inlineCode",{parentName:"li"},"Patricia trie nodes")," downloaded by the sync process."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"diagnostic")," shows the time spent in the DB write / read access. The higher the value, the worse. It may get much\nworse if you restart the node during the sync process, as we need to recreate some caches then by reading data from\nthe DB.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"G\xf6rli state sync logs",src:n(523).Z,width:"1528",height:"742"})),(0,i.kt)("p",null,"When the state sync is nearing completion, you may see a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"branch sync")," information reloading many times from\n0% to nearly 100%. This is the node trying to retrieve the few remaining state nodes and progressing with the head block\nrapidly:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"G\xf6rli branch sync logs",src:n(6103).Z,width:"1441",height:"572"})),(0,i.kt)("p",null,"At some point, the entire state is downloaded and the node enters the ",(0,i.kt)("inlineCode",{parentName:"p"},"full sync")," mode and will allow you to issue CLI /\nWeb3 queries and send / receive transactions\ud83e\udd73"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"root")," is saved at the moment when the entire ",(0,i.kt)("inlineCode",{parentName:"li"},"Patricia trie")," is downloaded."),(0,i.kt)("li",{parentName:"ol"},"We also clearly state that the node transitions to the ",(0,i.kt)("inlineCode",{parentName:"li"},"full sync"),"."),(0,i.kt)("li",{parentName:"ol"},"When you see the block being processed, then you are in the ",(0,i.kt)("inlineCode",{parentName:"li"},"full sync")," and the newly arrived block is being\ncalculated."),(0,i.kt)("li",{parentName:"ol"},"Every two minutes you will see a summary of connected peers with their client version, IP address, highest synced\nblock, and data download speeds.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"G\xf6rli full sync logs",src:n(7428).Z,width:"1441",height:"572"})),(0,i.kt)("p",null,"Also, every now and then, a peer report will appear like below:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(78).Z,width:"2560",height:"1337"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First bracket is for Allocated contexts. It has possible values of ",(0,i.kt)("inlineCode",{parentName:"li"},"H")," for Headers, ",(0,i.kt)("inlineCode",{parentName:"li"},"B")," for Bodies, ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," for\nReceipts, ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," for State, ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," for Snap, and ",(0,i.kt)("inlineCode",{parentName:"li"},"W")," for Witness."),(0,i.kt)("li",{parentName:"ol"},"Second bracket is for Sleeping contexts. It has possible values of ",(0,i.kt)("inlineCode",{parentName:"li"},"H")," for Headers, ",(0,i.kt)("inlineCode",{parentName:"li"},"B")," for Bodies, ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," for\nReceipts, ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," for State, ",(0,i.kt)("inlineCode",{parentName:"li"},"S")," for Snap, and ",(0,i.kt)("inlineCode",{parentName:"li"},"W")," for Witness."),(0,i.kt)("li",{parentName:"ol"},"Third bracket contains Peer Info."),(0,i.kt)("li",{parentName:"ol"},"Fourth bracket is for Speeds as Follows:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Latency"),(0,i.kt)("li",{parentName:"ul"},"Headers Transfer"),(0,i.kt)("li",{parentName:"ul"},"Bodies Transfer"),(0,i.kt)("li",{parentName:"ul"},"Receipts Transfer"),(0,i.kt)("li",{parentName:"ul"},"Node Data Transfer"),(0,i.kt)("li",{parentName:"ul"},"Snap Ranges Transfer"))),(0,i.kt)("li",{parentName:"ol"},"Fifth bracket is for Client Info like Client Name, Client Version, Operating System and Language Version.")))}m.isMDXComponent=!0},78:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot2022-08-10205144-bfd083dd36a793971757cf3f339f0ec5.png"},6103:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting_started_26-95f467f0f83edd0b39d11b5d0ea338a5.png"},6833:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting_started_7-cfece39092ef238f8e8da3b69eab7432.png"},523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting_started_8-d24674b3244863f2722c9dab5cb965d1.png"},7428:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting_started_9-37c7f085184a8606321fe307bec67a25.png"},7535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/getting_started_log_0-ff150d1f099976816bf5d0f90c6c22ec.png"}}]);