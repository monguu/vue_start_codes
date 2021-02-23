<template>
  <div id="app">
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">ID: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="passwrod">PW: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: '',
      password: '',
      value:"",
    }
  },
  methods: {
    submitForm() {
      // event.preventDefault(); //새로고침 막는 이벤트
      console.log(this.username, this.password)
      let url = 'https://jsonplaceholder.typicode.com/users';
      axios.post();
    }
  }
}
</script>

<style>

</style>
