import { createRouter, createWebHistory } from 'vue-router'
import TodayView from '../views/TodayView.vue'

const routes = [
  {
    path: '/today',
    name: 'today',
    component: TodayView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
