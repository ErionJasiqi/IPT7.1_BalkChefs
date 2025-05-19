import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Recipe from '../views/Recipe.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/recipe/:id', component: Recipe }
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView
      },
    ]
  })
  
  export default router


  