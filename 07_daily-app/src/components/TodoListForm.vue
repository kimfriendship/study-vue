<template>
  <form @submit.prevent="addNewList">
    <input
      v-model="newTodoListTitle"
      type="text"
      placeholder="New Todo List Title"
    />
    <button type="submit">Add</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        newTodoListTitle: "",
      };
    },
    methods: {
      addNewList() {
        const rootData = this.$root.$children[0].$data.userData;
        rootData.push({ id: 0, title: this.newTodoListTitle, todoList: [] });
      },
    },
  };
</script>

<style scoped>
  form {
    margin: 30px 50px 0;
  }

  input {
    font-size: 18px;
    border: none;
    border-bottom: 2px solid steelblue;
    background: none;
    margin-right: 20px;
    height: 30px;
  }

  button {
    color: white;
    background: steelblue;
    border: none;
    border-radius: 5px;
    height: 30px;
    font-size: 16px;
    padding: 0 10px;
  }
</style>
