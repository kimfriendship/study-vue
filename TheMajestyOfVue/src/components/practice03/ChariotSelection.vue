<template>
  <div>
    <h3>"{{ name }}" chariot has {{ count }} horse(s)!</h3>
    <button @click="onClick" :disabled="checkSelected">
      {{ buttonMessage }}
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
      },
      count: {
        type: Number,
      },
      selectedCount: {
        type: Number,
      },
    },
    computed: {
      buttonMessage() {
        switch (true) {
          case 0 === this.selectedCount:
            return "Pick Chariot";
          case this.count > this.selectedCount:
            return "Hire Horses";
          case this.count < this.selectedCount:
            return "Dismiss Horses";
          case this.count === this.selectedCount:
            return "Riding!";
          default:
            return "";
        }
      },
      checkSelected() {
        return this.selectedCount === this.count;
      },
    },
    methods: {
      onClick() {
        this.$emit("ride", this.count);
      },
    },
  };
</script>

<style></style>
