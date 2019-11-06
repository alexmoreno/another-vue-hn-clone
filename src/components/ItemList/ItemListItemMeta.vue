<template>
  <div class="item__meta">
    <span>
      {{ item.score }} points by
      <router-link :to="{ path: `/user/${item.by}` }" class="item__meta-user">{{
        item.by
      }}</router-link>
      at
      {{ timeago.format(item.time * 1000) }}
    </span>
    |
    <ItemListItemComment :id="item.id" :descendants="item.descendants" />
  </div>
</template>
<script>
import * as timeago from "timeago.js"
import ItemListItemComment from "@/components/ItemList/ItemListItemComment"
export default {
  components: {
    ItemListItemComment
  },
  data() {
    return {
      timeago
    }
  },
  props: {
    item: {
      type: Object
    }
  }
}
</script>
