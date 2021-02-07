import Vue from 'vue'
import Vuex, { Module } from 'vuex'

import galleryStore from '@/gallery/modules/gallery.module'

import { FavoriteTypes } from '@/gallery/models/favorite.model'
import { ImageTypes } from '@/gallery/models/image.model'

Vue.use(Vuex)

export interface MyRootState {
  version: string
}

export default new Vuex.Store<MyRootState | Module<FavoriteTypes, ImageTypes>>({
  modules: {
    galleryStore
  },
  state: {
    version: '0.1.0'
  },
  mutations: {},
  actions: {}
})
