<template>
  <td @click="onClickCell">{{ cell }}</td>
</template>

<script>
  // import EventBus from "./EventBus";
  import {
    CLICK_CELL,
    SET_WINNER,
    CHANGE_TURN,
    RESET_GAME,
    NO_WINNER,
    RESET_WINNER,
    INCREASE_TURN_CHANGE,
  } from "./store";

  export default {
    props: {
      rowIndex: Number,
      cellIndex: Number,
    },
    computed: {
      tableData() {
        return this.$store.state.tableData;
      },
      turn() {
        return this.$store.state.turn;
      },
      turnChange() {
        return this.$store.state.turnChange;
      },
      cell() {
        return this.$store.state.tableData[this.rowIndex][this.cellIndex];
      },
    },
    methods: {
      // onClickCell() {
      //   if (this.cell !== "") return;
      //   EventBus.$emit("clickCell", this.rowIndex, this.cellIndex);
      // },
      // resetData() {
      //   const rtData = this.$root.$data;
      //   rtData.turnChange = 0;
      //   rtData.tableData = [
      //     ["", "", ""],
      //     ["", "", ""],
      //     ["", "", ""],
      //   ];
      // },
      didWin() {
        const turn = this.turn;
        const table = this.tableData;
        const rightDiagonal = [table[0][0], table[1][1], table[2][2]];
        const leftDiagonal = [table[0][2], table[1][1], table[2][0]];
        let win = false;

        if (table[this.rowIndex].every((flag) => flag === turn)) win = true;
        if (table.every((row) => row[this.cellIndex] === turn)) win = true;
        if (rightDiagonal.every((v) => v === turn)) win = true;
        if (leftDiagonal.every((v) => v === turn)) win = true;

        return win;
      },
      onClickCell() {
        if (this.cell !== "") return;
        this.$store.commit(CLICK_CELL, {
          row: this.rowIndex,
          cell: this.cellIndex,
        });

        if (this.didWin()) {
          this.$store.commit(SET_WINNER, this.turn);
          this.$store.commit(RESET_GAME);
        } else {
          if (this.turnChange >= 8) {
            this.$store.commit(NO_WINNER);
            this.$store.commit(RESET_GAME);
          } else {
            this.$store.commit(RESET_WINNER);
            this.$store.commit(CHANGE_TURN);
            this.$store.commit(INCREASE_TURN_CHANGE);
          }
        }
      },
    },
  };
</script>

<style>
  td {
    background: lavender;
    border: 2px solid black;
    width: 100px;
    height: 100px;
    cursor: pointer;
    font-size: 30px;
    text-align: center;
  }
</style>
