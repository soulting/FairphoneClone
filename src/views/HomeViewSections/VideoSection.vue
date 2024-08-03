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
  height: 100vh;
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
}

.video-section-line {
  font-family: "RadikalBold", sans-serif;
  font-weight: bolder;
  font-size: 120px;
  line-height: 109px;
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
  font-size: 30px;
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
  .video-section-content {
    align-items: center;
  }

  .video-section-line {
    position: static;
    font-size: 65px;
    margin: 0;
  }

  #text-line-3.video-section-line {
    width: 400px;
    line-height: 35px;
    font-size: 22px;
  }

  .video-section-link {
    position: static;
    width: 400px;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .video-section-line {
    font-size: 80px;
    margin: 0;
  }

  #text-line-1.video-section-line {
    position: absolute;
    left: 50px;
    top: 150px;
  }

  #text-line-2.video-section-line {
    position: absolute;
    right: 50px;
    top: 300px;
  }

  #text-line-3.video-section-line {
    margin-top: 200px;
    width: 450px;
    line-height: 35px;
    font-size: 24px;
  }

  .video-section-link {
    position: static;
    width: 300px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .video-section-content {
    padding-left: 150px;
  }

  .video-section-line {
    font-size: 100px;
    position: static;
  }

  #text-line-1.video-section-line {
    position: absolute;
    left: 100px;
    top: 150px;
  }

  #text-line-2.video-section-line {
    position: absolute;
    right: 100px;
    top: 300px;
  }

  #text-line-3.video-section-line {
    margin-top: 200px;
    width: 850px;
    line-height: 35px;
    font-size: 25px;
    text-align: center;
  }

  .video-section-link {
    position: static;
  }
}

@media (min-width: 1440px) {
  .video-section-content {
    padding-left: 200px;
  }

  .video-section-line {
    font-size: 130px;
    position: static;
  }

  #text-line-1.video-section-line {
    position: absolute;
    left: 100px;
    top: 150px;
  }

  #text-line-2.video-section-line {
    position: absolute;
    right: 100px;
    top: 300px;
  }

  #text-line-3.video-section-line {
    margin-top: 250px;
    width: 900px;
    line-height: 35px;
    font-size: 28px;
    text-align: center;
  }

  .video-section-link {
    position: static;
  }

  video {
    width: 100%;
    height: auto;
  }
}
</style>
