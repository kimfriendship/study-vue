<template>
  <div>
    <AppTitle title="Claire's Todo" />
    <FormContainer />
    <todo-list-container></todo-list-container>
  </div>
</template>

<script>
import AppTitle from "./components/AppTitle.vue";
import FormContainer from "./containers/FormContainer";
import TodoListContainer from "./containers/TodoListContainer.vue";

export default {
  components: {
    AppTitle,
    FormContainer,
    TodoListContainer
  }
};
</script>

<style></style>
