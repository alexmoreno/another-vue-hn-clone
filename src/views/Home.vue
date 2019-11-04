<template>
  <Main>
    <div class="home">
      <ItemListPagination :page="page" />
      <ItemList>
        <ItemListItem v-for="item in state.items" :key="item.id" :item="item" />
        <Loading v-if="!state.items.length" />
      </ItemList>
    </div>
  </Main>
</template>

<script lang="ts">
import ItemList from "@/components/ItemList.vue"
import ItemListItem from "@/components/ItemListItem.vue"
import ItemListPagination from "@/components/ItemListPagination.vue"
import Loading from "@/components/Loading.vue"
import Main from "@/layouts/Main.vue"
import { reactive, onMounted } from "@vue/composition-api"

export default {
  components: {
    Main,
    ItemList,
    ItemListItem,
    ItemListPagination,
    Loading
  },
  setup(props: [], { root }: any): object {
    // get HN items
    const page: number = useHNPagination(root)
    const items: any = useHNItems(root, page)

    return { ...items, page }
  }
}

function useHNItems(root: any, page: number): object {
  const state = reactive({ items: [] })

  onMounted(async () => {
    state.items = await root.$store.dispatch("items/fetchItems", { page })
  })
  return { state }
}

function useHNPagination(root: any): number {
  const page = +root.$route.params.page || 1
  return page
}
</script>
