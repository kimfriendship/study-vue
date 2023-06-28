<template>
  <main>
    <h1>ICONS TEST</h1>
    <section>
      <div>
        <svg-icon icon-name="check"></svg-icon>
      </div>
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

<style scoped>
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
