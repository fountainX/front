import{H as l}from"../header/header.183383cb.js";import{_ as d}from"../footer/footer.8950d5b7.js";import{u as _}from"../store/store.273be8c5.js";import{u as a}from"../vue-router/vue-router.facfef26.js";import{o as g}from"../order/order.d11edb4d.js";import{r as f,a as y,i as h}from"../pub/pub.42b28978.js";import{_ as v}from"../../assets/index.65a1e02d.js";import{d as L,ag as F,o as r,c as s,U as T,a as p,F as c,a7 as x,Z as B,e as m,_ as $,i as C,T as D}from"../@vue/@vue.d7f25643.js";import"../auth/auth.28781c65.js";import"../js-cookie/js-cookie.0390a690.js";import"../@element-plus/@element-plus.72a15bc2.js";import"../pinia/pinia.bde32438.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../Http/Http.59063432.js";import"../axios/axios.3ae77db0.js";import"../nprogress/nprogress.6998436e.js";import"../@intlify/@intlify.223376e2.js";import"../element-plus/element-plus.741c104f.js";import"../lodash-es/lodash-es.d3b5e6f4.js";import"../@vueuse/@vueuse.07c2e845.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../@ctrl/@ctrl.9c8f424f.js";import"../dayjs/dayjs.074df034.js";import"../async-validator/async-validator.21881447.js";import"../memoize-one/memoize-one.f0fba034.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.94de1731.js";import"../@floating-ui/@floating-ui.ded716ca.js";import"../vue-i18n/vue-i18n.e41c5058.js";import"../vue/vue.996f799f.js";import"../echarts/echarts.00da4ec3.js";import"../tslib/tslib.e35f93b8.js";import"../zrender/zrender.643dc830.js";import"../vue-json-viewer/vue-json-viewer.e0635ff8.js";import"../clipboard/clipboard.e72d304d.js";import"../pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js";const k=L({name:"new page",components:{Header:l,Footer:d},setup(){const t=a(),o=B({router:a(),store:_(),msg:m(),typeList:m([]),init:()=>{o.msg="\u529F\u80FD\u5F00\u53D1\u4E2D,\u656C\u8BF7\u671F\u5F85"},getRuleList:()=>{f({page:1,count:20,businessType:"TAX"}).then(e=>{console.log("rule",e)}).catch(e=>{console.log(e)})},getAgentList:()=>{y({page:1,count:20}).then(e=>{console.log("rule",e)}).catch(e=>{console.log(e)})},getInvoiceList:()=>{h({page:1,count:20,agent:"",company:""}).then(e=>{console.log("invoice",e)}).catch(e=>{console.log(e)})},getOrderType:()=>{g().then(e=>{console.log("orderType",e),o.typeList=e.data}).catch(e=>{console.log(e)})},openBusiness:e=>{t.push({path:"/order",query:{type:e}})}}),i=$(o);return C(()=>{o.getOrderType()}),{...i}}}),H={class:"container box"},b={class:"order-type"},R=["onClick"];function A(t,o,i,e,E,I){const u=F("Header");return r(),s(c,null,[T(u),p("div",H,[p("div",b,[(r(!0),s(c,null,x(t.typeList.slice(0,4),(n,N)=>(r(),s("div",{onClick:O=>t.openBusiness(n.code)},D(n.name),9,R))),256))])])],64)}var ve=v(k,[["render",A],["__scopeId","data-v-2e90dbc0"]]);export{ve as default};