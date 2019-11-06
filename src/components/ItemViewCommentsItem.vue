<template>
  <li class="comment__item">
    <p class="comment__item-meta">
      <router-link
        :to="{ path: `/user/${comment.by}` }"
        v-html="comment.by"
        tag="a"
        class="comment__created-by"
      >
      </router-link>&nbsp;
      <span v-html="timeago.format(comment.time * 1000)" />
    </p>
    <span v-html="comment.text" />
    <ItemViewComments
      v-if="comment.kids"
      :comment-ids="comment.kids"
      :key="comment.id"
    />
  </li>
</template>

<script>
import * as timeago from "timeago.js"
import { mapState } from "vuex"
export default {
  name: "ItemViewCommentsItem",
  components: {
    ItemViewComments: () => import("@/components/ItemViewComments")
  },
  computed: {
    ...mapState("comments", {
      comments: "items"
    })
  },
  data() {
    return {
      timeago
    }
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
  margin-bottom: 20px;
  text-decoration: none;
}

</style>
