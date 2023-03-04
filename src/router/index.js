import Vue from 'vue'
import VueRouter from 'vue-router'

// importing all pages
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Blogs from "@/pages/Blogs.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
