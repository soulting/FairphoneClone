<template>
  <section class="mission-statement section">
    <div class="mission-statement-container">
      <div class="mission-statement-text">
        <h2 class="mission-statement-title">Your phone can do better</h2>
        <p class="mission-statement-description">
          We make fair(er) phones - To change the industry from the inside. One
          step at a time, all over the world. Together with our community, we’re
          changing the way products are made. Here's how we're disrupting the
          tech space.
        </p>
        <button
          class="mission-statement-button"
          @click="goToProductView('about')"
        >
          ABOUT US
        </button>
      </div>
      <img
        class="mission-statement-image"
        src="@/assets/01_images/01_products/FP5 Parts.webp"
        alt="photo of a dissected Fairphone"
      />
    </div>
  </section>
</template>

<script setup></script>

<style setup>
.mission-statement {
  display: flex;
}

.mission-statement-container {
  margin: 100px;
  width: 100%;
  position: relative;
}

.mission-statement-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.mission-statement-title {
  font-size: 70px;
  width: 600px;
  margin: 0;
  margin-bottom: 16px;
}

.mission-statement-description {
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  width: 480px;
  margin-bottom: 24px;
}

.mission-statement-button {
  height: 60px;
  width: 350px;
  border: solid black 2px;
  border-radius: 30px;
  background-color: transparent;
  color: black;
  font-size: 14px;
  font-weight: 600;
  font-family: "RadikalBold", sans-serif;
  transition: all ease 0.2s;
}

.mission-statement-button:hover {
  background-color: black;
  color: white;
}

.mission-statement-image {
  width: 700px;
  height: 500px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 25px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -2;
}
</style>
