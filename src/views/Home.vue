<template>
  <Main>
    <div class="home">
      <ItemListPagination :page="page"/>
      <ItemList>
        <ItemListItem v-for="item in state.items" :key="item.id" :item="item" />
      </ItemList>
    </div>
  </Main>
</template>

<script>
import ItemList from "@/components/ItemList"
import ItemListItem from "@/components/ItemListItem"
import ItemListPagination from "@/components/ItemListPagination"
import Main from "@/layouts/Main"
import { reactive, onMounted } from "@vue/composition-api"
import { store } from "@/store"

export default {
  components: {
    Main,
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
