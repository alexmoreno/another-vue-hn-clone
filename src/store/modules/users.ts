import axios, { AxiosResponse } from "axios"
import { User } from "./users.d"
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
  async fetchUser({ dispatch }: any, { username }: any): Promise<{}> {
    let { data } = await axiosInstance.get(
      `/user/${username}.json?print=pretty`
    )
    return data
  }
}
