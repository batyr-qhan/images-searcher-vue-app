<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Roboto, "sans-serif";
  height: 100%;
}

@media only screen and (min-width: 800px) {
  .wrapper {
    max-width: 900px;
    min-width: 900px;
    margin: 0 auto;
  }
}
</style>
