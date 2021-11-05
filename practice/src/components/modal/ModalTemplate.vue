<template>
  <div>
    <div v-if="!disableDim" class="dimmed"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      disableDim: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style scoped>
  .dimmed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.6;
  }

  .content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
