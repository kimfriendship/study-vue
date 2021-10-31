<template>
  <div class="grand-parent">
    <h1>Grand Parent</h1>
    <Parent />
  </div>
</template>

<script>
import Parent from './Parent.vue'

export default {
components: {
  Parent
}
}
</script>

<style scoped>
.grand-parent {
  width: 100vw;
  height: 100vh;
  background: lightgoldenrodyellow;
}

h1 {
  padding: 3rem;
  margin: 0 auto;
  text-align: center;
}
</style>