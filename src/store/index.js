import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      Courses: [],
    };
  },
  getters: {
    Courses: (state) => {
      return state.Courses;
    },
  },
  mutations: {
    SET_ALL(state, datas) {
      state.Courses = datas;
    },
  },
  actions: {
    async getData(context) {
      await axios
        .get("https://frosty-bern-acwuycxv7kid.vapor-farm-f1.com/api/course")
        .then((res) => {
          context.commit("SET_ALL", res.data.data);
        });
    },
  },
});
