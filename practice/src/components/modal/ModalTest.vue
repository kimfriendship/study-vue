<template>
  <modal-template>
    <div class="wrapper">
      <div>TEST MODAL</div>
      <div>Props: {{ options.text }}</div>
      <div class="btn-wrapper">
        <button class="btn" @click="clickAnother">OPEN ANOTHER</button>
        <button class="btn" @click="clickConfirm">CONFIRM</button>
        <button class="btn" @click="clickError">ERROR</button>
        <button class="btn" @click="clickClose">CLOSE</button>
      </div>
    </div>
  </modal-template>
</template>

<script>
  import ModalTemplate from "./ModalTemplate.vue";
  import SubModal from "./SubModal.vue";

  export default {
    components: {
      ModalTemplate,
    },
    props: {
      options: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      async clickAnother() {
        await this.$modal(SubModal);
      },
      clickConfirm() {
        this.$emit("resolve", "Confirmed!");
      },
      clickError() {
        this.$emit("reject");
      },
      clickClose() {
        this.$emit("resolve");
      },
    },
  };
</script>

<style scoped>
  .wrapper {
    background: white;
    width: 30rem;
    border-radius: 1rem;
    height: 10rem;
    padding: 1.5rem;
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0;
  }

  .btn {
    background: lightslategrey;
    color: white;
  }
</style>
