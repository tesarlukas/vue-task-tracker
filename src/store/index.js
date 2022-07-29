import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    task: {},
  },
  getters: {
    GET_TASK(state) {
      return state.task;
    },
  },
  mutations: {
    SET_TASK(state, params) {
      state.task = params;
    },
  },
  actions: {
    setTask({ commit }, params) {
      commit('SET_TASK', params);
    },
  },
  modules: {},
});
