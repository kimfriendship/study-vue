<template>
  <div>
    <app-header :username="username" :is-logged-in="isLoggedIn"></app-header>
    <main-board v-if="isLoggedIn" :user-data="userData"></main-board>
    <login-form v-else :username="username" :password="password"></login-form>
  </div>
</template>

<script>
  import AppHeader from "./components/Header";
  import LoginForm from "./components/LoginForm";
  import MainBoard from "./components/MainBoard";
  import usersData from "./userData.js";

  export default {
    components: {
      AppHeader,
      LoginForm,
      MainBoard,
    },
    data() {
      return {
        username: "",
        // username: "aaa",
        password: "",
        isLoggedIn: false,
        // isLoggedIn: true,
        // userData: {},
        userData: usersData[0].data,
      };
    },
    methods: {
      logIn(id, pw) {
        const userData = usersData.filter(
          ({ username, password }) => username === id && password === pw
        );
        const doesMatch = userData.length !== 0;

        if (doesMatch) {
          this.userData = userData[0].data;
          this.isLoggedIn = true;
        }

        return doesMatch;
      },
    },
  };
</script>

<style>
  body {
    margin: 0;
    box-sizing: border-box;
    background: lightgoldenrodyellow;
  }
</style>
