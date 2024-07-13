newsletterOverlay
<template>
  <div class="overlay-inner-container">
    <div class="opinions-with-container-title">
      <h3 class="overlay-inner-container-title">Fairphone Reviews</h3>
      <div class="all-opinions-container">
        <div
          class="opinion-outer"
          v-for="opinion in props.opinions.opinion"
          :key="opinion"
        >
          <div v-if="xStarOpinion[opinion.rating - 1]" class="opinion-inner">
            <h4 class="opinion-title">
              {{ opinion.title }}
            </h4>
            <p class="opinion-description">
              {{ opinion.description }}
            </p>
            <div class="star-container">
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
        @click="$emit('closeOverlay')"
      >
        <img src="@/assets/01_images/02_icons/close.png" alt="close icon" />
      </button>

      <div class="overlay-opinion-section-container">
        <div class="overlay-rating-container">
          <p class="overlay-word-rating">{{ props.opinions.ratingWord }}</p>
          <p class="overlay-number-rating">{{ props.opinions.score }}</p>
        </div>
        <div class="overlay-trustpilot-container">
          <div class="star-container">
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
              :style="{ width: props.opinions.score * 20 + '%' }"
            ></div>
          </div>
          <div class="overlay-trustpilot-link-container">
            <p>Based on&nbsp;</p>
            <p class="link-paragraph">
              {{ props.opinions.opinion.length }} reviews
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

          <p>{{ star }}-star</p>
          <div class="procentage-container">
            <div
              class="procentage"
              :style="{ width: calculateProcentage(star) + '%' }"
            ></div>
          </div>
          <p>{{ calculateProcentage(star) }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  opinions: { type: Object, required: true },
});

const emits = defineEmits(["closeOverlay"]);

const xStarOpinion = ref([true, true, true, true, true]);

const show_N_starOpinion = (n) => {
  xStarOpinion.value[n] = !xStarOpinion.value[n];
};

const calculateProcentage = (n) => {
  if (props.opinions.opinion.length != 0) {
    let numberOfOpinions = 0;
    for (let i = 0; i < props.opinions.opinion.length; i++) {
      if (props.opinions.opinion[i].rating === n) {
        numberOfOpinions++;
      }
    }
    return ((numberOfOpinions / props.opinions.opinion.length) * 100).toFixed(
      1
    );
  }
};

const closeOverlay = () => {
  showOpinionsOverlay.value = false;
};
</script>

<style scoped>
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
  padding: 20px;
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
  width: 45%;
  border-radius: 15px;
  border: solid black 1px;
  overflow: hidden;
}

.procentage {
  background-color: rgb(79, 218, 137);
  height: 100%;
  width: 30%;
}

.star-container {
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
</style>
