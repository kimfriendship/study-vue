export default {
  data() {
    return {
      title: "",
      todoList: [],
      value: "",
      currentId: 0,
    };
  },
  methods: {
    addTodo() {
      this.todoList = [
        ...this.todoList,
        { id: this.currentId + 1, value: this.value, isDone: false },
      ];
      this.currentId += 1;
      this.value = "";
    },
    toggleTodo(id) {
      this.todoList = this.todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
};
