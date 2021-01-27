<template>
  <div>
    <app-header :username='username' :is-logged-in='isLoggedIn'></app-header>
    <login-form :username='username' :password='password'></login-form>
  </div>
</template>

<script>
import AppHeader from './components/Header';
import LoginForm from './components/LoginForm';

const userData = [
  {
    id: 1,
    username: 'aaa',
    password: '123'
  }
];

export default {
  components: {
    AppHeader,
    LoginForm
  },
  data() {
    return {
      username: '',
      password: '',
      isLoggedIn: false,
      isError: false
    };
  },
  methods: {
    canLogIn(id, pw) {
      return userData.filter(({username, password}) => username === id && password === pw).length;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}
</style>