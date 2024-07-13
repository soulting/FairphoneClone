<template>
  <section class="carousel-section section">
    <h2 class="carousel-section-title">Join the movement</h2>
    <div class="carousel-container">
      <Carousel
        class="carousel-section-carousel"
        :itemsToShow="3"
        :wrapAround="true"
        :transition="500"
        ref="myCarousel"
      >
        <Slide v-for="slide in 4" :key="slide">
          <div
            class="carousel__item"
            :style="{
              backgroundImage: `url(${
                shopSlides.products[slide - 1].background
              })`,
            }"
          >
            <img
              class="slide-image"
              :src="shopSlides.products[slide - 1].image"
              alt="shop slide image"
            />
            <button
              class="go-to-shop"
              @click="goToView(shopSlides.products[slide - 1].goTo)"
            >
              SHOP
              {{ shopSlides.products[slide - 1].name }}
            </button>
          </div>
        </Slide>
      </Carousel>

      <button class="next-button" @click="nextSlide">
        <img src="@/assets/01_images/02_icons/right.png" alt="right arrow" />
      </button>
      <button class="prev-button" @click="prevSlide">
        <img src="@/assets/01_images/02_icons/left.png" alt="left arrow" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import { useRouter } from "vue-router";
import "vue3-carousel/dist/carousel.css";
import { defineComponent, ref } from "vue";

const shopSlides = {
  products: [
    {
      id: 1,
      name: "SMARTPHONES",
      image: require("@/assets/01_images/01_products/FP5.png"),
      goTo: "smartphones",
      background: require("@/assets/01_images/03_backgrounds/yellow.webp"),
    },
    {
      id: 2,
      name: "AUDIO",
      image: require("@/assets/01_images/01_products/FBXL - Black.png"),
      goTo: "audio",
      background: require("@/assets/01_images/03_backgrounds/green.webp"),
    },
    {
      id: 3,
      name: "ACCESSORIES",
      image: require("@/assets/01_images/01_products/180.webp"),
      goTo: "accessories",
      background: require("@/assets/01_images/03_backgrounds/blue.webp"),
    },
    {
      id: 4,
      name: "SPARE PARTS",
      image: require("@/assets/01_images/01_products/181.webp"),
      goTo: "spare-parts",
      background: require("@/assets/01_images/03_backgrounds/purple.webp"),
    },
  ],
};
const myCarousel = ref(null);

const nextSlide = () => {
  myCarousel.value.next();
};
const prevSlide = () => {
  myCarousel.value.prev();
};

const router = useRouter();

const goToView = (product) => {
  router.push(`/${product}`);
};
</script>

<style scoped>
/* General Carousel Styles */
.carousel-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: -1px -17px 23px -19px rgb(118, 119, 133);
}

.carousel-section-title {
  font-size: 80px;
}

/* Container Styles */
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.carousel-section-carousel {
  width: 1200px;
  height: 500px;
  position: relative;
}

/* Button Styles */
.next-button,
.prev-button {
  position: absolute;
  top: 30%;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: white;
  border: 1px solid black;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0px 0px 33px -12px rgba(66, 68, 90, 1);
  cursor: pointer;
}

.next-button:hover,
.prev-button:hover {
  opacity: 1;
}

.next-button {
  right: 0;
}

.prev-button {
  left: 0;
}

.next-button img,
.prev-button img {
  height: 50px;
}

.next-button img {
  margin-left: 7px;
}

.prev-button img {
  margin-right: 7px;
}

/* Carousel Item Styles */
.carousel__item {
  height: 350px;
  width: 350px;
  font-size: 12px;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
}

.slide-image {
  height: 300px;
  filter: drop-shadow(6px 12px 14px rgba(0, 0, 0, 0.4));
}

.go-to-shop {
  font-size: 15px;
  position: relative;
  top: -10px;
  height: 40px;
  width: 200px;
  border-radius: 20px;
  border: solid black 1px;
  background: transparent;
}

.go-to-shop:hover {
  box-shadow: 0px 0px 33px -12px rgba(66, 68, 90, 1);
  background-color: black;
  color: white;
}

/* Custom Carousel Styles */
.carousel__slide {
  padding: 5px;
  opacity: 0.9;
  transform: scale(0.9);
}

.carousel__viewport {
  perspective: 2000px;
  position: relative;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--active ~ .carousel__slide {
  transform: scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.03);
}
</style>
