<template>
  <header class="header">
    <h1 class="title">
      {{ isLoggedIn && username ? `${username}'s Todo List` : "Todo List" }}
    </h1>
    <button v-if="isLoggedIn" type="button" @click="logOut">로그아웃</button>
  </header>
</template>

<script>
  export default {
    props: {
      username: {
        type: String,
        default: "",
      },
      isLoggedIn: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      logOut() {
        const rootData = this.$root.$children[0].$data;
        rootData.isLoggedIn = false;
        rootData.username = "";
      },
    },
  };
</script>

<style scoped>
  .header {
    height: 80px;
    position: relative;
  }

  .title {
    padding: 0;
    margin: 0;
    text-align: center;
    line-height: 80px;
    font-weight: bold;
    color: darkslateblue;
  }

  button {
    border: none;
    background: none;
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 13px;
    color: gray;
    cursor: pointer;
  }
</style>
