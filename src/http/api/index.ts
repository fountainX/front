import http from '@/http/Http.ts'

export async function login(data: { userName: string; password: string }) {
  return http.post(`/login`, data)
}
