<template>
  <li class="comment__item">
    <strong><p v-html="comment.by"></p></strong>
    <span v-html="comment.text" />
    <ItemViewComments
      v-if="comment.kids"
      :comment-ids="comment.kids"
      :key="comment.id"
    />
  </li>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "ItemViewCommentsItem",
  components: {
    ItemViewComments: () => import('@/components/ItemViewComments')
  },
  computed: {
    ...mapState("comments", {
      comments: "items"
    })
  },
  props: {
    comment: {
      type: Object
    }
  },
}
</script>

<style lang="scss"></style>
