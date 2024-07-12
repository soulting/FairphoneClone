<template>
  <section class="video-section section">
    <video
      src="@/assets/02_videos/INTRODUCING THE NEW FAIRPHONE 5.mp4"
      type="video/mp4"
      autoplay
      loop
      muted
      playsinline
    ></video>
    <div class="video-section-content">
      <h3 class="video-section-line" id="text-line-1">Change is in</h3>
      <h3 class="video-section-line" id="text-line-2">your hands</h3>
      <p class="video-section-line" id="text-line-3">
        Long-lasting smartphones and accessories that benefit the planet
      </p>
      <button
        class="video-section-link"
        @click="goToProductView('fairphone-5')"
      >
        Fairphone 5
      </button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goToProductView = (product) => {
  router.push(`/${product}`);
};
</script>

<style scoped>
.video-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

video {
  position: absolute;
  width: 100%;
  height: auto;
  z-index: -1;
}

.video-section-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
}

.video-section-line {
  font-family: "RadikalBold", sans-serif;
  font-weight: bolder;
  font-size: 120px;
  line-height: 109px;
  color: white;
  margin: 0;
  padding: 0;
  position: relative;
  left: -230px;
}

#text-line-1.video-section-line {
  margin-top: 40px;
}

#text-line-2.video-section-line {
  margin-bottom: 40px;
  position: relative;
  left: 200px;
}

#text-line-3.video-section-line {
  font-size: 30px;
  line-height: 24px;
  font-weight: 400;
  position: relative;
  left: 200px;
  margin-bottom: 20px;
}

.video-section-link {
  position: relative;
  left: 200px;
  height: 70px;
  width: 250px;
  border: none;
  border-radius: 35px;
  background-color: rgb(251, 223, 120);
  font-size: 20px;
}

.video-section-link:hover {
  background-color: rgb(228, 202, 110);
  cursor: pointer;
}
</style>
