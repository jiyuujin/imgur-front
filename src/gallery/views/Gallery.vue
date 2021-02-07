<template>
  <div>
    <div
      v-infinite-scroll="loadMore"
      class="gallery"
      infinite-scroll-distance="800"
    >
      <router-link
        v-for="galleryImage in displayedFavoriteImages"
        :key="galleryImage.id"
        :to="{
          name: 'img-details',
          params: { id: galleryImage.id, galleryImage }
        }"
        :title="galleryImage.description"
        class="gallery__item"
        tabindex="0"
      >
        <figure>
          <img
            :src="galleryImage.link"
            :alt="galleryImage.description || 'image'"
            class="gallery__item__img"
          />
          <figcaption class="gallery__item__caption">
            {{ favoriteImages.description || 'image' }}
          </figcaption>
        </figure>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Gallery',
  data() {
    return {
      displayedFavoriteImages: []
    }
  },
  computed: {
    ...mapState({
      favoriteImages: (state) => state.galleryStore.favoriteImages
    })
  },
  watch: {
    favoriteImages(favoriteImages) {
      if (favoriteImages.length) {
        this.displayedFavoriteImages = favoriteImages.slice(0, 8)
      }
    }
  },
  created() {
    if (!this.favoriteImages.length) {
      this.$store.dispatch('galleryStore/getFavoriteItems')
    }
  },
  methods: {
    loadMore() {
      const startIndex = this.displayedFavoriteImages.length
      this.displayedFavoriteImages.push(
        ...this.favoriteImages.slice(startIndex, startIndex + 8)
      )
      return this.displayedFavoriteImages
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/gallery.scss';
</style>
