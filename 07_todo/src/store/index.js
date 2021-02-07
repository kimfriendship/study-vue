import Vue from "vue";
import Vuex from "vuex";
import TodoStore from "./modules/todo.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos: TodoStore
  }
});
