<template>
  <main>
    <section v-for="list in userData" :key="list.id" :list="list">
      <todo-list :title="list.title" :todo-list="list.todoList"></todo-list>
    </section>
  </main>
</template>

<script>
  import TodoList from "./TodoList";

  export default {
    components: {
      TodoList,
    },
    props: {
      userData: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style scoped>
  main {
    padding: 100px 50px 0;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    max-width: 100%;
    height: 65vh;
    overflow-x: scroll;
  }

  article {
    background: steelblue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 270px;
    width: 270px;
    height: 55vh;
    padding: 30px;
    border-radius: 10px;
    margin-right: 50px;
  }
</style>
