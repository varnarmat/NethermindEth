"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[7926],{2181:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(4848),a=s(8453),l=s(1470),t=s(9365);const o={title:"personal namespace",sidebar_label:"personal",sidebar_position:6},c=void 0,i={id:"interacting/json-rpc-ns/personal",title:"personal namespace",description:"personal_importRawKey",source:"@site/versioned_docs/version-v1.25.0/interacting/json-rpc-ns/personal.md",sourceDirName:"interacting/json-rpc-ns",slug:"/interacting/json-rpc-ns/personal",permalink:"/v1.25.0/interacting/json-rpc-ns/personal",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-v1.25.0/interacting/json-rpc-ns/personal.md",tags:[],version:"v1.25.0",lastUpdatedAt:1724450838e3,sidebarPosition:6,frontMatter:{title:"personal namespace",sidebar_label:"personal",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"parity",permalink:"/v1.25.0/interacting/json-rpc-ns/parity"},next:{title:"proof",permalink:"/v1.25.0/interacting/json-rpc-ns/proof"}},u={},d=[{value:"personal_importRawKey",id:"personal_importrawkey",level:3},{value:"personal_listAccounts",id:"personal_listaccounts",level:3},{value:"personal_lockAccount",id:"personal_lockaccount",level:3},{value:"personal_newAccount",id:"personal_newaccount",level:3},{value:"personal_unlockAccount",id:"personal_unlockaccount",level:3}];function p(e){const n={code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"personal_importrawkey",children:"personal_importRawKey"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"keyData"}),": ",(0,r.jsx)(n.em,{children:"string"})," (hex data)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"passphrase"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "personal_importRawKey",\n      "params": [keyData, passphrase]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"personal_listaccounts",children:"personal_listAccounts"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "personal_listAccounts",\n      "params": []\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": array of ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"personal_lockaccount",children:"personal_lockAccount"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "personal_lockAccount",\n      "params": [address]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"personal_newaccount",children:"personal_newAccount"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"passphrase"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "personal_newAccount",\n      "params": [passphrase]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"personal_unlockaccount",children:"personal_unlockAccount"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(t.A,{value:"params",label:"Parameters",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"address"}),": ",(0,r.jsx)(n.em,{children:"string"})," (address)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"passphrase"}),": ",(0,r.jsx)(n.em,{children:"string"})]}),"\n"]}),"\n"]})}),(0,r.jsx)(t.A,{value:"request",label:"Request",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "personal_unlockAccount",\n      "params": [address, passphrase]\n    }\'\n'})})}),(0,r.jsxs)(t.A,{value:"response",label:"Response",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n'})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"result"}),": ",(0,r.jsx)(n.em,{children:"boolean"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var r=s(4164);const a={tabItem:"tabItem_Ymn6"};var l=s(4848);function t(e){let{children:n,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,t),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>_});var r=s(6540),a=s(4164),l=s(3104),t=s(6347),o=s(205),c=s(7485),i=s(1682),u=s(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:a}}=e;return{value:n,label:s,attributes:r,default:a}}))}(s);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const a=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,l=p(e),[t,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[i,d]=j({queryString:s,groupId:a}),[m,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(s);return[a,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:a}),b=(()=>{const e=i??m;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&c(b)}),[b]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=s(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(4848);function f(e){let{className:n,block:s,selectedValue:r,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),a=o[s].value;a!==r&&(i(n),t(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:a}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function A(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function _(e){const n=(0,x.A)();return(0,v.jsx)(A,{...e,children:d(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const a={},l=r.createContext(a);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);