import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
  /* other custom settings */
});
export const state = {
  items: []
};
// export const getters = {};
export const mutations = {
  PUSH_COMMENT: (state, payload) => {
    state.items.push(payload)
  },
};
export const actions = {
  async fetchComments({ dispatch }: any, payload : any) {
    return Promise.all(payload.commentsIds.map(id => dispatch('fetchComment', { id })))
  },

  async fetchComment({commit}, { id }: any) {

    let { data } = await axiosInstance.get(`/item/${id}.json`);
    commit('PUSH_COMMENT', data)
    return data;
  }
};
