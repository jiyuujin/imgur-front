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
.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    display: block;
    margin: auto;
    max-width: 800px;
  }

  &__link {
    font-size: 1.5rem;
    color: #74d2e7;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
