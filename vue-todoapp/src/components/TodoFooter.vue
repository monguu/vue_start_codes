<template>
  <div class="clearContainer">
    <span class="clearBtn" v-on:click="allClearTodo">
      전부삭제
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    allClearTodo () {
      this.$emit("deleteTodo")
     
    }
  },
};

</script>

<style scoped>
.clearContainer {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: rgb(29, 187, 226);
  border-radius: 10px;
  margin: 0 auto;
  
}
.clearBtn {
  color: rgb(255, 255, 255);
  display: block;
  border-style: solid 3px rgb(13, 232, 240);
}

</style>