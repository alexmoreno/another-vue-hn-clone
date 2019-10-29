<template>
  <Main>
    <div class="item__view">
      <ItemList>
        <ItemListItem :item="item" />
      </ItemList>
      <ItemViewComments
        v-if="comments"
        :comment-ids="
          comments
            .filter(comment => comment.parent == $route.params.id)
            .map(item => item.id)
        "
      />
    </div>
  </Main>
</template>

<script>
import ItemList from "@/components/ItemList"
import ItemListItem from "@/components/ItemListItem"
import ItemListPagination from "@/components/ItemListPagination"
import ItemViewComments from "@/components/ItemViewComments"
import Main from "@/layouts/Main"
import { mapState } from "vuex"
export default {
  components: {
    Main,
    ItemListItem,
    ItemList,
    ItemViewComments
  },
  data() {
    return {
      item: {}
    }
  },
  computed: {
    ...mapState("comments", {
      comments: "items"
    })
  },
  methods: {
    async loadItem() {
      const id = this.$route.params.id
      return await this.$store.dispatch("items/fetchItem", { id })
    },
    async loadComments(item) {
      if (item && item.id) {
        let responseKids = await this.$store.dispatch(
          "comments/fetchComments",
          {
            commentsIds: item.kids
          }
        )
        responseKids.forEach(kid => {
          if (kid) this.loadComments(kid)
        })
      }
    },
    async init() {
      try {
        this.item = await this.loadItem()
        await this.loadComments(this.item)
      } catch (e) {
        console.warn(e)
      }
    }
  },
  mounted() {
    this.init()
  }
}
</script>
