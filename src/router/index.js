import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import StoriesView from "@/views/StoriesView.vue";
import Fairphone5View from "@/views/products/Fairphone5view.vue";
import Fairphone4View from "@/views/products/Fairphone4view.vue";
import FairBudsXLView from "@/views/products/FairbudsXLview.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/stories",
    name: "stories",
    component: AboutView,
  },
  {
    path: "/fairphone-5",
    name: "fairphone-5",
    component: Fairphone5View,
  },

  {
    path: "/fairphone-4",
    name: "fairphone-4",
    component: Fairphone4View,
  },

  {
    path: "/fairbuds-xl",
    name: "fairbuds-xl",
    component: FairBudsXLView,
  },
  {
    path: "/smartphones",
    name: "smartphones",
    component: AboutView,
  },
  {
    path: "/audio",
    name: "audio",
    component: AboutView,
  },
  {
    path: "/accessories",
    name: "accessories",
    component: AboutView,
  },
  {
    path: "/spare-parts",
    name: "spare-parts",
    component: AboutView,
  },

  {
    path: "/recycle",
    name: "recycle",
    component: AboutView,
  },
  {
    path: "/behind-the-screens",
    name: "behind-the-screens",
    component: AboutView,
  },
  {
    path: "/fixing-the-tech-industry",
    name: "fixing-the-tech-industry",
    component: AboutView,
  },
  {
    path: "/modularity-hinders-device-longevity",
    name: "modularity-hinders-device-longevity",
    component: AboutView,
  },
  {
    path: "/fairphone-4",
    name: "fairphone-4",
    component: AboutView,
  },
  {
    path: "/meet-the-makers",
    name: "meet-the-makers",
    component: AboutView,
  },
  {
    path: "/sustainable-materials",
    name: "sustainable-materials",
    component: AboutView,
  },
  {
    path: "/circular-economy",
    name: "circular-economy",
    component: AboutView,
  },
  {
    path: "/decade-of-fairphone",
    name: "decade-of-fairphone",
    component: AboutView,
  },
  {
    path: "/user-stories",
    name: "user-stories",
    component: AboutView,
  },
  {
    path: "/future-of-modular-phones",
    name: "future-of-modular-phones",
    component: AboutView,
  },
  {
    path: "/future-of-modular-phones",
    name: "future-of-modular-phones",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
