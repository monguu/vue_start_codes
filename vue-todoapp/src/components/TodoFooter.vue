<template>
  <div class="clearContainer">
    <span class="clearBtn" v-on:click="allClearTodo">
      전부삭제
    </span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TodoFooter",
  methods: {
    ...mapMutations ({
      allClearTodo: "deleteComTodo"
    })
    // allClearTodo () {
    //   this.$store.commit("deleteComTodo")
     
    // }
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
}

</style>