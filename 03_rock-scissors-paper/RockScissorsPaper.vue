<template>
  <div>
    <h1>Rock Scissors Paper</h1>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickBtn('rock')">rock</button>
      <button @click="onClickBtn('scissors')">scissors</button>
      <button @click="onClickBtn('paper')">paper</button>
    </div>
    <span>{{ result }}</span>
    <span>현재 {{ score }} 점</span>
  </div>
</template>

<script>
  let interval = null;
  const coords = {
    rock: "0",
    scissors: "-142px",
    paper: "-280px",
  };
  const scores = {
    rock: 1,
    scissors: 0,
    paper: -1,
  };

  const getCpuChoice = (imgCoord) => {
    const choice = Object.entries(coords).find(
      (value) => value[1] === imgCoord
    )[0];
    return scores[choice];
  };

  export default {
    data() {
      return {
        result: "",
        score: 0,
        imgCoord: coords.rock,
      };
    },
    computed: {
      computedStyleObject() {
        return {
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
        };
      },
    },
    methods: {
      changeHand() {
        interval = setInterval(() => {
          if (this.imgCoord === coords.rock) {
            this.imgCoord = coords.scissors;
          } else if (this.imgCoord === coords.scissors) {
            this.imgCoord = coords.paper;
          } else if (this.imgCoord === coords.paper) {
            this.imgCoord = coords.rock;
          }
        }, 100);
      },
      onClickBtn(choice) {
        clearInterval(interval);
        const myScore = scores[choice];
        const cpuScore = getCpuChoice(this.imgCoord);
        const diff = cpuScore - myScore;

        if (diff === 0) {
          this.result = "Draw";
        } else if ([-1, 2].includes(diff)) {
          this.result = "Win";
          this.score += 1;
        } else {
          this.result = "Loose";
          this.score -= 1;
        }

        setTimeout(() => {
          this.changeHand();
        }, 1000);
      },
    },
    mounted() {
      this.changeHand();
    },
    beforeDestroy() {
      clearInterval(interval);
    },
  };
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
  }
</style>
