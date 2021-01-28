<template>
  <span class="ball" :style="background">{{ number }}</span>
</template>

<script>
  export default {
    name: "LottoBall",
    props: {
      number: Number,
    },
    computed: {
      background() {
        switch (true) {
          case this.number <= 10:
            return { background: "tomato" };
          case this.number <= 20:
            return { background: "orange" };
          case this.number <= 30:
            return { background: "lightyellow" };
          case this.number <= 40:
            return { background: "seagreen" };
          default:
            return { background: "royalblue" };
        }
      },
    },
  };
</script>

<style scoped>
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 20px;
  }
</style>
