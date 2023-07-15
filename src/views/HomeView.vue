<template>
  <div class="container">
    <search-bar
      :searchValue="searchValue"
      @update:searchValue="(newValue) => (searchValue = newValue)"
      @handleSearch="(e) => getPhotosOnSearch(e)"
    ></search-bar>
    <image-grid
      v-if="!isLoading && !isEmpty && photos.length"
      :photos="photos"
    ></image-grid>
    <div v-else class="content">
      <div class="status-info" v-if="isLoading && !isEmpty">Is Loading...</div>
      <div class="status-info" v-else-if="isEmpty && !isLoading">
        Nothing Found, Please Try Again
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import ImageGrid from "../components/ImageGrid.vue";

import { unsplash } from "../api/unsplash";

export default {
  name: "HomeView",
  data() {
    return {
      searchValue: "",
      photos: [],
      isLoading: false,
      isEmpty: false,
    };
  },
  methods: {
    getPhotosOnSearch(e) {
      e.preventDefault();
      this.isLoading = true;
      unsplash.search
        .getPhotos({
          query: this.searchValue,
          page: 1,
          perPage: 8,
          orientation: "squarish",
        })
        .then((result) => {
          console.log(result);
          if (result.type === "success") {
            this.photos = result.response.results;
            this.searchValue = "";
            if (result.response.results.length === 0) {
              this.isEmpty = true;
            } else {
              this.isEmpty = false;
            }
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
      // .finally(() => {
      //   this.isLoading = false;
      // });
    },
  },
  created() {
    console.log("this is created");

    // unsplash.photos
    //   .getRandom({ count: 8, orientation: "squarish" })
    //   .then((result) => {
    //     console.log(result);
    //     if (result.type === "success") {
    //       console.log("this is result", result.response);
    //       this.photos = result.response;
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },

  components: {
    SearchBar,
    ImageGrid,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* height: 100vh; */
}
.content {
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
