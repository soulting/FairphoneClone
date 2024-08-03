<template>
  <div class="footer">
    <div class="logo-and-email-container">
      <div class="logo-container">
        <img
          src="@/assets/01_images/02_icons/logo_blue.svg"
          alt="fairphone logo"
        />
        <div class="certifications">
          <img
            src="@/assets/01_images/02_icons/367.svg"
            alt="corporation certification"
          />
          <img
            src="@/assets/01_images/02_icons/366.webp"
            alt="eco certification"
          />
        </div>
      </div>
      <div class="newsletter-container">
        <h6>FAIRPHONE NEWSLETTER</h6>
        <p>Stay up to date with the latest news and stories from Fairphone.</p>
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
    <div class="footer-menu">
      <div class="footer-section">
        <h4>PRODUCTS</h4>
        <router-link class="footer-element" to="/about"
          >Fairphone 5</router-link
        >
        <router-link class="footer-element" to="/about"
          >Fairphone 4</router-link
        >
        <router-link class="footer-element" to="/about">Fairbuds</router-link>
        <router-link class="footer-element" to="/about"
          >Fairbuds XL</router-link
        >
        <router-link class="footer-element" to="/about"
          >Spare Parts</router-link
        >
        <router-link class="footer-element" to="/about">Accesories</router-link>
      </div>

      <div class="footer-section">
        <h4>FAIRPHONE</h4>
        <router-link class="footer-element" to="/about">About us</router-link>
        <router-link class="footer-element" to="/about">Stories</router-link>
        <router-link class="footer-element" to="/about">Impact</router-link>
        <router-link class="footer-element" to="/about">Team</router-link>
        <router-link class="footer-element" to="/about">Vacancies</router-link>
      </div>
      <div class="footer-section">
        <h4>SUPPORT</h4>
        <router-link class="footer-element" to="/about"
          >Customer Support</router-link
        >
        <router-link class="footer-element" to="/about">My order</router-link>
        <router-link class="footer-element" to="/about">Contact us</router-link>
        <router-link class="footer-element" to="/about"
          >Returns Policy</router-link
        >
        <router-link class="footer-element" to="/about">Shipping</router-link>
        <router-link class="footer-element" to="/about">Warranty</router-link>
      </div>
      <div class="footer-section">
        <h4>CONNECT</h4>
        <a class="footer-element" href="https://x.com/fairphone">X</a>
        <a class="footer-element" href="https://www.youtube.com/user/Fairphone"
          >YouTube</a
        >
        <a class="footer-element" href="https://www.instagram.com/fairphone/"
          >Instagram</a
        >
        <a class="footer-element" href="https://www.facebook.com/Fairphone/"
          >Facebook</a
        >
        <a
          class="footer-element"
          href="https://www.linkedin.com/company/fairphone/"
          >LinkedIn</a
        >
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-icons">
        <img
          @click="goToSite('https://x.com/fairphone')"
          @mouseover="isHovered[0] = true"
          @mouseleave="isHovered[0] = false"
          :src="
            isHovered[0]
              ? require('@/assets/01_images/02_icons/icons8-linked-in-blue-250.png')
              : require('@/assets/01_images/02_icons/icons8-linked-in-250.png')
          "
          alt="linked in logo"
        />
        <img
          @click="goToSite('https://www.instagram.com/fairphone/')"
          @mouseover="isHovered[1] = true"
          @mouseleave="isHovered[1] = false"
          :src="
            isHovered[1]
              ? require('@/assets/01_images/02_icons/icons8-instagram-blue-250.png')
              : require('@/assets/01_images/02_icons/icons8-instagram-250.png')
          "
          alt="instagram logo"
        />
        <img
          @click="goToSite('https://www.facebook.com/Fairphone/')"
          @mouseover="isHovered[2] = true"
          @mouseleave="isHovered[2] = false"
          :src="
            isHovered[2]
              ? require('@/assets/01_images/02_icons/icons8-facebook-blue-250.png')
              : require('@/assets/01_images/02_icons/icons8-facebook-250.png')
          "
          alt="linked in logo"
        />
        <img
          @click="goToSite('https://x.com/fairphone')"
          @mouseover="isHovered[3] = true"
          @mouseleave="isHovered[3] = false"
          :src="
            isHovered[3]
              ? require('@/assets/01_images/02_icons/icons8-twitter-blue-250.png')
              : require('@/assets/01_images/02_icons/icons8-twitter-250.png')
          "
          alt="linked in logo"
        />
        <img
          @click="goToSite('https://www.youtube.com/@Fairphone')"
          @mouseover="isHovered[4] = true"
          @mouseleave="isHovered[4] = false"
          :src="
            isHovered[4]
              ? require('@/assets/01_images/02_icons/icons8-youtube-blue-250.png')
              : require('@/assets/01_images/02_icons/icons8-youtube-250.png')
          "
          alt="linked in logo"
        />
      </div>
    </div>
      <div
    v-if="newsleterOverlay"
    class="newsletter-overlay"
    @click="turnNewsleterOverlayOff"
  >
    <div class="overlay-message-container">
      <p>Congratulations, you're now subscribed to the newsletter.</p>
      <button @click="turnNewsleterOverlayOff">CLOSE</button>
    </div>
  </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
import postEmail from "@/composables/postEmail.js";

const isHovered = ref([false, false, false, false, false]);

const goToSite = (link) => {
  window.location.href = link;
};

const inputOnFocus = ref(false);
const email = ref("");
const emailInput = ref(null);
const newsleterOverlay = ref(false);

const turnNewsleterOverlayOff = () => {
  newsleterOverlay.value = false;
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
      newsleterOverlay.value = true;
    } else {
      email.value = "";
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.footer {
  height: 95vh;
  background-color: black;
  padding: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.logo-and-email-container {
  display: flex;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.logo-container img {
  height: 30px;
}

.footer-menu {
  display: flex;
  gap: 80px;
}

.footer-section {
  width: 150px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-element {
  text-decoration: none;
  color: rgb(190, 190, 190);
}

.footer-element:hover {
  color: rgb(67, 149, 209);
}

.certifications {
  display: flex;
  gap: 15px;
}

.certifications img {
  height: 80px;
}

.newsletter-container {
  display: flex;
  flex-direction: column;
  color: white;
}

.newsletter-container h6 {
  font-size: 24px;
  margin: 0;
}

.newsletter-section-input-container {
  margin-top: 50px;
  position: relative;
}

.newsletter-section-input {
  border: none;
  border-bottom: solid white 2px;
  height: 50px;
  width: 575px;
  margin-right: 20px;
  font-size: 24px;
  padding-left: 20px;
  outline: none;
  background-color: black;
  color: white;
}

.newsletter-section-input-button {
  height: 60px;
  width: 150px;
  color: white;
  border: solid white 2px;
  border-radius: 30px;
  background-color: transparent;
}

.newsletter-section-input-button:hover {
  color: black;
  background-color: white;
  cursor: pointer;
}

.email-placeholder {
  position: absolute;
  font-weight: 600;
  transition: all 0.5s ease;
  pointer-events: none;
  color: lightgray;
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
  cursor: pointer;
}

.footer-bottom {
  display: flex;
  cursor: pointer;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons img {
  height: 25px;
  cursor: pointer;
}
</style>
