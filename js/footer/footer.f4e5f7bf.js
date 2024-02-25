import{u as F}from"../vue-router/vue-router.92ac5ece.js";import{u as L}from"../store/store.44973e5d.js";import{v as b}from"../vue-i18n/vue-i18n.494a4fd7.js";import{H as s,r as R}from"../Http/Http.38ce0599.js";import{_ as w}from"../../assets/index.a26c1c68.js";import{d as A,Z as H,e as V,_ as B,i as N,ag as l,o as d,c as k,a as o,U as n,O as i,S as c,T as f,M as p,R as T,a$ as E,bl as D,bk as O}from"../@vue/@vue.04bb91f1.js";function ra(a){return s.get(`/account/show/${a.uid}`)}function ua(a,e){return s.post(`/account/update/${a}`,e)}async function va(a){return s.post("/account/login",a)}function G(a){return s.post("/account/logout",a)}function fa(a){return s.post("/account/forget",a)}function ga(a){return s.post(`/account/reset?code=${a.code}&password=${a.password}`,a)}async function pa(a){return s.post("/account/register",a)}async function ha(){return s.get("/agent/list/page/1?count=1000")}async function ma(a){return s.get(`/agent/coupon/${a}`)}var M="./assets/logo.1e27d2ef.png";const P=A({name:"top",components:{},setup(){const{t:a,locale:e}=b.useI18n(),r=F(),h=()=>{r.push("/")},u=H({store:L(),userInfo:V({uid:"",user_name:""}),changeLang:t=>{e.value=t,localStorage.setItem("lang",t)},init:()=>{let t=JSON.parse(localStorage.getItem("userInfo"));t!==null&&(u.userInfo=t)},login:()=>{r.push("/login")},registry:()=>{r.push("/registry")},logout:()=>{G({}).then(t=>{console.log(t),localStorage.removeItem("userInfo"),R(),localStorage.clear(),location.replace("/")}).catch(t=>{console.log(t)})}}),m=B(u);return N(()=>{u.init()}),{...m,goHome:h}}}),$=a=>(D("data-v-7822ce25"),a=a(),O(),a),U={class:"header style2"},q={class:"topbar"},z={class:"container"},Q={class:"row"},W={class:"col-12"},j={class:"top-contact"},J=$(()=>o("li",null,[o("i",{class:"fa fa-phone"}),c("626-632-2608")],-1)),K=$(()=>o("li",null,[o("i",{class:"fa fa-envelope"}),o("a",{href:"mailto:admin@longviewlk.com"},"admin@longviewlk.com")],-1)),Y={class:"el-dropdown-link"},Z=E('<div class="middle-header" data-v-7822ce25><div class="container" data-v-7822ce25><div class="row" data-v-7822ce25><div class="col-lg-3 col-md-3 col-12" data-v-7822ce25><div class="logo" data-v-7822ce25><a href="/" data-v-7822ce25><img src="'+M+'" style="height:47px;" data-v-7822ce25></a></div><div class="mobile-nav" data-v-7822ce25></div></div><div class="col-lg-9 col-md-9 col-12" data-v-7822ce25><div class="widget-main" data-v-7822ce25><div class="single-widget" data-v-7822ce25><i class="icofont-ui-call" data-v-7822ce25></i><p data-v-7822ce25>\u968F\u65F6\u81F4\u7535\u6211\u4EEC</p><h4 data-v-7822ce25>+626-632-2608</h4></div><div class="single-widget" data-v-7822ce25><i class="icofont-clock-time" data-v-7822ce25></i><p data-v-7822ce25>\u5DE5\u4F5C\u65F6\u95F4</p><h4 data-v-7822ce25>\u5468\u4E00\u81F3\u5468\u4E94: 9am - 5pm</h4></div></div></div></div></div></div><div class="header-inner" data-v-7822ce25><div class="container" data-v-7822ce25><div class="inner" data-v-7822ce25><div class="row" data-v-7822ce25><div class="col-12" data-v-7822ce25><div class="main-menu" data-v-7822ce25><nav class="navigation" data-v-7822ce25><ul class="nav menu" data-v-7822ce25><li class="active" data-v-7822ce25><a href="#" data-v-7822ce25>\u9996\u9875 <i class="icofont-rounded-down" data-v-7822ce25></i></a><ul class="dropdown" data-v-7822ce25><li data-v-7822ce25><a href="#/about" data-v-7822ce25>\u5173\u4E8E\u6211\u4EEC</a></li><li data-v-7822ce25><a href="#/team" data-v-7822ce25>\u56E2\u961F\u4ECB\u7ECD</a></li></ul></li><li data-v-7822ce25><a href="#/faq" data-v-7822ce25>FAQ</a></li><li data-v-7822ce25><a href="#/blog" data-v-7822ce25>\u535A\u5BA2</a></li><li data-v-7822ce25><a href="#/contact" data-v-7822ce25>\u8054\u7CFB\u6211\u4EEC</a></li></ul></nav></div><div class="right-bar" data-v-7822ce25></div></div></div></div></div></div>',2);function x(a,e,r,h,u,m){const t=l("arrow-down"),I=l("el-icon"),_=l("el-dropdown-item"),y=l("el-dropdown-menu"),C=l("el-dropdown"),S=l("router-link"),g=l("el-button");return d(),k("header",U,[o("div",q,[o("div",z,[o("div",Q,[o("div",W,[o("ul",j,[J,K,o("li",null,[n(C,{style:{margin:"5px"}},{dropdown:i(()=>[n(y,null,{default:i(()=>[n(_,{onClick:e[0]||(e[0]=v=>a.changeLang("en"))},{default:i(()=>[c("English")]),_:1}),n(_,{onClick:e[1]||(e[1]=v=>a.changeLang("zh"))},{default:i(()=>[c("\u4E2D\u6587")]),_:1})]),_:1})]),default:i(()=>[o("span",Y,[c(f(a.$t("lang.language"))+" ",1),n(I,{class:"el-icon--right"},{default:i(()=>[n(t)]),_:1})])]),_:1})]),o("li",null,[n(S,{to:"/ucenter?uid="+a.userInfo.uid},{default:i(()=>[c(f(a.userInfo.user_name),1)]),_:1},8,["to"]),a.userInfo.uid?T("",!0):(d(),p(g,{key:0,onClick:e[2]||(e[2]=v=>a.login())},{default:i(()=>[c(f(a.$t("lang.login")),1)]),_:1})),a.userInfo.uid?(d(),p(g,{key:2,onClick:e[4]||(e[4]=v=>a.logout()),style:{"margin-left":"15px"},link:""},{default:i(()=>[c("\u9000\u51FA")]),_:1})):(d(),p(g,{key:1,onClick:e[3]||(e[3]=v=>a.registry())},{default:i(()=>[c(f(a.$t("lang.register")),1)]),_:1}))])])])])])]),Z])}var _a=w(P,[["render",x],["__scopeId","data-v-7822ce25"]]);const X={},aa={id:"footer",class:"footer"},ea=E('<div class="footer-top"><div class="container"><div class="row"><div class="col-lg-3 col-md-6 col-12"><div class="single-footer"><h2>\u5173\u4E8E\u6211\u4EEC</h2><p>\u5728\u8FC7\u53BB\u768410\u5E74\u91CC\uFF0C\u6211\u4EEC\u7684\u5BB6\u65CF\u8D26\u6237\u670D\u52A1\u4E00\u76F4\u4E3A\u793E\u533A\u670D\u52A1\u3002\u6211\u4EEC\u7684\u56E2\u961F\u5DF2\u7ECF\u53D1\u5C55\u58EE\u5927\uFF0C\u5305\u62EC\u7ECF\u9A8C\u4E30\u5BCC\u7684\u6CE8\u518C\u4F1A\u8BA1\u5E08\u548C\u4E13\u95E8\u7684\u652F\u6301\uFF0C\u4EE5\u63D0\u4F9B\u4E2A\u4EBA\u548C\u4E13\u4E1A\u7684\u91D1\u878D\u670D\u52A1\u3002</p><ul class="social"><li><a href="#"><i class="icofont-facebook"></i></a></li><li><a href="#"><i class="icofont-google-plus"></i></a></li><li><a href="#"><i class="icofont-twitter"></i></a></li><li><a href="#"><i class="icofont-vimeo"></i></a></li><li><a href="#"><i class="icofont-pinterest"></i></a></li></ul></div></div><div class="col-lg-3 col-md-6 col-12"><div class="single-footer f-link"><h2>\u5FEB\u901F\u94FE\u63A5</h2><div class="row"><div class="col-lg-6 col-md-6 col-12"><ul><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Services</a></li><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li></ul></div><div class="col-lg-6 col-md-6 col-12"><ul><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li></ul></div></div></div></div><div class="col-lg-3 col-md-6 col-12"><div class="single-footer"><h2>\u5DE5\u4F5C\u65F6\u95F4</h2><ul class="time-sidual"><li class="day">\u661F\u671F\u4E00\u81F3\u661F\u671F\u4E94: 9am - 5pm</li><li class="day">\u661F\u671F\u516D: \u63D0\u524D\u9884\u7EA6</li><li class="day">\u661F\u671F\u65E5: \u4F11\u606F</li></ul></div></div><div class="col-lg-3 col-md-6 col-12"><div class="single-footer"><h2>\u8054\u7CFB\u6211\u4EEC</h2><p>WHATSAPP: +17146166902</p><p>\u5FAE\u4FE1: Meng_qk11</p></div></div></div></div></div><div style="font-size:12px;text-align:center;">COPYRIGHT \xA9 2024 LONGVIEW LK SERVICE LLC - ALL RIGHTS RESERVED.</div>',2),oa=[ea];function ta(a,e){return d(),k("div",aa,oa)}var wa=w(X,[["render",ta]]);export{wa as F,_a as H,M as _,va as a,ra as b,fa as c,ga as d,ha as e,pa as f,ma as g,ua as h};
