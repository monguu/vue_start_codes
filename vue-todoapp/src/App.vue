<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addcomTodo"></TodoInput>
    <Todolist 
    v-bind:propsdata="todoItems"  
    v-on:removeItem="removeComItem"
    v-on:completeTodo="completeComTodo"
    >
    </Todolist>
    <TodoFooter v-on:deleteTodo="deleteComTodo">
    </TodoFooter>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import Todolist from "./components/Todolist.vue";
import TodoInput from "./components/TodoInput.vue";
export default {
  data() {
    return{
      todoItems: [],
    }
  },
  methods: {
    addcomTodo(todoItem) {
       let obj = {completed: false, item: todoItem}
      console.log(todoItem);
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeComItem (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1)
    },
    completeComTodo(todoItem, index) {
      //  todoItem.completed =! todoItem.completed
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.index);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    deleteComTodo() {
       localStorage.clear()
       this.todoItems = "";
    }
  },
   created() {
    if(localStorage.length > 0) {
      for(let i=0; i < localStorage.length; i++) {
       if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
        this.todoItems
        .push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  },
  components: {
    TodoFooter,
    TodoHeader,
    Todolist,
    TodoInput,
  },
};
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
