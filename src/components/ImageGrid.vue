<template>
  <div class="wrapper">
    <div class="images-container">
      <ul class="images-list">
        <li
          class="image-item-container"
          v-for="photo in photos"
          :key="photo.id"
        >
          <img class="image" :src="photo?.urls?.thumb" alt="img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGrid",

  props: {
    photos: Array,
  },
};
</script>

<style>
.images-container {
  padding: 48px 24px;
}
.images-list {
  display: grid;
  grid-template-columns: auto;
  gap: 24px;
}

.image {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  aspect-ratio: 1;
}

@media only screen and (min-width: 800px) {
  .images-container {
    padding: 48px 0;
  }
  .images-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}
</style>
