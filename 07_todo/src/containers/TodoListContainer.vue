<template>
  <div>
    <todo-checkbox v-model="isDone"> </todo-checkbox>
    <todo-content :content="content"></todo-content>
    <custom-button @click="onClickDelete">X</custom-button>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import TodoCheckbox from "../components/TodoCheckbox.vue";
import TodoContent from "../components/TodoContent.vue";

export default {
  components: { TodoCheckbox, TodoContent, CustomButton },
  data() {
    return {
      isDone: true,
      content: "hi"
    };
  },
  methods: {
    onClickDelete() {
      console.log("delete");
    }
  }
};
</script>

<style></style>
