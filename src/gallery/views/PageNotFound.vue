<template>
  <div class="page-not-found">
    <router-link :to="{ name: 'gallery' }" class="page-not-found__link">
      Back to home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/page_not_found';
</style>
