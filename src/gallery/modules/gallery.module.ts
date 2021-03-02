import { Commit } from 'vuex'

import {
  getFavoriteImages,
  getImageDetails
} from '@/gallery/services/gallery.service'
import {
  SECTIONS_DEFAULT,
  SORTS_DEFAULT,
  WINDOWS_DEFAULT
} from '@/gallery/constant'

import { FavoriteTypes } from '@/gallery/models/favorite.model'

export interface MyState {
  favoriteImages: Array<FavoriteTypes>
  imageDetails: FavoriteTypes
  filtersData: {
    selectedSection: string | undefined
    selectedSort: string | undefined
    selectedWindow: string | undefined
    showViral: boolean | undefined
  }
}

export default {
  namespaced: true,
  state: {
    favoriteImages: [],
    imageDetails: {},
    filtersData: {
      selectedSection: SECTIONS_DEFAULT,
      selectedSort: SORTS_DEFAULT,
      selectedWindow: WINDOWS_DEFAULT,
      showViral: true
    }
  },
  actions: {
    async getFavoriteItems({ commit }: { commit: Commit }) {
      const data = await getFavoriteImages()
      commit('setFavoriteImages', data)
    },
    async getImageDetails({ commit }: { commit: Commit }, imageId: string) {
      const data = await getImageDetails(imageId)
      commit('setImageDetails', data)
    }
  },
  mutations: {
    setFavoriteImages(state: MyState, payload: Array<FavoriteTypes>) {
      state.favoriteImages = payload
    },
    setImageDetails(state: MyState, payload: FavoriteTypes) {
      state.imageDetails = payload
    }
  }
}
