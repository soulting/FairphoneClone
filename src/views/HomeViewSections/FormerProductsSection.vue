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
  height: 100vh;
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

@media (max-width: 600px) {
  .products-section {
    height: auto;
    padding: 25px 0;
    flex-direction: column;
  }

  .product-card {
    width: 80%;
    height: auto;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .products-section {
    height: auto;
    padding: 25px 0;
    flex-direction: column;
  }

  .product-card {
    width: 500px;
    height: 447px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .products-section {
    flex-direction: row;
  }

  .product-card {
    width: 500px;
    height: 447px;
    padding: 30px 20px;
  }

  .product-description {
    font-size: 22px;
  }
}

@media (min-width: 1440px) {
}
</style>
