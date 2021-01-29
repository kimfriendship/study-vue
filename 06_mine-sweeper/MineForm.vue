<template>
  <div>
    <input type="number" placeholder="가로" v-model="cell" />
    <input type="number" placeholder="세로" v-model="row" />
    <input type="number" placeholder="지뢰" v-model="mine" />
    <button type="button" @click="clickBtn">START</button>
  </div>
</template>

<script>
  import { START_GAME } from "./store";
  export default {
    data() {
      return {
        row: 8,
        cell: 8,
        mine: 10,
      };
    },
    methods: {
      clickBtn() {
        this.$store.commit(START_GAME, {
          row: this.row,
          cell: this.cell,
          mine: this.mine,
        });
      },
    },
  };
</script>

<style></style>
