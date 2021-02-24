<template>
  <div class="inputBox shadow">
    <input type="text" v-model="TodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">Add</button> -->
    <span class="addContainer" v-on:click="addTodo">
     <i class="fas fa-check add addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      TodoItem: "",
    }
  },
  methods: {
    addTodo() {
      if(this.TodoItem !== "") {
      let obj = {completed: false, item: this.TodoItem}
      console.log(this.TodoItem);
      localStorage.setItem(this.TodoItem, JSON.stringify(obj));
      this.clearInput()
       }
    },
    clearInput () {
      this.TodoItem = "";
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 30px;
}
.inputBox input {
  border-style: none;
  font-size: 1rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to left, rgb(23, 142, 163), rgb(7, 214, 187));
  display: block;
  width: 2rem;
  border-radius: 10px 10px 10px 10px;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
i {
  font-size: 25px;
}
</style>