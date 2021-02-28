<template>
<div>
  <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.$store.state.todoItems" 
        v-bind:key="todoItem.item">
        <span class="checkBtn" 
          v-on:click="completedTodo(todoItem, index)" 
          v-bind:class="{checkBtnCompleted: todoItem.completed}"
          ><i class="far fa-check-square"></i>
        </span>
        <span v-bind:class="{textCompleted: todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <span 
          class="removeBtn" 
          v-on:click="removeTodo(todoItem, index)"
          ><i class="far fa-trash-alt"></i>
        </span>
      </li>
  </transition-group>
</div>
</template>

<script>
export default {
  name: "Todolist",
  // props: ["propsdata"],
   methods: {
    removeTodo(todoItem, index) {
      this.$store.commit("removeComItem", {todoItem, index})
    },
    completedTodo(todoItem, index) {
      this.$store.commit("completeComTodo", {todoItem, index})
    }
  },
};
</script>

<style scoped>
ul {
  /* 리스트 점 없애는타입 */
  list-style-type: none;
  padding: 0px 0px;
  margin-top:20px;
  text-align: center;
}
li {
  display: flex;
  /* 전체 높이 최소 값  */
  min-height: 50px;
  height: 50px;
  /* 텍스트 가운데 정렬  */
  line-height: 50px;  
  margin: 10px 0;
  padding: 0 20px;
  background: #fff;
  border-radius: 10px;
  /* 솔리드 태두리 스타일 */
  border-style: solid rgb(188, 241, 243);
  box-shadow: 10px 5px 10px rgb(82, 79, 79);
  margin-right: 30px;
  margin-left: 30px;
}
.checkBtn {
  line-height:45px;
  color: rgb(77, 202, 224);
  margin-right: 10px;
}
.checkBtnCompleted {
  color: rgb(131, 131, 131)
}
.removeBtn {
  margin-left: auto;
  color: rgb(236, 65, 122);
  font-size: 15px;
}
.textCompleted {
  text-decoration: line-through;
  color: rgb(102, 101, 101)
}
/* 리스트 아이템 뷰 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>