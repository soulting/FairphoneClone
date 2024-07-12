<template>
  <div class="home-view-container">
    <VideoSectionVue />
    <FormerProductsSectionVue />
    <MissionStatementSectionVue />
    <MissionExplanationSectionVue />
    <ImpactctSectionVue />
    <CarouselSectionVue />
    <RecycleSectionVue />
    <StoriesSectionVue />
    <NewsletterSectionVue />
    <OpinionsSectionVue />
    <YellowCirlceSectionVue />
    <FooterSectionVue />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import FormerProductsSectionVue from "./HomeViewSections/FormerProductsSection.vue";
import MissionExplanationSectionVue from "./HomeViewSections/MissionExplanationSection.vue";
import MissionStatementSectionVue from "./HomeViewSections/MissionStatementSection.vue";
import VideoSectionVue from "./HomeViewSections/VideoSection.vue";
import ImpactctSectionVue from "./HomeViewSections/ImpactSection.vue";
import CarouselSectionVue from "./HomeViewSections/CarouselSection.vue";
import RecycleSectionVue from "./HomeViewSections/RecycleSection.vue";
import StoriesSectionVue from "./HomeViewSections/StoriesSection.vue";
import NewsletterSectionVue from "./HomeViewSections/NewsletterSection.vue";
import OpinionsSectionVue from "./HomeViewSections/OpinionsSection.vue";
import YellowCirlceSectionVue from "./HomeViewSections/YellowCirlceSection.vue";
import FooterSectionVue from "./HomeViewSections/FooterSection.vue";

const router = useRouter();

const goToView = (product) => {
  router.push(`/${product}`);
};
</script>

<style>
.home-view-container {
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 239, 235);
  position: relative;
  z-index: -2;
}

.section {
  width: 100%;
  height: 100vh;
}
</style>
