import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ServiceDetailPage from '../pages/ServiceDetailPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/home', redirect: '/' },
  { path: '/services', name: 'services', component: ServicesPage },
  { path: '/services/:slug', name: 'service-detail', component: ServiceDetailPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
