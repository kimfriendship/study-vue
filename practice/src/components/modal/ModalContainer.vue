<template>
  <div>
    <component
      v-for="{ id, comp, options } in modalList"
      :key="id"
      :is="comp"
      :options="options"
      @resolve="(res) => resolve(id, res)"
      @reject="(err) => reject(id, err)"
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
      close(id) {
        this.modalList = this.modalList.filter((modal) => modal.id !== id);
      },
      resolve(id, res) {
        console.log("===resolve===");
        this.modalList.find((modal) => modal.id === id).resolve(res);
        this.close(id);
      },
      reject(id, err) {
        console.log("===reject===");
        this.modalList.find((modal) => modal.id === id).reject(err);
        this.close(id);
      },
    },
  };
</script>
