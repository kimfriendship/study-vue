<template>
<modal-template @close="$emit('close')">
  <h1>MODAL TEST</h1>
  <button @click="onConfirm">확인</button>
  <button @click="onCancel">취소</button>
</modal-template>
</template>

<script>
import ModalTemplate from './ModalTemplate.vue';

export default {
  components: { ModalTemplate },
  methods: {
    onConfirm(){
      this.$emit('resolve', true)
    },
    onCancel(){
      this.$emit('resolve', false)
    }
  }
}
</script>

<style>

</style>