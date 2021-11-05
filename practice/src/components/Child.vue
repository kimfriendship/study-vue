<template>
  <div class="child">
    <h3>Child</h3>
    <button @click="onClick">Open Modal</button>
    <div class="message">Return message: {{ msg }}</div>
  </div>
</template>

<script>
  import Modal from "./modal/ModalTest.vue";

  export default {
    data() {
      return {
        msg: "",
      };
    },
    methods: {
      async onClick() {
        try {
          const response = await this.$modal(Modal, { text: "Blabla" });
          this.msg = response;
        } catch (e) {
          this.msg = e;
        }
      },
    },
  };
</script>

<style scoped>
  .child {
    width: 100%;
    height: 50%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: lavender;
  }

  button {
    border: none;
    border-radius: 6px;
    background: cornflowerblue;
    color: white;
    font-size: 1.3rem;
    width: 15rem;
    height: 3rem;
  }

  .message {
    font-size: 1.3rem;
  }
</style>
