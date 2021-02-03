<template>
  <section>
    <h2>Where would you like to go?</h2>
    <ul>
      <li v-for="(planet, i) in planets" :key="i">
        Planet: {{ planet.name }} Visited {{ planet.count }} time(s).
        <visit-button :planet="planet"></visit-button>
      </li>
    </ul>
  </section>
</template>

<script>
  import VisitButton from "./VisitButton";

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
  };
</script>

<style></style>
