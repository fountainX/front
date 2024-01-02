import http from '@/http/Http'

export function accountList(data: any) {
  return http.get(`/account/list/page/${data.page}`)
}

export function account(data: any) {
  return http.get(`/account/show/${data.uid}`)
}

export function accountDelete(data: any) {
  return http.post(`/account/delete/${data.uid}`)
}

export function accountUpdate(uid: any, data: any) {
  return http.post(`/account/update/${uid}`, data)
}

export async function accountLogin(data) {
  return http.post(`/account/login`, data)
}

export async function accountRegister(data) {
  return http.post(`/account/register`, data)
}

export async function accountVerify(data) {
  return http.post(`/account/verify`, data)
}
export async function accountAudit(data) {
  return http.post(`/account/audit`, data)
}
export async function accountBan(data) {
  return http.post(`/account/ban`, data)
}
export async function getAgentList() {
  return http.get(`/agent/list/page/1?count=1000`)
}
