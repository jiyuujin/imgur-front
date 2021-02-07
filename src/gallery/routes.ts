export default [
  {
    path: '/',
    name: 'gallery',
    component: () => import('./views/Gallery.vue')
  },
  {
    path: '/gallery/:id',
    name: 'img-details',
    component: () => import('./views/GalleryImgDetails.vue'),
    props: true
  }
]
