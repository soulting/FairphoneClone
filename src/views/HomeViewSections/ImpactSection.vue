<template>
  <section class="impact section">
    <img
      class="white-square-background"
      src="@/assets/01_images/02_icons/square_white.svg"
      alt="white square background"
    />
    <p class="user-amount">{{ amountOfUsers }}</p>
    <h3 class="amount-explanation">
      FAIRPHONE USERS ARE MAKING REAL IMPACT TOGETHER
    </h3>
    <div class="impact-explanations-container">
      <div class="impact-explanation-container">
        <p class="impact-explanation-amount">944 tons</p>
        <p class="impact-explanation-feald">CO2 Avoided</p>
        <p class="impact-explanation-description">
          1.763 flights from Amsterdam to Rome
        </p>
      </div>
      <div class="impact-explanation-container">
        <p class="impact-explanation-amount">28.7 tons</p>
        <p class="impact-explanation-feald">E-waste taken back</p>
        <p class="impact-explanation-description">
          The weight of a fully grown T-rex
        </p>
      </div>
      <div class="impact-explanation-container">
        <p class="impact-explanation-amount">​40.000</p>
        <p class="impact-explanation-feald">Old phones recycled</p>
        <p class="impact-explanation-description">
          Close to $1,000,000 worth of gold
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  const target = document.querySelector(".impact");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        amountOfUsers.value = amountOfUsers.value - 300;
        let deleye = 1;
        const slowCounting = async () => {
          for (let i = 0; i < 300; i++) {
            amountOfUsers.value++;
            if (i > 200 && i < 250) {
              deleye = 5;
            } else if (i > 250 && i < 290) {
              deleye = 35;
            } else if (i > 290) {
              deleye = 65;
            }
            await new Promise((resolve) => setTimeout(resolve, deleye));
          }
        };
        slowCounting();
      }
    });
  });

  observer.observe(target);
});
const amountOfUsers = ref(506176);
</script>

<style>
.impact {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

.white-square-background {
  position: absolute;
  top: 10%;
  left: 15%;
  transform: translate(-50%, -50%);
  transform: rotate(65deg);
  height: 1000px;
  z-index: -2;
}

.user-amount {
  color: rgb(68, 150, 208);
  font-size: 300px;
  margin: 0;
}

.amount-explanation {
  font-size: 24px;
}

.impact-explanations-container {
  display: flex;
  gap: 10px;
}

.impact-explanation-container {
  display: flex;
  flex-direction: column;
  border-left: solid rgb(149, 149, 149) 2px;
  padding: 24px 16px;
}

.impact-explanation-amount {
  font-size: 24px;
  margin: 0;
  line-height: 36px;
}

.impact-explanation-feald {
  font-size: 16px;
  color: rgb(68, 150, 208);
  margin: 0;
  line-height: 36px;
}

.impact-explanation-description {
  font-size: 16px;
  margin: 0;
  line-height: 36px;
}
</style>
