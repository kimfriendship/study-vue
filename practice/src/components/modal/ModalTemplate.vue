<template>
  <div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="dimmed"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .dimmed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.7;
  }

  .content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
