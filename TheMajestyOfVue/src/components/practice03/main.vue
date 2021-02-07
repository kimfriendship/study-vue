<template>
  <section>
    <h2>Chariot shopping</h2>
    <chariot-selection
      v-for="chariot of chariotList"
      :key="chariot.id"
      :name="chariot.name"
      :count="chariot.horseCount"
      :selectedCount="selectedHorseCount"
      @ride="rideChariot"
    >
    </chariot-selection>
  </section>
</template>

<script>
  import ChariotSelection from "./ChariotSelection";
  export default {
    components: {
      ChariotSelection,
    },
    data() {
      return {
        selectedHorseCount: 0,
        chariotList: [
          { id: 1, name: "Olympus", horseCount: 4 },
          { id: 2, name: "Icarus", horseCount: 3 },
          { id: 3, name: "Abraxas", horseCount: 2 },
          { id: 4, name: "Mambasa", horseCount: 1 },
        ],
      };
    },
    methods: {
      rideChariot(count) {
        this.selectedHorseCount = count;
      },
    },
  };
</script>

<style></style>
