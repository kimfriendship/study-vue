<template>
  <main>
    <h1>ICONS TEST</h1>
    <section>
      <span>folder</span>
      <svg-icon icon-name="folder" class="folder"></svg-icon>
      <span>check</span>
      <svg-icon icon-name="check" class="check"></svg-icon>
      <span>twitter</span>
      <svg-icon icon-name="twitter" class="twitter"></svg-icon>
      <span>add</span>
      <svg-icon icon-name="zip" class="twitter"></svg-icon>
      <span>excel</span>
      <svg-icon icon-name="excel" class="excel"></svg-icon>

      <!-- <Pdfjs /> -->
      <!-- <LottieWebVue
        auto-play
        mode="normal"
        class="lottie"
        :animation-data="require('./assets/particles.json')"
      /> -->
    </section>
  </main>
</template>

<script>
  // import Pdfjs from "./components/Pdfjs.vue";
  // import LottieWebVue from "./lottie/lottie-web-vue.vue";
  // import SvgIcon from "./components/svg/SvgIcon.vue";
  import SvgIcon from "./components/svg/SvgIcon.vue";

  export default {
    name: "App",
    components: {
      // Pdfjs,
      // LottieWebVue,
      SvgIcon,
    },
    mounted() {},
    methods: {},
  };
</script>

<style>
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .folder {
    color: green;
  }
  .check {
    color: red;
  }
  .twitter {
    fill: blue;
  }
  .excel {
    color: pink;
  }
</style>
