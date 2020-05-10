<template>
  <div id="app">
    <h1>{{$store.getters.getCount}}</h1>
    <button @click="add">Add</button>
    <hr />
    <ComA />
    <hr />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ComA from "./components/ComA.vue";

export default {
  name: "App",
  mounted() {
    setInterval(() => {
      // this.$store.state.count++;
    }, 1000);
  },
  methods: {
    add() {
      this.$store.dispatch("addAction");
    }
  },
  components: {
    HelloWorld,
    ComA
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
