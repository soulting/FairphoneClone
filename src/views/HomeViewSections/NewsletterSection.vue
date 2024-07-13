<template>
  <section class="newsletter-section section">
    <img
      class="background-image"
      src="@/assets/01_images/02_icons/pill_white.webp"
      alt="background image"
    />
    <div class="newsletter-section-title-container">
      <h2 class="newsletter-section-title-left">Stay connected</h2>
      <h2 class="newsletter-section-title-right">through our newsletter</h2>
    </div>
    <div class="newsletter-section-email-outer-container">
      <img
        class="newsletter-section-email-image"
        src="@/assets/01_images/03_backgrounds/226.png"
        alt="group of people image"
      />
      <div class="newsletter-section-email-inner-container">
        <h3 class="newsletter-section-email-title">INSIDE LOOK</h3>
        <p class="newsletter-section-email-description">
          Get early access to our latest stories, exclusive deals and
          opportunities for change.
        </p>
        <div class="newsletter-section-input-container">
          <p
            class="email-placeholder"
            :style="{
              fontSize: inputOnFocus ? '12px' : '20px',
              top: inputOnFocus ? '-20px' : '0px',
              left: inputOnFocus ? '0px' : '20px',
            }"
          >
            YOUR E-MAIL
          </p>
          <input
            class="newsletter-section-input"
            @focus="handleFocus"
            @blur="handleBlur"
            v-model="email"
            type="email"
            ref="emailInput"
          />
          <button class="newsletter-section-input-button" @click="submit">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
    <img
      class="newsletter-section-last-image"
      src="@/assets/01_images/03_backgrounds/227.png"
      alt="yellow pf image"
    />
    <div
      v-if="newsletterOverlay"
      class="newsletter-overlay"
      @click="turnNewsleterOverlayOff"
    >
      <div class="overlay-message-container">
        <p>Congratulations, you're now subscribed to the newsletter.</p>
        <button>CLOSE</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import postEmail from "@/composables/postEmail.js";

const inputOnFocus = ref(false);
const email = ref("");
const emailInput = ref(null);
const newsletterOverlay = ref(false);

const turnNewsleterOverlayOff = () => {
  newsletterOverlay.value = false;
};

const handleFocus = () => {
  inputOnFocus.value = true;
};

const handleBlur = () => {
  if (email.value.length === 0) {
    inputOnFocus.value = false;
  }
};

const submit = async () => {
  if (!emailInput.value.checkValidity()) {
    alert("The e-mail format is incorrect");
    return;
  }

  try {
    const result = await postEmail(email.value);
    if (result === "email added") {
      email.value = "";
      newsletterOverlay.value = true;
    } else {
      email.value = "";
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.newsletter-section {
  height: 150vh;
  padding: 100px;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

.background-image {
  position: absolute;
  height: 1100px;
  z-index: -2;
  top: 10%;
  left: 35%;
  transform: rotate(-15deg);
}

.newsletter-section-title-container {
  position: relative;
  height: 190px;
  margin-bottom: 100px;
}

.newsletter-section-title-left {
  font-size: 72px;
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
}

.newsletter-section-title-right {
  font-size: 72px;
  font-weight: 700;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
}

.newsletter-section-email-outer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
}

.newsletter-section-email-image {
  height: 500px;
  width: 500px;
  border-radius: 25px;
  object-fit: cover;
  object-position: center;
}

.newsletter-section-email-inner-container {
  display: flex;
  flex-direction: column;
}

.newsletter-section-email-title {
  font-size: 20px;
  font-weight: 600;
}

.newsletter-section-email-description {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}

.newsletter-section-input-container {
  margin-top: 50px;
  position: relative;
}

.newsletter-section-input {
  border: none;
  border-bottom: solid black 2px;
  height: 50px;
  width: 450px;
  margin-right: 20px;
  font-size: 24px;
  padding-left: 20px;
  outline: none;
}

.newsletter-section-input-button {
  height: 60px;
  width: 150px;
  border: solid black 2px;
  border-radius: 30px;
  background-color: transparent;
}

.newsletter-section-input-button:hover {
  color: white;
  background-color: black;
}

.email-placeholder {
  position: absolute;
  font-weight: 600;
  transition: all 0.5s ease;
  pointer-events: none;
  color: lightgray;
}

.newsletter-section-last-image {
  position: absolute;
  height: 300px;
  width: 450px;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  right: 100px;
  bottom: 30px;
}

.newsletter-overlay {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  /* opacity: 0.5; */
}

.overlay-message-container {
  height: 400px;
  width: 400px;
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 1);
  z-index: 10;
  border-radius: 25px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  box-sizing: border-box;
  gap: 50px;
  background-image: url("@/assets/01_images/03_backgrounds/green.webp");
  background-size: cover;
}

.overlay-message-container p {
  font-size: 28px;
  text-align: center;
  line-height: 35px;
}
.overlay-message-container button {
  font-size: 20px;
  height: 60px;
  width: 150px;
  border: solid black 2px;
  border-radius: 30px;
  background-color: transparent;
}

.overlay-message-container button:hover {
  background-color: black;
  color: white;
}
</style>
