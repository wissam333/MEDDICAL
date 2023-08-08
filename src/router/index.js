import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServiceView from '../views/ServiceView.vue'
import freecheckup from '../views/freecheckup.vue'
import Doctors from '../views/Doctors.vue'
import contact from '../views/contact.vue'
import news from '../views/news.vue'
import singlenews from '../views/singlenews.vue'
import appointment from '../views/book-an-appointment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/views/AboutView',
      name: 'AboutView',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/views/ServiceView',
      name: 'ServiceView',
      component: ServiceView
    },
    {
      path: '/views/freecheckup',
      name: 'freecheckup',
      component: freecheckup
    },
    {
      path: '/views/Doctors',
      name: 'Doctors',
      component: Doctors
    },
    {
      path: '/views/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/views/news',
      name: 'news',
      component: news
    },
    {
      path: '/views/singlenews',
      name: 'singlenews',
      component: singlenews
    },
    {
      path: '/views/book-an-appointment',
      name: 'appointment',
      component: appointment
    }
  ]
})

export default router
