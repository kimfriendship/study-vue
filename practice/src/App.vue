<template>
  <div id="app">
    <child />
  </div>
</template>

<script>
import Child from './components/Child.vue';

export default {
  name: "App",
  components: {
    Child
  },
}
</script>

<style scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
