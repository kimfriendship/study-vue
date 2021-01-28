<template>
  <table>
    <tr v-for="(rowData, rowIdx) in table" :key="rowIdx">
      <td
        v-for="(cellData, cellIdx) in rowData"
        :key="cellIdx"
        :style="cellDataStyle(rowIdx, cellIdx)"
        @click="clickCell(rowIdx, cellIdx)"
        @contextmenu.prevent="rightClickCell(rowIdx, cellIdx)"
      >
        {{ cellDataText(rowIdx, cellIdx) }}
      </td>
    </tr>
  </table>
</template>

<script>
  import { mapState } from "vuex";
  import {
    CODE,
    OPEN_CELL,
    QUESTION_CELL,
    FLAG_CELL,
    NORMALIZE_CELL,
  } from "./store";

  const defaultStyle = {
    display: "inline-block",
    border: "1px solid black",
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
    cursor: "pointer",
  };

  export default {
    computed: {
      ...mapState(["table"]),
      //TODO: 동작 원리 생각 해보기
      cellDataStyle(state) {
        return (row, cell) => {
          switch (this.$store.state.table[row][cell]) {
            case CODE.NORMAL:
            case CODE.MINE:
              return { ...defaultStyle, background: "darkgray" };
            case CODE.CLICKED_MINE:
            case CODE.OPENED:
              return { ...defaultStyle, background: "white" };
            case CODE.FLAG:
            case CODE.FLAG_MINE:
              return { ...defaultStyle, background: "coral" };
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
              return { ...defaultStyle, background: "lemonchiffon" };
            default:
              return defaultStyle;
          }
        };
      },
      cellDataText(state) {
        return (row, cell) => {
          switch (this.$store.state.table[row][cell]) {
            case CODE.NORMAL:
              return "";
            case CODE.MINE:
              return "X";
            case CODE.CLICKED_MINE:
              return "펑!";
            case CODE.FLAG:
            case CODE.FLAG_MINE:
              return "!";
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
              return "?";
            default:
              return "";
          }
        };
      },
    },
    methods: {
      clickCell(row, cell) {
        this.$store.commit(OPEN_CELL, { row, cell });
      },
      rightClickCell(row, cell) {
        switch (this.table[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE:
            this.$store.commit(FLAG_CELL, { row, cell });
            return;
          case CODE.FLAG_MINE:
          case CODE.FLAG:
            this.$store.commit(QUESTION_CELL, { row, cell });
            return;
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
            this.$store.commit(NORMALIZE_CELL, { row, cell });
            return;
          default:
            console.log("clicked");
            return;
        }
      },
    },
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }

  /* td {
    display: inline-block;
    border: 1px solid black;
    width: 50px;
    height: 50px;
    text-align: center;
    cursor: pointer;
  } */
</style>
