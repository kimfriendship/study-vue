<template>
  <div class="modal-container">
    <component v-for="modal in modals" :is="modal.comp" :key="modal.id" :options="modal.options" @close="close(modal.id)" @resolve="result => resolve(modal.id, result)" @reject="reject(modal.id)"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      modals: [],
    }
  },
  methods: {
    add(comp, options) {
      return new Promise((resolve, reject) => {
        this.modals.push({comp, options, id: this.id++, resolve, reject});
      });
    },
    close(id) {
      this.modals = this.modals.filter(el => el.id !== id);
    },
    resolve(id, result) {
      this.modals.find(el => el.id === id).resolve(result);
      this.close(id);
    },
    reject(id) {
      this.modals.find(el => el.id === id).reject();
      this.close(id);
    }
  }
}
</script>

<style scoped>
</style>