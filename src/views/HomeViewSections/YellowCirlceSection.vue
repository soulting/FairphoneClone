<template>
  <section class="yellow-circle-section section">
    <img
      class="yellow-circle"
      src="@/assets/01_images/02_icons/yellow-circle.png"
      alt="yellow circle background image"
    />
    <h2 class="yellow-circle-title">Best in green electronics</h2>
    <div class="yellow-circle-description-container">
      <h5>OUR IMPACT</h5>
      <p>
        There are more phones than people. And behind every device is a complex
        supply chain. With suppliers, local communities and the wider industry,
        we work for fairer materials and more responsible practices. Showing the
        electronics industry that we can do better.
      </p>
      <p>
        Together we’re disrupting the industry’s short-term thinking that the
        world can no longer afford. And changing what it means to be “best.”
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.yellow-circle-section {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 55vh;
  display: flex;
  gap: 50px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 30px;
  box-sizing: border-box;
}

.yellow-circle {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 2000px;
  z-index: -2;
}

.yellow-circle-title {
  font-size: 72px;
  font-weight: 700;
  width: 50%;
}

.yellow-circle-description-container h5 {
  font-size: 24px;
}

.yellow-circle-description-container p {
  font-size: 18px;
  font-weight: 500;
  width: 550px;
  line-height: 34px;
}
</style>
