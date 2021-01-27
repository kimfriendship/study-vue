<template>
  <div>
    <h1>Baseball Game</h1>
    <form @submit.prevent="onSubmit">
      <input
        ref="input"
        type="text"
        minlength="4"
        maxlength="4"
        v-model="value"
      />
      <button type="submit">Check</button>
    </form>
    <h2>시도: {{ result.length }}</h2>
    <ul>
      <li v-for="(t, i) in tries" :key="i">
        {{ t.value }}
        <br />
        {{ t.result }}
      </li>
    </ul>
  </div>
</template>

<script>
  const getNumbers = () => {
    const candidates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbers = [];
    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * (9 - i));
      const chosen = candidates.splice(random, 1)[0];
      if (i === 0 && chosen === 0) {
        i--;
        continue;
      } else {
        numbers.push(chosen);
      }
    }
    return numbers.join("");
  };

  const getResult = (value, answer) => {
    let strike = 0;
    let ball = 0;
    let out = 0;

    for (let i = 0; i < 4; i++) {
      const idx = answer.indexOf(value[i]);
      if (idx < 0) out++;
      if (idx >= 0 && i !== idx) ball++;
      if (idx >= 0 && i === idx) strike++;
    }

    return `${strike} strike, ${ball} ball, ${out} out 입니다. `;
  };

  export default {
    data() {
      return {
        tries: [],
        value: "",
        result: "",
        answer: getNumbers(),
      };
    },
    methods: {
      onSubmit() {
        this.tries.push({
          value: this.value,
          result: getResult(this.value, this.answer + ""),
        });
        if (this.answer === this.value) {
          alert("You WIN!");
          this.tries = [];
          this.answer = getNumbers();
        }
        if (this.tries.length >= 10) {
          alert(`You LOSE! Answer is ${this.answer}`);
          this.tries = [];
          this.answer = getNumbers();
        }
        this.value = "";
        this.$refs.input.focus();
      },
    },
  };
</script>

<style></style>
