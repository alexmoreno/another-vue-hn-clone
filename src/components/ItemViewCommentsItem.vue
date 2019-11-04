<template>
  <li class="comment__item">
    <router-link
      :to="{ path: `/user/${comment.by}`}"
      v-html="comment.by"
      tag="a"
      class="comment__created-by"
    >

    </router-link>
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

<style lang="scss">
  .comment__created-by {
    display: block;
    margin-bottom: 20px;
    text-decoration: none;
  }
</style>
