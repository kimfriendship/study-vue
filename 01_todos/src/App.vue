<template>
  <div>
    <form v-on:submit.prevent='submitForm'>
      <div>
        <label for="">ID: </label>
        <input id='username' type="text" v-model="username">
      </div>
      <div>
        <label for="">PW: </label>
        <input id='password' type="password" v-model="password">
      </div>
      <button type='submit' v-bind:disabled='!isUsernameValid'>로그인</button>
    </form>
    <p v-if='isError'>올바르지 않은 아이디입니다.</p>
    <p v-if='isUsernameValid'>아이디 형식이 맞습니다.</p>
  </div>
</template>

<script>
function validateEmail(email) {
  const regexr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regexr.test(String(email).toLowerCase())
}
export default {
  data() {
    return {
      username: '',
      password: '',
      isError: false
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    }
  },
  methods: {
    submitForm() {
      console.log('submitted');
      this.isError = true;
      !this.isError && this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style>

</style>