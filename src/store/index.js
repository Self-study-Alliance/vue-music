import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isdl: false,
    token: "",
  },
  getters: {
    getzt(state) {
      return state.isdl;
    },
    token(state) {
      if (!state.token) {
        alert("请登录");
      }
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
