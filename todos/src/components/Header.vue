<template>
  <header class="header">
    <h1 class='title'>{{username}}'s Todo</h1>
  </header>
</template>

<script>
Vue.component('username', 'isLoggedIn', {
  props: {
    username: String,
    isLoggedIn: Boolean
  }
})

export default {
  props: ['username', 'isLoggedIn']
}
</script>

<style scoped>
.header {
  height: 80px;
}

.title {
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
  color: lightseagreen;
}
</style>