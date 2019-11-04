import axios, { AxiosResponse } from "axios";
import Item from "./items.d"
const axiosInstance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
  /* other custom settings */
});
async function fetchTopItems() : Promise<AxiosResponse> {
  return await axiosInstance.get(`/topstories.json?print=pretty`);
}

// export const state = {};
// export const getters = {};
// export const mutations = {};
export const actions = {
  async fetchItems({ dispatch }: any, payload : any) {
    let { data: topIDs } = await fetchTopItems();

    let top20IDs = topIDs.slice(0, 20);
    return Promise.all(top20IDs.map((id : number) : void => dispatch('fetchItem', { id })))
  },

  async fetchItem(store = {}, { id }: any) {
    let { data } = await axiosInstance.get(`/item/${id}.json`);
    return data;
  }
};
