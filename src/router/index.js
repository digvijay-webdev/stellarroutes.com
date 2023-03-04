import Vue from 'vue'
import VueRouter from 'vue-router'

// importing all pages
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Blogs from "@/pages/Blogs.vue";
import Contact from "@/pages/Contact.vue";
import WebDev from "@/pages/WebDev.vue";

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
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs
  },
  {
    path: "/web-development",
    name: "webDev",
    component: WebDev
  },
  {
    path: "/blogs/:id",
    name: "singleBlog",
    component: () => import("@/pages/SingleBlog.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
      document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
});

export default router
