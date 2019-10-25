import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
  /* other custom settings */
});
async function fetchTopItems() {
  return await axiosInstance.get(`/topstories.json?print=pretty`);
}
async function fetchItem(id: number) {
  let { data } = await axiosInstance.get(`/item/${id}.json`);
  return data;
}

export const state = {};

export const getters = {};

export const mutations = {};
export const actions = {
  async fetchItems(store = {}, payload: any) {
    let { data: topIDs } = await fetchTopItems();
    let top20IDs = topIDs.slice(0, 20);
    return Promise.all(top20IDs.map(id => fetchItem(id)));
  }
};
