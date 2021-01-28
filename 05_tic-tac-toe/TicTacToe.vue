<template>
  <div>
    <h1>Tic Tac Toe</h1>
    <div class="turn">{{ turn }}'s Turn</div>
    <ttt-table :tableData="tableData"></ttt-table>
    <div v-if="winner" class="result">
      {{ winner === "DRAW" ? "DRAW!" : `${winner} Wins!` }}
    </div>
  </div>
</template>

<script>
  import TTTTable from "./TTTTable";

  export default {
    components: {
      tttTable: TTTTable,
    },
    data() {
      return {
        turn: "O",
        winner: null,
        turnChange: 0,
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      };
    },
  };
</script>

<style>
  .turn,
  .result {
    font-size: 30px;
    margin-top: 30px;
  }
</style>
