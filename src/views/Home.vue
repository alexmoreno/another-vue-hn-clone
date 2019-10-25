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
    const page = useHNPagination(root)
    const items = useHNItems(root, page)

    return { ...items, page }
  }
}

function useHNItems(root, page) {
  const state = reactive({ items: [] })

  onMounted(async () => {
    state.items = await root.$store.dispatch("items/fetchItems", { page })
  })
  return { state }
}

function useHNPagination(root) {
  const page = +root.$route.params.page || 1
  return page
}
</script>
