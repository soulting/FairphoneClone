<template>
  <section class="mission-explanation section">
    <h2 class="mission-explanation-title">What it means to be fair</h2>
    <div class="mission-explanation-image-container">
      <img
        class="mission-explanation-image-background"
        src="@/assets/01_images/02_icons/pill_purple.svg"
        alt="pill image background"
      />
      <img
        class="mission-explanation-image"
        src="@/assets/01_images/01_products/FP5-Blue.webp"
        alt="Fairphone 5 image"
      />
    </div>
    <div class="mission-explanation-text-container">
      <div class="mission-explanation-text-markers">
        <div
          v-for="(marker, index) in textFragments"
          :key="index"
          :id="index"
          class="marker-container"
          @click="changeMissionExplanationSelectedMarker(index)"
          :class="{ selected: missionExplanationSelectedMarker === index }"
        >
          <div class="marker-line"><div class="line"></div></div>
          <p class="marker">{{ marker.title }}</p>
        </div>
      </div>
      <div class="mission-explanation-text-fragments">
        <div
          v-for="(fragment, index) in textFragments"
          :key="index"
          class="mission-explanation-text-fragment-iterator"
        >
          <transition name="missionExplanationFragment">
            <div
              v-if="missionExplanationSelectedMarker === index"
              class="mission-explanation-text-fragment"
            >
              <h4 class="mission-explanation-text-title">
                {{ fragment.title }}
              </h4>
              <p class="mission-explanation-text">
                {{ fragment.text }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const textFragments = [
  {
    title: "BUILT TO LAST",
    text: "The most sustainable phone is the one you keep. With industry leading hardware warranties and software-support, Fairphones are designed to grow with you.",
  },
  {
    title: "FAIR RECYCLED",
    text: "How your phone is made matters. Each Fairphone is made with fairer, recycled, and responsibly mined materials.",
  },
  {
    title: "CLIMATE CONSCIOUS",
    text: "We’re avoiding and reducing carbon emissions by designing our phones to last, using recycled materials, powering factories with 100% renewable energy and investing in projects reducing CO2 emissions.",
  },
  {
    title: "BETTER WORKING CONDITIONS",
    text: "With each phone, we’re moving closer to a world where the makers are treated fairly, paid well and take pride in what they do.",
  },
];

const missionExplanationSelectedMarker = ref(1);

const changeMissionExplanationSelectedMarker = (marker) => {
  console.log(marker);
  missionExplanationSelectedMarker.value = marker;
};
</script>

<style scoped>
.mission-explanation {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130vh !important;
}

.mission-explanation-title {
  font-size: 70px;
  font-weight: 700;
  margin: 50px;
}

.mission-explanation-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
}

.mission-explanation-image {
  height: 550px;
  filter: drop-shadow(6px 12px 14px rgba(0, 0, 0, 0.4));
}

.mission-explanation-image-background {
  height: 550px;
  width: 650px;
  position: absolute;
}

.mission-explanation-text-container {
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: row;
}

.mission-explanation-text-markers {
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-right: 100px;
}

.marker-container {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: 10px;
}

.marker-line {
  width: 75px;
  display: flex;
  justify-content: end;
  align-items: center;
}

.line {
  height: 3px;
  width: 15px;
  background-color: rgb(90, 90, 90);
  transition: all 0.2s ease;
}

.marker-container:hover .line {
  width: 35px;
  background-color: black;
}

.marker {
  font-size: 16px;
  color: rgb(90, 90, 90);
  margin: 0;
  margin-left: 20px;
  transition: all 0.2s ease;
  letter-spacing: 1.4px;
}

.marker-container:hover .marker {
  color: black;
  font-weight: 700;
}

.selected .line {
  width: 100%;
  background-color: black;
}

.selected:hover .line {
  width: 100%;
  background-color: black;
}

.selected .marker {
  color: black;
  font-weight: 700;
}

.mission-explanation-text-fragment {
  position: absolute;
}

.mission-explanation-text-title {
  font-size: 22px;
  line-height: 24px;
  margin: 0;
  font-weight: 700;
}

.mission-explanation-text {
  font-size: 18px;
  line-height: 24px;
  width: 650px;
  font-weight: 500;
}

.missionExplanationFragment-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.missionExplanationFragment-enter-to {
  transform: translateY(0%);
  opacity: 1;
}

.missionExplanationFragment-enter-active {
  transition: all 0.5s ease;
}

.missionExplanationFragment-leave-active {
  transition: all 0.5s ease;
}

.missionExplanationFragment-leave-from {
  opacity: 1;
}

.missionExplanationFragment-leave-to {
  opacity: 0;
}

.mission-explanation-text-fragment-iterator {
  height: auto;
  width: 100%;
}
</style>
