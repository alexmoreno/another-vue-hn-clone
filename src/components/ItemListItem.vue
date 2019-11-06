<template>
  <li v-bind="$attrs" v-on="$listeners" class="item__item" :id="item.id">
    <ItemListItemLink :url="item.url" :title="item.title" /> <br />
    <ItemListItemMeta :item="item"></ItemListItemMeta>
  </li>
</template>

<script>
import ItemListItemLink from "@/components/ItemListItemLink"
import ItemListItemMeta from "@/components/ItemListItemMeta"
export default {
  components: {
    ItemListItemLink,
    ItemListItemMeta
  },
  props: {
    item: {
      type: Object
    }
  }
}
</script>
<style lang="scss">
.item__item {
  margin-bottom: 10px;
}
</style>
