import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newTodoContent: "",
    todoList: [{ id: 1, content: "hi", isDone: false }]
  },
  mutations: {},
  actions: {},
  modules: {}
});
