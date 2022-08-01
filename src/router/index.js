import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  },
  {
    path: "/videos",
    name: "videos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Videos.vue")
    }
  },
  {
    path: "/store",
    name: "store",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Store.vue")
    }
  },
  {
    path: "/courses",
    name: "courses",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Courses.vue")
    }
  },
  {
    path: "/profile",
    name: "profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Profile.vue")
    }
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Login.vue")
    }
  },
  {
    path: "/signin",
    name: "signin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/SignIn.vue")
    }
  },
  {
    path: "/404",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/404.vue")
    }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  if (!routes.map(route => route.name).includes(to.name)) router.push("/404")
  if (to.path === "/") router.push("/home")
  switch (from.name) {
    case "home":
      if (to.name === "about") {
        to.meta.enterClass = "animate__animated animate__fadeInUp"
        to.meta.leaveClass = "animate__animated animate__fadeOutUp"
      } else {
        to.meta.enterClass = "animate__animated animate__fadeInBottomRight"
        to.meta.leaveClass = "animate__animated animate__fadeOutTopLeft"
      }
      break
    case "about":
      if (to.name === "home") {
        to.meta.enterClass = "animate__animated animate__fadeInDown"
        to.meta.leaveClass = "animate__animated animate__fadeOutDown"
      } else {
        to.meta.enterClass = "animate__animated animate__fadeInRight"
        to.meta.leaveClass = "animate__animated animate__fadeOutLeft"
      }
      break
    case "videos":
      if (to.name === "home") {
        to.meta.enterClass = "animate__animated animate__fadeInTopLeft"
        to.meta.leaveClass = "animate__animated animate__fadeOutBottomRight"
      } else if (["about"].includes(to.name)) {
        to.meta.enterClass = "animate__animated animate__fadeInLeft"
        to.meta.leaveClass = "animate__animated animate__fadeOutRight"
      } else {
        to.meta.enterClass = "animate__animated animate__fadeInRight"
        to.meta.leaveClass = "animate__animated animate__fadeOutLeft"
      }
      break
    case "store":
      if (to.name === "home") {
        to.meta.enterClass = "animate__animated animate__fadeInTopLeft"
        to.meta.leaveClass = "animate__animated animate__fadeOutBottomRight"
      } else if (["about", "videos"].includes(to.name)) {
        to.meta.enterClass = "animate__animated animate__fadeInLeft"
        to.meta.leaveClass = "animate__animated animate__fadeOutRight"
      } else {
        to.meta.enterClass = "animate__animated animate__fadeInRight"
        to.meta.leaveClass = "animate__animated animate__fadeOutLeft"
      }
      break
    case "courses":
      if (to.name === "home") {
        to.meta.enterClass = "animate__animated animate__fadeInTopLeft"
        to.meta.leaveClass = "animate__animated animate__fadeOutBottomRight"
      } else if (["about", "videos", "store"].includes(to.name)) {
        to.meta.enterClass = "animate__animated animate__fadeInLeft"
        to.meta.leaveClass = "animate__animated animate__fadeOutRight"
      } else {
        to.meta.enterClass = "animate__animated animate__fadeInRight"
        to.meta.leaveClass = "animate__animated animate__fadeOutLeft"
      }
      break
    case "profile":
    case "login":
      if (to.name === "home") {
        to.meta.enterClass = "animate__animated animate__fadeInTopLeft"
        to.meta.leaveClass = "animate__animated animate__fadeOutBottomRight"
      } else if (["about", "videos", "store", "courses"].includes(to.name)) {
        to.meta.enterClass = "animate__animated animate__fadeInLeft"
        to.meta.leaveClass = "animate__animated animate__fadeOutRight"
      } else {
        to.meta.enterClass = "animate__animated animate__fadeInRight"
        to.meta.leaveClass = "animate__animated animate__fadeOutLeft"
      }
      break
  }
})

export default router
