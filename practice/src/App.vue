<template>
  <main>
    <h1>PDF TEST</h1>
    <section>
      <Pdfjs />
    </section>
  </main>
</template>

<script>
  import Pdfjs from "./components/Pdfjs.vue";

  export default {
    name: "App",
    components: {
      Pdfjs,
    },
    mounted() {
      console.log("app mounted", window);
    },
    methods: {},
  };
</script>

<style scoped>
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
