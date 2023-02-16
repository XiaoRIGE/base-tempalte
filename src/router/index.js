import { createRouter, createWebHistory } from 'vue-router'

const generateRoute = async () => {
  const routeArr = []
  const files = import.meta.glob('./*.js')

  for (const path in files) {
    const routes = await files[path]()
    routeArr.push(...routes.default)
  }
  return routeArr
}

const routeArr = await generateRoute()

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/dashboard.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue'),
  },

  ...routeArr, // 各个模块的路由

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      layout: 'blank', // 标志是否需要加载左侧布局
    },
  },
  {
    path: '/error-401',
    name: 'error-401',
    component: () => import('@/views/error/401.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-500',
    name: 'error-500',
    component: () => import('@/views/error/500.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: import('@/views/error/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
