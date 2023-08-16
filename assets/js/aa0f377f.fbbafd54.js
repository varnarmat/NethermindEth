"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3374],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?i.createElement(h,a(a({ref:n},c),{},{components:t})):i.createElement(h,a({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const l={description:"Pipelines were added to the Nethermind code base in order to make building plugins around blockchain analysis faster and easier."},a="Pipeline",o={unversionedId:"nethermind-utilities/pipeline",id:"nethermind-utilities/pipeline",title:"Pipeline",description:"Pipelines were added to the Nethermind code base in order to make building plugins around blockchain analysis faster and easier.",source:"@site/docs/06-nethermind-utilities/pipeline.md",sourceDirName:"06-nethermind-utilities",slug:"/nethermind-utilities/pipeline",permalink:"/docs/nethermind-utilities/pipeline",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/06-nethermind-utilities/pipeline.md",tags:[],version:"current",lastUpdatedAt:1692227448,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{description:"Pipelines were added to the Nethermind code base in order to make building plugins around blockchain analysis faster and easier."},sidebar:"tutorialSidebar",previous:{title:"web3",permalink:"/docs/nethermind-utilities/cli/web3"},next:{title:"Resources",permalink:"/docs/category/resources"}},s={},p=[{value:"Please note that the pipeline source code is still a work in progress and there will be significant changes in the coming weeks!",id:"please-note-that-the-pipeline-source-code-is-still-a-work-in-progress-and-there-will-be-significant-changes-in-the-coming-weeks",level:3},{value:"Pipeline items",id:"pipeline-items",level:2},{value:"Publishers",id:"publishers",level:2},{value:"Building pipeline",id:"building-pipeline",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pipeline"},"Pipeline"),(0,r.kt)("h3",{id:"please-note-that-the-pipeline-source-code-is-still-a-work-in-progress-and-there-will-be-significant-changes-in-the-coming-weeks"},"Please note that the pipeline source code is still a work in progress and there will be significant changes in the coming weeks!"),(0,r.kt)("p",null,"Nethermind under ",(0,r.kt)("inlineCode",{parentName:"p"},"Nethermind.Pipeline")," project provides couple of interfaces and classes used in creating pipelines."),(0,r.kt)("h2",{id:"pipeline-items"},"Pipeline items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPipelineElement")," - base building block of the pipeline."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPipelineElement<TOut>")," - generic interface used for emitting data of type ",(0,r.kt)("inlineCode",{parentName:"li"},"TOut"),". to the next element ","(","most of the\ntime this is the first element in the collection",")","."),(0,r.kt)("li",{parentName:"ul"},"IPipelineElement","<","TIn, TOut",">"," - interface used for both emitting and subscribing to the data from the previous\nblock, so ",(0,r.kt)("inlineCode",{parentName:"li"},"TIn")," is the type of data from the previous block and ",(0,r.kt)("inlineCode",{parentName:"li"},"TOut")," is the type of data that the element wants to\ngive to the next element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPipeline")," - collection of ",(0,r.kt)("inlineCode",{parentName:"li"},"IPipelineElement")," used to store our pipeline in the memory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPipelineBuilder<TSource, TOutput>")," - when we want to create our pipeline the fastest way will be to use\nimplementation of this interface ","(","implemented in ",(0,r.kt)("inlineCode",{parentName:"li"},"PipelineBuilder.cs"),")",". Builder collects all of the elements we want\nto create the pipeline with and creates the flow of the data between them. Keep in mind that once the pipeline is\ncreated it's immutable.")),(0,r.kt)("h2",{id:"publishers"},"Publishers"),(0,r.kt)("p",null,"Publishers are just classes implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"IPipelineElement<TIn, TOut>")," ","(","so they are able to subscribe and emit data",")","\nwith the additional functionality of publishing the data to either WebSockets or as logs to the file. We add them to the\npipeline the same way as normal elements - by using ",(0,r.kt)("inlineCode",{parentName:"p"},"PipelineBuilder")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WebSocketsPublisher"),(0,r.kt)("li",{parentName:"ul"},"LogPublisher")),(0,r.kt)("h2",{id:"building-pipeline"},"Building pipeline"),(0,r.kt)("p",null,"We will build a Nethermind plugin\n","(","see ",(0,r.kt)("a",{parentName:"p",href:"/docs/for-developers/plugins"},"nethermind plugins"),") which observes newly created\nblocks and see whether there are any transactions to a specific contract address."),(0,r.kt)("p",null,"Firstly we need to create our pipeline elements. With this case there will only be 3 of them - source, processor and\npublisher but there is nothing standing in the way in adding more elements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"    public class NewTransactionsSource<TIn> : IPipelineElement<TIn> where TIn : Transaction\n    {\n        private Block _block;\n        private IBlockProcessor _blockProcessor;\n\n        public Action<TIn> Emit { private get; set; }\n\n        public NewTransactionsSource(IBlockProcessor blockProcessor)\n        {\n            _blockProcessor = blockProcessor; \n\n            \n        }\n\n        public void OnNewBlockProcessed(BlockProcessedEventArgs args)\n        {\n            var block = args.Block;\n\n            foreach(var tx in block.Transactions)\n            {\n                Emit((TIn)tx);\n            }\n        }\n    }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'    public class TransactionProcessorElement<TIn, TOut> : IPipelineElement<TIn, TOut>\n    where TIn : Transaction\n    where TOut : TIn\n    {\n        private Address _address = new Address("0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF");\n        public Action<TOut> Emit { private get; set; }\n\n        public void SubscribeToData(TIn data)\n        {\n            if(data.To == _address)\n            {\n                Emit((TOut)data);\n            }\n        }\n    }\n')),(0,r.kt)("p",null,"After that create plugin file and build your pipeline with ",(0,r.kt)("inlineCode",{parentName:"p"},"IPipelineBuilder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'    public class PipelineExamplePlugin : INethermindPlugin\n    {\n        public string Name => "Pipeline example";\n        public string Description => "Example on how to deal with Nethermind\'s pipeline";\n        public string Author => "Nethermind team";\n\n        private INethermindApi _api;\n        private IPipeline _pipeline;\n\n        public ValueTask DisposeAsync()\n        {\n            return ValueTask.CompletedTask;\n        }\n\n        public Task Init(INethermindApi nethermindApi)\n        {\n            _api = nethermindApi;\n            \n            var sourceElement = new NewTransactionsSource<Transaction>(_api.MainBlockProcessor);\n            var processorElement = new TransactionProcessorElement<Transaction, Transaction>();\n            var webSocketsPublisher = new WebSocketsPublisher<Transaction, Transaction>("example-publisher", _api.EthereumJsonSerializer);\n            _api.WebSocketsManager.AddModule(webSocketsPublisher);\n\n            var pipelineBuilder = new PipelineBuilder<Transaction, Transaction>(sourceElement);\n            _pipeline = pipelineBuilder.AddElement(processorElement).AddElement(webSocketsPublisher).Build();\n\n            return Task.CompletedTask;\n        }\n\n        public Task InitNetworkProtocol()\n        {\n            return Task.CompletedTask;\n        }\n\n        public Task InitRpcModules()\n        {\n            return Task.CompletedTask;\n        }\n    }\n')),(0,r.kt)("p",null,"With that, all you need is to add the plugin to your node and watch how transactions are being streamed through web\nsockets."))}u.isMDXComponent=!0}}]);