<template>
  <div>
    <h1>Tic Tac Toe</h1>
    <div class="turn">{{ turn }}'s Turn</div>
    <ttt-table></ttt-table>
    <div v-if="winner" class="result">
      {{ winner === "DRAW" ? "DRAW!" : `${winner} Wins!` }}
    </div>
  </div>
</template>

<script>
  import TTTTable from "./TTTTable";
  import store from "./store";
  import { mapState } from "vuex";
  // import EventBus from "./EventBus";

  export default {
    store,
    components: {
      tttTable: TTTTable,
    },
    computed: {
      ...mapState(["winner", "turn"]),
      // winner() {
      //   return this.$store.state.winner;
      // },
      // turn() {
      //   return this.$store.state.turn;
      // },
    },
    data() {
      return {
        // turn: "O",
        // winner: null,
        // turnChange: 0,
        // tableData: [
        //   ["", "", ""],
        //   ["", "", ""],
        //   ["", "", ""],
        // ],
      };
    },
    // methods: {
    // resetData() {
    //   const rtData = this.$root.$data;
    //   rtData.turnChange = 0;
    //   rtData.tableData = [
    //     ["", "", ""],
    //     ["", "", ""],
    //     ["", "", ""],
    //   ];
    // },
    // didWin(rowIndex, cellIndex) {
    //   const turn = this.turn;
    //   const table = this.tableData;
    //   const rightDiagonal = [table[0][0], table[1][1], table[2][2]];
    //   const leftDiagonal = [table[0][2], table[1][1], table[2][0]];
    //   let win = false;

    //   if (table[rowIndex].every((flag) => flag === turn)) win = true;
    //   if (table.every((row) => row[cellIndex] === turn)) win = true;
    //   if (rightDiagonal.every((v) => v === turn)) win = true;
    //   if (leftDiagonal.every((v) => v === turn)) win = true;

    //   return win;
    // },
    // clickCell(rowIndex, cellIndex) {
    //   this.$set(this.tableData[rowIndex], cellIndex, this.turn);

    //   if (this.didWin(rowIndex, cellIndex)) {
    //     this.winner = this.turn;
    //     this.resetData();
    //   } else {
    //     if (this.turnChange >= 8) {
    //       this.winner = "DRAW";
    //       this.resetData();
    //     } else {
    //       this.winner = null;
    //       this.turn = this.turn === "O" ? "X" : "O";
    //       this.turnChange++;
    //     }
    //   }
    // },
    // },
    // created() {
    //   EventBus.$on("clickCell", this.clickCell);
    // },
  };
</script>

<style>
  .turn,
  .result {
    font-size: 30px;
    margin-top: 30px;
  }
</style>
