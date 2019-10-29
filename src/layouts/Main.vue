<template>
  <div>
    <div class="header">
      <router-link :to="{ path: '/home' }" class="header__news-link">
        News
      </router-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" >
  .header {
    border-bottom: 1px solid #333;
  }
</style>