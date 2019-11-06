<template>
  <router-link class="item__item-comments" :to="{ path: `/item/${id}` }">
    {{descendants}} comments
  </router-link>
</template>
<script>
  export default {
    props: {
      id: {
        type: Number
      },
      descendants: {
        type: Number
      }
    }
  }
</script>