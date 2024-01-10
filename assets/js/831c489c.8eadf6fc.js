"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[7173],{1093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(5893),s=t(1151),i=t(4866),a=t(5162);const c={},l="Setting up local Metrics infrastructure",o={id:"monitoring/metrics/setting-up-local-metrics-infrastracture",title:"setting-up-local-metrics-infrastracture",description:"This article requires a revision.",source:"@site/versioned_docs/version-v1.25.0/monitoring/metrics/setting-up-local-metrics-infrastracture.md",sourceDirName:"monitoring/metrics",slug:"/monitoring/metrics/setting-up-local-metrics-infrastracture",permalink:"/monitoring/metrics/setting-up-local-metrics-infrastracture",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-v1.25.0/monitoring/metrics/setting-up-local-metrics-infrastracture.md",tags:[],version:"v1.25.0",lastUpdatedAt:1704889205,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dotnet-counters",permalink:"/monitoring/metrics/dotnet-counters"},next:{title:"Health check",permalink:"/monitoring/health-check"}},u={},d=[{value:"Metrics Configuration",id:"metrics-configuration",level:2},{value:"Metrics infrastructure",id:"metrics-infrastructure",level:2},{value:"Enabling Metrics in Nethermind",id:"enabling-metrics-in-nethermind",level:3},{value:"Running sample configuration",id:"running-sample-configuration",level:3},{value:"Useful Resources",id:"useful-resources",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This article requires a revision."})}),"\n",(0,r.jsx)(n.h1,{id:"setting-up-local-metrics-infrastructure",children:"Setting up local Metrics infrastructure"}),"\n",(0,r.jsx)(n.h2,{id:"metrics-configuration",children:"Metrics Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Nethermind metrics can be consumed by ",(0,r.jsx)(n.em,{children:"Prometheus/Grafana"})," if configured\nin ",(0,r.jsx)(n.a,{href:"../../fundamentals/configuration#metrics",children:"Metrics configuration category"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"metrics-infrastructure",children:"Metrics infrastructure"}),"\n",(0,r.jsx)(n.h3,{id:"enabling-metrics-in-nethermind",children:"Enabling Metrics in Nethermind"}),"\n",(0,r.jsxs)(n.p,{children:["Metrics can be enabled by simply passing ",(0,r.jsx)(n.code,{children:"--Metrics.Enabled true"})," argument to the Docker containers,",(0,r.jsx)(n.code,{children:"Nethermind.Runner"}),"\nor ",(0,r.jsx)(n.code,{children:"Nethermind.Launcher"}),"  e.g. ",(0,r.jsx)(n.code,{children:"./Nethermind.Runner --Metrics.Enabled true"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Metrics.PushGatewayUrl"})," will need to be amended if pushgateway endpoint is not default."]}),"\n",(0,r.jsx)(n.h3,{id:"running-sample-configuration",children:"Running sample configuration"}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","clone ",(0,r.jsx)(n.a,{href:"https://github.com/NethermindEth/metrics-infrastructure",children:"metrics-infrastructure"})," repository"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/metrics-infrastructure.git\n"})}),"\n",(0,r.jsxs)(n.ol,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","go to ",(0,r.jsx)(n.code,{children:"metrics-infrastructure"})," directory"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd metrics-explanation-infrastructure\n"})}),"\n",(0,r.jsxs)(n.ol,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","run docker stack"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Prometheus"})," instance should be now running on ",(0,r.jsx)(n.a,{href:"http://localhost:9090/",children:(0,r.jsx)(n.code,{children:"http://localhost:9090/"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Pushgateway"})," on ",(0,r.jsx)(n.a,{href:"http://localhost:9091/",children:(0,r.jsx)(n.code,{children:"http://localhost:9091/"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Grafana on"})," ",(0,r.jsx)(n.a,{href:"http://localhost:3000/",children:(0,r.jsx)(n.code,{children:"http://localhost:3000/"})}),"``"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","run the ",(0,r.jsx)(n.code,{children:"Nethermind"})," node with ",(0,r.jsx)(n.code,{children:"Metrics"})," enabled and you should see metrics inflowing on\n",(0,r.jsx)(n.em,{children:"Pushgateway"})," ",(0,r.jsx)(n.a,{href:"http://localhost:9091/",children:"url"})]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["You can add nethermind service to the ",(0,r.jsx)(n.code,{children:"docker-compose.yml"})," file so that it runs with the whole stack"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"nethermind:\n  image: nethermind/nethermind\n  container_name: nethermind\n  restart: unless-stopped\n  command: '--config goerli --Metrics.Enabled true'\n  network_mode: host\n  volumes:\n    - ./nethermind_db/:/nethermind/nethermind_db/\n    - ./keystore/:/nethermind/keystore/\n    - ./logs/:/nethermind/logs/\n"})})]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{value:"Runner",label:"Runner",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./Nethermind.Runner --Metrics.Enabled true\n"})})}),(0,r.jsx)(a.Z,{value:"Launcher",label:"Launcher",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./Nethermind.Launcher --Metrics.Enabled true\n"})})}),(0,r.jsx)(a.Z,{value:"Docker",label:"Docker",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -it --network host nethermind/nethermind:alpine --Metrics.Enabled\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://nethermind.readthedocs.io/en/latest/_images/pushgateway.png",alt:"http://localhost:9091/"})}),"\n",(0,r.jsxs)(n.ol,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","open ",(0,r.jsx)(n.em,{children:"Grafana"})," ",(0,r.jsx)(n.a,{href:"http://localhost:3000",children:"url"})," and login with default login (admin) and password (admin), skip\npassword change if you want"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(7756).Z+"",width:"1085",height:"772"})}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","go to dashboards management ",(0,r.jsx)(n.a,{href:"http://localhost:3000/dashboards",children:(0,r.jsx)(n.code,{children:"http://localhost:3000/dashboards"})}),"and\nclick ",(0,r.jsx)(n.code,{children:"Nethermind"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(1666).Z+"",width:"899",height:"422"})}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","you can now explore metrics and monitor your Nethermind node"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(5905).Z+"",width:"1821",height:"852"})}),"\n",(0,r.jsx)(n.h3,{id:"useful-resources",children:"Useful Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/prometheus/prometheus",children:"Prometheus"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/prometheus/pushgateway",children:"Pushgateway"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/grafana/grafana",children:"Grafana"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(512);const s={tabItem:"tabItem_Ymn6"};var i=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(7294),s=t(512),i=t(2466),a=t(6550),c=t(469),l=t(1980),o=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[o,d]=p({queryString:t,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=o??f;return m({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=c[t].value;s!==r&&(o(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,b.jsx)(k,{...e,children:d(e.children)},String(n))}},1666:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image(26)-2e877f27155a67cfd995c39ff39d8604.png"},7756:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image(28)-2a6b0f25b888801f194cebca1e218f2c.png"},5905:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/image(29)-40080dde89bd64b9f96a5867aae82fa8.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);