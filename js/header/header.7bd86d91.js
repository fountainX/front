import{u as d}from"../vue-router/vue-router.eb4438d1.js";import{u as c}from"../store/store.bab920c0.js";import{r as f}from"../auth/auth.28781c65.js";import{_ as m}from"../../assets/index.c56ba062.js";import{d as g,Z as I,e as v,_ as S,i as k,ag as s,o as h,M as $,O as t,U as n,S as r,T as x,bl as y,bk as C,a as b}from"../@vue/@vue.91badbb5.js";const w=g({name:"top",components:{},setup(){const e=d(),o=I({store:c(),userInfo:v({uid:"",user_name:""}),init:()=>{o.userInfo=JSON.parse(localStorage.getItem("userInfo")),o.userInfo==null&&(o.userInfo="null")},login:()=>{e.push("/login")},logout:()=>{localStorage.removeItem("userInfo"),f(),e.push("/")}}),a=S(o);return k(()=>{o.init()}),{...a}}}),B=e=>(y("data-v-709e2098"),e=e(),C(),e),N=B(()=>b("h2",null,"logo",-1));function T(e,o,a,V,D,F){const u=s("el-col"),p=s("router-link"),l=s("el-button"),_=s("el-row");return h(),$(_,{style:{margin:"10px 30px"}},{default:t(()=>[n(u,{span:4},{default:t(()=>[N]),_:1}),n(u,{span:20,style:{"text-align":"right"}},{default:t(()=>[n(p,{to:"/ucenter?uid="+e.userInfo.uid},{default:t(()=>[r(x(e.userInfo.user_name),1)]),_:1},8,["to"]),n(l,{onClick:o[0]||(o[0]=i=>e.login())},{default:t(()=>[r("\u767B\u5F55")]),_:1}),n(l,{onClick:o[1]||(o[1]=i=>e.logout())},{default:t(()=>[r("\u9000\u51FA")]),_:1})]),_:1})]),_:1})}var J=m(w,[["render",T],["__scopeId","data-v-709e2098"]]);export{J as H};
