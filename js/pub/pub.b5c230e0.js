import{H as e}from"../Http/Http.850ce822.js";function i(){return e.get("/region/list/")}function r(t){return e.get(`/rule/list/page/${t.page}`,t)}function s(t){return e.get(`/agent/list/page/${t.page}`)}function a(t){return e.get(`/agent/show/${t.agent_id}`)}function g(t){return e.get(`/invoice/list/page/${t.page}`)}async function o(t){return e.post("/order/send_email/",t)}export{s as a,i as b,a as c,g as i,r,o as s};
