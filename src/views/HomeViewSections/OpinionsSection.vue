<template>
  <section v-if="opinions.loaded" class="opinion-section section">
    <h2 class="opinion-section-title">Trust your choice</h2>
    <div class="opinion-section-outer-container">
      <div class="opinion-section-container" @click="openOverlay">
        <div class="rating-container">
          <p class="word-rating">{{ opinions.ratingWord }}</p>
          <p class="number-rating">{{ opinions.score }}</p>
        </div>
        <div class="trustpilot-container">
          <h3 class="trustpilot-container-title">TRUSTPILOT</h3>
          <div class="stair-container">
            <img
              class="star"
              src="@/assets/01_images/02_icons/white-star.png"
              alt="empty star"
            />
            <img
              class="star"
              src="@/assets/01_images/02_icons/white-star.png"
              alt="empty star"
            />
            <img
              class="star"
              src="@/assets/01_images/02_icons/white-star.png"
              alt="empty star"
            />
            <img
              class="star"
              src="@/assets/01_images/02_icons/white-star.png"
              alt="empty star"
            />
            <img
              class="star"
              src="@/assets/01_images/02_icons/white-star.png"
              alt="empty star"
            />
            <div
              class="star-color"
              :style="{ width: opinions.score * 20 + '%' }"
            ></div>
          </div>
          <div class="trustpilot-link-container">
            <p>Based on</p>
            <p class="link-paragraph">{{ opinions.opinion.length }} reviews</p>
          </div>
        </div>
      </div>
      <div class="carousel-container">
        <Carousel
          class="carousel"
          :items-to-show="1"
          :autoplay="10000"
          :wrap-around="true"
        >
          <Slide class="slide" v-for="slide in 3" :key="slide">
            <div class="carousel__item">
              <h3 class="carousel__item-title">
                {{ opinions.opinion[slide].title }}
              </h3>
              <p class="carousel__item-description">
                {{ opinions.opinion[slide].description }}
              </p>
              <div class="stair-container">
                <img
                  class="star"
                  src="@/assets/01_images/02_icons/background-star.png"
                  alt="empty star"
                />
                <img
                  class="star"
                  src="@/assets/01_images/02_icons/background-star.png"
                  alt="empty star"
                />
                <img
                  class="star"
                  src="@/assets/01_images/02_icons/background-star.png"
                  alt="empty star"
                />
                <img
                  class="star"
                  src="@/assets/01_images/02_icons/background-star.png"
                  alt="empty star"
                />
                <img
                  class="star"
                  src="@/assets/01_images/02_icons/background-star.png"
                  alt="empty star"
                />
                <div
                  class="star-color"
                  :style="{ width: opinions.opinion[slide].rating * 20 + '%' }"
                ></div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <transition name="overlayAnimation">
      <div
        v-if="showOpinionsOverlay"
        class="opinion-overlay"
        @click="closeOverlay"
      ></div>
    </transition>
    <transition name="slideFromRight">
      <OpinionSidepanelVue
        v-if="showOpinionsOverlay"
        :opinions="opinions"
        @closeOverlay="closeOverlay"
      />
    </transition>
  </section>
</template>

<script setup>
import { onMounted, ref, defineComponent, computed } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import getOpinions from "@/composables/getOpinions.js";
import OpinionSidepanelVue from "./OpinionSidepanel.vue";

const opinions = ref({
  opinion: [],
  loaded: false,
  score: 0,
  ratingWord: "",
});

const showOpinionsOverlay = ref(false);

const openOverlay = () => {
  showOpinionsOverlay.value = true;
};

const closeOverlay = () => {
  showOpinionsOverlay.value = false;
};

const myCarousel = ref(null);

onMounted(async () => {
  try {
    opinions.value.opinion = await getOpinions();
    opinions.value.loaded = true;
    for (let i = 0; i < opinions.value.opinion.length; i++) {
      opinions.value.score += opinions.value.opinion[i].rating;
    }
    opinions.value.score /= opinions.value.opinion.length;
    opinions.value.score = opinions.value.score.toFixed(1);

    switch (true) {
      case opinions.value.score <= 1:
        opinions.value.ratingWord = "POOR";
        break;
      case opinions.value.score <= 2:
        opinions.value.ratingWord = "FAIR";
        break;
      case opinions.value.score <= 3:
        opinions.value.ratingWord = "GOOD";
        break;
      case opinions.value.score <= 4:
        opinions.value.ratingWord = "VERY GOOD";
        break;
      case opinions.value.score <= 5:
        opinions.value.ratingWord = "EXCELLENT";
        break;
      default:
        opinions.value.ratingWord = "Invalid rating";
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.opinion-section {
  height: 80vh;
  padding: 0;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.opinion-section-title {
  font-size: 72px;
  font-weight: 700;
  margin-left: 200px;
}

.opinion-section-outer-container {
  display: flex;
}

.opinion-section-container {
  height: 200px;
  width: 600px;
  display: flex;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
}

.opinion-section-container:hover {
  box-shadow: 8px 8px 24px 0px rgb(186, 186, 186);
}

.rating-container {
  height: 200px;
  width: 200px;
  background-color: rgb(67, 149, 209);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.word-rating {
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.number-rating {
  color: white;
  font-size: 88px;
  font-weight: 700;
  margin: 0;
}

.trustpilot-container {
  height: 200px;
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  gap: 15px;
}

.trustpilot-container-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.stair-container {
  height: 30px;
  width: 150px;
  margin: 0;
  padding: 0;
  position: relative;
}

.star {
  height: 30px;
  position: relative;
  z-index: 1;
}

.star-color {
  height: 28px;
  position: absolute;
  background-color: rgb(79, 218, 137);
  top: 0.5px;
}

.trustpilot-link-container {
  display: flex;
  gap: 2px;
}

.trustpilot-link-container p {
  margin: 0;
}

.link-paragraph {
  color: rgb(67, 149, 209);
}

.carousel-container {
  width: 600px;
  border-radius: 25px;
  overflow: hidden;
}

.carousel {
  width: 100%;
  box-sizing: border-box;
}

.carousel__viewport {
  height: 400px;
}

.carousel__item {
  height: 100%;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
}

.carousel__item-title,
.opinion-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
}

.carousel__item-description,
.opinion-description {
  text-align: left;
  font-size: 18px;
  line-height: 24px;
}

.carousel__pagination-button {
  width: 30px;
}

.opinion-overlay {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 3;
}

.overlayAnimation-enter-from,
.overlayAnimation-leave-to {
  opacity: 0;
}

.overlayAnimation-enter-active,
.overlayAnimation-leave-active {
  transition: all 0.5s ease;
}

.overlayAnimation-enter-to,
.overlayAnimation-leave-from {
  opacity: 1;
}

.slideFromRight-enter-from,
.slideFromRight-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slideFromRight-enter-active,
.slideFromRight-leave-active {
  transition: all 0.5s ease;
}

.slideFromRight-enter-to,
.slideFromRight-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
</style>
