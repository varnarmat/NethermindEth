"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,u=c["".concat(d,".").concat(m)]||c[m]||h[m]||i;return n?o.createElement(u,a(a({ref:t},p),{},{components:n})):o.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},a="Migrating From Geth",s={unversionedId:"getting-started/migrating-from-geth",id:"getting-started/migrating-from-geth",title:"Migrating From Geth",description:"To migrate from Geth to Nethermind there are few conditions which should be met to ensure seamless and quick transition.",source:"@site/docs/01-getting-started/migrating-from-geth.md",sourceDirName:"01-getting-started",slug:"/getting-started/migrating-from-geth",permalink:"/docs/docs/getting-started/migrating-from-geth",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/01-getting-started/migrating-from-geth.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Networks",permalink:"/docs/docs/getting-started/networks"},next:{title:"Manage Nethermind with systemd",permalink:"/docs/docs/getting-started/manage-nethermind-with-systemd"}},d={},l=[{value:"Option 1a - Sync Nethermind next to Geth",id:"option-1a---sync-nethermind-next-to-geth",level:3},{value:"Step 1 - Download Nethermind latest release",id:"step-1---download-nethermind-latest-release",level:4},{value:"Step 2 - Run secondary CL client for Nethermind syncing purpose only",id:"step-2---run-secondary-cl-client-for-nethermind-syncing-purpose-only",level:4},{value:"Step 3 - Run Nethermind and wait for Sync",id:"step-3---run-nethermind-and-wait-for-sync",level:4},{value:"Step 4 - Stop Geth instance",id:"step-4---stop-geth-instance",level:4},{value:"Step 5 - Stop secondary CL and restart Nethermind using ports assigned for Geth before",id:"step-5---stop-secondary-cl-and-restart-nethermind-using-ports-assigned-for-geth-before",level:4},{value:"Step 6 - Ensure Your setup works well after changes",id:"step-6---ensure-your-setup-works-well-after-changes",level:4},{value:"Step 7 - Remove Geth and secondary CL",id:"step-7---remove-geth-and-secondary-cl",level:4},{value:"Option 1b - Use Sedge to install Nethermind next to Geth quickly",id:"option-1b---use-sedge-to-install-nethermind-next-to-geth-quickly",level:3},{value:"Option 2 - Remove Geth and sync Nethermind",id:"option-2---remove-geth-and-sync-nethermind",level:3},{value:"Step 1 - Stop and remove Geth and its DB from disk",id:"step-1---stop-and-remove-geth-and-its-db-from-disk",level:4},{value:"Step 2 - Download Nethermind latest release",id:"step-2---download-nethermind-latest-release",level:4},{value:"Step 3 - Reconfigure CL and run Nethermind",id:"step-3---reconfigure-cl-and-run-nethermind",level:4},{value:"Step 4 - Ensure Your setup works well after changes",id:"step-4---ensure-your-setup-works-well-after-changes",level:4}],p={toc:l},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-from-geth"},"Migrating From Geth"),(0,r.kt)("p",null,"To migrate from Geth to Nethermind there are few conditions which should be met to ensure seamless and quick transition."),(0,r.kt)("p",null,"First of all there is need to check ",(0,r.kt)("strong",{parentName:"p"},"if disk is big enough.")," Most secure way would be to have a Nethermind node synced\non the same machine as Geth but without stopping Geth. It will give a chance to check Nethermind if sync was properly\nexecuted, verify if everything works correctly and will reduce downtime of node to bare minimum. Such option will be\nrecommended to any public JsonRpc provider or Validators."),(0,r.kt)("p",null,"If disk is big enough, recommended workflow of action\nis ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/getting-started/migrating-from-geth#option-1a---sync-nethermind-next-to-geth"},"#option-1a-sync-nethermind-next-to-geth"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/getting-started/migrating-from-geth#option-1b---use-sedge-to-install-nethermind-next-to-geth-quickly"},"#option-1b-use-sedge-to-install-nethermind-next-to-geth-quickly"),"."),(0,r.kt)("p",null,"If disk is not big enough but downtime is not an option recommended would be to first try to increase disk space or if\nnot possible to extend existing setup, then host Nethermind on separate machine, sync it and whenever it completes its\nwork, move everything validator related to that machine and abandon first machine."),(0,r.kt)("p",null,"On the other hand, if downtime of around ","~","12h is not a problem, then suggested would be to go\nwith ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/getting-started/migrating-from-geth#option-2---remove-geth-and-sync-nethermind"},"#option-2-remove-geth-and-sync-nethermind"),"."),(0,r.kt)("h3",{id:"option-1a---sync-nethermind-next-to-geth"},"Option 1a - Sync Nethermind next to Geth"),(0,r.kt)("h4",{id:"step-1---download-nethermind-latest-release"},"Step 1 - Download Nethermind latest release"),(0,r.kt)("p",null,"Please refer to\na ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/getting-started/installing-nethermind"},"#step-1-installing-nethermind")," to see\navailable options or use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sedge.nethermind.io/"},(0,r.kt)("strong",{parentName:"a"},"Sedge")," ")," which is a one-click setup tool for running\nnode\ndeveloped by Nethermind Team (refer\nto ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/getting-started/migrating-from-geth#option-1b---use-sedge-to-install-nethermind-next-to-geth-quickly"},"#option-1b-use-sedge-to-install-nethermind-next-to-geth-quickly"),")."),(0,r.kt)("h4",{id:"step-2---run-secondary-cl-client-for-nethermind-syncing-purpose-only"},"Step 2 - Run secondary CL client for Nethermind syncing purpose only"),(0,r.kt)("p",null,"Please refer to\na ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/fundamentals/running-nethermind-post-merge#step-2-installing-consensus-client"},"#step-2-installing-consensus-client"),"\nto install secondary CL client beacon node which will be used only for Nethermind syncing purpose.\\\nOnce it is installed ensure it is not colliding with primary CL currently used by Geth."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"EXAMPLE"),"\\\nIn case of running Geth + Prysm as a primary node, and configuring second pair which will be Nethermind + Prysm, for\nsecond instance of Prysm, flags needed to be used are (considering that primary one is using default values):\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-port=4001 --p2p-tcp-port=13001 --p2p-udp-port=12001 --grpc-gateway-port=3501"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"REMEMBER"),"\\\nNethermind node will also be running on separate ports so there should be\na ",(0,r.kt)("inlineCode",{parentName:"p"},"--execution-endpoint=http://localhost:<<NETHERMIND_ENGINE_PORT>>")," flag set keeping in mind that\nNETHERMIND","_","ENGINE","_","PORT should be changed to value selected in next step (preferably 8552)")),(0,r.kt)("h4",{id:"step-3---run-nethermind-and-wait-for-sync"},"Step 3 - Run Nethermind and wait for Sync"),(0,r.kt)("p",null,"Please refer to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/fundamentals/running-nethermind-post-merge#step-4-run-nethermind"},"#step-4-run-nethermind"),"for\ninstruction on how to run Nethermind."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"REMEMBER")),(0,r.kt)("p",{parentName:"admonition"},"For Nethermind You will also need to set a separate ports to not create a conflict with still working Geth node. Values\nneeded to be changed with recommended values:\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Port 8546 --JsonRpc.EnginePort 8552 --Network.DiscoveryPort 30304 --Network.P2PPort 30304"))),(0,r.kt)("p",null,"Now Nethermind node should be syncing well using second CL configured on machine. To monitor status of syncing there is\na JsonRPC call which can be\nused ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/interacting-with-nethermind/json-rpc-api/eth#eth_syncing"},"#eth","_","syncing"),'.\nWhenever this endpoint will return "false", node is considered as fully synced with all bodies and receipts needed to\nwork properly as a Validator.'),(0,r.kt)("p",null,"Another option is to use a health module which will also return a information about current state of syncing."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can see more details of how to monitor ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/monitoring/monitoring-node-health"},"Node Health here"))),(0,r.kt)("h4",{id:"step-4---stop-geth-instance"},"Step 4 - Stop Geth instance"),(0,r.kt)("p",null,"Now it is time to stop Geth. In order to do that stop Geth command/service/docker container. It depends on a way Geth\nwas started initially. \\\nEnsure it is stopped properly and is not progressing before moving to next step."),(0,r.kt)("h4",{id:"step-5---stop-secondary-cl-and-restart-nethermind-using-ports-assigned-for-geth-before"},"Step 5 - Stop secondary CL and restart Nethermind using ports assigned for Geth before"),(0,r.kt)("p",null,"After Geth is properly stopped and removed, restart your nethermind client but now without flags from point 3 (or adjust\nthem to use the same ports which were used by Geth).\\\nAlso stop a secondary CL client to ensure that after that step only Nethermind and CL1 (used before to talk with Geth)\nare started only."),(0,r.kt)("p",null,"Also important would be to restart primary CL using jwt-secret used by Nethermind. For that purpose, you can either use\nflags in CL to point to Nethermind jwtsecret or point Nethermind to that jwtsecret using command:\n",(0,r.kt)("inlineCode",{parentName:"p"},'--JsonRpc.JwtSecretFile "path/to/jwtsecret.hex"')),(0,r.kt)("h4",{id:"step-6---ensure-your-setup-works-well-after-changes"},"Step 6 - Ensure Your setup works well after changes"),(0,r.kt)("p",null,"To see if nodes are progressing properly check logs of both Nethermind and CL to check if there are no warnings/errors -\nespecially ones about authentication which may tell about invalid jwtsecret used or no jwt configured."),(0,r.kt)("p",null,"Also check if Your Nethermind node is following chain properly. From logs you can extract messages like:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Block <<HASH>> was set as head.")),(0,r.kt)("p",null,"Compare a hash from log to hash of corresponding block on ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"https://etherscan.io/")," to see if node\nis progressing well."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"EXAMPLE"),"\nLogs from Nethermind:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Block 0x13cebe2db23cc09fb386fa4a470d6dac3dfca65e11968472f5a1f3681191beab was set as head. 20 Feb 2023 14:56:36.987"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FCU - block 16670194 (0x13cebe...91beab) was processed.")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Block on etherscan:"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/block/16670194"},(0,r.kt)("inlineCode",{parentName:"a"},"https://etherscan.io/block/16670194"))),(0,r.kt)("p",{parentName:"admonition"},"Block number and block hash matches information from logs.")),(0,r.kt)("h4",{id:"step-7---remove-geth-and-secondary-cl"},"Step 7 - Remove Geth and secondary CL"),(0,r.kt)("p",null,"In this step you can remove Geth database and secondary CL used for Nethermind syncing.\nFor Geth in order to remove db, remove ",(0,r.kt)("inlineCode",{parentName:"p"},".ethereum")," directory (default may be ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.ethereum")," or path set on geth\nstartup). Also there is a command which can be used to remove Geth db:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo geth --datadir /var/lib/goethereum removedb")),(0,r.kt)("h3",{id:"option-1b---use-sedge-to-install-nethermind-next-to-geth-quickly"},"Option 1b - Use Sedge to install Nethermind next to Geth quickly"),(0,r.kt)("p",null,"Sedge is a one-click tool which can host entire node on your machine withing a single command taking care of ports,\ncheckpoint sync, connection between EL and CL etc.\nThere is a documentation of Sedge located here: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sedge.nethermind.io/"},"https://docs.sedge.nethermind.io/")),(0,r.kt)("p",null,"High level flow would be similar to Option 1a, but Sedge would automatically take care of Steps 1,2 and 3."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To add additional flags to Sedge, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--el-extra-flag JsonRpc.Port=8546")," or --cl-extra-flag ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc-port=4001"))),(0,r.kt)("p",null,"Later on step 5 you can edit a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and remove all extra flags which were passed to EL or CL and\nsimply restart a node using commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose stop execution\ndocker compose up -d execution\n")),(0,r.kt)("h3",{id:"option-2---remove-geth-and-sync-nethermind"},"Option 2 - Remove Geth and sync Nethermind"),(0,r.kt)("p",null,"This option is quicker since does not require to adjust configuration of EL or CL to not collide with currently running\nsetup."),(0,r.kt)("h4",{id:"step-1---stop-and-remove-geth-and-its-db-from-disk"},"Step 1 - Stop and remove Geth and its DB from disk"),(0,r.kt)("p",null,"First of all, Geth and its DB needs to be removed. Stop Geth process, find a ",(0,r.kt)("inlineCode",{parentName:"p"},".ethereum")," directory and remove it\ncompletely. Also there is a command which can be used to remove Geth db:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo geth --datadir /var/lib/goethereum removedb")),(0,r.kt)("p",null,"Ensure that Geth is stopped properly - it is crucial since it acquires ports which are common between other clients so\nit may cause some unexpected problems during procedure of syncing Nethermind."),(0,r.kt)("h4",{id:"step-2---download-nethermind-latest-release"},"Step 2 - Download Nethermind latest release"),(0,r.kt)("p",null,"Please refer to\na ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/fundamentals/running-nethermind-post-merge#step-1-installing-nethermind"},"#step-1-installing-nethermind")," to see\navailable options or use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sedge.nethermind.io/"},(0,r.kt)("strong",{parentName:"a"},"Sedge")," ")," which is a one-click setup tool for running\nnode\ndeveloped by Nethermind Team."),(0,r.kt)("h4",{id:"step-3---reconfigure-cl-and-run-nethermind"},"Step 3 - Reconfigure CL and run Nethermind"),(0,r.kt)("p",null,"Important thing in PoS chains like Ethereum Mainnet is to properly setup a connection between EL and CL. JwtSecret which\nis used for that communication is needed to be set properly. For that purpose, you can either use flags in CL to point\nto Nethermind jwtsecret or point Nethermind to that jwtsecret using command:\\\n",(0,r.kt)("inlineCode",{parentName:"p"},'--JsonRpc.JwtSecretFile "path/to/jwtsecret.hex"')),(0,r.kt)("p",null,"Nethermind will generate jwtsecret in ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore")," directory and if not specified, it will use this secret."),(0,r.kt)("p",null,"After reconfiguring CL, run Nethermind an monitor it. Please refer to\na ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/fundamentals/running-nethermind-post-merge#step-5-run-nethermind"},"#step-4-run-nethermind"),"for instruction on how to\nrun Nethermind."),(0,r.kt)("p",null,"Now Nethermind node should be syncing well using CL reconfigured on machine. To monitor status of syncing there is a\nJsonRPC call which can be used ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs/interacting-with-nethermind/json-rpc-api/eth#eth_syncing"},"#eth","_","syncing"),'.\nWhenever this endpoint will return "false", node is considered as fully synced with all bodies and receipts needed to\nwork properly as a Validator.'),(0,r.kt)("p",null,"Another option is to use a health module which will also return a information about current state of syncing."),(0,r.kt)("h4",{id:"step-4---ensure-your-setup-works-well-after-changes"},"Step 4 - Ensure Your setup works well after changes"),(0,r.kt)("p",null,"To see if nodes are progressing properly check logs of both Nethermind and CL to check if there are no warnings/errors -\nespecially ones about authentication which may tell about invalid jwtsecret used or no jwt configured."),(0,r.kt)("p",null,"Also check if Your Nethermind node is following chain properly. From logs you can extract messages like:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Block <<HASH>> was set as head.")),(0,r.kt)("p",null,"Compare a hash from log to hash of corresponding block on ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"https://etherscan.io/")," to see if node\nis progressing well."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"EXAMPLE"),"\nLogs from Nethermind:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Block 0x13cebe2db23cc09fb386fa4a470d6dac3dfca65e11968472f5a1f3681191beab was set as head. 20 Feb 2023 14:56:36.987"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"FCU - block 16670194 (0x13cebe...91beab) was processed.")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Block on etherscan:"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/block/16670194"},(0,r.kt)("inlineCode",{parentName:"a"},"https://etherscan.io/block/16670194"))),(0,r.kt)("p",{parentName:"admonition"},"Block number and block hash matches information from logs.")))}h.isMDXComponent=!0}}]);