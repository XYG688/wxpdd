import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";
Vue.use(VueRouter);
const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/type",
    name: "type",
    component: () =>
      import("../views/TypeView.vue"),
  }, {
    path: "/mine",
    name: "mine",
    component: () =>
      import("../views/MineView.vue"),
    beforeEnter: (to, from, next) => {
      // ...
      console.log(from)
      console.log(store)
      let token = store.state.token
      if (token) {
        next()
      } else {
        next({
          name: "login",
          params:{
            id:"mine"
          }
        })
      }
    }
  }, {
    path: "/talk",
    name: "talk",
    component: () =>
      import("../views/TalkView.vue"),
    beforeEnter: (to, from, next) => {
      // ...
      console.log(from)

      let token = store.state.token
      if (token) {
        next()
      } else {
        next({
          name: "login",
          params:{
            id:"talk"
          }
        })
      }
    }
  }, {
    path: "/videos",
    name: "videos",
    component: () =>
      import("../views/VideoView.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;