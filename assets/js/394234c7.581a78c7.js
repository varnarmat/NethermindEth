"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="Manage Nethermind with systemd",l={unversionedId:"getting-started/manage-nethermind-with-systemd",id:"getting-started/manage-nethermind-with-systemd",title:"Manage Nethermind with systemd",description:"Create a new user",source:"@site/docs/01-getting-started/manage-nethermind-with-systemd.md",sourceDirName:"01-getting-started",slug:"/getting-started/manage-nethermind-with-systemd",permalink:"/docs/docs/getting-started/manage-nethermind-with-systemd",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/01-getting-started/manage-nethermind-with-systemd.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Migrating From Geth",permalink:"/docs/docs/getting-started/migrating-from-geth"},next:{title:"Fundamentals",permalink:"/docs/docs/category/fundamentals"}},s={},d=[{value:"Create a new user",id:"create-a-new-user",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Get Nethermind",id:"get-nethermind",level:3},{value:"Manage Nethermind with systemd",id:"manage-nethermind-with-systemd-1",level:3}],m={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-nethermind-with-systemd"},"Manage Nethermind with systemd"),(0,r.kt)("h3",{id:"create-a-new-user"},"Create a new user"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo useradd -m -s /bin/bash nethermind\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Increase the maximum number of open files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo bash -c 'echo \"nethermind soft nofile 1000000\" > /etc/security/limits.d/nethermind.conf'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo bash -c 'echo \"nethermind hard nofile 1000000\" >> /etc/security/limits.d/nethermind.conf'\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Switch to the new user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo su - nethermind\n")),(0,r.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y\n")),(0,r.kt)("h3",{id:"get-nethermind"},"Get Nethermind"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/docs/getting-started/installing-nethermind"},"Follow instructions")," to get the latest Nethermind package")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget [LINUX_PACKAGE_URL]\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Extract the files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"unzip [LINUX_PACKAGE_FILENAME] -d build\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create data directory for ",(0,r.kt)("inlineCode",{parentName:"li"},"logs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"database")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"keystore"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir data\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file inside ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," directory and provide environment variables to the Node configuration like for\nexample:")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"NETHERMIND_CONFIG")," is the important one - defines the network config, the rest is optional.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},'NETHERMIND_CONFIG="mainnet"\nNETHERMIND_JSONRPCCONFIG_ENABLED=true\nNETHERMIND_JSONRPCCONFIG_HOST="0.0.0.0"\nNETHERMIND_HEALTHCHECKSCONFIG_ENABLED="true"\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Remove the no more need package ",(0,r.kt)("strong",{parentName:"li"},"(optional)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm [LINUX_PACKAGE_FILENAME]\n")),(0,r.kt)("h3",{id:"manage-nethermind-with-systemd-1"},"Manage Nethermind with systemd"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the nethermind.service config")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Move the config into the systemd folder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mv nethermind.service /etc/systemd/system/\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Reload the systemd configs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Start nethermind service")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can now ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stop"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"restart")," Nethermind with systemd")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service nethermind start\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Display the current Nethermind output ",(0,r.kt)("strong",{parentName:"li"},"(optional)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u nethermind -f\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Enable autorun ",(0,r.kt)("strong",{parentName:"li"},"(optional)"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable nethermind\n")))}c.isMDXComponent=!0}}]);