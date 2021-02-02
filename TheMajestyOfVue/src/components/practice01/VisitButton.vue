<template>
  <button @click="onClick" v-if="showButton">Visit</button>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
      },
    },
    computed: {
      showButton() {
        return this.count < 3;
      },
    },
    methods: {
      onClick() {
        this.$emit("click");
      },
    },
  };
</script>

<style></style>
