const moduleARoutes = [
  {
    path: '/class-a',
    name: 'classA',
    component: () => import('@/views/moduleA/classA/index.vue'),
  },
  {
    path: '/class-a/detail',
    name: 'classADetail',
    component: () => import('@/views/moduleA/classA/detail.vue'),
  },
  {
    path: '/class-b',
    name: 'classB',
    component: () => import('@/views/moduleA/classB/index.vue'),
  },
  {
    path: '/class-b/detail',
    name: 'classBDetail',
    component: () => import('@/views/moduleA/classB/detail.vue'),
  },
]

export default moduleARoutes
