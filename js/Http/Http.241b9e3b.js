import{a as s}from"../axios/axios.3ae77db0.js";import{N as o}from"../nprogress/nprogress.6998436e.js";import{g as l}from"../auth/auth.28781c65.js";import{E as r}from"../element-plus/element-plus.03cc34a5.js";s.defaults.baseURL="https://api.ayuan.uk";s.defaults.timeout=1e4;s.defaults.headers={"Content-Type":"application/json;charset=UTF-8",Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*"};s.interceptors.request.use(e=>{e.headers={"Access-Control-Allow-Origin":"*"},e.headers["Content-Type"]="application/json;charset=UTF-8";const u=window.sessionStorage.getItem("token");return u&&(e.headers.token=u),e},e=>e);s.interceptors.response.use(e=>{const u=(e.headers||{}).isToken===!1;if(l()&&!u&&(e.headers.Authorization="Bearer "+l()),e.method==="get"&&e.params){let t=e.url+"?";for(const c of Object.keys(e.params)){const p=e.params[c];var a=encodeURIComponent(c)+"=";if(p!==null&&typeof p!="undefined")if(typeof p=="object")for(const d of Object.keys(p)){const i=c+"["+d+"]";var n=encodeURIComponent(i)+"=";t+=n+encodeURIComponent(p[d])+"&"}else t+=a+encodeURIComponent(p)+"&"}t=t.slice(0,-1),e.params={},e.url=t}return e},e=>{if(e&&e.response)switch(e.response.status){case 400:console.log("\u8BF7\u6C42\u9519\u8BEF");break;case 401:r.error("\u672A\u6388\u6743\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");break;case 403:r.error("\u62D2\u7EDD\u8BBF\u95EE");break;case 404:console.log("\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90");break;case 405:r.error("\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8");break;case 408:r.error("\u8BF7\u6C42\u8D85\u65F6");break;case 500:console.log("\u670D\u52A1\u5668\u7AEF\u51FA\u9519");break;case 501:r.error("\u7F51\u7EDC\u672A\u5B9E\u73B0");break;case 502:r.error("\u7F51\u7EDC\u9519\u8BEF");break;case 503:r.error("\u670D\u52A1\u4E0D\u53EF\u7528");break;case 504:r.error("\u7F51\u7EDC\u8D85\u65F6");break;case 505:r.error("http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42");break;default:r.error(`\u8FDE\u63A5\u9519\u8BEF${e.response.status}`)}else console.log("\u8FDE\u63A5\u670D\u52A1\u5668\u5931\u8D25");return Promise.resolve(e.response)});const C={get(e,u){return new Promise((a,n)=>{o.start(),s.get(e,{params:u}).then(t=>{o.done(),a(t.data)}).catch(t=>{o.done(),n(t.data)})})},post(e,u){return new Promise((a,n)=>{o.start(),s.post(e,JSON.stringify(u)).then(t=>{o.done(),a(t.data)}).catch(t=>{o.done(),n(t.data)})})},upload(e,u){return new Promise((a,n)=>{o.start(),s.post(e,u,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{o.done(),a(t.data)}).catch(t=>{o.done(),n(t.data)})})},download(e){const u=document.createElement("iframe");u.style.display="none",u.src=e,u.onload=function(){document.body.removeChild(u)},document.body.appendChild(u)}};export{C as H};