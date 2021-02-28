<template>
  <div class="inputBox shadow">
    <input 
    type="text" v-model="todoItem" v-on:keyup.enter="addTodo"
    placeholder="할일을 입력해주세요.">
    <span class="addContainer" v-on:click="addTodo">
     <i class="fas fa-check add addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">경고
      <div>
      <i class="far fa-angry"></i>
      </div>
    </h3>
    <h3 slot="body">할일을 등록해주세요!</h3>
    <h5 slot="footer">Monguu App
      <div>
        <i class="far fa-times-circle closeModalBtn"
          @click="showModal = false"
        ></i>
      </div>
    </h5>
  </Modal>
  </div>
</template>

<script>
import Modal from "./ground/Modal";
export default {
  name: "TodoInput",
  data() {
    return {
      todoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.todoItem !== "") {
        // const text = this.todoItem.trim()
        this.$store.commit('addcomTodo', this.todoItem)
        this.clearInput()
       }else {
         this.showModal = !this.showModal
       }
    },
    clearInput () {
      this.todoItem = "";
    }
  },
  components: {
    Modal,
  },
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
  border: solid 3px rgb(21, 226, 233);
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
h1 {
  color: red
}
.closeModalBtn {
  color:burlywood;
  float: right;
}
</style>