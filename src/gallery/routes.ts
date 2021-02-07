export default [
  {
    path: '/',
    name: 'gallery',
    component: () => import('./views/Gallery.vue')
  },
  {
    path: '/gallery/:id',
    name: 'gallery-detail',
    component: () => import('./views/GalleryDetail.vue'),
    props: true
  }
]
