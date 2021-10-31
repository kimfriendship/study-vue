<template>
  <div class="parent">
    <h2>Parent</h2>
    <Child />
  </div>
</template>

<script>
import Child from "./Child.vue"

export default {
	components: {
    Child 
  }
}
</script>

<style scoped>
.parent {
  width: 50%;
  height: 50%;
  background: lightsteelblue;
  margin: 0 auto;
}

h2 {
  padding: 1rem 0;
  margin: 0 auto;
  text-align: center;
}
</style>