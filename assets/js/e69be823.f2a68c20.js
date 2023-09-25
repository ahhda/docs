"use strict";(self.webpackChunkcow_docs=self.webpackChunkcow_docs||[]).push([[1968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?i.createElement(f,n(n({ref:t},u),{},{components:r})):i.createElement(f,n({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,n[1]=l;for(var c=2;c<a;c++)n[c]=r[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(7462),o=(r(7294),r(3905));const a={},n="General Overview",l={unversionedId:"tutorials/submit-limit-orders-via-api/general-overview",id:"tutorials/submit-limit-orders-via-api/general-overview",title:"General Overview",description:"A limit order is a long standing user order to buy a token at a price that may currently not be achievable. Once the price becomes achievable on-chain, the order executes and captures surplus.&#x20;",source:"@site/docs/tutorials/submit-limit-orders-via-api/general-overview.md",sourceDirName:"tutorials/submit-limit-orders-via-api",slug:"/tutorials/submit-limit-orders-via-api/general-overview",permalink:"/docs/docs/tutorials/submit-limit-orders-via-api/general-overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/submit-limit-orders-via-api/general-overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Submit Limit Orders via API",permalink:"/docs/docs/tutorials/submit-limit-orders-via-api/"},next:{title:"Limit Order Structure",permalink:"/docs/docs/tutorials/submit-limit-orders-via-api/limit-order-structure"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"general-overview"},"General Overview"),(0,o.kt)("p",null,"A limit order is a long standing user order to buy a token at a price that may currently not be achievable. Once the price becomes achievable on-chain, the order executes and captures surplus."," "),(0,o.kt)("p",null,"CoW Protocol\u2019s limit order key feature is that they are surplus-capturing. This means that the fee a trader pays for executing an order is taken from the price improvement that solvers find for the order, while the rest of the price improvement goes to the trader. In other words, unlike limit orders from other DEXs, your limit price will always be respected and the fee will be taken directly from the surplus if and only if, this operation results in respecting your limit price. If CoW Protocol finds an opportunity to capture additional value with your order (for example, with a full or partial CoW), that surplus is given to the trader instead of, what typically happens for limit orders, being taken by the counterparty."),(0,o.kt)("p",null,"CoW Swap users can place their limit orders via the CoW Swap ",(0,o.kt)("a",{parentName:"p",href:"http://swap.cow.fi"},"dApp"),", or they can submit directly via the CoW Protocol API (follow the info in this section)."," "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note:")," to trade, traders need to approve their tokens if they have not done so previously. If they have, they can place limit orders directly without needing to make an extra approval.")),(0,o.kt)("p",null,"\\"),(0,o.kt)("p",null,"\\"))}d.isMDXComponent=!0}}]);