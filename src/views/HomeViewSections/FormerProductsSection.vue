<template>
  <section class="products-section section">
    <div class="product-card">
      <h3 class="product-title">Fairphone 4</h3>
      <p class="product-description">Improved camera. Better price.</p>
      <img
        class="product-image"
        src="@/assets/01_images/01_products/FP4-Grey-Green.png"
        alt="product image"
      />
      <button class="product-button" @click="goToProductView('fairphone-4')">
        LEARN MORE
      </button>
    </div>
    <div class="product-card">
      <h3 class="product-title">Fairbuds XL</h3>
      <p class="product-description">Superior Sound. Sustainably Designed.</p>
      <img
        class="product-image"
        src="@/assets/01_images/01_products/Fairbuds XL.webp"
        alt="product image"
      />
      <button class="product-button" @click="goToProductView('fairbuds-xl')">
        LEARN MORE
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
.products-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.product-card {
  width: 550px;
  height: 447px;
  background: linear-gradient(
    to bottom right,
    rgb(68, 150, 208),
    rgb(108, 181, 134)
  );
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "RadikalBold", sans-serif;
  color: white;
}

.product-title {
  font-size: 40px;
  margin: 0;
}

.product-description {
  font-size: 24px;
}

.product-image {
  height: 250px;
  width: 250px;
}

.product-button {
  height: 60px;
  width: 360px;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  font-family: "RadikalBold", sans-serif;
  background-color: white;
  color: black;
  transition: all ease 0.2s;
}

.product-button:hover {
  background-color: black;
  color: white;
}
</style>
