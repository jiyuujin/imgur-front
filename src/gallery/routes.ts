export default [
  {
    path: '/',
    name: 'gallery',
    component: () => import('./views/Gallery.vue')
  },
  {
    path: '/:id',
    name: 'gallery-detail',
    component: () => import('./views/GalleryDetail.vue'),
    props: true
  }
]
