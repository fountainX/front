import{ag as d,o as E,M as D,as as B}from"../js/@vue/@vue.91badbb5.js";import{c as h}from"../js/pinia/pinia.77f0a8dc.js";import{c as T,a as F}from"../js/vue-router/vue-router.eb4438d1.js";import{N as c}from"../js/nprogress/nprogress.6998436e.js";import{i as f}from"../js/element-plus/element-plus.7433ebda.js";import{v as y}from"../js/vue-i18n/vue-i18n.be0cd90f.js";import{e as g}from"../js/echarts/echarts.00da4ec3.js";import{J as v}from"../js/vue-json-viewer/vue-json-viewer.da850f6b.js";import{Q as _}from"../js/@element-plus/@element-plus.8ca26a4d.js";import{s as H}from"../js/pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js";import"../js/vue-demi/vue-demi.4f3c4c97.js";import"../js/@intlify/@intlify.223376e2.js";import"../js/lodash-es/lodash-es.d3b5e6f4.js";import"../js/@vueuse/@vueuse.2a62804a.js";import"../js/@popperjs/@popperjs.f1fb8f77.js";import"../js/@ctrl/@ctrl.9c8f424f.js";import"../js/dayjs/dayjs.074df034.js";import"../js/async-validator/async-validator.21881447.js";import"../js/memoize-one/memoize-one.f0fba034.js";import"../js/escape-html/escape-html.d572c0fd.js";import"../js/normalize-wheel-es/normalize-wheel-es.94de1731.js";import"../js/@floating-ui/@floating-ui.ded716ca.js";import"../js/vue/vue.c5048f59.js";import"../js/tslib/tslib.e35f93b8.js";import"../js/zrender/zrender.643dc830.js";import"../js/clipboard/clipboard.e72d304d.js";const S=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerpolicy&&(o.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?o.credentials="include":u.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(u){if(u.ep)return;u.ep=!0;const o=n(u);fetch(u.href,o)}};S();var k=(a,t)=>{const n=a.__vccOpts||a;for(const[e,u]of t)n[e]=u;return n};const N={};function P(a,t){const n=d("router-view");return E(),D(n)}var x=k(N,[["render",P]]);const L="modulepreload",p={},R="./",s=function(t,n){return!n||n.length===0?t():Promise.all(n.map(e=>{if(e=`${R}${e}`,e in p)return;p[e]=!0;const u=e.endsWith(".css"),o=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");if(r.rel=u?"stylesheet":L,u||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),u)return new Promise((C,A)=>{r.addEventListener("load",C),r.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())};c.configure({easing:"ease",speed:1e3,showSpinner:!1,trickleSpeed:200,minimum:.3,parent:"body"});const b=()=>{c.start()},V=()=>{c.done()},w=[{path:"/",name:"index",component:()=>s(()=>import("../js/pages/index.04f50692.js"),["js/pages/index.04f50692.js","assets/index.3827642e.css","js/header/header.7bd86d91.js","assets/header.2f0e34f3.css","js/vue-router/vue-router.eb4438d1.js","js/@vue/@vue.91badbb5.js","js/store/store.bab920c0.js","js/pinia/pinia.77f0a8dc.js","js/vue-demi/vue-demi.4f3c4c97.js","js/auth/auth.28781c65.js","js/js-cookie/js-cookie.0390a690.js","js/footer/footer.f0aa478b.js","assets/footer.42055b61.css","js/@element-plus/@element-plus.8ca26a4d.js","js/order/order.022cbeb2.js","js/Http/Http.fcd9958f.js","js/axios/axios.3ae77db0.js","js/nprogress/nprogress.6998436e.js","assets/nprogress.18a10d8a.css","js/@intlify/@intlify.223376e2.js","js/element-plus/element-plus.7433ebda.js","assets/element-plus.c8d68501.css","js/lodash-es/lodash-es.d3b5e6f4.js","js/@vueuse/@vueuse.2a62804a.js","js/@popperjs/@popperjs.f1fb8f77.js","js/@ctrl/@ctrl.9c8f424f.js","js/dayjs/dayjs.074df034.js","js/async-validator/async-validator.21881447.js","js/memoize-one/memoize-one.f0fba034.js","js/escape-html/escape-html.d572c0fd.js","js/normalize-wheel-es/normalize-wheel-es.94de1731.js","js/@floating-ui/@floating-ui.ded716ca.js","js/pub/pub.3ade5c30.js","js/vue-i18n/vue-i18n.be0cd90f.js","js/vue/vue.c5048f59.js","js/echarts/echarts.00da4ec3.js","js/tslib/tslib.e35f93b8.js","js/zrender/zrender.643dc830.js","js/vue-json-viewer/vue-json-viewer.da850f6b.js","js/clipboard/clipboard.e72d304d.js","js/pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js"])},{path:"/tips",name:"tips",component:()=>s(()=>import("../js/pages/tips.e7540658.js"),["js/pages/tips.e7540658.js","assets/tips.ea249276.css","js/header/header.7bd86d91.js","assets/header.2f0e34f3.css","js/vue-router/vue-router.eb4438d1.js","js/@vue/@vue.91badbb5.js","js/store/store.bab920c0.js","js/pinia/pinia.77f0a8dc.js","js/vue-demi/vue-demi.4f3c4c97.js","js/auth/auth.28781c65.js","js/js-cookie/js-cookie.0390a690.js","js/footer/footer.f0aa478b.js","assets/footer.42055b61.css","js/@element-plus/@element-plus.8ca26a4d.js","js/nprogress/nprogress.6998436e.js","assets/nprogress.18a10d8a.css","js/@intlify/@intlify.223376e2.js","js/element-plus/element-plus.7433ebda.js","assets/element-plus.c8d68501.css","js/lodash-es/lodash-es.d3b5e6f4.js","js/@vueuse/@vueuse.2a62804a.js","js/@popperjs/@popperjs.f1fb8f77.js","js/@ctrl/@ctrl.9c8f424f.js","js/dayjs/dayjs.074df034.js","js/async-validator/async-validator.21881447.js","js/memoize-one/memoize-one.f0fba034.js","js/escape-html/escape-html.d572c0fd.js","js/normalize-wheel-es/normalize-wheel-es.94de1731.js","js/@floating-ui/@floating-ui.ded716ca.js","js/vue-i18n/vue-i18n.be0cd90f.js","js/vue/vue.c5048f59.js","js/echarts/echarts.00da4ec3.js","js/tslib/tslib.e35f93b8.js","js/zrender/zrender.643dc830.js","js/vue-json-viewer/vue-json-viewer.da850f6b.js","js/clipboard/clipboard.e72d304d.js","js/pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js"])},{path:"/Login",name:"Login",component:()=>s(()=>import("../js/Login/Login.bff773c7.js"),["js/Login/Login.bff773c7.js","assets/Login.779a1bd7.css","js/@vue/@vue.91badbb5.js","js/vue-router/vue-router.eb4438d1.js","js/account/account.5490aaf7.js","js/Http/Http.fcd9958f.js","js/axios/axios.3ae77db0.js","js/nprogress/nprogress.6998436e.js","assets/nprogress.18a10d8a.css","js/@intlify/@intlify.223376e2.js","js/auth/auth.28781c65.js","js/js-cookie/js-cookie.0390a690.js","js/element-plus/element-plus.7433ebda.js","assets/element-plus.c8d68501.css","js/lodash-es/lodash-es.d3b5e6f4.js","js/@vueuse/@vueuse.2a62804a.js","js/@element-plus/@element-plus.8ca26a4d.js","js/@popperjs/@popperjs.f1fb8f77.js","js/@ctrl/@ctrl.9c8f424f.js","js/dayjs/dayjs.074df034.js","js/async-validator/async-validator.21881447.js","js/memoize-one/memoize-one.f0fba034.js","js/escape-html/escape-html.d572c0fd.js","js/normalize-wheel-es/normalize-wheel-es.94de1731.js","js/@floating-ui/@floating-ui.ded716ca.js","js/pinia/pinia.77f0a8dc.js","js/vue-demi/vue-demi.4f3c4c97.js","js/vue-i18n/vue-i18n.be0cd90f.js","js/vue/vue.c5048f59.js","js/echarts/echarts.00da4ec3.js","js/tslib/tslib.e35f93b8.js","js/zrender/zrender.643dc830.js","js/vue-json-viewer/vue-json-viewer.da850f6b.js","js/clipboard/clipboard.e72d304d.js","js/pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js"])},{path:"/main",name:"Main",component:()=>s(()=>import("../js/Main/Main.c1038611.js"),["js/Main/Main.c1038611.js","js/Http/Http.fcd9958f.js","js/axios/axios.3ae77db0.js","js/nprogress/nprogress.6998436e.js","assets/nprogress.18a10d8a.css","js/@intlify/@intlify.223376e2.js","js/auth/auth.28781c65.js","js/js-cookie/js-cookie.0390a690.js","js/element-plus/element-plus.7433ebda.js","assets/element-plus.c8d68501.css","js/@vue/@vue.91badbb5.js","js/lodash-es/lodash-es.d3b5e6f4.js","js/@vueuse/@vueuse.2a62804a.js","js/@element-plus/@element-plus.8ca26a4d.js","js/@popperjs/@popperjs.f1fb8f77.js","js/@ctrl/@ctrl.9c8f424f.js","js/dayjs/dayjs.074df034.js","js/async-validator/async-validator.21881447.js","js/memoize-one/memoize-one.f0fba034.js","js/escape-html/escape-html.d572c0fd.js","js/normalize-wheel-es/normalize-wheel-es.94de1731.js","js/@floating-ui/@floating-ui.ded716ca.js","js/store/store.bab920c0.js","js/pinia/pinia.77f0a8dc.js","js/vue-demi/vue-demi.4f3c4c97.js"])},{path:"/tax",name:"tax",component:()=>s(()=>import("../js/tax/index.84854359.js"),["js/tax/index.84854359.js","assets/index.edceb7c1.css","js/@vue/@vue.91badbb5.js","js/pub/pub.3ade5c30.js","js/Http/Http.fcd9958f.js","js/axios/axios.3ae77db0.js","js/nprogress/nprogress.6998436e.js","assets/nprogress.18a10d8a.css","js/@intlify/@intlify.223376e2.js","js/auth/auth.28781c65.js","js/js-cookie/js-cookie.0390a690.js","js/element-plus/element-plus.7433ebda.js","assets/element-plus.c8d68501.css","js/lodash-es/lodash-es.d3b5e6f4.js","js/@vueuse/@vueuse.2a62804a.js","js/@element-plus/@element-plus.8ca26a4d.js","js/@popperjs/@popperjs.f1fb8f77.js","js/@ctrl/@ctrl.9c8f424f.js","js/dayjs/dayjs.074df034.js","js/async-validator/async-validator.21881447.js","js/memoize-one/memoize-one.f0fba034.js","js/escape-html/escape-html.d572c0fd.js","js/normalize-wheel-es/normalize-wheel-es.94de1731.js","js/@floating-ui/@floating-ui.ded716ca.js","js/order/order.022cbeb2.js","js/account/account.5490aaf7.js","js/pinia/pinia.77f0a8dc.js","js/vue-demi/vue-demi.4f3c4c97.js","js/vue-router/vue-router.eb4438d1.js","js/vue-i18n/vue-i18n.be0cd90f.js","js/vue/vue.c5048f59.js","js/echarts/echarts.00da4ec3.js","js/tslib/tslib.e35f93b8.js","js/zrender/zrender.643dc830.js","js/vue-json-viewer/vue-json-viewer.da850f6b.js","js/clipboard/clipboard.e72d304d.js","js/pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js"])},{path:"/ucenter",name:"ucenter",component:()=>s(()=>import("../js/ucenter/index.bb9bba66.js"),["js/ucenter/index.bb9bba66.js","assets/index.9859c8b9.css","js/@vue/@vue.91badbb5.js","js/header/header.7bd86d91.js","assets/header.2f0e34f3.css","js/vue-router/vue-router.eb4438d1.js","js/store/store.bab920c0.js","js/pinia/pinia.77f0a8dc.js","js/vue-demi/vue-demi.4f3c4c97.js","js/auth/auth.28781c65.js","js/js-cookie/js-cookie.0390a690.js","js/account/account.5490aaf7.js","js/Http/Http.fcd9958f.js","js/axios/axios.3ae77db0.js","js/nprogress/nprogress.6998436e.js","assets/nprogress.18a10d8a.css","js/@intlify/@intlify.223376e2.js","js/element-plus/element-plus.7433ebda.js","assets/element-plus.c8d68501.css","js/lodash-es/lodash-es.d3b5e6f4.js","js/@vueuse/@vueuse.2a62804a.js","js/@element-plus/@element-plus.8ca26a4d.js","js/@popperjs/@popperjs.f1fb8f77.js","js/@ctrl/@ctrl.9c8f424f.js","js/dayjs/dayjs.074df034.js","js/async-validator/async-validator.21881447.js","js/memoize-one/memoize-one.f0fba034.js","js/escape-html/escape-html.d572c0fd.js","js/normalize-wheel-es/normalize-wheel-es.94de1731.js","js/@floating-ui/@floating-ui.ded716ca.js","js/order/order.022cbeb2.js","js/vue-i18n/vue-i18n.be0cd90f.js","js/vue/vue.c5048f59.js","js/echarts/echarts.00da4ec3.js","js/tslib/tslib.e35f93b8.js","js/zrender/zrender.643dc830.js","js/vue-json-viewer/vue-json-viewer.da850f6b.js","js/clipboard/clipboard.e72d304d.js","js/pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js"])},{path:"/order",name:"order",component:()=>s(()=>import("../js/pages/order.87c346a2.js"),["js/pages/order.87c346a2.js","assets/order.87ccea24.css","js/header/header.7bd86d91.js","assets/header.2f0e34f3.css","js/vue-router/vue-router.eb4438d1.js","js/@vue/@vue.91badbb5.js","js/store/store.bab920c0.js","js/pinia/pinia.77f0a8dc.js","js/vue-demi/vue-demi.4f3c4c97.js","js/auth/auth.28781c65.js","js/js-cookie/js-cookie.0390a690.js","js/footer/footer.f0aa478b.js","assets/footer.42055b61.css","js/@element-plus/@element-plus.8ca26a4d.js","js/order/order.022cbeb2.js","js/Http/Http.fcd9958f.js","js/axios/axios.3ae77db0.js","js/nprogress/nprogress.6998436e.js","assets/nprogress.18a10d8a.css","js/@intlify/@intlify.223376e2.js","js/element-plus/element-plus.7433ebda.js","assets/element-plus.c8d68501.css","js/lodash-es/lodash-es.d3b5e6f4.js","js/@vueuse/@vueuse.2a62804a.js","js/@popperjs/@popperjs.f1fb8f77.js","js/@ctrl/@ctrl.9c8f424f.js","js/dayjs/dayjs.074df034.js","js/async-validator/async-validator.21881447.js","js/memoize-one/memoize-one.f0fba034.js","js/escape-html/escape-html.d572c0fd.js","js/normalize-wheel-es/normalize-wheel-es.94de1731.js","js/@floating-ui/@floating-ui.ded716ca.js","js/vue-i18n/vue-i18n.be0cd90f.js","js/vue/vue.c5048f59.js","js/echarts/echarts.00da4ec3.js","js/tslib/tslib.e35f93b8.js","js/zrender/zrender.643dc830.js","js/vue-json-viewer/vue-json-viewer.da850f6b.js","js/clipboard/clipboard.e72d304d.js","js/pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js"])}],l=T({history:F(),routes:w});l.beforeEach((a,t)=>{b()});l.afterEach(()=>{V()});var I={lang:{Login:"\u767B\u5F55",userName:"\u7528\u6237\u540D",password:"\u5BC6\u7801",Home:"\u9996\u9875",Blockchain:"\u533A\u5757\u94FE",Nodes:"\u8282\u70B9",Block:"\u533A\u5757",BlockDetail:"\u533A\u5757\u8BE6\u60C5",Transaction:"\u4EA4\u6613",Transfer:"\u8F6C\u8D26",Account:"\u8D26\u6237",Contract:"\u5408\u7EA6",Overview:"\u6982\u89C8",Deployment:"\u90E8\u7F72",Verify:"\u9A8C\u8BC1",Token:"\u901A\u8BC1",Data:"\u6570\u636E",More:"\u66F4\u591A",DevelopmentResources:"\u5F00\u53D1\u8D44\u6E90",Tools:"\u5DE5\u5177",Help:"\u5E2E\u52A9",FAQ:"\u5E38\u89C1\u95EE\u9898",Network:"\u7F51\u7EDC",PrimaryNetwork:"\u4E3B\u7F51",TestNetwork:"\u6D4B\u8BD5\u7F51",Blocks:"\u533A\u5757\u5C55\u793A",TransactionDisplay:"\u4EA4\u6613\u5C55\u793A",TransactionDetail:"\u4EA4\u6613\u8BE6\u60C5",Survey:"\u6982\u51B5",Mode:"\u6A21\u5F0F",ComingSoon:"\u529F\u80FD\u5F00\u53D1\u4E2D,\u656C\u8BF7\u671F\u5F85",Language:"\u8BED\u8A00",Developer:"\u5F00\u53D1\u4E2D\u5FC3",AboutUs:"\u5173\u4E8E\u6211\u4EEC",TotalBlocks:"\u603B\u533A\u5757\u6570",TotalAccounts:"\u603B\u8D26\u6237\u6570",TotalTxns:"\u603B\u4EA4\u6613\u6570",TotalTransfers:"\u603B\u8F6C\u8D26\u6570",Height:"\u9AD8\u5EA6",BlokHash:"\u533A\u5757\u54C8\u5E0C",Txns:"\u4EA4\u6613\u6570",GasUsed:"Gas\u6D88\u8017\u91CF",IsSuccess:"\u662F\u5426\u6210\u529F",Index:"\u7D22\u5F15\u53F7",TxnType:"\u4EA4\u6613\u7C7B\u578B",TheNewest:"\u6700\u65B0",NodeName:"\u540D\u79F0",VotingPower:"\u6295\u7968\u6743\u91CD",ConsensusPubKey:"\u5171\u8BC6\u516C\u94A5",Address:"\u5730\u5740",NodeAddress:"\u8282\u70B9\u5730\u5740",NetworkAddress:"\u7F51\u7EDC\u5730\u5740",CreateAt:"\u521B\u5EFA\u65F6\u95F4",Creator:"\u521B\u5EFA\u8005",Hash:"\u54C8\u5E0C",Total:"\u7D2F\u8BA1\u6570",DailyTxnDistribution:"\u6BCF\u65E5\u4EA4\u6613\u5206\u5E03",GlobalIndex:"\u5168\u5C40\u7D22\u5F15\u53F7",TxnHash:"\u4EA4\u6613\u54C8\u5E0C",CoinID:"\u901A\u8BC1\u6807\u8BC6",Amount:"\u6570\u91CF",Sender:"\u53D1\u9001\u8005",Receiver:"\u63A5\u6536\u8005",Accounts:"\u8D26\u6237\u6570",Holders:"\u6301\u5E01\u6570\u91CF",TopHolders:"\u6301\u6709\u8005\u6392\u540D",Proportion:"\u6BD4\u4F8B",SequenceNumber:"\u5E8F\u5217\u53F7",BlockAccumulatorRoot:"\u7D2F\u52A0\u5668\u6839\u54C8\u5E0C",BlockHash:"\u5757\u54C8\u5E0C",BodyHash:"\u5757\u4F53\u54C8\u5E0C",StateRoot:"\u72B6\u6001\u6839\u54C8\u5E0C",TxnAccumulatorRoot:"\u4EA4\u6613\u7D2F\u52A0\u5668\u6839\u54C8\u5E0C",ChainID:"\u94FE\u6807\u8BC6",Difficulty:"\u96BE\u5EA6",Extra:"\u6269\u5C55\u4FE1\u606F",FirstVersion:"\u9996\u7248\u672C",LastVersion:"\u6700\u65B0\u7248\u672C",ParentHash:"\u7236\u5757\u54C8\u5E0C",AccumulatorRootHash:"\u7D2F\u52A0\u5668\u6839\u54C8\u5E0C",EventRootHash:"\u4E8B\u4EF6\u6839\u54C8\u5E0C",StateRootHash:"\u72B6\u6001\u6839\u54C8\u5E0C",Payload:"\u8D1F\u8F7D",VMState:"\u865A\u62DF\u673A\u72B6\u6001",ChangeType:"\u53D8\u5316\u7C7B\u578B",StateKeyHash:"\u72B6\u6001\u6807\u8BB0\u54C8\u5E0C",ChangeData:"\u53D8\u5316\u6570\u636E",CreationNumber:"\u521B\u5EFA\u8005\u5E8F\u53F7",EventSequenceNumber:"\u4E8B\u4EF6\u5E8F\u53F7",EventData:"\u4E8B\u4EF6\u6570\u636E",AccountDetail:"\u8D26\u6237\u8BE6\u60C5",TotalAssets:"\u603B\u8D44\u4EA7",AuthenticationKey:"\u8BA4\u8BC1\u5BC6\u94A5",HoldAmount:"\u6301\u5E01\u6570\u91CF",Supply:"\u4F9B\u5E94\u91CF",ChainTime:"\u94FE\u4E0A\u65F6\u95F4",SignType:"\u7B7E\u540D\u7C7B\u578B",Signature:"\u7B7E\u540D",Key:"\u952E",Value:"\u503C",Coin:"\u901A\u8BC1",PassHolder:"\u901A\u8BC1\u6301\u6709\u8005",TotalCoins:"\u901A\u8BC1\u603B\u6570",HolderAmount:"\u6301\u5E01\u5730\u5740\u6570",MaxSupply:"\u6700\u5927\u53D1\u884C\u91CF",CirculatingSupply:"\u6D41\u901A\u91CF",MarketCap:"\u603B\u5E02\u503C",Basicinfo:"\u57FA\u7840\u4FE1\u606F",TransferList:"\u901A\u8BC1\u8F6C\u8D26",TransactionList:"\u4EA4\u6613\u8BB0\u5F55",ResourceList:"\u8D44\u6E90\u5217\u8868",ResourceChanges:"\u8D44\u6E90\u53D8\u5316",Event:"\u4E8B\u4EF6",Search:"\u641C\u7D22",Yes:"\u662F",No:"\u5426",Day:"\u5929",H:"\u65F6",M:"\u5206",S:"\u79D2",Ago:"\u524D",All:"\u5168\u90E8",VerificationPassed:"\u9A8C\u8BC1\u901A\u8FC7",SearchPlaceholder:"\u8D26\u6237\u5730\u5740/\u4EA4\u6613\u54C8\u5E0C\u6216\u7248\u672C/\u533A\u5757\u9AD8\u5EA6",LatestList:"\u4E0B\u9762\u5217\u8868\uFF0C\u6700\u65B0\u768410000\u6761\uFF0C\u6BCF\u987520\u6761",Tips:"\u6CE8\u610F\uFF1A\u6B63\u5728\u91CD\u65B0\u7D22\u5F15\uFF0C\u5757\u6570\u636E\u53EF\u80FD\u4E0D\u662F\u6700\u65B0\u7684...",Collection:"\u96C6\u5408\u540D",Inventory:"\u5E93\u5B58",Audited:"\u662F\u5426\u5BA1\u8BA1",Version:"\u7248\u672C"}},M={lang:{Login:"login",userName:"userName",password:"password",Home:"Home",Blockchain:"Blockchain",Nodes:"Nodes",Block:"Block",BlockDetail:"BlockDetail",Transaction:"Transaction",Transfer:"Transfer",Account:"Account",Contract:"Contract",Overview:"Overview",Deployment:"Deployment",Verify:"Verify",Token:"Token",Data:"Data",More:"More",DevelopmentResources:"Development Resources",Tools:"Tools",Help:"Help",FAQ:"FAQ",Network:"Network",PrimaryNetwork:"Primary network",TestNetwork:"Test Network",Blocks:"Blocks",TransactionDisplay:"Transactions",TransactionDetail:"TransactionDetail",Survey:"Survey",Mode:"Mode",ComingSoon:"coming soon",Language:"Language",Developer:"Developer",AboutUs:"About Us",TotalBlocks:"Total Blocks",TotalAccounts:"Total Accounts",TotalTxns:"Total Txns",TotalTransfers:"Total Transfers",Height:"Height",BlokHash:"Blok Hash",Txns:"Txns",GasUsed:"Gas Used",IsSuccess:"Is Success",Index:"Index",TxnType:"Txn Type",TheNewest:"The Newest",NodeName:"Node Name",VotingPower:"Voting Power",ConsensusPubKey:"Consensus Pub Key",Address:"Address",NodeAddress:"Node Address",NetworkAddress:"Network Address",CreateAt:"Create At",Creator:"Creator",Hash:"Hash",Total:"Total",DailyTxnDistribution:"Daily Txn Distribution",GlobalIndex:"Global Index",TxnHash:"Txn Hash",CoinID:"Coin ID",Amount:"Amount",Sender:"Sender",Receiver:"Receiver",Accounts:"Accounts",Holders:"Holders",TopHolders:"TopHolders",Proportion:"Proportion",SequenceNumber:"Sequence Number",BlockAccumulatorRoot:"Block Accumulator Root",BlockHash:"Block Hash",BodyHash:"Body Hash",StateRoot:"State Root",TxnAccumulatorRoot:"Txn Accumulator Root",ChainID:"Chain ID",Difficulty:"Difficulty",Extra:"Extra",FirstVersion:"First Version",LastVersion:"Last Version",ParentHash:"Parent Hash",AccumulatorRootHash:"Accumulator Root Hash",EventRootHash:"Event Root Hash",StateRootHash:"State Root Hash",Payload:"Payload",VMState:"VM State",ChangeType:"Change Type",StateKeyHash:"State Key Hash",ChangeData:"Change Data",CreationNumber:"Creation Number",EventSequenceNumber:"Event Sequence Number",EventData:"Event Data",AccountDetail:"Account Detail",TotalAssets:"Total Assets",AuthenticationKey:"Authentication Key",HoldAmount:"Hold Amount",Supply:"Supply",ChainTime:"Chain Time",SignType:"Sign Type",Signature:"Signature",Key:"Key",Value:"Value",Coin:"Coin",PassHolder:"Pass holder",TotalCoins:"Total Coins",HolderAmount:"Holder Amount",MaxSupply:"Max Supply",CirculatingSupply:"Circulating Supply",MarketCap:"Market Cap",Basicinfo:"Basic info",TransferList:"Transfer List",TransactionList:"Transaction List",ResourceList:"Resource List",ResourceChanges:"Resource changes",Event:"Event",Search:"Search",Yes:"Yes",No:"No",Day:"Day",H:"h",M:"min",S:"s",Ago:"ago",VerificationPassed:"Verification Passed",All:"All",SearchPlaceholder:"Account Address / Txn Hash or Version / Block Height",LatestList:"The latest 10,000 records are shown",Tips:"Note: Re-indexing in progress, block data might not be up to date ...",Collection:"Collection",Inventory:"Inventory",Audited:"Audited",Version:"Version"}};const O={en:M,zh:I},K=(navigator.language||"zh").toLocaleLowerCase(),q=y.createI18n({legacy:!1,globalInjection:!0,locale:localStorage.getItem("lang")||K.split("-")[0]||"zh",fallbackLocale:"zh",messages:O}),m=h();m.use(H);const i=B(x);for(const[a,t]of Object.entries(_))i.component(a,t);i.config.globalProperties.$echarts=g;i.use(l).use(f,{size:"",zIndex:3e3}).use(q).use(v).use(m);i.mount("#app");export{k as _};
