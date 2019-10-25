<template>
  <li
    v-bind="$attrs"
    v-on="$listeners"
    class="item__item"
  >
    <ItemListItemLink :url="item.url" :title="item.title"/> <br>
    <ItemListItemComment :id="item.id" :descendants="item.descendants"/>
  </li>
</template>

<script>
  import ItemListItemComment from "@/components/ItemListItemComment"
  import ItemListItemLink from '@/components/ItemListItemLink'
  export default {
    components: {
      ItemListItemLink,
      ItemListItemComment
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