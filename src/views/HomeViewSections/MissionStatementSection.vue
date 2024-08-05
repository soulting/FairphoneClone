<template>
  <section class="mission-statement section">
    <div class="mission-statement-container">
      <div class="mission-statement-text">
        <h2 class="mission-statement-title">Your phone can do better</h2>
        <img
          class="mission-statement-image"
          src="@/assets/01_images/01_products/FP5 Parts.webp"
          alt="photo of a dissected Fairphone"
        />
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
    </div>
  </section>
</template>

<script setup></script>

<style setup>
.mission-statement {
  display: flex;
  height: 100vh;
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
  object-fit: cover;
  overflow: hidden;
  border-radius: 25px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -2;
}

@media (max-width: 600px) {
  .mission-statement {
    height: 700px;
  }

  .mission-statement-container {
    margin: 15px 30px;
  }

  .mission-statement-title {
    font-size: 40px;
    position: absolute;
    width: auto;
    top: 0;
    left: 0;
    right: 0;
  }

  .mission-statement-image {
    height: auto;
    width: 90%;
    aspect-ratio: 5 / 3;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }
  .mission-statement-text {
    justify-content: flex-end;
    bottom: 0;
    left: 0;
    right: 0;
    width: auto;
  }

  .mission-statement-title {
    font-size: 55px;
    position: absolute;
    width: auto;
    top: 0;
    left: 0;
  }

  .mission-statement-description {
    width: auto;
    margin-bottom: 15px;
  }
  .mission-statement-button {
    width: 80%;
    max-width: 350px;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .mission-statement {
    height: auto;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .mission-statement-container {
    margin: 30px;
    width: 80%;
    max-width: 600px;
  }

  .mission-statement-text {
    position: static;
    width: auto;
  }

  .mission-statement-title {
    font-size: 55px;
  }

  .mission-statement-image {
    height: 50%;
    max-height: 400px;
    width: 65%;
    margin-left: auto;
    position: relative;
    top: -50px;
  }

  .mission-statement-description {
    width: auto;
    position: relative;
    top: -50px;
  }

  .mission-statement-button {
    position: relative;
    top: -50px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .mission-statement {
    height: auto;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .mission-statement-container {
    margin: 30px;
    width: 80%;
    max-width: 850px;
  }

  .mission-statement-text {
    position: static;
    width: auto;
  }

  .mission-statement-title {
    font-size: 65px;
    width: 750px;
  }

  .mission-statement-image {
    height: 50%;
    max-height: 450px;
    width: 65%;
    margin-left: auto;
    position: relative;
    top: -50px;
  }

  .mission-statement-description {
    width: auto;
    position: relative;
    top: -50px;
    font-size: 22px;
    line-height: 32px;
    margin: 30px 0;
  }

  .mission-statement-button {
    position: relative;
    top: -50px;
  }
}

@media (min-width: 1440px) {
  .mission-statement {
    height: auto;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .mission-statement-container {
    margin: 30px;
    width: 80%;
    max-width: 1000px;
  }

  .mission-statement-text {
    position: static;
    width: auto;
  }

  .mission-statement-title {
    font-size: 90px;
    width: 850px;
  }

  .mission-statement-image {
    height: 50%;
    max-height: 500px;
    width: 65%;
    margin-left: auto;
    position: relative;
    top: -50px;
  }

  .mission-statement-description {
    width: auto;
    position: relative;
    top: -50px;
    font-size: 22px;
    line-height: 32px;
    margin: 35px 0;
  }

  .mission-statement-button {
    position: relative;
    top: -50px;
  }
}
</style>
