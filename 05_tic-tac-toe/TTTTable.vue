<template>
  <table>
    <ttt-tr
      v-for="(rowData, i) in tableData"
      :key="i"
      :rowData="rowData"
      :rowIndex="i"
    ></ttt-tr>
  </table>
</template>

<script>
  import TTTTr from "./TTTTr";

  export default {
    props: {
      tableData: Array,
    },
    components: {
      tttTr: TTTTr,
    },
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }
</style>
