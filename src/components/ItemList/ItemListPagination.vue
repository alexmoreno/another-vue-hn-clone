<template>
  <div class="navigation">
    <router-link
      :to="{path: previousPageRouter}"
      v-if="!isFirstPage"
      class="previous"
      >Previous</router-link>
    <span v-if="!isFirstPage"> - </span>
    <router-link
      :to="{path: nextPageRouter}"
      class="next"
      >Next</router-link>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api"
export default {
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  setup (props) {

    const nextPageRouter = computed(() => `/home/${props.page + 1}`)
    const previousPageRouter = computed(() => `/home/${props.page - 1}`)
    const isFirstPage = props.page == 1

    return { nextPageRouter, previousPageRouter, isFirstPage }
  }

}
</script>

<style lang="scss">
  .navigation {
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-left: -16px;
    margin-right: -16px;
    a {
      text-decoration: none;
    }
  }

</style>
