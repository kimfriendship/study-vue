<template>
  <section>
    <h2>TodoList A</h2>
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
        todoList: [],
      };
    },
  };
</script>

<style scoped>
  .isDone {
    color: red;
  }
</style>
