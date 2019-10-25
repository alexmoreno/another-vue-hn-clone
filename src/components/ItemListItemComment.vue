<template>
  <router-link :to="{ path: `/item/${id}` }">
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