<template>
    <main class='main'>
    <form @submit.prevent='submitForm'>
      <div>
        <label for="username">ID</label>
        <input id='username' v-model="username" type="text">
      </div>
      <div>
        <label for="password">PW</label>
        <input id='password' v-model="password" type="password" >
      </div>
    <!-- <p v-if='isError'>올바르지 않은 아이디입니다.</p>
    <p v-if='isUsernameValid'>아이디 형식이 맞습니다.</p> -->
      <button type='submit' :disabled='!isUsernameValid'>로그인</button>
    </form>
  </main>
</template>

<script>
export default {
  props: [
    'username',
    'password',
  ],
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

<style scoped>
.main {
  width: 350px;
  height: 200px;
  margin: 150px auto;
  border-radius: 10px;
  padding: 50px;
  background: lightgoldenrodyellow;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

label {
  font-size: 20px;
  line-height: 30px;
  vertical-align: middle;
  display: inline-block;
  width: 30px;
  margin-right: 10px;
}

input {
  display: inline-block;
  width: 200px;
  height: 30px;
  margin-bottom: 20px;
}

button {
  width: 80%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  background: rgb(89, 211, 170);
  cursor: pointer;
  margin-top: 50px;
}
</style>