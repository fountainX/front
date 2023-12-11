import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { close, start } from '@/router/nprogress'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue') // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/tips',
    name: 'tips',
    component: () => import('@/pages/tips.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/pages/Login/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/pages/Main/Main.vue')
    // children: [],//子组件
  },
  {
    path: '/tax',
    name: 'tax',
    component: () => import('@/pages/tax/index.vue')
    // children: [],//子组件
  },
  {
    path: '/ucenter',
    name: 'ucenter',
    component: () => import('@/pages/ucenter/index.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/pages/order.vue')
    // children: [],//子组件
  }
]

// createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((pre, next) => {
  start()
})

router.afterEach(() => {
  close()
})
//路由导航守卫
// router.beforeEach((to, from, next) => {
//     let isAuthenticated=false
//     if (to.name !== 'Login' && !isAuthenticated) next({name: 'Login'})
//     else next()
// })
export default router