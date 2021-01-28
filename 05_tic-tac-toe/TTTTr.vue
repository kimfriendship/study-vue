<template>
  <tr>
    <ttt-td
      v-for="(cell, i) in rowData"
      :key="i"
      :cell="cell"
      :rowIndex="rowIndex"
      :cellIndex="i"
    ></ttt-td>
  </tr>
</template>

<script>
  import TTTTd from "./TTTTd";
  export default {
    props: {
      rowData: Array,
      rowIndex: Number,
    },
    components: {
      tttTd: TTTTd,
    },
  };
</script>

<style></style>
