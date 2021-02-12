<template>
  <div id="app">
    <!-- <Header /> -->
    <CustomIcon src="./assets/icon.svg" alt="icon" />
    <ExchangeIcon />
    <ChangeIcon />
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
  import ChangeIcon from "./components/ChangeIcon";
  import ExchangeIcon from "./assets/icon.svg";

  export default {
    name: "App",
    components: {
      // Header,
      TodoApp,
      CustomIcon,
      ChangeIcon,
      ExchangeIcon,
    },
    data() {
      return {
        ExchangeIcon,
      };
    },
  };
</script>

<style scoped></style>
