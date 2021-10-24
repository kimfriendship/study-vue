<template>
<div>
  <input type="text"> <button @click="onClick">OPEN MODAL</button>
</div>
</template>

<script>
import ModalTestCompVue from './ModalTestComp.vue';

export default {
  methods: {
    async onClick() {
      const res = await this.$modal(ModalTestCompVue);
      console.log("HELLO", res);
    }
  },

}
</script>

<style>

</style>