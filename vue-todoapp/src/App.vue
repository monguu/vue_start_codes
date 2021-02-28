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

}

</script>

<style>
body {
  text-align: center;
  background-color:rgb(198, 237, 238);
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
  }
.shadow {
  box-shadow: 10px 10px 10px rgb(4, 0, 8);
}
</style>
