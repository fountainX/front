import{H as w,F as I,a as C,b as E,g as V}from"../footer/footer.dc19aaff.js";import{u as x}from"../vue-router/vue-router.b56fe090.js";import{s as S}from"../Http/Http.a565cd83.js";import{_ as k}from"../../assets/index.4554a56e.js";import{E as n}from"../element-plus/element-plus.b25bc2c6.js";import{d as L,_ as F,e as i,ai as m,o as T,c as D,V as t,a as r,P as s,F as O,T as A,bl as J,bk as H}from"../@vue/@vue.00172e2c.js";import"../store/store.a2811b4b.js";import"../pinia/pinia.24b66c99.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../vue-i18n/vue-i18n.515529af.js";import"../@intlify/@intlify.6f12553a.js";import"../vue/vue.a7210bec.js";import"../axios/axios.3ae77db0.js";import"../nprogress/nprogress.4e8ed813.js";import"../js-cookie/js-cookie.0390a690.js";import"../@element-plus/@element-plus.0528a07e.js";import"../pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js";import"../lodash-es/lodash-es.dd79b3a5.js";import"../@vueuse/@vueuse.1a5d90c9.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../@ctrl/@ctrl.9c8f424f.js";import"../dayjs/dayjs.79e01697.js";import"../async-validator/async-validator.21881447.js";import"../memoize-one/memoize-one.f0fba034.js";import"../normalize-wheel-es/normalize-wheel-es.94de1731.js";import"../@floating-ui/@floating-ui.84d5b4cf.js";const B=p=>(J("data-v-79ee1e00"),p=p(),H(),p),U={class:"login container"},K={class:"box"},M=B(()=>r("div",{class:"tc"},[r("span",null,"\u7528\u6237\u767B\u5F55")],-1)),P={class:"flex"},R=B(()=>r("a",{href:"#/forget",class:"fr"},"\u5FD8\u8BB0\u5BC6\u7801",-1)),$=L({__name:"Login",setup(p){const u=F({userNameOrEmail:i(),password:i()}),c=x(),d=i(""),_=i("");i("first"),F({userName:"",fullName:"",password:"",agent:"",companyName:"",email:"",mobile:"",wechat:""});const v=()=>(d.value==="admin"&&_.value==="admin"?(n({type:"success",message:"\u767B\u5F55\u6210\u529F"}),g()):d.value===""&&_.value===""?n({type:"error",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801"}):n({type:"error",message:"\u7528\u6237\u540D\u6216\u5BC6\u7801\u8F93\u5165\u9519\u8BEF"}),{userName:d.value,pwd:_.value}),g=async()=>{C(u).then(async o=>{if(console.log("Login",o),o.status==403){n.error("\u7B49\u5F85\u7BA1\u7406\u5458\u6FC0\u6D3B\u767B\u5F55");return}o.code==200&&(S(o.data.accessToken),await h(o.data.uid),n.success("\u767B\u5F55\u6210\u529F"))}).catch(o=>{console.log(o)})},h=async o=>{E({uid:o}).then(e=>{localStorage.setItem("userInfo",JSON.stringify(e.data)),e.data.couponId?V(e.data.couponId).then(l=>{localStorage.setItem("couponInfo",JSON.stringify(l.data)),setTimeout(()=>{c.push("/")},200)}).catch(l=>{setTimeout(()=>{c.push("/")},200)}):(localStorage.setItem("couponInfo",JSON.stringify({coupon_id:"lk100",coupon_name:"\u65E0\u6298\u6263",rate:100,valid:!0})),setTimeout(()=>{c.push("/")},200))}).catch(e=>{console.log(e)})};return(o,e)=>{const l=m("el-input"),f=m("el-form-item"),y=m("el-button"),b=m("el-form"),N=m("el-card");return T(),D(O,null,[t(w),r("div",U,[t(N,{class:"bg"},{default:s(()=>[r("div",K,[M,t(b,{model:u,"label-position":"right","label-width":"100px"},{default:s(()=>[t(f,{label:"\u7528\u6237\u540D\uFF1A"},{default:s(()=>[t(l,{modelValue:u.userNameOrEmail,"onUpdate:modelValue":e[0]||(e[0]=a=>u.userNameOrEmail=a),placeholder:"\u8F93\u5165\u7528\u6237\u540D\u6216\u8005\u90AE\u7BB1",clearable:""},null,8,["modelValue"])]),_:1}),t(f,{label:"\u5BC6\u7801\uFF1A"},{default:s(()=>[t(l,{type:"password",modelValue:u.password,"onUpdate:modelValue":e[1]||(e[1]=a=>u.password=a),placeholder:"\u8F93\u5165\u5BC6\u7801",onKeydown:e[2]||(e[2]=a=>a.code==="Enter"?v():""),clearable:""},null,8,["modelValue"])]),_:1}),t(f,null,{default:s(()=>[r("div",P,[t(y,{type:"primary",onClick:e[3]||(e[3]=a=>g())},{default:s(()=>[A("\u767B\u5F55")]),_:1}),R])]),_:1})]),_:1},8,["model"])])]),_:1})]),t(I)],64)}}});var Fe=k($,[["__scopeId","data-v-79ee1e00"]]);export{Fe as default};
