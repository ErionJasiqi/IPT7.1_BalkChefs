import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Recipe from '../views/Recipe.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/recipe/:id', component: Recipe }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;