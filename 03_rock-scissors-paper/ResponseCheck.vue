<template>
  <div>
    <h1>Response Check</h1>
    <div id="screen" :class="state" @click="onClickScreen">
      {{ message }}
    </div>
    <div v-show="result.length">
      <div>
        평균 시간:
        {{ average }}ms
      </div>
      <button @click="onReset">Reset</button>
    </div>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;

  export default {
    data() {
      return {
        result: [],
        state: "waiting",
        message: "click to start",
      };
    },
    computed: {
      average() {
        return this.result.reduce((a, b) => a + b, 0) / this.result.length || 0;
      },
    },
    methods: {
      onReset() {
        this.result = [];
      },
      onClickScreen() {
        if (this.state === "waiting") {
          this.state = "ready";
          this.message = "click when it turns green";
          timeout = setTimeout(() => {
            this.state = "now";
            this.message = "click now!!!!!";
            startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000);
        } else if (this.state === "ready") {
          clearTimeout(timeout);
          this.state = "waiting";
          this.message = "you were too quick! click again to start again";
        } else if (this.state === "now") {
          endTime = new Date();
          this.state = "waiting";
          this.message = "click to start";
          this.result.push(endTime - startTime);
        }
      },
    },
  };
</script>

<style scoped>
  #screen {
    box-sizing: border-box;
    width: 500px;
    height: 200px;
    text-align: center;
    padding: 50px;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    color: white;
  }

  #screen.waiting {
    background: royalblue;
  }

  #screen.ready {
    background: salmon;
  }

  #screen.now {
    background: darkcyan;
  }
</style>
