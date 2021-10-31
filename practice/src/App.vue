<template>
  <div id="app">
    <GrandParent />
  </div>
</template>

<script>
import GrandParent from './components/GrandParent.vue'

export default {
  name: "App",
  components: {
    GrandParent
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
