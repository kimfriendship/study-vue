<template>
  <div>
    <One />
    <hr />
    <Two />
    <hr />
    <Three />
  </div>
</template>

<script>
  import One from "./components/practice01/main";
  import Two from "./components/practice02/main";
  import Three from "./components/practice03/main";

  export default {
    components: {
      One,
      Two,
      Three,
    },
  };
</script>

<style>
  hr {
    margin: 50px 0;
  }
</style>
