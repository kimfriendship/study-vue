<template>
  <div>
    <h1>Response Check</h1>
    <div id="screen" :class="state">{{ message }}</div>
    <div>
      <div>평균 시간: {{}}</div>
      <button @click="onReset">Reset</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        result: [],
        state: "waiting",
        message: "click to start",
      };
    },
    methods: {
      onReset() {},
    },
  };
</script>

<style scoped>
  #screen {
    width: 300px;
    height: 300px;
    text-align: center;
    font-size: 20px;
  }

  #screen.waiting {
    background: royalblue;
    color: white;
  }

  #screen.ready {
    background: salmon;
    color: white;
  }

  #screen.now {
    background: darkcyan;
  }
</style>
