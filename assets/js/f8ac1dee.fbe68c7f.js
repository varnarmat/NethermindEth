"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[2728],{8093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(4848),r=t(8453);const i={title:"dotnet-counters",sidebar_position:1},s=void 0,c={id:"monitoring/metrics/dotnet-counters",title:"dotnet-counters",description:"This guide will walk you through setting up performance counters using the dotnet-counters performance monitoring tool that observes counters published via the EventCounters API.",source:"@site/versioned_docs/version-v1.28.0/monitoring/metrics/dotnet-counters.md",sourceDirName:"monitoring/metrics",slug:"/monitoring/metrics/dotnet-counters",permalink:"/monitoring/metrics/dotnet-counters",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-v1.28.0/monitoring/metrics/dotnet-counters.md",tags:[],version:"v1.28.0",lastUpdatedAt:1724450838e3,sidebarPosition:1,frontMatter:{title:"dotnet-counters",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Grafana and Prometheus",permalink:"/monitoring/metrics/grafana-and-prometheus"},next:{title:"Health check",permalink:"/monitoring/health-check"}},l={},d=[{value:"Step 1: Install dotnet-counters",id:"step-1-install-dotnet-counters",level:2},{value:"Installing locally",id:"installing-locally",level:3},{value:"Installing in a Docker container",id:"installing-in-a-docker-container",level:3},{value:"Step 2: Run Nethermind",id:"step-2-run-nethermind",level:2},{value:"Running locally",id:"running-locally",level:3},{value:"Running in a Docker container",id:"running-in-a-docker-container",level:3},{value:"Step 3: Collect metrics",id:"step-3-collect-metrics",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This guide will walk you through setting up performance counters using the ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters",children:"dotnet-counters"})," performance monitoring tool that observes counters published via the ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.tracing.eventcounter",children:"EventCounters API"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"step-1-install-dotnet-counters",children:"Step 1: Install dotnet-counters"}),"\n",(0,o.jsx)(n.p,{children:"dotnet-counters can be either installed locally or in a Docker container."}),"\n",(0,o.jsx)(n.h3,{id:"installing-locally",children:"Installing locally"}),"\n",(0,o.jsx)(n.p,{children:"Use the dotnet tool install command as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"dotnet tool install -g dotnet-counters\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once installed, you can run the tool from the command line by typing ",(0,o.jsx)(n.code,{children:"dotnet-counters"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"installing-in-a-docker-container",children:"Installing in a Docker container"}),"\n",(0,o.jsx)(n.p,{children:"To install dotnet-counters in a Docker container, create a Dockerfile with the following content:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-docker",metastring:'title="Dockerfile"',children:'FROM mcr.microsoft.com/dotnet/sdk:8.0\n\nRUN dotnet tool install -g dotnet-counters\n\nENV PATH="$PATH:/root/.dotnet/tools"\n\nENTRYPOINT ["/bin/bash"]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Then, build the Docker image:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker build -t dotnet-counters .\n"})}),"\n",(0,o.jsx)(n.h2,{id:"step-2-run-nethermind",children:"Step 2: Run Nethermind"}),"\n",(0,o.jsxs)(n.p,{children:["To enable performance counters in Nethermind, use the command line option ",(0,o.jsx)(n.code,{children:"--Metrics.CountersEnabled true"}),". For more options, see the ",(0,o.jsx)(n.a,{href:"/fundamentals/configuration#metrics",children:"Metrics"})," configuration section."]}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.a,{href:"/get-started/consensus-clients",children:"consensus client"})," of your choice must be running before you start Nethermind."]})}),"\n",(0,o.jsx)(n.h3,{id:"running-locally",children:"Running locally"}),"\n",(0,o.jsx)(n.p,{children:"To enable performance counters, run Nethermind as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"nethermind -c mainnet --Metrics.CountersEnabled true\n"})}),"\n",(0,o.jsx)(n.h3,{id:"running-in-a-docker-container",children:"Running in a Docker container"}),"\n",(0,o.jsxs)(n.p,{children:["The easiest way of collecting metrics in a Docker container is to use Docker Compose. Below, we use the Nethermind official Docker image and the ",(0,o.jsx)(n.code,{children:"dotnet-counters"})," image we created earlier:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:"services:\n\n  dotnet-counters:\n    image: dotnet-counters\n    container_name: dotnet-counters\n    stdin_open: true\n    tty: true\n    pid: service:nethermind\n    volumes:\n      - metrics:/tmp\n    depends_on:\n      - nethermind\n  \n  nethermind:\n    image: nethermind/nethermind:latest\n    container_name: nethermind\n    restart: unless-stopped\n    ports:\n      - 8545:8545\n      - 8551:8551\n      - 30303:30303\n    command: -c mainnet --Metrics.CountersEnabled true\n    volumes:\n      - ./keystore:/nethermind/keystore\n      - ./logs:/nethermind/logs\n      - ./nethermind_db:/nethermind/nethermind_db\n      - metrics:/tmp\n\nvolumes:\n  metrics:\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["dotnet-counters uses IPC socket communication to monitor the target process. For this, we use the ",(0,o.jsx)(n.code,{children:"metrics"})," volume to share the IPC socket directory with the ",(0,o.jsx)(n.code,{children:"nethermind"})," and ",(0,o.jsx)(n.code,{children:"dotnet-counter"})," services. The ",(0,o.jsx)(n.code,{children:"pid"})," option in the ",(0,o.jsx)(n.code,{children:"dotnet-counters"})," service is used to share the PID namespace with the ",(0,o.jsx)(n.code,{children:"nethermind"})," service. This is necessary for ",(0,o.jsx)(n.code,{children:"dotnet-counters"})," to be able to see the Nethermind process."]})}),"\n",(0,o.jsx)(n.p,{children:"We can run the above file as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,o.jsx)(n.h2,{id:"step-3-collect-metrics",children:"Step 3: Collect metrics"}),"\n",(0,o.jsxs)(n.p,{children:["Once dotnet-counters is installed and Nethermind is running, we can start collecting the metrics. If you chose to collect metrics in the containers, run the following command in the ",(0,o.jsx)(n.code,{children:"dotnet-counters"})," container:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"dotnet-counters collect -n nethermind\n"})}),"\n",(0,o.jsx)(n.p,{children:"By default, dotnet-counters stores the collected metrics in the current directory in CSV format. However, you may also store them in JSON format and another directory. For instance:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"dotnet-counters collect -n nethermind -f json -o /tmp/counters.json\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more info about dotnet-counters, see its ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters",children:"official docs"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);