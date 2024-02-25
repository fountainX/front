import{a as n}from"../axios/axios.3ae77db0.js";import{N as s}from"../nprogress/nprogress.31f913e7.js";import{a as d}from"../js-cookie/js-cookie.0390a690.js";import{E as a}from"../element-plus/element-plus.1148b3cd.js";const l="token";function c(){return d.get(l)}function k(e){return d.set(l,e)}function f(){return d.remove(l)}n.defaults.baseURL="https://api.ayuan.uk";n.defaults.timeout=1e4;n.defaults.headers={"Content-Type":"application/json;charset=UTF-8",Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*"};const h={"Content-Type":"application/json;charset=UTF-8",Accept:"application/json, text/plain, */*","X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*"};n.interceptors.request.use(e=>(e.headers={...h,...e.headers},c()&&(e.headers.Authorization="Bearer "+c()),e),e=>e);n.interceptors.response.use(e=>{if((e.headers||{}).isToken,e.method==="get"&&e.params){let r=e.url+"?";for(const u of Object.keys(e.params)){const o=e.params[u];var t=encodeURIComponent(u)+"=";if(o!==null&&typeof o!="undefined")if(typeof o=="object")for(const i of Object.keys(o)){const m=u+"["+i+"]";var p=encodeURIComponent(m)+"=";r+=p+encodeURIComponent(o[i])+"&"}else r+=t+encodeURIComponent(o)+"&"}r=r.slice(0,-1),e.params={},e.url=r}return e},e=>{if(e&&e.response)switch(e.response.status){case 400:console.log("\u8BF7\u6C42\u9519\u8BEF");break;case 401:a.error("\u672A\u6388\u6743\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55");break;case 403:a.error("\u62D2\u7EDD\u8BBF\u95EE");break;case 404:console.log("\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90");break;case 405:a.error("\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8");break;case 408:a.error("\u8BF7\u6C42\u8D85\u65F6");break;case 500:console.log("\u670D\u52A1\u5668\u7AEF\u51FA\u9519");break;case 501:a.error("\u7F51\u7EDC\u672A\u5B9E\u73B0");break;case 502:a.error("\u7F51\u7EDC\u9519\u8BEF");break;case 503:a.error("\u670D\u52A1\u4E0D\u53EF\u7528");break;case 504:a.error("\u7F51\u7EDC\u8D85\u65F6");break;case 505:a.error("http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42");break;default:a.error(`\u8FDE\u63A5\u9519\u8BEF${e.response.status}`)}else console.log("\u8FDE\u63A5\u670D\u52A1\u5668\u5931\u8D25");return Promise.resolve(e.response)});const b={get(e,t){return new Promise((p,r)=>{s.start(),n.get(e,{params:t}).then(u=>{s.done(),p(u.data)}).catch(u=>{s.done(),r(u.data)})})},post(e,t,p){return new Promise((r,u)=>{s.start(),n.post(e,JSON.stringify(t),{headers:p}).then(o=>{s.done(),r(o.data)}).catch(o=>{s.done(),u(o.data)})})},upload(e,t){return new Promise((p,r)=>{s.start(),n.post(e,t,{headers:{"Content-Type":"multipart/form-data"}}).then(u=>{s.done(),p(u.data)}).catch(u=>{s.done(),r(u.data)})})},download(e){const t=document.createElement("iframe");t.style.display="none",t.src=e,t.onload=function(){document.body.removeChild(t)},document.body.appendChild(t)},async downloadBlob(e){return fetch(n.defaults.baseURL+e,{method:"post",headers:{Authorization:"Bearer "+c()}})}};export{b as H,f as r,k as s};