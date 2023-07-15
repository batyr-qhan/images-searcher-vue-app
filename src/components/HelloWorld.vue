<template>
  <div class="main">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
// import SearchBar from "./SearchBar.vue";
// import ImageGrid from "./ImageGrid.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    HeaderComponent,
    // SearchBar,
    // ImageGrid,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
