<template>
  <li v-bind="$attrs" v-on="$listeners" class="item__item" :id="item.id">
    <ItemListItemLink :url="item.url" :title="item.title" /> <br />
    <ItemListItemMeta :item="item"></ItemListItemMeta>
  </li>
</template>

<script>
import ItemListItemLink from "@/components/ItemList/ItemListItemLink"
import ItemListItemMeta from "@/components/ItemList/ItemListItemMeta"
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
  margin-bottom: 16px;

}
</style>
