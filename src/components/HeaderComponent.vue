<template>
  <div class="header">
    <div class="wrapper">
      <div class="header__content">
        <router-link to="/">
          <img src="@/assets/logo.svg" class="header__logo" />
        </router-link>
        <ul class="header__links">
          <!-- <div>{{ currentRouteName }}</div> -->
          <router-link
            v-if="currentRouteName !== 'Home'"
            to="/"
            class="header__link-container"
          >
            <img src="@/assets/search_logo.svg" height="20" />
            <span class="header__link-title">Search</span>
          </router-link>
          <router-link
            v-if="currentRouteName !== 'Favorite'"
            to="/favorite"
            class="header__link-container"
          >
            <img src="@/assets/like_logo.svg" height="20" />
            <span class="header__link-title">Favorite</span>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { useRoute } from "vue-router";
export default {
  name: "HeaderComponent",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
.header {
  background-color: black;
  color: white;
}
.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}
.header__links {
  display: flex;
  align-items: center;
}
.header__link-container {
  display: flex;
  align-items: center;
  margin-right: 24px;
}
.header__link-container:last-child {
  margin: 0;
}
.header__link-container img {
  margin-right: 12px;
}
.header__link-title {
  display: none;
}
a {
  text-decoration: none;
  color: white;
}

@media only screen and (min-width: 800px) {
  .header__content {
    padding: 24px 0;
  }
  .header__link-title {
    display: inline-block;
  }
}
</style>
