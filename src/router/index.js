import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/OmOs.vue'),
    },
    {
      path: '/kister',
      name: 'kister',
      component: () => import('../views/KisterUrner.vue'),
    },
    {
      path: '/print',
      name: 'print',
      component: () => import('../views/printable.vue'),
    },
  ],
})

export default router
