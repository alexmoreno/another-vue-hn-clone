import axios, { AxiosResponse } from "axios"
import { Item } from "./items.d"
const axiosInstance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
  /* other custom settings */
})
async function fetchTopItems(): Promise<AxiosResponse> {
  return await axiosInstance.get(`/topstories.json?print=pretty`)
}

// export const state = {};
// export const getters = {};
// export const mutations = {};
export const actions = {
  async fetchItems({ dispatch }: any, { page }: any): Promise<{}> {
    let { data: topIDs } = await fetchTopItems()
    const pageFirstItemIndex: number = (page - 1) * 20
    const pageLastItemIndex: number = pageFirstItemIndex + 20
    let top20IDs: number[] = topIDs.slice(pageFirstItemIndex, pageLastItemIndex)
    return Promise.all(
      top20IDs.map((id: number): void => dispatch("fetchItem", { id }))
    )
  },

  async fetchItem(store = {}, { id }: any): Promise<{}> {
    let { data } = await axiosInstance.get(`/item/${id}.json`)
    return data
  }
}
