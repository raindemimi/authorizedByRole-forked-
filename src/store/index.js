import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userIdByAdminList: ["zhangshan"],
    userInfo: {
      userId: "zhangsan",
      roleId: "user"
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
