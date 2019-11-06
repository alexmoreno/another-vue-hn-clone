import axios from "axios"
import { Comment, RootState } from "./comments.d"

const axiosInstance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0" as string
})

function itemIsAlreadyOnCache(state: any, id: number): boolean {
  return !state.items.map((item: Comment): number => item.id).includes(id)
}

export const state: RootState = {
  items: [] as Comment[]
}

export const mutations = {
  PUSH_COMMENT: (state: RootState, payload: Comment): void => {
    state.items.push(payload)
  }
}
export const actions = {
  async fetchComments({ dispatch }: any, payload: any) {
    return Promise.all(
      payload.commentsIds.map((id: number): void =>
        dispatch("fetchComment", { id })
      )
    )
  },

  async fetchComment({ commit, state }: any, { id }: any) {
    if(!itemIsAlreadyOnCache(state, id)) {
      let { data } = await axiosInstance.get(`/item/${id}.json`)
      commit("PUSH_COMMENT", data)
      return data
    }
  }
}
