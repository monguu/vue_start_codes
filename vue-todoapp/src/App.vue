<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <Todolist></Todolist>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import Todolist from "./components/Todolist.vue";
import TodoInput from "./components/TodoInput.vue";
export default {
  components: {
    TodoFooter,
    TodoHeader,
    Todolist,
    TodoInput,
  },
};
</script>

<style>
</style>
