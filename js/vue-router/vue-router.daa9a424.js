import{s as st,u as Q,av as ot,n as it,l as z,d as Ve,X as ct,k as T,af as qe,z as le,b as at,e as lt}from"../@vue/@vue.7c5a73b5.js";/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof document!="undefined";function Ge(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ut(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ge(e.default)}const P=Object.assign;function ue(e,t){const n={};for(const r in t){const s=t[r];n[r]=N(s)?s.map(e):e(s)}return n}const F=()=>{},N=Array.isArray,Ke=/#/g,ft=/&/g,ht=/\//g,dt=/=/g,pt=/\?/g,Ue=/\+/g,mt=/%5B/g,gt=/%5D/g,De=/%5E/g,vt=/%60/g,We=/%7B/g,yt=/%7C/g,Qe=/%7D/g,Rt=/%20/g;function ge(e){return encodeURI(""+e).replace(yt,"|").replace(mt,"[").replace(gt,"]")}function Et(e){return ge(e).replace(We,"{").replace(Qe,"}").replace(De,"^")}function de(e){return ge(e).replace(Ue,"%2B").replace(Rt,"+").replace(Ke,"%23").replace(ft,"%26").replace(vt,"`").replace(We,"{").replace(Qe,"}").replace(De,"^")}function wt(e){return de(e).replace(dt,"%3D")}function Pt(e){return ge(e).replace(Ke,"%23").replace(pt,"%3F")}function St(e){return e==null?"":Pt(e).replace(ht,"%2F")}function Y(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const kt=/\/$/,bt=e=>e.replace(kt,"");function fe(e,t,n="/"){let r,s={},a="",d="";const g=t.indexOf("#");let i=t.indexOf("?");return g<i&&g>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,g>-1?g:t.length),s=e(a)),g>-1&&(r=r||t.slice(0,g),d=t.slice(g,t.length)),r=Ot(r!=null?r:t,n),{fullPath:r+(a&&"?")+a+d,path:r,query:s,hash:Y(d)}}function Ct(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ke(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function At(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&G(t.matched[r],n.matched[s])&&Fe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_t(e[n],t[n]))return!1;return!0}function _t(e,t){return N(e)?be(e,t):N(t)?be(t,e):e===t}function be(e,t){return N(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ot(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let a=n.length-1,d,g;for(d=0;d<r.length;d++)if(g=r[d],g!==".")if(g==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(d).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var X;(function(e){e.back="back",e.forward="forward",e.unknown=""})(X||(X={}));function xt(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),bt(e)}const Mt=/^[^#]+#/;function It(e,t){return e.replace(Mt,"#")+t}function Nt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.scrollX,top:window.scrollY});function Tt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Nt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const pe=new Map;function Lt(e,t){pe.set(e,t)}function $t(e){const t=pe.get(e);return pe.delete(e),t}let Ht=()=>location.protocol+"//"+location.host;function Xe(e,t){const{pathname:n,search:r,hash:s}=t,a=e.indexOf("#");if(a>-1){let g=s.includes(e.slice(a))?e.slice(a).length:1,i=s.slice(g);return i[0]!=="/"&&(i="/"+i),ke(i,"")}return ke(n,e)+r+s}function jt(e,t,n,r){let s=[],a=[],d=null;const g=({state:l})=>{const u=Xe(e,location),w=n.value,S=t.value;let C=0;if(l){if(n.value=u,t.value=l,d&&d===w){d=null;return}C=S?l.position-S.position:0}else r(u);s.forEach(A=>{A(n.value,w,{delta:C,type:Z.pop,direction:C?C>0?X.forward:X.back:X.unknown})})};function i(){d=n.value}function f(l){s.push(l);const u=()=>{const w=s.indexOf(l);w>-1&&s.splice(w,1)};return a.push(u),u}function h(){const{history:l}=window;!l.state||l.replaceState(P({},l.state,{scroll:te()}),"")}function c(){for(const l of a)l();a=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:i,listen:f,destroy:c}}function Ae(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?te():null}}function Bt(e){const{history:t,location:n}=window,r={value:Xe(e,n)},s={value:t.state};s.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(i,f,h){const c=e.indexOf("#"),l=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+i:Ht()+e+i;try{t[h?"replaceState":"pushState"](f,"",l),s.value=f}catch(u){console.error(u),n[h?"replace":"assign"](l)}}function d(i,f){const h=P({},t.state,Ae(s.value.back,i,s.value.forward,!0),f,{position:s.value.position});a(i,h,!0),r.value=i}function g(i,f){const h=P({},s.value,t.state,{forward:i,scroll:te()});a(h.current,h,!0);const c=P({},Ae(r.value,i,null),{position:h.position+1},f);a(i,c,!1),r.value=i}return{location:r,state:s,push:g,replace:d}}function zt(e){e=xt(e);const t=Bt(e),n=jt(e,t.state,t.location,t.replace);function r(a,d=!0){d||n.pauseListeners(),history.go(a)}const s=P({location:"",base:e,go:r,createHref:It.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function pn(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),zt(e)}function Vt(e){return typeof e=="string"||e&&typeof e=="object"}function Ye(e){return typeof e=="string"||typeof e=="symbol"}const Ze=Symbol("");var _e;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_e||(_e={}));function K(e,t){return P(new Error,{type:e,[Ze]:!0},t)}function L(e,t){return e instanceof Error&&Ze in e&&(t==null||!!(e.type&t))}const Oe="[^/]+?",qt={sensitive:!1,strict:!1,start:!0,end:!0},Gt=/[.+*?^${}()[\]/\\]/g;function Kt(e,t){const n=P({},qt,t),r=[];let s=n.start?"^":"";const a=[];for(const f of e){const h=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let c=0;c<f.length;c++){const l=f[c];let u=40+(n.sensitive?.25:0);if(l.type===0)c||(s+="/"),s+=l.value.replace(Gt,"\\$&"),u+=40;else if(l.type===1){const{value:w,repeatable:S,optional:C,regexp:A}=l;a.push({name:w,repeatable:S,optional:C});const E=A||Oe;if(E!==Oe){u+=10;try{new RegExp(`(${E})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${w}" (${E}): `+I.message)}}let k=S?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;c||(k=C&&f.length<2?`(?:/${k})`:"/"+k),C&&(k+="?"),s+=k,u+=20,C&&(u+=-8),S&&(u+=-20),E===".*"&&(u+=-50)}h.push(u)}r.push(h)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function g(f){const h=f.match(d),c={};if(!h)return null;for(let l=1;l<h.length;l++){const u=h[l]||"",w=a[l-1];c[w.name]=u&&w.repeatable?u.split("/"):u}return c}function i(f){let h="",c=!1;for(const l of e){(!c||!h.endsWith("/"))&&(h+="/"),c=!1;for(const u of l)if(u.type===0)h+=u.value;else if(u.type===1){const{value:w,repeatable:S,optional:C}=u,A=w in f?f[w]:"";if(N(A)&&!S)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const E=N(A)?A.join("/"):A;if(!E)if(C)l.length<2&&(h.endsWith("/")?h=h.slice(0,-1):c=!0);else throw new Error(`Missing required param "${w}"`);h+=E}}return h||"/"}return{re:d,score:r,keys:a,parse:g,stringify:i}}function Ut(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Je(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const a=Ut(r[n],s[n]);if(a)return a;n++}if(Math.abs(s.length-r.length)===1){if(xe(r))return 1;if(xe(s))return-1}return s.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Dt={type:0,value:""},Wt=/[a-zA-Z0-9_]/;function Qt(e){if(!e)return[[]];if(e==="/")return[[Dt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${f}": ${u}`)}let n=0,r=n;const s=[];let a;function d(){a&&s.push(a),a=[]}let g=0,i,f="",h="";function c(){!f||(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:h,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function l(){f+=i}for(;g<e.length;){if(i=e[g++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&c(),d()):i===":"?(c(),n=1):l();break;case 4:l(),n=r;break;case 1:i==="("?n=2:Wt.test(i)?l():(c(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--);break;case 2:i===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+i:n=3:h+=i;break;case 3:c(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--,h="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),c(),d(),s}function Ft(e,t,n){const r=Kt(Qt(e.path),n),s=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Xt(e,t){const n=[],r=new Map;t=Te({strict:!1,end:!0,sensitive:!1},t);function s(c){return r.get(c)}function a(c,l,u){const w=!u,S=Ie(c);S.aliasOf=u&&u.record;const C=Te(t,c),A=[S];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const B of I)A.push(Ie(P({},S,{components:u?u.record.components:S.components,path:B,aliasOf:u?u.record:S})))}let E,k;for(const I of A){const{path:B}=I;if(l&&B[0]!=="/"){const $=l.record.path,M=$[$.length-1]==="/"?"":"/";I.path=l.record.path+(B&&M+B)}if(E=Ft(I,l,C),u?u.alias.push(E):(k=k||E,k!==E&&k.alias.push(E),w&&c.name&&!Ne(E)&&d(c.name)),et(E)&&i(E),S.children){const $=S.children;for(let M=0;M<$.length;M++)a($[M],E,u&&u.children[M])}u=u||E}return k?()=>{d(k)}:F}function d(c){if(Ye(c)){const l=r.get(c);l&&(r.delete(c),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(c);l>-1&&(n.splice(l,1),c.record.name&&r.delete(c.record.name),c.children.forEach(d),c.alias.forEach(d))}}function g(){return n}function i(c){const l=Jt(c,n);n.splice(l,0,c),c.record.name&&!Ne(c)&&r.set(c.record.name,c)}function f(c,l){let u,w={},S,C;if("name"in c&&c.name){if(u=r.get(c.name),!u)throw K(1,{location:c});C=u.record.name,w=P(Me(l.params,u.keys.filter(k=>!k.optional).concat(u.parent?u.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),c.params&&Me(c.params,u.keys.map(k=>k.name))),S=u.stringify(w)}else if(c.path!=null)S=c.path,u=n.find(k=>k.re.test(S)),u&&(w=u.parse(S),C=u.record.name);else{if(u=l.name?r.get(l.name):n.find(k=>k.re.test(l.path)),!u)throw K(1,{location:c,currentLocation:l});C=u.record.name,w=P({},l.params,c.params),S=u.stringify(w)}const A=[];let E=u;for(;E;)A.unshift(E.record),E=E.parent;return{name:C,path:S,params:w,matched:A,meta:Zt(A)}}e.forEach(c=>a(c));function h(){n.length=0,r.clear()}return{addRoute:a,resolve:f,removeRoute:d,clearRoutes:h,getRoutes:g,getRecordMatcher:s}}function Me(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ie(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Yt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Yt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ne(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Zt(e){return e.reduce((t,n)=>P(t,n.meta),{})}function Te(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Jt(e,t){let n=0,r=t.length;for(;n!==r;){const a=n+r>>1;Je(e,t[a])<0?r=a:n=a+1}const s=en(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function en(e){let t=e;for(;t=t.parent;)if(et(t)&&Je(e,t)===0)return t}function et({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function tn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const a=r[s].replace(Ue," "),d=a.indexOf("="),g=Y(d<0?a:a.slice(0,d)),i=d<0?null:Y(a.slice(d+1));if(g in t){let f=t[g];N(f)||(f=t[g]=[f]),f.push(i)}else t[g]=i}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=wt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(N(r)?r.map(a=>a&&de(a)):[r&&de(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function nn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=N(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const rn=Symbol(""),$e=Symbol(""),ne=Symbol(""),ve=Symbol(""),me=Symbol("");function W(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function j(e,t,n,r,s,a=d=>d()){const d=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((g,i)=>{const f=l=>{l===!1?i(K(4,{from:n,to:t})):l instanceof Error?i(l):Vt(l)?i(K(2,{from:t,to:l})):(d&&r.enterCallbacks[s]===d&&typeof l=="function"&&d.push(l),g())},h=a(()=>e.call(r&&r.instances[s],t,n,f));let c=Promise.resolve(h);e.length<3&&(c=c.then(f)),c.catch(l=>i(l))})}function he(e,t,n,r,s=a=>a()){const a=[];for(const d of e)for(const g in d.components){let i=d.components[g];if(!(t!=="beforeRouteEnter"&&!d.instances[g]))if(Ge(i)){const h=(i.__vccOpts||i)[t];h&&a.push(j(h,n,r,d,g,s))}else{let f=i();a.push(()=>f.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${g}" at "${d.path}"`);const c=ut(h)?h.default:h;d.mods[g]=h,d.components[g]=c;const u=(c.__vccOpts||c)[t];return u&&j(u,n,r,d,g,s)()}))}}return a}function He(e){const t=z(ne),n=z(ve),r=T(()=>{const i=Q(e.to);return t.resolve(i)}),s=T(()=>{const{matched:i}=r.value,{length:f}=i,h=i[f-1],c=n.matched;if(!h||!c.length)return-1;const l=c.findIndex(G.bind(null,h));if(l>-1)return l;const u=je(i[f-2]);return f>1&&je(h)===u&&c[c.length-1].path!==u?c.findIndex(G.bind(null,i[f-2])):l}),a=T(()=>s.value>-1&&ln(n.params,r.value.params)),d=T(()=>s.value>-1&&s.value===n.matched.length-1&&Fe(n.params,r.value.params));function g(i={}){if(an(i)){const f=t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(F);return e.viewTransition&&typeof document!="undefined"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:T(()=>r.value.href),isActive:a,isExactActive:d,navigate:g}}function sn(e){return e.length===1?e[0]:e}const on=Ve({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=ct(He(e)),{options:r}=z(ne),s=T(()=>({[Be(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Be(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&sn(t.default(n));return e.custom?a:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},a)}}}),cn=on;function an(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ln(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!N(s)||s.length!==r.length||r.some((a,d)=>a!==s[d]))return!1}return!0}function je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Be=(e,t,n)=>e!=null?e:t!=null?t:n,un=Ve({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=z(me),s=T(()=>e.route||r.value),a=z($e,0),d=T(()=>{let f=Q(a);const{matched:h}=s.value;let c;for(;(c=h[f])&&!c.components;)f++;return f}),g=T(()=>s.value.matched[d.value]);le($e,T(()=>d.value+1)),le(rn,g),le(me,s);const i=at();return lt(()=>[i.value,g.value,e.name],([f,h,c],[l,u,w])=>{h&&(h.instances[c]=f,u&&u!==h&&f&&f===l&&(h.leaveGuards.size||(h.leaveGuards=u.leaveGuards),h.updateGuards.size||(h.updateGuards=u.updateGuards))),f&&h&&(!u||!G(h,u)||!l)&&(h.enterCallbacks[c]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=s.value,h=e.name,c=g.value,l=c&&c.components[h];if(!l)return ze(n.default,{Component:l,route:f});const u=c.props[h],w=u?u===!0?f.params:typeof u=="function"?u(f):u:null,C=qe(l,P({},w,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(c.instances[h]=null)},ref:i}));return ze(n.default,{Component:C,route:f})||C}}});function ze(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const fn=un;function mn(e){const t=Xt(e.routes,e),n=e.parseQuery||tn,r=e.stringifyQuery||Le,s=e.history,a=W(),d=W(),g=W(),i=st(H);let f=H;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ue.bind(null,o=>""+o),c=ue.bind(null,St),l=ue.bind(null,Y);function u(o,m){let p,v;return Ye(o)?(p=t.getRecordMatcher(o),v=m):v=o,t.addRoute(v,p)}function w(o){const m=t.getRecordMatcher(o);m&&t.removeRoute(m)}function S(){return t.getRoutes().map(o=>o.record)}function C(o){return!!t.getRecordMatcher(o)}function A(o,m){if(m=P({},m||i.value),typeof o=="string"){const y=fe(n,o,m.path),O=t.resolve({path:y.path},m),D=s.createHref(y.fullPath);return P(y,O,{params:l(O.params),hash:Y(y.hash),redirectedFrom:void 0,href:D})}let p;if(o.path!=null)p=P({},o,{path:fe(n,o.path,m.path).path});else{const y=P({},o.params);for(const O in y)y[O]==null&&delete y[O];p=P({},o,{params:c(y)}),m.params=c(m.params)}const v=t.resolve(p,m),b=o.hash||"";v.params=h(l(v.params));const _=Ct(r,P({},o,{hash:Et(b),path:v.path})),R=s.createHref(_);return P({fullPath:_,hash:b,query:r===Le?nn(o.query):o.query||{}},v,{redirectedFrom:void 0,href:R})}function E(o){return typeof o=="string"?fe(n,o,i.value.path):P({},o)}function k(o,m){if(f!==o)return K(8,{from:m,to:o})}function I(o){return M(o)}function B(o){return I(P(E(o),{replace:!0}))}function $(o){const m=o.matched[o.matched.length-1];if(m&&m.redirect){const{redirect:p}=m;let v=typeof p=="function"?p(o):p;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=E(v):{path:v},v.params={}),P({query:o.query,hash:o.hash,params:v.path!=null?{}:o.params},v)}}function M(o,m){const p=f=A(o),v=i.value,b=o.state,_=o.force,R=o.replace===!0,y=$(p);if(y)return M(P(E(y),{state:typeof y=="object"?P({},b,y.state):b,force:_,replace:R}),m||p);const O=p;O.redirectedFrom=m;let D;return!_&&At(r,v,p)&&(D=K(16,{to:O,from:v}),Pe(v,v,!0,!1)),(D?Promise.resolve(D):ye(O,v)).catch(x=>L(x)?L(x,2)?x:ie(x):oe(x,O,v)).then(x=>{if(x){if(L(x,2))return M(P({replace:R},E(x.to),{state:typeof x.to=="object"?P({},b,x.to.state):b,force:_}),m||O)}else x=Ee(O,v,!0,R,b);return Re(O,v,x),x})}function tt(o,m){const p=k(o,m);return p?Promise.reject(p):Promise.resolve()}function re(o){const m=ee.values().next().value;return m&&typeof m.runWithContext=="function"?m.runWithContext(o):o()}function ye(o,m){let p;const[v,b,_]=hn(o,m);p=he(v.reverse(),"beforeRouteLeave",o,m);for(const y of v)y.leaveGuards.forEach(O=>{p.push(j(O,o,m))});const R=tt.bind(null,o,m);return p.push(R),V(p).then(()=>{p=[];for(const y of a.list())p.push(j(y,o,m));return p.push(R),V(p)}).then(()=>{p=he(b,"beforeRouteUpdate",o,m);for(const y of b)y.updateGuards.forEach(O=>{p.push(j(O,o,m))});return p.push(R),V(p)}).then(()=>{p=[];for(const y of _)if(y.beforeEnter)if(N(y.beforeEnter))for(const O of y.beforeEnter)p.push(j(O,o,m));else p.push(j(y.beforeEnter,o,m));return p.push(R),V(p)}).then(()=>(o.matched.forEach(y=>y.enterCallbacks={}),p=he(_,"beforeRouteEnter",o,m,re),p.push(R),V(p))).then(()=>{p=[];for(const y of d.list())p.push(j(y,o,m));return p.push(R),V(p)}).catch(y=>L(y,8)?y:Promise.reject(y))}function Re(o,m,p){g.list().forEach(v=>re(()=>v(o,m,p)))}function Ee(o,m,p,v,b){const _=k(o,m);if(_)return _;const R=m===H,y=q?history.state:{};p&&(v||R?s.replace(o.fullPath,P({scroll:R&&y&&y.scroll},b)):s.push(o.fullPath,b)),i.value=o,Pe(o,m,p,R),ie()}let U;function nt(){U||(U=s.listen((o,m,p)=>{if(!Se.listening)return;const v=A(o),b=$(v);if(b){M(P(b,{replace:!0,force:!0}),v).catch(F);return}f=v;const _=i.value;q&&Lt(Ce(_.fullPath,p.delta),te()),ye(v,_).catch(R=>L(R,12)?R:L(R,2)?(M(P(E(R.to),{force:!0}),v).then(y=>{L(y,20)&&!p.delta&&p.type===Z.pop&&s.go(-1,!1)}).catch(F),Promise.reject()):(p.delta&&s.go(-p.delta,!1),oe(R,v,_))).then(R=>{R=R||Ee(v,_,!1),R&&(p.delta&&!L(R,8)?s.go(-p.delta,!1):p.type===Z.pop&&L(R,20)&&s.go(-1,!1)),Re(v,_,R)}).catch(F)}))}let se=W(),we=W(),J;function oe(o,m,p){ie(o);const v=we.list();return v.length?v.forEach(b=>b(o,m,p)):console.error(o),Promise.reject(o)}function rt(){return J&&i.value!==H?Promise.resolve():new Promise((o,m)=>{se.add([o,m])})}function ie(o){return J||(J=!o,nt(),se.list().forEach(([m,p])=>o?p(o):m()),se.reset()),o}function Pe(o,m,p,v){const{scrollBehavior:b}=e;if(!q||!b)return Promise.resolve();const _=!p&&$t(Ce(o.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return it().then(()=>b(o,m,_)).then(R=>R&&Tt(R)).catch(R=>oe(R,o,m))}const ce=o=>s.go(o);let ae;const ee=new Set,Se={currentRoute:i,listening:!0,addRoute:u,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:S,resolve:A,options:e,push:I,replace:B,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:a.add,beforeResolve:d.add,afterEach:g.add,onError:we.add,isReady:rt,install(o){const m=this;o.component("RouterLink",cn),o.component("RouterView",fn),o.config.globalProperties.$router=m,Object.defineProperty(o.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(i)}),q&&!ae&&i.value===H&&(ae=!0,I(s.location).catch(b=>{}));const p={};for(const b in H)Object.defineProperty(p,b,{get:()=>i.value[b],enumerable:!0});o.provide(ne,m),o.provide(ve,ot(p)),o.provide(me,i);const v=o.unmount;ee.add(o),o.unmount=function(){ee.delete(o),ee.size<1&&(f=H,U&&U(),U=null,i.value=H,ae=!1,J=!1),v()}}};function V(o){return o.reduce((m,p)=>m.then(()=>re(p)),Promise.resolve())}return Se}function hn(e,t){const n=[],r=[],s=[],a=Math.max(t.matched.length,e.matched.length);for(let d=0;d<a;d++){const g=t.matched[d];g&&(e.matched.find(f=>G(f,g))?r.push(g):n.push(g));const i=e.matched[d];i&&(t.matched.find(f=>G(f,i))||s.push(i))}return[n,r,s]}function gn(){return z(ne)}function vn(e){return z(ve)}export{pn as a,vn as b,mn as c,gn as u};
