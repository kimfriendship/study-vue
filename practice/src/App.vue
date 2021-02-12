<template>
  <div id="app">
    <!-- <Header /> -->
    <CustomIcon :src="Icon" alt="icon" class="icon" />
    <TodoApp />
    <!-- <div id="content" class="content">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
  // import Header from "./components/Header.vue";
  import TodoApp from "./Views/TodoApp";
  import CustomIcon from "./components/CustomIcon";
  import Icon from "./assets/icon.svg";

  export default {
    name: "App",
    components: {
      // Header,
      TodoApp,
      CustomIcon,
    },
    data() {
      return {
        Icon,
      };
    },
  };
</script>

<style scoped>
  .icon path {
    fill: red;
  }
</style>
