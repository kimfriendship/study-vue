<template>
  <tr>
    <ttt-td
      v-for="(cell, i) in rowData"
      :key="i"
      :rowIndex="rowIndex"
      :cellIndex="i"
    ></ttt-td>
  </tr>
</template>

<script>
  import TTTTd from "./TTTTd";
  export default {
    props: {
      rowIndex: Number,
    },
    computed: {
      rowData() {
        return this.$store.state.tableData[this.rowIndex];
      },
    },
    components: {
      tttTd: TTTTd,
    },
  };
</script>

<style></style>
