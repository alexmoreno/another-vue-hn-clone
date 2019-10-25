<template>
  <div class="home">
    <ItemList>
      <ItemListItem v-for="item in state.items" :key="item.id" :item="item" />
    </ItemList>
    <ItemListPagination :page="page"/>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList"
import ItemListItem from "@/components/ItemListItem"
import ItemListPagination from "@/components/ItemListPagination"
import { reactive, onMounted } from "@vue/composition-api"
import { store } from "@/store"

export default {
  components: {
    ItemList,
    ItemListItem,
    ItemListPagination
  },
  setup(props, { root }) {
    // get HN items
    const items = useHNItems(root)
    const page = useHNPagination(root)

    return { ...items, page }
  }
}

function useHNItems(root) {
  const state = reactive({ items: [] })

  onMounted(async () => {
    state.items = await root.$store.dispatch("items/fetchItems")
  })
  return { state }
}

function useHNPagination(root) {
  const page = +root.$route.params.page || 1
  return page
}
</script>
