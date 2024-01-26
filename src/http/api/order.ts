import http from '@/http/Http'

export function orderType() {
  return http.get(`/order/types`)
}
export async function orderCreate(data: any) {
  return http.post(`/order/create`, data)
}
export function orderUpdate(data: { orderId: any; data: any }) {
  return http.post(`/order/update/${data.orderId}`, data.data)
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

export function orderUpdateStatus(data: { order_id: any }) {
  return http.get(`/order/update/status/${data.order_id}`)
}
export async function orderCommentCreate(data: any) {
  return http.post(`/order/comment/create/{order_id}`, data)
}

export const uploadSingleFile = (data: { order_status: any; order_id: any; formData: any }) => {
  return http.upload(`/order/upload/${data.order_status}/id/${data.order_id}`, data.formData)
}

export function uploadMultipleFile(data: { order_status: any; order_id: any; formData: any }) {
  return http.upload(`/order/upload_multiple/${data.order_status}/id/${data.order_id}`, data.formData)
}
export function getTemplate(data: { business_type: any; order_status: any }) {
  return http.get(`/order/template/list/${data.business_type}/status/${data.order_status}`)
}

export function updateOrderStatus(order_id: any, data: any) {
  return http.post(`/order/update/status/${order_id}`, data)
}
export function createMsg(data: any) {
  return http.post(`/msg/create/`, data)
}
export function downloadZip(orderId: any, fileNames: any) {
  return http.downloadBlob(`/order/template/download/?orderId=${orderId}${fileNames}`)
  // return http.post(`/order/template/download/`, { orderId, fileNames })
}
