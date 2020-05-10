import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, value) {
      state.count = value;
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  actions: {
    addAction(context) {
      context.commit("setCount", this.getters.getCount + 1);
    },
    deleteAction(context) {
      context.commit("setCount", this.getters.getCount - 1);
    },
  },
  modules: {},
});
