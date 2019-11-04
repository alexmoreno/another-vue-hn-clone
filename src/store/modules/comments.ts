import axios from "axios"
import { Comment, RootState } from "./comments.d"

const axiosInstance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0" as string
})

export const state: RootState = {
  items: [] as Comment[]
}

export const mutations = {
  PUSH_COMMENT: (state: RootState, payload: Comment) : void => {
    state.items.push(payload)
  }
}
export const actions = {
  async fetchComments({ dispatch }: any, payload: any) {
    return Promise.all(
      payload.commentsIds.map((id: number) : void => dispatch("fetchComment", { id }))
    )
  },

  async fetchComment({ commit }: any , { id }: any) {
    let { data } = await axiosInstance.get(`/item/${id}.json`)
    commit("PUSH_COMMENT", data)
    return data
  }
}
