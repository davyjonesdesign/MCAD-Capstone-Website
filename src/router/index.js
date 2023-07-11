import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resources',
    name: 'resources',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResourcesView.vue')
  },
  {
    path: '/process',
    name: 'process',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProcessView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
