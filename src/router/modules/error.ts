const ERROR_ROUTES = [
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true,
    meta: { title: '404' }
  }
]

export default ERROR_ROUTES
