<template>
<div class="modal-template" >
  <div class="modal-bgc" @click="$emit('close')" />
  <div class="modal-content">
    <slot />
  </div>
</div> 
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-template {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-bgc {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  padding: 1rem;
}

</style>