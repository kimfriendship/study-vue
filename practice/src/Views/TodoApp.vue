<template>
  <div>
    <TodoListA />
    <TodoListB />
  </div>
</template>

<script>
  import TodoListA from "../components/TodoListA";
  import TodoListB from "../components/TodoListB";

  export default {
    components: {
      TodoListB,
      TodoListA,
    },
  };
</script>

<style></style>
