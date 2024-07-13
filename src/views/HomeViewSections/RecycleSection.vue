<template>
  <section class="recycle-section section">
    <img
      class="recycle-image-left"
      src="@/assets/01_images/01_products/036.webp"
      alt="pf-1 image"
    />
    <div class="recycle-container">
      <h2 class="recycle-title">Give your old phone a second chance</h2>
      <p class="recycle-description">
        Do you have an old phone lying in a drawer somewhere? Why not reduce the
        waste? It’s worth it.
      </p>
      <button class="recycle-button" @click="goToView('recycle')">
        RECYCLE YOUR PHONE
      </button>
    </div>
    <img
      class="recycle-image-right"
      src="@/assets/01_images/01_products/037.webp"
      alt="pf-2 image"
    />
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToView = (product) => {
  router.push(`/${product}`);
};
</script>

<style>
.recycle-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
  overflow-x: hidden;
}

.recycle-section img {
  height: 500px;
}

.recycle-image-left {
  position: absolute;
  left: -40px;
  top: 170px;
}

.recycle-image-right {
  position: absolute;
  right: -40px;
  bottom: 170px;
}

.recycle-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
}

.recycle-title {
  font-size: 48px;
  margin: 0;
  margin-bottom: 24px;
  font-weight: 900;
  text-align: center;
}

.recycle-description {
  font-size: 18px;
  margin-bottom: 22px;
  text-align: center;
}

.recycle-button {
  height: 60px;
  width: 250px;
  border: solid black 2px;
  border-radius: 30px;
  background-color: transparent;
  font-weight: 600;
}

.recycle-button:hover {
  background-color: black;
  color: white;
}
</style>
