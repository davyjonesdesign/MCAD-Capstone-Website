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
    path: '/results',
    name: 'results',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResultsView.vue')
  },
  {
    path: '/process',
    name: 'process',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProcessView.vue')
  },
  {
    path: '/citations',
    name: 'citations',
    component: () => import(/* webpackChunkName: "about" */ '../views/CitationsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
