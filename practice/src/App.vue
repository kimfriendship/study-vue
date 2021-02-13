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
    <div class="container-fluid">
      <div class="row">
        <div class="col-1" style="height: 50px">hello</div>
        <div class="col-1 mr-auto" style="height: 300px">how are you</div>
        <div class="col-1" style="height: 80px">what's your name</div>
      </div>
      <div class="row">
        <div class="col-1 align-self-center" style="height: 50px">hello</div>
        <div class="col-3 order-last " style="height: 300px">
          how are you
        </div>
        <div class="col-1 align-self-end" style="height: 80px">
          what's your name
        </div>
      </div>
    </div>
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

<style scoped>
  .row div {
    background: lavender;
    border: 1px solid darkcyan;
  }
</style>
