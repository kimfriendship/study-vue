<template>
  <div>
    <component
      v-for="{ id, comp, options, resolve, reject } in modalList"
      :key="id"
      :is="comp"
      :options="options"
      @resolve="(res) => resolve(res)"
      @reject="reject"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 0,
        modalList: [],
      };
    },
    methods: {
      add(comp, options) {
        return new Promise((resolve, reject) => {
          this.modalList.push({
            id: this.id++,
            comp,
            options,
            resolve,
            reject,
          });
        });
      },
    },
  };
</script>

<style></style>
