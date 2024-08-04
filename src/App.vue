<template>
  <!-- <nav @mouseover="navbarHover = true" @mouseleave="navbarHover = false">
    <div class="navbar-logo-container">
      <img
        @click="goToView('')"
        :src="navbarHover ? logoIconBlue : logoIconWhite"
        alt="navbar logo"
      />
    </div>
    <div class="router-link-container">
      <router-link
        class="no-underline"
        :style="[!navbarHover ? { color: 'white' } : null]"
        to="/"
        >HOME</router-link
      >
      <router-link
        class="no-underline"
        :style="[!navbarHover ? { color: 'white' } : null]"
        to="/about"
        >ABOUT</router-link
      >
      <router-link
        class="no-underline"
        :style="[!navbarHover ? { color: 'white' } : null]"
        to="/stories"
        >STORIES</router-link
      >
    </div>
    <div class="additional nav-elements">
      <div class="additional nav-elements-contacts">
        <p :style="[!navbarHover ? { color: 'white' } : null]">Business</p>
        <p :style="[!navbarHover ? { color: 'white' } : null]">Support</p>
      </div>
      <div class="additional nav-elements-user-section">
        <div class="nav-profile-container">
          <img
            :src="navbarHover ? accountIconBlack : accountIconWhite"
            alt="profile icon"
          />
        </div>
        <div class="nav-basket-container">
          <img
            :src="navbarHover ? basketIconBlack : basketIconWhite"
            alt="basket icon"
          />
        </div>
      </div>
      <div class="additional nav-elements-lang-container">
        <img
          class="country-flags"
          src="./assets/01_images/02_icons/pl.png"
          alt="polish flag"
        />
        <p :style="[!navbarHover ? { color: 'white' } : null]">EN</p>
      </div>
    </div>
  </nav>
  <transition>
    <div v-if="navbarHover" class="white-background"></div>
  </transition> -->
  <router-view />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const logoIconBlue = require("@/assets/01_images/02_icons/logo_blue.svg");
const logoIconWhite = require("@/assets/01_images/02_icons/logo_white.svg");
const accountIconBlack = require("@/assets/01_images/02_icons/account_icon_black.svg");
const accountIconWhite = require("@/assets/01_images/02_icons/account_icon_white.svg");
const basketIconBlack = require("@/assets/01_images/02_icons/basket_icon_black.svg");
const basketIconWhite = require("@/assets/01_images/02_icons/basket_icon_white.svg");

const navbarHover = ref(false);

const router = useRouter();

const goToView = (link) => {
  router.push(`/${link}`);
};
</script>

<style>
/* Globalne style */
body {
  padding: 0;
  margin: 0;
  background-color: aliceblue;
}

#app {
  font-family: "RadikalBold", sans-serif;
  letter-spacing: 1.4px;
  position: relative;
  z-index: 10;
}

/* Style dla linków */
.no-underline {
  text-decoration: none;
  color: inherit;
}

.no-underline:hover,
nav p:hover {
  color: rgb(67, 149, 209);
  cursor: pointer;
}

/* Stylowanie dla nawigacji */
nav {
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  height: 100px;
  gap: 25px;
  left: 0;
  right: 0;
  z-index: 2;
}

/* Stylowanie dla kontenera linków routera */
.router-link-container {
  display: flex;
  align-items: center;
  gap: 40px;
}

/* Stylowanie dla elementów dodatkowych */
.additional {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-elements-contacts p,
.nav-elements-lang-container p {
  cursor: pointer;
}

/* Stylowanie dla flagi kraju */
.country-flags {
  height: 11px;
}

/* Stylowanie dla tła */
.white-background {
  position: absolute;
  background-color: white;
  height: 100px;
  width: 100%;
  z-index: 1;
}

/* Stylowanie dla przejść */
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100px);
}

/* Stylowanie dla logo w nawigacji */
.navbar-logo-container img {
  cursor: pointer;
}

.nav-profile-container img:hover {
  cursor: pointer;
}

.nav-basket-container img:hover {
  cursor: pointer;
}
</style>
