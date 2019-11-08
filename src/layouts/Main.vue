<template>
  <div>
    <div class="header">
      <router-link :to="{ path: '/home' }" class="header__news-link">
        Another HN vue clone
      </router-link>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" >
  .header {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
    background-color: #f60;

    a {
      color: white;
      text-decoration: none;
    }
  }
  .content {
    padding-left: 16px;
    padding-right: 16px;
  }

</style>