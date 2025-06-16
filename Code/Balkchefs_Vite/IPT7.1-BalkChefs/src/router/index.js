import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import CreateRecipe from '../views/CreateRecipe.vue';
import Account from '../views/Account.vue';
import Recipe from '../views/Recipe.vue';
import Search from '../views/Search.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/signup', name: 'signup', component: SignUp },
  { path: '/create-recipe', name: 'CreateRecipe', component: CreateRecipe, meta: { requiresAuth: true } },
  { path: '/account', name: 'Account', component: Account, meta: { requiresAuth: true } },
  { path: '/recipe/:id', name: 'Recipe', component: Recipe },
  { path: '/search', name: 'Search', component: Search },   
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user');
  if (to.meta.requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
});

export default router;
