import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Project from "../views/Project.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'empty',
      redirect:'/home',
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ]
})

export default router
