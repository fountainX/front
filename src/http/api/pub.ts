import http from '@/http/Http'

export function regionList() {
  return http.get(`/region/list/`)
}

// 规则
export function ruleList(data: { page: any }) {
  return http.get(`/rule/list/page/${data.page}`, data)
}
export function ruleShow(data: { rule_id: any }) {
  return http.get(`/rule/show/${data.rule_id}`)
}
export function ruleDelete(data: { rule_id: any }) {
  return http.get(`/rule/delete/${data.rule_id}`)
}
export function ruleUpdate(data: { rule_id: any }) {
  return http.get(`/rule/update/${data.rule_id}`)
}

// 代理
export function agentList(data: { page: any }) {
  return http.get(`/agent/list/page/${data.page}`)
}
export function agentShow(data: { agent_id: any }) {
  return http.get(`/agent/show/${data.agent_id}`)
}
export function accountCreate(data: any) {
  return http.post(`/agent/create/`, data)
}
export async function accountUpdate(data: { agent_id: any }) {
  return http.post(`/agent/update/${data.agent_id}`, data)
}

// 发票
export function invoiceList(data: { page: any }) {
  return http.get(`/invoice/list/page/${data.page}`)
}
export function invoiceShow(data: { invoice_id: any }) {
  return http.get(`/invoice/show/${data.invoice_id}`)
}
export function invoiceCreate(data) {
  return http.post(`/invoice/create/`, data)
}
export async function invoiceUpdate(data: { invoice_id: any }) {
  return http.post(`/invoice/update/${data.invoice_id}`, data)
}

// 发送邮件
export async function snedEmail(data: any) {
  return http.post(`/order/send_email/`, data)
}
// 个人消息
export function messageList(data: { page: any }) {
  return http.get(`/msg/list/page/${data.page}?is_read=0`)
}
// 标记已读
export function isMsgRead(data: any) {
  return http.post(`/msg/read/${data.msgId}`, data)
}
