import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Blog from './views/Blog.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/blog', component: Blog },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
