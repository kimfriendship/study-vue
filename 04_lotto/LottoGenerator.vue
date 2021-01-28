<template>
  <div>
    <h1>Lotto</h1>
    <h2>당첨 숫자</h2>
    <div id="results">
      <lotto-ball
        v-for="ball of winBalls"
        :key="ball"
        :number="ball"
      ></lotto-ball>
    </div>
    <h2>보너스</h2>
    <lotto-ball v-if="bonus" :number="bonus">{{ bonus }}</lotto-ball>
    <button v-if="redo" @click="onClickRedo">한 번 더!</button>
  </div>
</template>

<script>
  import LottoBall from "./LottoBall.vue";

  const getWinNumbers = () => {
    const candidate = Array.from({ length: 45 }, (v, i) => i + 1);
    const shuffle = [];

    while (shuffle.length <= 7) {
      shuffle.push(
        candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
      );
    }

    const bonus = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
    return [...winNumbers, bonus];
  };

  const timeouts = [];

  export default {
    components: {
      LottoBall,
    },
    data() {
      return {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
      };
    },
    computed: {},
    methods: {
      showBalls() {
        for (let i = 0; i < 6; i++) {
          timeouts[i] = setTimeout(() => {
            this.winBalls.push(this.winNumbers[i]);
          }, (i + 1) * 500);
        }
        timeouts[6] = setTimeout(() => {
          this.bonus = this.winNumbers[6];
          this.redo = true;
        }, 4000);
      },
      onClickRedo() {
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo = false;
        this.showBalls();
      },
    },
    mounted() {
      this.showBalls();
    },
    beforeDestroy() {
      timeouts.forEach((t) => clearTimeout(t));
    },
    watch: {},
  };
</script>

<style></style>
