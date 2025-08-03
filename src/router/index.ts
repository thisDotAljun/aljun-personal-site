import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/redirects/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        requireAuth: false,
      },
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      meta: {
        title: 'Page Not Found',
        requireAuth: false,
      },
    },
  ],
})

router.beforeEach((to, _from, next) => {
  if (to.matched.length === 0) {
    next({ name: '404' })
  } else {
    next()
  }
})

export default router
