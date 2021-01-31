<template>
  <div>
    <new-todo-input v-model="content"></new-todo-input>
    <custom-button @click="onClickAdd">ADD</custom-button>
  </div>
</template>

<script>
import NewTodoInput from "../components/NewTodoInput.vue";
import CustomButton from "../components/CustomButton.vue";

export default {
  components: {
    NewTodoInput,
    CustomButton
  },
  computed: {
    newTodoContent() {
      return this.$store.state.newTodoContent;
    }
  },
  methods: {
    onClickAdd() {
      console.log("ADD");
    }
  },
  data() {
    return {
      content: ""
    };
  }
};
</script>

<style></style>
