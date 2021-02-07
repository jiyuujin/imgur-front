import {
  getFavoriteImages,
  getImageDetails
} from '@/gallery/services/gallery.service'
import {
  SECTIONS_DEFAULT,
  SORTS_DEFAULT,
  WINDOWS_DEFAULT
} from '@/gallery/constant'

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
    async getFavoriteItems({ commit, state }) {
      const data = await getFavoriteImages()
      commit('setFavoriteImages', data, state.filtersData)
    },
    async getImageDetails({ commit }, imageId: string) {
      const data = await getImageDetails(imageId)
      commit('setImageDetails', data)
    }
  },
  mutations: {
    setFavoriteImages(state, payload) {
      state.favoriteImages = payload
    },
    setImageDetails(state, payload) {
      state.imageDetails = payload
    }
  }
}
