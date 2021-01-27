<template>
    <main class='main'>
      <h2>Log In</h2>
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
  </main>
</template>

<script>
export default {
  computed: {
    isUsernameValid() {
      return true;
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
  },
}
</script>

<style>
.main {
  width: 400px;
  height: 500px;
  margin: 150px auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: lightgoldenrodyellow;
}
</style>