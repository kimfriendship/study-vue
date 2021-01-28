<template>
  <table>
    <ttt-tr v-for="(_, i) in tableData" :key="i" :rowIndex="i"></ttt-tr>
  </table>
</template>

<script>
  import TTTTr from "./TTTTr";

  export default {
    computed: {
      tableData() {
        return this.$store.state.tableData;
      },
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
