<template>
  <div class="search-bar">
    <div class="wrapper">
      <form
        @submit="(e) => $emit('handleSearch', e)"
        class="search-bar__content"
      >
        <input
          :value="searchValue"
          @input="$emit('update:searchValue', $event.target.value)"
          class="input"
          placeholder="Search..."
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: ["searchValue", "onSubmit"],
};
</script>

<style>

@media only screen and (max-width: 799px) {
  .search-bar {
    padding: 64px 24px;
  }
}

@media only screen and (min-width: 800px) {
  .search-bar {
    padding: 64px 0;
  }
  .input {
    width: 80%;
  }
  .search-bar__content {
    width: 60%;
    margin: 0 auto;
  }
}

.search-bar {
  /* padding: 64px 24px; */
  background-image: url(~@/assets/background-image-search-section.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.search-bar__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input {
  width: 100%;
  padding: 20px 24px;
  outline: none;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
  /* padding: 80px 0; */
}
</style>
