<template>
  <div>
    <h1>Mine Sweeper</h1>
    <mine-form></mine-form>
    <h2>{{ timer }}</h2>
    <mine-table></mine-table>
    <h2>{{ result }}</h2>
  </div>
</template>

<script>
  import store, { INCREMENT_TIMER } from "./store";
  import { mapState } from "vuex";
  import mineForm from "./MineForm";
  import mineTable from "./MineTable";

  let interval;

  export default {
    store,
    computed: {
      ...mapState(["timer", "result", "halted"]),
    },
    components: {
      mineForm,
      mineTable,
    },
    watch: {
      halted(isHalted, wasHalted) {
        if (!isHalted) {
          interval = setInterval(() => {
            this.$store.commit(INCREMENT_TIMER);
          }, 1000);
        } else {
          clearInterval(interval);
        }
      },
    },
    beforeDestroy() {
      clearInterval(interval);
    },
  };
</script>

<style></style>
