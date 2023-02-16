const moduleBRoutes = [
  {
    path: '/module-b',
    name: 'moduleB',
    component: () => import('@/views/moduleB/index.vue'),
  },
  {
    path: '/module-b/detail',
    name: 'moduleBDetail',
    component: () => import('@/views/moduleB/detail.vue'),
  },
]

export default moduleBRoutes
