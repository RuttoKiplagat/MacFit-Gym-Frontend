import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/icons/LandingPage.vue'
import Login from '@/components/icons/Login.vue'
import SignUp from '@/components/icons/SignUp.vue'
import HomePage from '@/components/icons/HomePage.vue'
import Profile from '@/components/icons/Profile.vue'
import Bundles from '@/components/icons/Bundles.vue'
import GymLocations from '@/components/icons/GymLocations.vue'
import Admin from '@/components/icons/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/bundles',
      name: 'bundles',
      component: Bundles,
    },
    {
      path: '/gym_locations',
      name: 'gymlocations',
      component: GymLocations,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },

  ],
})

export default router
