<template>
  <input type="checkbox" :checked="isDone" @change="onChange" />
</template>

<script>
export default {
  model: {
    prop: "isDone",
    event: "change"
  },
  props: {
    isDone: Boolean
  },
  methods: {
    onChange(e) {
      this.$emit("change", e.target.checked);
    }
  }
};
</script>

<style></style>
