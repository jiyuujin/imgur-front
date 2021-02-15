<template>
  <div class="image-wrapper">
    <div class="image">
      <h2 class="image__title">{{ imageDetails.description }}</h2>
      <figure>
        <img
          :src="imageDetails.link"
          :alt="imageDetails.description"
          class="image__img"
        />
        <figcaption class="image__caption">
          {{ imageDetails.description }}
        </figcaption>
      </figure>
      <div class="image__details">
        <p class="image__details__description">
          {{ imageDetails.description }}
        </p>
      </div>
      <div class="image__analytics">
        <div class="image__analytics__item">
          upload
          <span>{{ imageDetails.ups }}</span>
        </div>
        <div class="image__analytics__item">
          download
          <span>{{ imageDetails.downs }}</span>
        </div>
        <div class="image__analytics__item">
          star
          <span>{{ imageDetails.score }}</span>
        </div>
        <div class="image__analytics__item">
          viewer
          <span>{{ imageDetails.views }}</span>
        </div>
      </div>
    </div>
    <div class="link">
      <router-link :to="{ name: 'gallery' }" class="link__gallery">
        Back to gallery
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryDetail',
  props: {
    galleryImage: {
      type: Object,
      default: function () {
        return undefined
      }
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    imageDetails() {
      return this.galleryImage || this.$store.state.galleryStore.imageDetails
    }
  },
  created() {
    if (!this.galleryImage) {
      this.$store.dispatch('galleryStore/getImageDetails', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/gallery_detail';
</style>
