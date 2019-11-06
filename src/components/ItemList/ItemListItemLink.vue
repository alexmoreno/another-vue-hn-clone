<template>
  <a :href="url">{{ title }}</a>
</template>
<script>

export default {

  props: {
    url: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>
