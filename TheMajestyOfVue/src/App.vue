<template>
  <div>
    <One />
    <hr />
    <Two />
  </div>
</template>

<script>
  import One from "./components/practice01/main";
  import Two from "./components/practice02/main";

  export default {
    components: {
      One,
      Two,
    },
  };
</script>

<style>
  hr {
    margin: 50px 0;
  }
</style>
