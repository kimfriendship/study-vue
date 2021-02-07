<template>
  <section>
    <h2>TodoList B</h2>
    <input type="text" v-model="value" @keyup.enter="addTodo" />
    <ul>
      <li
        v-for="todo in todoList"
        :key="todo.id"
        :class="todo.isDone && 'isDone'"
        @click="toggleTodo(todo.id)"
      >
        {{ todo.value }}
      </li>
    </ul>
  </section>
</template>

<script>
  import mixin from "../libs/mixin";

  export default {
    mixins: [mixin],
    data() {
      return {
        todoList: [{ id: 0, value: "hi", isDone: true }],
      };
    },
  };
</script>

<style scoped>
  .isDone {
    color: blue;
  }
</style>
