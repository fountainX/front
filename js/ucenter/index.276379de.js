import{d as H,e as m,_ as h,j as Z,ai as n,o as Q,c as W,V as u,a as s,P as o,F as j,u as V,T as E,U as y,a3 as G,bl as J,bk as K,i as X}from"../@vue/@vue.5f8b0814.js";import{H as Y,F as ee,b as ue,e as te,h as le}from"../footer/footer.d1de11bb.js";import{u as ae}from"../vue-router/vue-router.f22f5c28.js";import{i as oe}from"../order/order.a9f0024e.js";import{g as re,b as ne}from"../type/type.0d69a785.js";import{_ as se}from"../../assets/index.4e557a1b.js";import{E as ie}from"../element-plus/element-plus.c1fb1f77.js";import"../store/store.b9bb45f0.js";import"../pinia/pinia.55dc9685.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../vue-i18n/vue-i18n.3119c07c.js";import"../@intlify/@intlify.6f12553a.js";import"../vue/vue.6562b2b2.js";import"../Http/Http.f08bb66b.js";import"../axios/axios.3ae77db0.js";import"../nprogress/nprogress.4e8ed813.js";import"../js-cookie/js-cookie.0390a690.js";import"../@element-plus/@element-plus.a41cd0da.js";import"../pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js";import"../lodash-es/lodash-es.dd79b3a5.js";import"../@vueuse/@vueuse.01c4cb4e.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../@ctrl/@ctrl.9c8f424f.js";import"../dayjs/dayjs.79e01697.js";import"../async-validator/async-validator.21881447.js";import"../memoize-one/memoize-one.f0fba034.js";import"../normalize-wheel-es/normalize-wheel-es.94de1731.js";import"../@floating-ui/@floating-ui.daef5853.js";const g=c=>(J("data-v-d15e6b32"),c=c(),K(),c),de=g(()=>s("br",null,null,-1)),pe=g(()=>s("br",null,null,-1)),me={class:"container"},ce={class:"box"},_e={class:"page"},Ee={class:"box tc"},ge=g(()=>s("br",null,null,-1)),be=g(()=>s("br",null,null,-1)),Ae=H({__name:"index",setup(c){const b=ae(),A=m(!0),v=b.currentRoute.value.query.uid,F=m(JSON.parse(localStorage.getItem("userInfo")));(()=>{if(F.value==null){F.value={uid:""},b.push("/login");return}})();const C=[{id:"10",value:"QUOTATION_STARTED",desc:"\u62A5\u4EF7\u5F00\u59CB"},{id:"11",value:"QUOTATION_CONFIRMED",desc:"\u62A5\u4EF7\u786E\u8BA4"},{id:"12",value:"INVOICE_ISSUED",desc:"\u53D1\u7968\u5F00\u5177"},{id:"13",value:"PAID",desc:"\u5DF2\u4ED8\u6B3E"},{id:"14",value:"NO_PAID_CONTINUE",desc:"\u672A\u4ED8\u6B3E\u53EF\u4EE5\u7EE7\u7EED\u6D41\u7A0B"},{id:"15",value:"DOCUMENT_UPLOADED",desc:"\u8D44\u6599\u4E0A\u4F20"},{id:"16",value:"DOCUMENT_REVIEWED",desc:"\u8D44\u6599\u5BA1\u6838"},{id:"17",value:"DOCUMENT_REVIEWED",desc:"\u7B7E\u5B57\u56DE\u4F20"},{id:"18",value:"SIGNATURE_RETURNED_BACK",desc:"\u7B7E\u56DE"},{id:"20",value:"FINISHED",desc:"\u5B8C\u7ED3"},{id:"99",value:"DELETED",desc:"\u5220\u9664"}],I=a=>a?C.find(r=>r.id==a).desc:void 0,D=m("1"),U=(a,e)=>{console.log(a,e),a.uid==13&&f()};let B=m([]);const l=h({userName:"",fullName:"",agent:"",email:"",mobile:"",wechat:""}),x={userName:[{required:!0,message:"\u7528\u6237\u4E0D\u53EF\u4E3A\u7A7A"}],fullName:[{required:!0,message:"\u59D3\u540D\u4E0D\u53EF\u4E3A\u7A7A"}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u53EF\u4E3A\u7A7A"}],email:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u53EF\u4E3A\u7A7A"},{pattern:/^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/,trigger:["blur","change"],message:"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"}],mobile:[{required:!0,message:"\u624B\u673A\u53F7\u4E0D\u53EF\u4E3A\u7A7A"},{pattern:/^[1][3-9][0-9]{9}$/,trigger:["blur","change"],message:"\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7"}],wechat:[{required:!0,message:"\u5FAE\u4FE1\u53F7\u4E0D\u53EF\u4E3A\u7A7A"}]},T=a=>{ue({uid:a}).then(e=>{console.log("userinfo",e),l.userName=e.data.user_name,l.fullName=e.data.full_name,l.agent=e.data.agent,l.email=e.data.email,l.mobile=e.data.mobile,l.wechat=e.data.wechat,l.channel=e.data.channel}).catch(e=>{console.log(e)})},i=h({total:0,current:1,pageSize:10}),f=()=>{A.value=!0;let a={page:i.current,count:i.pageSize,businessType:10,uid:F.value.uid};oe(a).then(e=>{e.code==200&&(B.value=e.data,i.total=e.total,A.value=!1)}).catch(e=>{console.log(e)})},w=(a,e)=>{let r=ne.find(_=>_.id==e);b.push({path:"order",query:{type:r.value,orderId:a}})};T(v),f();const S=()=>{le(v,l).then(a=>{a.code==200&&ie.success("\u66F4\u65B0\u6210\u529F")}).catch(a=>{console.log(a)})},O=X(),q=()=>{O.proxy.$refs.vForm.validate(a=>{!a||S()})},L=async()=>{let a=await te();k.value=a.data,console.log(a)},k=m([]);return Z(()=>{L()}),(a,e)=>{const r=n("el-table-column"),_=n("el-button"),z=n("el-table"),R=n("el-pagination"),N=n("el-tab-pane"),p=n("el-input"),d=n("el-form-item"),M=n("el-form"),P=n("el-tabs"),$=n("el-card");return Q(),W(j,null,[u(Y),de,pe,s("div",me,[u($,null,{default:o(()=>[u(P,{modelValue:D.value,"onUpdate:modelValue":e[10]||(e[10]=t=>D.value=t),class:"demo-tabs",onTabClick:U},{default:o(()=>[u(N,{label:"\u6211\u7684\u8BA2\u5355",name:"1"},{default:o(()=>[s("div",ce,[u(z,{data:V(B),loading:A.value,stripe:"",border:""},{default:o(()=>[u(r,{prop:"order_id",label:"\u8BA2\u5355ID",width:"100"}),u(r,{prop:"business_type",label:"\u8BA2\u5355\u7C7B\u578B",width:"140"},{default:o(t=>[E(y(V(re)(t.row.business_type)),1)]),_:1}),u(r,{prop:"order_no",label:"\u8BA2\u5355\u7F16\u53F7"}),u(r,{prop:"order_status",label:"\u8BA2\u5355\u72B6\u6001"},{default:o(t=>[E(y(I(t.row.order_status)),1)]),_:1}),u(r,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4"}),u(r,{label:"\u64CD\u4F5C",width:"110"},{default:o(({row:t})=>[u(_,{type:"primary",size:"small",onClick:fe=>w(t.order_id,t.business_type),plain:""},{default:o(()=>[E("\u67E5\u770B\u8BA2\u5355")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","loading"]),s("div",_e,[u(R,{background:"",layout:"prev, pager, next","current-page":i.current,"onUpdate:currentPage":e[0]||(e[0]=t=>i.current=t),"page-size":i.pageSize,total:i.total,onCurrentChange:e[1]||(e[1]=()=>{f()})},null,8,["current-page","page-size","total"])])])]),_:1}),u(N,{label:"\u4E2A\u4EBA\u8D44\u6599",name:"2"},{default:o(()=>[s("div",Ee,[u(M,{model:l,ref:"vForm",rules:x,"label-position":"right","label-width":"100px",onSubmit:e[9]||(e[9]=G(()=>{},["prevent"]))},{default:o(()=>[u(d,{label:"\u7528\u6237\u540D\uFF1A",prop:"userName",class:"required label-right-align"},{default:o(()=>[u(p,{modelValue:l.userName,"onUpdate:modelValue":e[2]||(e[2]=t=>l.userName=t),type:"text",clearable:""},null,8,["modelValue"])]),_:1}),u(d,{label:"\u59D3\u540D\uFF1A",prop:"fullName",class:"required label-right-align"},{default:o(()=>[u(p,{modelValue:l.fullName,"onUpdate:modelValue":e[3]||(e[3]=t=>l.fullName=t),type:"text",clearable:""},null,8,["modelValue"])]),_:1}),u(d,{label:"\u6E20\u9053\uFF1A",prop:"channel",class:"label-right-align"},{default:o(()=>[u(p,{modelValue:l.channel,"onUpdate:modelValue":e[4]||(e[4]=t=>l.channel=t),type:"text",clearable:""},null,8,["modelValue"])]),_:1}),u(d,{label:"\u90AE\u7BB1\uFF1A",prop:"email",class:"required label-right-align"},{default:o(()=>[u(p,{modelValue:l.email,"onUpdate:modelValue":e[5]||(e[5]=t=>l.email=t),type:"text",clearable:""},null,8,["modelValue"])]),_:1}),u(d,{label:"\u624B\u673A\u53F7\uFF1A",prop:"mobile",class:"required label-right-align"},{default:o(()=>[u(p,{modelValue:l.mobile,"onUpdate:modelValue":e[6]||(e[6]=t=>l.mobile=t),type:"text",clearable:""},null,8,["modelValue"])]),_:1}),u(d,{label:"\u5FAE\u4FE1\u53F7\uFF1A",prop:"wechat",class:"required label-right-align"},{default:o(()=>[u(p,{modelValue:l.wechat,"onUpdate:modelValue":e[7]||(e[7]=t=>l.wechat=t),type:"text",clearable:""},null,8,["modelValue"])]),_:1}),u(d,null,{default:o(()=>[u(_,{type:"primary",onClick:e[8]||(e[8]=t=>q())},{default:o(()=>[E("\u4FEE\u6539\u7528\u6237\u4FE1\u606F")]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),ge,be,u(ee)],64)}}});var Ge=se(Ae,[["__scopeId","data-v-d15e6b32"]]);export{Ge as default};
