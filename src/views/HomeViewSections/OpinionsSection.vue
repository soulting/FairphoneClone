<template>
  <section v-if="opinions.loaded" class="opinion-section section">
    <p class="opinion-section-title">Trust your choice</p>
    <div class="opinion-section-outer-container">
      <div class="opinion-section-container" @click="openOverlay">
        <div class="rating-container">
          <p class="word-rating">{{ opinions.ratingWord }}</p>
          <p class="number-rating">{{ opinions.score }}</p>
        </div>
        <div class="trustpilot-container">
          <p class="trustpilot-container-title">TRUSTPILOT</p>
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
          :autoplay="50000"
          :wrap-around="true"
        >
          <Slide class="slide" v-for="slide in 3" :key="slide">
            <div class="carousel__item">
              <p class="carousel__item-title">
                {{ opinions.opinion[slide].title }}
              </p>
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
      <div v-if="showOpinionsOverlay" class="overlay-inner-container">
        <div class="opinions-with-container-title">
          <p class="overlay-inner-container-title">Fairphone Reviews</p>
          <div class="all-opinions-container">
            <div
              class="opinion-outer"
              v-for="opinion in opinions.opinion"
              :key="opinion"
            >
              <div
                v-if="xStarOpinion[opinion.rating - 1]"
                class="opinion-inner"
              >
                <p class="opinion-title">
                  {{ opinion.title }}
                </p>
                <p class="opinion-description">
                  {{ opinion.description }}
                </p>
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
                    :style="{ width: opinion.rating * 20 + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="opinion-stats-container">
          <button
            class="overlay-opinion-container-button"
            @click="closeOverlay"
          >
            <img src="@/assets/01_images/02_icons/close.png" alt="close icon" />
          </button>

          <div class="overlay-opinion-section-container">
            <div class="overlay-rating-container">
              <p class="overlay-word-rating">{{ opinions.ratingWord }}</p>
              <p class="overlay-number-rating">{{ opinions.score }}</p>
            </div>
            <div class="overlay-trustpilot-container">
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
              <div class="overlay-trustpilot-link-container">
                <p>Based on&nbsp;</p>
                <p class="link-paragraph">
                  {{ opinions.opinion.length }} reviews
                </p>
              </div>
            </div>
          </div>
          <div class="rating-options">
            <div
              v-for="star in [5, 4, 3, 2, 1]"
              :key="star"
              class="rating-option"
              @click="show_N_starOpinion(star - 1)"
            >
              <img
                v-if="xStarOpinion[star - 1]"
                src="@/assets/01_images/02_icons/check.png"
                alt="checked icon"
              />
              <img
                v-else
                src="@/assets/01_images/02_icons/un-check.png"
                alt="unchecked icon"
              />

              <p>{{ star }} -star</p>
              <div class="procentage-container">
                <div
                  class="procentage"
                  :style="{ width: calculateProcentage(star) + '%' }"
                ></div>
              </div>
              <p>{{ calculateProcentage(star) }} %</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { onMounted, ref, defineComponent, computed } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import getOpinions from "@/composables/getOpinions.js";

const opinions = ref({
  opinion: [],
  loaded: false,
  score: 0,
  ratingWord: "",
});

const calculateProcentage = (n) => {
  console.log(opinions.value.opinion.length);
  if (opinions.value.opinion.length != 0) {
    let numberOfOpinions = 0;
    for (let i = 0; i < opinions.value.opinion.length; i++) {
      if (opinions.value.opinion[i].rating === n) {
        numberOfOpinions++;
      }
    }
    return ((numberOfOpinions / opinions.value.opinion.length) * 100).toFixed(
      1
    );
  }
};

const xStarOpinion = ref([true, true, true, true, true]);

const show_N_starOpinion = (n) => {
  xStarOpinion.value[n] = !xStarOpinion.value[n];
};

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
  height: 400px !important;
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
  font-weight: 700;
  margin-bottom: 0px;
}

.carousel__item-description,
.opinion-description {
  text-align: left;
  font-size: 18px;
  line-height: 24px;
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

.overlay-inner-container {
  top: 0;
  right: 0;
  height: 100%;
  width: 75%;
  position: fixed;
  background-color: rgb(255, 255, 255, 1);
  z-index: 3;
  display: flex;
  padding: 20px 50px;
  box-sizing: border-box;
  justify-content: space-between;
}

.opinions-with-container-title {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 65%;
}

.overlay-inner-container-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 30px;
}

.overlay-opinion-container-button {
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: white;
  border: solid black 1px;
  position: absolute;
  right: 75px;
  top: 30px;
}

.overlay-opinion-container-button img {
  height: 35px;
  position: absolute;
  transform: translate(-50%, -50%);
}

.all-opinions-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.all-opinions-container::-webkit-scrollbar {
  display: none;
}

.opinion-outer {
  height: auto;
  width: 100%;
}

.opinion-inner {
  border-bottom: solid black 2px;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.overlay-opinion-section-container {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  padding-bottom: 15px;
  border-bottom: solid rgb(153, 153, 153) 1px;
}

.overlay-rating-container {
  background-color: rgb(67, 149, 209);
  height: 120px;
  width: 120px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.overlay-word-rating {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
}

.overlay-number-rating {
  color: white;
  font-size: 44px;
  font-weight: 700;
  margin: 0;
}

.overlay-trustpilot-container {
  height: 100px;
  width: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  gap: 15px;
}

.overlay-trustpilot-link-container {
  display: flex;
}

.overlay-trustpilot-link-container p {
  font-size: 14px;
  margin: 0;
}

.rating-options {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.rating-option {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  margin-top: 15px;
}

.rating-option img {
  height: 30px;
  cursor: pointer;
}

.rating-option p {
  margin: 0px 7px;
}

.procentage-container {
  height: 26px;
  width: 50%;
  border-radius: 15px;
  border: solid black 1px;
  overflow: hidden;
}

.procentage {
  background-color: rgb(79, 218, 137);
  height: 100%;
  width: 30%;
}

.carousel__pagination-button {
  width: 30px;
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
