<template>
  <main class="main">
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">ID</label>
        <input
          id="username"
          autofocus
          type="text"
          :value="username"
          @input="changeId"
        />
      </div>
      <div>
        <label for="password">PW</label>
        <input
          id="password"
          type="password"
          :value="password"
          @input="changePw"
        />
      </div>
      <p v-if="isError" class="warning">올바르지 않은 형식입니다.</p>
      <p v-if="isEmpty" class="warning">빈칸을 채워주세요.</p>
      <p v-if="needRetry" class="warning">
        아이디와 비밀번호를 다시 확인해주세요.
      </p>
      <button type="submit">로그인</button>
    </form>
  </main>
</template>

<script>
  export default {
    props: {
      username: {
        type: String,
        default: "",
      },
      password: {
        type: String,
        default: "",
      },
      password: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        isError: false,
        isEmpty: false,
        needRetry: false,
      };
    },
    computed: {},
    methods: {
      isValid(input) {
        const regex = /^[a-zA-Z0-9]*$/;
        this.isError = !regex.test(input);
      },
      submitForm() {
        const tryLogIn = this.$root.$children[0].logIn;
        const rootData = this.$root.$children[0].$data;

        if (rootData.username === "" || rootData.password === "")
          this.isEmpty = true;
        if (this.isError) return;

        const result = tryLogIn(rootData.username, rootData.password);
        if (result) {
          rootData.isLoggedIn = true;
          rootData.password = "";
        } else {
          this.needRetry = true;
        }
      },
      changeId(e) {
        const rootData = this.$root.$children[0].$data;
        const value = e.target.value;
        this.isEmpty = false;
        rootData.username = value;
        this.isValid(value);
      },
      changePw(e) {
        const rootData = this.$root.$children[0].$data;
        const value = e.target.value;
        this.isEmpty = false;
        rootData.password = value;
        this.isValid(value);
      },
    },
  };
</script>

<style scoped>
  .main {
    width: 350px;
    height: 200px;
    margin: 150px auto;
    border-radius: 10px;
    padding: 50px;
    background: lightsteelblue;
    position: relative;
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
    background: darkslateblue;
    cursor: pointer;
    margin-top: 50px;
  }

  .warning {
    position: absolute;
    bottom: 95px;
    text-align: center;
    color: white;
  }
</style>
