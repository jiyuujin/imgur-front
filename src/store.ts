import Vue from 'vue'
import Vuex from 'vuex'
import galleryStore from './gallery/modules/gallery.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    galleryStore
  },
  state: {},
  mutations: {},
  actions: {}
})
