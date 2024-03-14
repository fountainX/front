import{u as S}from"../vue-router/vue-router.a07eee3d.js";import{u as L}from"../store/store.585c7721.js";import{v as b}from"../vue-i18n/vue-i18n.e0952fe2.js";import{H as s,r as A}from"../Http/Http.ab8e40a3.js";import{_ as w}from"../../assets/index.91ac93dc.js";import{E as R}from"../element-plus/element-plus.1e5d1a07.js";import{d as H,Z as T,e as V,_ as B,i as N,ah as l,o as r,c as E,a as e,U as n,O as c,S as i,T as f,M as p,R as D,a$ as k,bl as O,bk as M}from"../@vue/@vue.20179496.js";function va(a){return s.get(`/account/show/${a.uid}`)}function fa(a,o){return s.post(`/account/update/${a}`,o)}async function ga(a){return s.post("/account/login",a)}function G(a){return s.post("/account/logout",a)}function pa(a){return s.post("/account/forget",a)}function ha(a){return s.post(`/account/reset?code=${a.code}&password=${a.password}`,a)}async function ma(a){return s.post("/account/register",a)}async function _a(){return s.get("/agent/list/page/1?count=1000")}async function wa(a){return s.get(`/agent/coupon/${a}`)}var P="./assets/logo.1e27d2ef.png";const U=H({name:"top",components:{},setup(){const{t:a,locale:o}=b.useI18n(),d=S(),h=()=>{d.push("/")},u=T({store:L(),userInfo:V({uid:"",user_name:""}),changeLang:t=>{o.value=t,localStorage.setItem("lang",t)},init:()=>{let t=JSON.parse(localStorage.getItem("userInfo"));t!==null&&(u.userInfo=t)},login:()=>{d.push("/login")},registry:()=>{d.push("/registry")},logout:()=>{G({}).then(t=>{console.log(t),localStorage.removeItem("userInfo"),A(),localStorage.clear(),R.success("\u9000\u51FA\u6210\u529F"),d.push("/"),setTimeout(()=>{location.reload()},200)}).catch(t=>{console.log(t)})}}),m=B(u);return N(()=>{u.init()}),{...m,goHome:h}}}),$=a=>(O("data-v-2102cc97"),a=a(),M(),a),q={class:"header style2"},z={class:"topbar"},Q={class:"container"},W={class:"row"},j={class:"col-12"},J={class:"top-contact"},K=$(()=>e("li",null,[e("i",{class:"fa fa-phone"}),i("626-632-2608")],-1)),Y=$(()=>e("li",null,[e("i",{class:"fa fa-envelope"}),e("a",{href:"mailto:admin@longviewlk.com"},"admin@longviewlk.com")],-1)),Z={class:"el-dropdown-link"},x=k('<div class="middle-header" data-v-2102cc97><div class="container" data-v-2102cc97><div class="row" data-v-2102cc97><div class="col-lg-3 col-md-3 col-12" data-v-2102cc97><div class="logo" data-v-2102cc97><a href="#/" data-v-2102cc97><img src="'+P+'" style="height:47px;" data-v-2102cc97></a></div><div class="mobile-nav" data-v-2102cc97></div></div><div class="col-lg-9 col-md-9 col-12" data-v-2102cc97><div class="widget-main" data-v-2102cc97><div class="single-widget" data-v-2102cc97><i class="icofont-ui-call" data-v-2102cc97></i><p data-v-2102cc97>\u968F\u65F6\u81F4\u7535\u6211\u4EEC</p><h4 data-v-2102cc97>+626-632-2608</h4></div><div class="single-widget" data-v-2102cc97><i class="icofont-clock-time" data-v-2102cc97></i><p data-v-2102cc97>\u5DE5\u4F5C\u65F6\u95F4</p><h4 data-v-2102cc97>\u5468\u4E00\u81F3\u5468\u4E94: 9am - 5pm</h4></div></div></div></div></div></div><div class="header-inner" data-v-2102cc97><div class="container" data-v-2102cc97><div class="inner" data-v-2102cc97><div class="row" data-v-2102cc97><div class="col-12" data-v-2102cc97><div class="main-menu" data-v-2102cc97><nav class="navigation" data-v-2102cc97><ul class="nav menu" data-v-2102cc97><li class="active" data-v-2102cc97><a href="#" data-v-2102cc97>\u9996\u9875 <i class="icofont-rounded-down" data-v-2102cc97></i></a><ul class="dropdown" data-v-2102cc97><li data-v-2102cc97><a href="#/about" data-v-2102cc97>\u5173\u4E8E\u6211\u4EEC</a></li><li data-v-2102cc97><a href="#/team" data-v-2102cc97>\u56E2\u961F\u4ECB\u7ECD</a></li></ul></li><li data-v-2102cc97><a href="#/faq" data-v-2102cc97>FAQ</a></li><li data-v-2102cc97><a href="#/blog" data-v-2102cc97>\u535A\u5BA2</a></li><li data-v-2102cc97><a href="#/contact" data-v-2102cc97>\u8054\u7CFB\u6211\u4EEC</a></li></ul></nav></div><div class="right-bar" data-v-2102cc97></div></div></div></div></div></div>',2);function X(a,o,d,h,u,m){const t=l("arrow-down"),I=l("el-icon"),_=l("el-dropdown-item"),y=l("el-dropdown-menu"),C=l("el-dropdown"),F=l("router-link"),g=l("el-button");return r(),E("header",q,[e("div",z,[e("div",Q,[e("div",W,[e("div",j,[e("ul",J,[K,Y,e("li",null,[n(C,{style:{margin:"5px"}},{dropdown:c(()=>[n(y,null,{default:c(()=>[n(_,{onClick:o[0]||(o[0]=v=>a.changeLang("en"))},{default:c(()=>[i("English")]),_:1}),n(_,{onClick:o[1]||(o[1]=v=>a.changeLang("zh"))},{default:c(()=>[i("\u4E2D\u6587")]),_:1})]),_:1})]),default:c(()=>[e("span",Z,[i(f(a.$t("lang.language"))+" ",1),n(I,{class:"el-icon--right"},{default:c(()=>[n(t)]),_:1})])]),_:1})]),e("li",null,[n(F,{to:"/ucenter?uid="+a.userInfo.uid},{default:c(()=>[i(f(a.userInfo.user_name),1)]),_:1},8,["to"]),a.userInfo.uid?D("",!0):(r(),p(g,{key:0,onClick:o[2]||(o[2]=v=>a.login())},{default:c(()=>[i(f(a.$t("lang.login")),1)]),_:1})),a.userInfo.uid?(r(),p(g,{key:2,onClick:o[4]||(o[4]=v=>a.logout()),style:{"margin-left":"15px"},link:""},{default:c(()=>[i("\u9000\u51FA")]),_:1})):(r(),p(g,{key:1,onClick:o[3]||(o[3]=v=>a.registry())},{default:c(()=>[i(f(a.$t("lang.register")),1)]),_:1}))])])])])])]),x])}var Ea=w(U,[["render",X],["__scopeId","data-v-2102cc97"]]);const aa={},oa={id:"footer",class:"footer"},ea=k('<div class="footer-top"><div class="container"><div class="row"><div class="col-lg-3 col-md-6 col-12"><div class="single-footer"><h2>\u5173\u4E8E\u6211\u4EEC</h2><p>\u5728\u8FC7\u53BB\u768410\u5E74\u91CC\uFF0C\u6211\u4EEC\u7684\u5BB6\u65CF\u8D26\u6237\u670D\u52A1\u4E00\u76F4\u4E3A\u793E\u533A\u670D\u52A1\u3002\u6211\u4EEC\u7684\u56E2\u961F\u5DF2\u7ECF\u53D1\u5C55\u58EE\u5927\uFF0C\u5305\u62EC\u7ECF\u9A8C\u4E30\u5BCC\u7684\u6CE8\u518C\u4F1A\u8BA1\u5E08\u548C\u4E13\u95E8\u7684\u652F\u6301\uFF0C\u4EE5\u63D0\u4F9B\u4E2A\u4EBA\u548C\u4E13\u4E1A\u7684\u91D1\u878D\u670D\u52A1\u3002</p><ul class="social"><li><a href="#"><i class="icofont-facebook"></i></a></li><li><a href="#"><i class="icofont-google-plus"></i></a></li><li><a href="#"><i class="icofont-twitter"></i></a></li><li><a href="#"><i class="icofont-vimeo"></i></a></li><li><a href="#"><i class="icofont-pinterest"></i></a></li></ul></div></div><div class="col-lg-3 col-md-6 col-12"><div class="single-footer f-link"><h2>\u5FEB\u901F\u94FE\u63A5</h2><div class="row"><div class="col-lg-6 col-md-6 col-12"><ul><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Services</a></li><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li></ul></div><div class="col-lg-6 col-md-6 col-12"><ul><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li><li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li></ul></div></div></div></div><div class="col-lg-3 col-md-6 col-12"><div class="single-footer"><h2>\u5DE5\u4F5C\u65F6\u95F4</h2><ul class="time-sidual"><li class="day">\u661F\u671F\u4E00\u81F3\u661F\u671F\u4E94: 9am - 5pm</li><li class="day">\u661F\u671F\u516D: \u63D0\u524D\u9884\u7EA6</li><li class="day">\u661F\u671F\u65E5: \u4F11\u606F</li></ul></div></div><div class="col-lg-3 col-md-6 col-12"><div class="single-footer"><h2>\u8054\u7CFB\u6211\u4EEC</h2><p>WHATSAPP: +17146166902</p><p>\u5FAE\u4FE1: Meng_qk11</p></div></div></div></div></div><div style="font-size:12px;text-align:center;">COPYRIGHT \xA9 2024 LONGVIEW LK SERVICE LLC - ALL RIGHTS RESERVED.</div>',2),ta=[ea];function ca(a,o){return r(),E("div",oa,ta)}var ka=w(aa,[["render",ca]]);export{ka as F,Ea as H,P as _,ga as a,va as b,pa as c,ha as d,_a as e,ma as f,wa as g,fa as h};
