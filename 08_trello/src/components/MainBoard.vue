<template>
  <div>
    <todo-list-form></todo-list-form>
    <todo-list-container :user-data="userData"></todo-list-container>
  </div>
</template>

<script>
  import TodoListForm from "./TodoListForm";
  import TodoListContainer from "./TodoListContainer";

  export default {
    components: {
      TodoListForm,
      TodoListContainer,
    },
    props: {
      userData: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {};
    },
  };
</script>

<style scoped></style>
