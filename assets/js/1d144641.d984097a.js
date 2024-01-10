"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[4421],{4095:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var r=s(5893),i=s(1151),l=s(4866),c=s(5162);const t={title:"parity namespace",sidebar_label:"parity",sidebar_position:5},d=void 0,a={id:"interacting/json-rpc-ns/parity",title:"parity namespace",description:"parity_clearEngineSigner",source:"@site/docs/interacting/json-rpc-ns/parity.md",sourceDirName:"interacting/json-rpc-ns",slug:"/interacting/json-rpc-ns/parity",permalink:"/next/interacting/json-rpc-ns/parity",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/interacting/json-rpc-ns/parity.md",tags:[],version:"current",lastUpdatedAt:1704889205,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:5,frontMatter:{title:"parity namespace",sidebar_label:"parity",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"net",permalink:"/next/interacting/json-rpc-ns/net"},next:{title:"personal",permalink:"/next/interacting/json-rpc-ns/personal"}},o={},h=[{value:"parity_clearEngineSigner",id:"parity_clearenginesigner",level:3},{value:"parity_enode",id:"parity_enode",level:3},{value:"parity_getBlockReceipts",id:"parity_getblockreceipts",level:3},{value:"parity_netPeers",id:"parity_netpeers",level:3},{value:"parity_pendingTransactions",id:"parity_pendingtransactions",level:3},{value:"parity_setEngineSigner",id:"parity_setenginesigner",level:3},{value:"parity_setEngineSignerSecret",id:"parity_setenginesignersecret",level:3}];function x(e){const n={code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"parity_clearenginesigner",children:"parity_clearEngineSigner"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "parity_clearEngineSigner",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(c.Z,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"parity_enode",children:"parity_enode"}),"\n",(0,r.jsx)(n.p,{children:"Returns the node enode URI."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "parity_enode",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(c.Z,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"string"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"parity_getblockreceipts",children:"parity_getBlockReceipts"}),"\n",(0,r.jsx)(n.p,{children:"Get receipts from all transactions from particular block, more efficient than fetching the receipts one-by-one."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockParameter"}),": ",(0,r.jsx)(n.em,{children:"string"})," (block number or hash or either of ",(0,r.jsx)(n.code,{children:"earliest"}),", ",(0,r.jsx)(n.code,{children:"finalized"}),", ",(0,r.jsx)(n.code,{children:"latest"}),", ",(0,r.jsx)(n.code,{children:"pending"}),", or ",(0,r.jsx)(n.code,{children:"safe"}),")"]}),"\n"]})}),(0,r.jsx)(c.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "parity_getBlockReceipts",\n      "params": [blockParameter]\n    }\'\n'})})}),(0,r.jsxs)(c.Z,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blobGasPrice"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blobGasUsed"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"contractAddress"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cumulativeGasUsed"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"effectiveGasPrice"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"error"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gasUsed"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"logs"}),": array of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"logIndex"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"removed"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"topics"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"logsBloom"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"root"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"status"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"to"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"}),": ",(0,r.jsx)(n.em,{children:"integer"})]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"parity_netpeers",children:"parity_netPeers"}),"\n",(0,r.jsx)(n.p,{children:"Returns connected peers. Peers with non-empty protocols have completed handshake."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "parity_netPeers",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(c.Z,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"active"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"connected"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"max"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"peers"}),": array of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"caps"}),": array of ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"network"}),": ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"localAddress"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"remoteAddress"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"protocols"}),": map of ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"difficulty"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"headHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"version"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"parity_pendingtransactions",children:"parity_pendingTransactions"}),"\n",(0,r.jsx)(n.p,{children:"Returns a list of transactions currently in the queue. If address is provided, returns transactions only with given sender address."}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]})}),(0,r.jsx)(c.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "parity_pendingTransactions",\n      "params": [address]\n    }\'\n'})})}),(0,r.jsxs)(c.Z,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"object"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockHash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"blockNumber"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chainId"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"condition"}),": ",(0,r.jsx)(n.em,{children:"object"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"creates"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gas"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gasPrice"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hash"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hash)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"input"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nonce"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"publicKey"}),": ",(0,r.jsx)(n.em,{children:"object"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"bytes"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"prefixedBytes"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"r"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"raw"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"standardV"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"to"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"transactionIndex"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"v"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex integer)"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"parity_setenginesigner",children:"parity_setEngineSigner"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"password"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n"]}),"\n"]})}),(0,r.jsx)(c.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "parity_setEngineSigner",\n      "params": [address, password]\n    }\'\n'})})}),(0,r.jsxs)(c.Z,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"parity_setenginesignersecret",children:"parity_setEngineSignerSecret"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"privateKey"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n"]})}),(0,r.jsx)(c.Z,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "parity_setEngineSignerSecret",\n      "params": [privateKey]\n    }\'\n'})})}),(0,r.jsxs)(c.Z,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>c});s(7294);var r=s(512);const i={tabItem:"tabItem_Ymn6"};var l=s(5893);function c(e){let{children:n,hidden:s,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,c),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>_});var r=s(7294),i=s(512),l=s(2466),c=s(6550),t=s(469),d=s(1980),a=s(7392),o=s(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function j(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:s}=e;const i=(0,c.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,l=x(e),[c,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[a,h]=u({queryString:s,groupId:i}),[p,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,o.Nk)(s);return[i,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:i}),m=(()=>{const e=a??p;return j({value:e,tabValues:l})?e:null})();(0,t.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),g(e)}),[h,g,l]),tabValues:l}}var g=s(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(5893);function f(e){let{className:n,block:s,selectedValue:r,selectValue:c,tabValues:t}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.o5)(),o=e=>{const n=e.currentTarget,s=d.indexOf(n),i=t[s].value;i!==r&&(a(n),c(i))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...l,className:(0,i.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function _(e){const n=(0,g.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var r=s(7294);const i={},l=r.createContext(i);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);