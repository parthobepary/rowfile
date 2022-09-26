import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      Courses: [],
      isLoading: false,
    };
  },
  getters: {
    Courses: (state) => {
      return state.Courses;
    },
    isLoading: (state) => {
      return state.isLoading;
    },
  },
  mutations: {
    SET_ALL(state, datas) {
      state.Courses = datas;
    },
    SET_SINGLE_DATA(state, datas) {
      state.Courses = datas;
    },
    LOADER_STATUS_CHANGE(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    async getData(context) {
      context.commit("LOADER_STATUS_CHANGE", true);
      await axios
        .get("https://frosty-bern-acwuycxv7kid.vapor-farm-f1.com/api/course")
        .then((res) => {
          context.commit("LOADER_STATUS_CHANGE", false);
          context.commit("SET_ALL", res.data.data);
        })
        .catch(() => {
          context.commit("LOADER_STATUS_CHANGE", false);
        });
    },
    async grtCoursesData(context, payload) {
      context.commit("LOADER_STATUS_CHANGE", true);
      await axios
        .get(
          `https://frosty-bern-acwuycxv7kid.vapor-farm-f1.com/api/course-by-category/${payload}`
        )
        .then((res) => {
          if (res.status == 200) {
            context.commit("LOADER_STATUS_CHANGE", false);
            context.commit("SET_SINGLE_DATA", res.data.data);
          }
        })
        .catch(() => {
          context.commit("LOADER_STATUS_CHANGE", false);
        });
    },
  },
});
