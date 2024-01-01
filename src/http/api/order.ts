import http from '@/http/Http'

export function orderType() {
  return http.get(`/order/types`)
}
export async function orderCreate(data: any) {
  return http.post(`/order/create`, data)
}
export function orderList(data: any) {
  return http.get(`/order/list/page/${data.page}`, data)
}
export function orderShow(data: { order_id: any }) {
  return http.get(`/order/show/${data.order_id}`)
}
export function orderDelete(data: { order_id: any }) {
  return http.get(`/order/delete/${data.order_id}`)
}
export function orderUpdate(data: { order_id: any }) {
  return http.get(`/order/update/${data.order_id}`)
}
export function orderUpdateStatus(data: { order_id: any }) {
  return http.get(`/order/update/status/${data.order_id}`)
}
export async function orderCommentCreate(data: any) {
  return http.post(`/order/comment/create/{order_id}`, data)
}

export const uploadSingleFile = (data: { order_status: any; order_id: any; formData: any }) => {
  return http.upload(`/order/upload/${data.order_status}/id/${data.order_id}`, data.formData)
}

export function uploadMultipleFile(data: { order_status: any; order_id: any }) {
  return http.post(`/order/upload_multiple/${data.order_status}/id/${data.order_id}`)
}
