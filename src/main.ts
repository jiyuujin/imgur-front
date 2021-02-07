import Vue from 'vue'
import InfiniteScroll from 'vue-infinite-scroll'
import NProgress from 'nprogress'
import App from './App.vue'

import router from './router'
import store from './store'

import {
  handleGetRequestLoading,
  handleGetResponseLoading
} from './plugins/http'

Vue.config.productionTip = false

Vue.use(InfiniteScroll)

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
handleGetRequestLoading(() => NProgress.start())
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
handleGetResponseLoading(() => NProgress.done())

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
