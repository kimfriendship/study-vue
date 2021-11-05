<template>
  <modal-template>
    <div class="wrapper">
      <div>Another Modal</div>
      <button class="btn" @click="onClick">CLOSE</button>
    </div>
  </modal-template>
</template>

<script>
  import ModalTemplate from "./ModalTemplate.vue";

  export default {
    components: {
      ModalTemplate,
    },
    methods: {
      onClick() {
        this.$emit("resolve");
      },
    },
  };
</script>

<style scoped>
  .wrapper {
    background: white;
    border-radius: 8px;
    width: 25rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    background: cornflowerblue;
    color: white;
  }
</style>
