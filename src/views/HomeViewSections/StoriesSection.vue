<template>
  <section class="stories-section section">
    <img
      class="blue-triangle-background"
      src="@/assets/01_images/02_icons/triangle_blue.svg"
      alt="white square background"
    />

    <h2 class="stories-section-title">Follow our journey</h2>
    <div v-if="sampleStories.loaded" class="example-stories-container">
      <div class="example-story-container" v-for="storie in 3" :key="storie">
        <img
          class="example-story-image"
          :src="
            require(`@/assets/01_images/03_backgrounds/${
              sampleStories.stories[storie - 1].image
            }`)
          "
          alt="stories image"
        />
        <h3 class="example-story-title">
          {{ sampleStories.stories[storie - 1].title }}
        </h3>
        <p class="example-story-description">
          {{ sampleStories.stories[storie - 1].description }}
        </p>
        <button
          class="example-stories-button"
          @click="goToView(sampleStories.stories[storie - 1].link)"
        >
          READ MORE
        </button>
      </div>
    </div>
    <button class="stories-section-button" @click="goToView('stories')">
      SEE ALL
    </button>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import getSampleStories from "@/composables/getSampleStories";

const router = useRouter();

const goToView = (product) => {
  router.push(`/${product}`);
};

const sampleStories = ref({
  stories: [],
  loaded: false,
});

onMounted(async () => {
  try {
    sampleStories.value.stories = await getSampleStories();
    sampleStories.value.loaded = true;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
.stories-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.blue-triangle-background {
  position: absolute;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(15deg);
  z-index: -2;
}

.stories-section-title {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
}

.stories-section-button {
  height: 60px;
  width: 170px;
  border: 2px solid black;
  border-radius: 30px;
  background-color: transparent;
  font-weight: 600;
}

.stories-section-button:hover {
  background-color: black;
  color: white;
}

.example-stories-container {
  display: flex;
  gap: 15px;
}

.example-story-container {
  border-radius: 25px;
  overflow: hidden;
  width: 400px;
  height: 500px;
  background-color: white;
  position: relative;
  margin-bottom: 30px;
}
.example-story-image {
  width: 400px;
  object-fit: cover;
  object-position: center;
}

.example-story-title {
  font-size: 18px;
  padding: 0 25px 0;
  font-weight: 700;
}

.example-story-description {
  font-size: 16px;
  padding: 0 25px 0;
}

.example-stories-button {
  height: 60px;
  width: 150px;
  border: 2px solid black;
  border-radius: 30px;
  background: transparent;
  position: absolute;
  right: 30px;
  bottom: 30px;
  font-weight: 600;
}

.example-stories-button:hover {
  background-color: black;
  color: white;
}
</style>
