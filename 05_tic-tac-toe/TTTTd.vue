<template>
  <td @click="onClickCell">{{ cell }}</td>
</template>

<script>
  import EventBus from "./EventBus";
  export default {
    props: {
      rowIndex: Number,
      cellIndex: Number,
      cell: String,
    },
    methods: {
      onClickCell() {
        if (this.cell !== "") return;
        EventBus.$emit("clickCell", this.rowIndex, this.cellIndex);
      },
      // resetData() {
      //   const rtData = this.$root.$data;
      //   rtData.turnChange = 0;
      //   rtData.tableData = [
      //     ["", "", ""],
      //     ["", "", ""],
      //     ["", "", ""],
      //   ];
      // },
      // didWin() {
      //   const turn = this.$root.$data.turn;
      //   const table = this.$root.$data.tableData;
      //   const rightDiagonal = [table[0][0], table[1][1], table[2][2]];
      //   const leftDiagonal = [table[0][2], table[1][1], table[2][0]];
      //   let win = false;

      //   if (table[this.rowIndex].every((flag) => flag === turn)) win = true;
      //   if (table.every((row) => row[this.cellIndex] === turn)) win = true;
      //   if (rightDiagonal.every((v) => v === turn)) win = true;
      //   if (leftDiagonal.every((v) => v === turn)) win = true;

      //   return win;
      // },
      // onClickCell() {
      //   if (this.cell !== "") return;
      //   const rtData = this.$root.$data;
      //   this.$set(
      //     rtData.tableData[this.rowIndex],
      //     [this.cellIndex],
      //     rtData.turn
      //   );

      //   if (this.didWin()) {
      //     rtData.winner = rtData.turn;
      //     this.resetData();
      //   } else {
      //     if (rtData.turnChange >= 8) {
      //       rtData.winner = "DRAW";
      //       this.resetData();
      //     } else {
      //       rtData.winner = null;
      //       rtData.turn = rtData.turn === "O" ? "X" : "O";
      //       rtData.turnChange++;
      //     }
      //   }
      // },
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
