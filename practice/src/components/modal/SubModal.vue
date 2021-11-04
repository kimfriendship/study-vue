<template>
  <modal-template>
    <div class="wrapper">
      <div>Another Modal</div>
    </div>
  </modal-template>
</template>

<script>
  import ModalTemplate from "./ModalTemplate.vue";

  export default {
    components: {
      ModalTemplate,
    },
  };
</script>

<style scoped>
  .wrapper {
    border-radius: 8px;
  }
</style>
