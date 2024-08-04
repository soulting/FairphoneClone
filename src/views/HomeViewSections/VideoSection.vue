<template>
  <section class="video-section section">
    <video
      src="@/assets/02_videos/INTRODUCING THE NEW FAIRPHONE 5.mp4"
      type="video/mp4"
      autoplay
      loop
      muted
      playsinline
    ></video>
    <div class="video-section-content">
      <h3 class="video-section-line" id="text-line-1">Change is in</h3>
      <h3 class="video-section-line" id="text-line-2">your hands</h3>
      <p class="video-section-line" id="text-line-3">
        Long-lasting smartphones and accessories that benefit the planet
      </p>
      <button
        class="video-section-link"
        @click="goToProductView('fairphone-5')"
      >
        Fairphone 5
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
.video-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

video {
  position: absolute;
  height: 100%;
  top: 0;
  z-index: -1;
}

.video-section-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.video-section-line {
  font-family: "RadikalBold", sans-serif;
  font-weight: bolder;
  color: white;
  margin: 0;
  padding: 0;
  position: relative;
}

#text-line-1.video-section-line {
  margin-top: 40px;
}

#text-line-2.video-section-line {
  margin-bottom: 40px;
}

#text-line-3.video-section-line {
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 20px;
}

.video-section-link {
  height: 60px;
  width: 250px;
  border: none;
  border-radius: 35px;
  background-color: rgb(251, 223, 120);
  font-size: 20px;
}

.video-section-link:hover {
  background-color: rgb(228, 202, 110);
  cursor: pointer;
}

@media (max-width: 600px) {
  .video-section {
    height: 600px;
  }

  .video-section-content {
    align-items: center;
  }

  .video-section-line {
    width: 350px;
    font-size: 55px;
    margin: 0;
  }

  #text-line-3.video-section-line {
    font-size: 22px;
  }

  .video-section-link {
    width: 350px;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .video-section {
    height: 600px;
  }

  .video-section-content {
    align-items: center;
    width: 85%;
    max-width: 800px;
  }

  .video-section-line {
    font-size: 80px;
    margin: 0;
  }

  #text-line-1.video-section-line {
    margin-right: auto;
  }

  #text-line-2.video-section-line {
    margin-left: auto;
  }

  #text-line-3.video-section-line {
    width: 500px;
    font-size: 24px;
  }

  .video-section-link {
    width: 350px;
    margin-right: 150px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .video-section {
    height: 900px;
  }

  .video-section-content {
    align-items: center;
    width: 85%;
    max-width: 1000px;
  }

  .video-section-line {
    font-size: 110px;
    margin: 0;
  }

  #text-line-1.video-section-line {
    margin-right: auto;
  }

  #text-line-2.video-section-line {
    margin-left: auto;
  }

  #text-line-3.video-section-line {
    width: 700px;
    font-size: 32px;
    line-height: 45px;
  }

  .video-section-link {
    width: 350px;
    margin-right: 350px;
  }
}

@media (min-width: 1440px) {
  .video-section {
    height: 1200px;
  }

  .video-section-content {
    align-items: center;
    width: 85%;
    max-width: 1200px;
  }

  .video-section-line {
    font-size: 140px;
    margin: 0;
  }

  #text-line-1.video-section-line {
    margin-right: auto;
  }

  #text-line-2.video-section-line {
    margin-left: auto;
  }

  #text-line-3.video-section-line {
    width: 1000px;
    font-size: 45px;
    line-height: 55px;
  }

  .video-section-link {
    width: 350px;
    margin-right: 650px;
  }
}
</style>
