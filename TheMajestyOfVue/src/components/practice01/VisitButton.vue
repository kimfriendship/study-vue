<template>
  <button @click="onClick" v-if="showButton">Visit</button>
</template>

<script>
  export default {
    props: {
      planet: {
        type: Object,
      },
    },
    computed: {
      showButton() {
        return this.planet.count < 3;
      },
    },
    methods: {
      onClick() {
        this.$emit("increase");
      },
    },
  };
</script>

<style></style>
