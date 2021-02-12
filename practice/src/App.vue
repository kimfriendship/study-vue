<template>
  <div id="app">
    <!-- <Header /> -->
    <CustomIcon :src="Icon" alt="icon" class="icon" />
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
  import Icon from "./assets/icon.svg";

  export default {
    name: "App",
    components: {
      // Header,
      TodoApp,
      CustomIcon,
      ChangeIcon,
    },
    data() {
      return {
        Icon,
      };
    },
  };
</script>

<style scoped></style>
