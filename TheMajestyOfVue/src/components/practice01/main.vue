<template>
  <div>
    <h2>Where would you like to go?</h2>
    <ul>
      <li
        v-for="(planet, i) in planets"
        :key="i"
        @click="increaseVisitCount(planet.name)"
      >
        Planet: {{ planet.name }} Visited {{ planet.count }} time(s).
        <visit-button :count="planet.count"></visit-button>
      </li>
    </ul>
  </div>
</template>

<script>
  import VisitButton from "./VisitButton";
  import Vue from "vue";

  export default {
    components: {
      VisitButton,
    },
    data() {
      return {
        planets: [
          { name: "Mars", count: 0 },
          { name: "Earth", count: 0 },
          { name: "Venus", count: 0 },
          { name: "Jupiter", count: 0 },
        ],
      };
    },
    methods: {
      increaseVisitCount(planetName) {
        const planet = this.planets.filter(
          ({ name }) => name === planetName
        )[0];
        const count = planet.count + 1;
        if (count > 3) return;
        return Vue.set(planet, "count", count);
      },
    },
  };
</script>

<style></style>
