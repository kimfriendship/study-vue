<template>
  <div id="app">
    <Header />
    <TodoApp />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import TodoApp from "./Views/TodoApp";

  export default {
    name: "App",
    components: {
      Header,
      TodoApp,
    },
  };
</script>

<style></style>
