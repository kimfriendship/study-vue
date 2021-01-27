<template>
  <div>
    <Header :username='username'></Header>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import Header from './components/Header';
import LoginForm from './components/LoginForm'

export default {
  components: {
    Header,
    LoginForm
  },
  data() {
    return {
      username: '',
      password: '',
      isError: false
    };
  },
}
</script>

<style>
body {
  margin: 0;
}
</style>