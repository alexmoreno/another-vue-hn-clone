<template>
  <Main>
    <div class="user">
      <Loading v-if="isEmpty(state.user)"></Loading>
      <UserInfo v-else :user="state.user"></UserInfo>
    </div>
  </Main>
</template>

<script lang="ts">
import Loading from "@/components/Loading.vue"
import Main from "@/layouts/Main.vue"
import UserInfo from "@/components/UserInfo.vue"
import { reactive, onMounted } from "@vue/composition-api"
import { isEmpty } from "@/utils"
export default {
  components: {
    UserInfo,
    Loading,
    Main
  },
  setup(props: [], { root }: any): object {
    // get HN items
    const user: object = useHNUser(root)

    return { ...user }
  },
  methods: {
    isEmpty
  }
}

function useHNUser(root: any): object {
  const state = reactive({ user: {} })
  const username = root.$route.params.username
  onMounted(async () => {
    state.user = await root.$store.dispatch("users/fetchUser", { username })
  })

  return { state }
}
</script>

<style lang="css" scoped></style>
