import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isdl: false,
  },
  getters: {
    getzt(state) {
      return state.isdl;
    },
  },
  mutations: {
    changedl(state, obj) {
      state.isdl = obj.abc;
    },
  },
  actions: {},
  modules: {},
});
