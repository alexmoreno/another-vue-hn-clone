<template>
  <div>
    <ul class="comment__list" v-if="parentComments.length">
      <ItemViewCommentsItem
        v-for="comment in parentComments"
        :key="comment.id"
        class="comment"
        :comment="comment"
      />
    </ul>
    <ul class="comment__list" v-else>
      <Loading />
    </ul>
  </div>
</template>

<script>
import Loading from "@/components/Misc/Loading"
import { mapState } from "vuex"
export default {
  name: "ItemViewComments",
  components: {
    ItemViewCommentsItem: () => import("@/components/ItemView/ItemViewCommentsItem"),
    Loading
  },
  props: {
    commentIds: {
      type: Array
    }
  },
  computed: {
    ...mapState("comments", {
      comments: "items"
    }),
    parentComments() {
      return this.comments.filter(item => this.commentIds.includes(item.id))
    }
  }
}
</script>

<style lang="scss">
.comment {
  margin-top: 10px;
}
.comment__list {
  margin-left: 10px;
  list-style: none;
}
</style>
