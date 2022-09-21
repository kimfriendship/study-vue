<template>
  <main>
    <h1>PDF TEST</h1>
    <section>
      <!-- <Pdfjs /> -->
      <LottieWebVue
        auto-play
        mode="normal"
        class="lottie"
        :animation-data="require('./assets/particles.json')"
      />
    </section>
  </main>
</template>

<script>
  // import Pdfjs from "./components/Pdfjs.vue";
  import LottieWebVue from "./lottie/lottie-web-vue.vue";

  export default {
    name: "App",
    components: {
      // Pdfjs,
      LottieWebVue,
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
