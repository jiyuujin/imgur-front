declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/vue' {
  import Vuex, { Store } from 'vuex'

  interface Vue {
    $store: Vuex.Store<never>
    $state: Store.State
  }
}

declare module 'vue-infinite-scroll'

declare module 'nprogress'
