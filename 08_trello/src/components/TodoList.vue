<template>
  <article>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="todo in todoList" :key="todo.id">{{ todo.text }}</li>
    </ul>
    <input v-model="newTodo" type="text" placeholder="New Todo" />
  </article>
</template>

<script>
  export default {
    props: {
      todoList: {
        type: Array,
        default: () => [],
      },
      title: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        newTodo: "",
      };
    },
  };
</script>

<style scoped>
  h2 {
    text-align: center;
    color: white;
    margin: 0;
  }

  ul {
    background: lightsteelblue;
    height: 40vh;
    max-height: 40vh;
    border-radius: 5px;
    list-style-type: none;
    padding: 10px 30px;
    overflow-y: scroll;
  }

  li {
    font-size: 17px;
    line-height: 40px;
    height: 40px;
    cursor: pointer;
  }

  input {
    display: block;
    width: 93%;
    margin: 0 auto;
    height: 30px;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 17px;
  }
</style>
