<template>
    <div class="child">
      <h3>Child</h3>
      <button>Click to open Modal</button>
      <div class="message">Return message: {{}}</div>
    </div>
</template>

<script>
export default {

}
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
  border: 3px solid lightslategray;
  border-radius: 6px;
  background: white;
  font-size: 1.3rem;
  width: 15rem;
  height: 3rem;
}

.message{
  font-size: 1.3rem;
}
</style>