import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Accedi from './pages/Accedi.vue';
import Registrati from './pages/Registrati.vue';
import Menu from './pages/Menu.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/chi-siamo',
        name: 'Accedi',
        component: Accedi,
      },
      {
        path: '/contatti',
        name: 'Registrati',
        component:Registrati,
      },
      {
        path: '/menu',
        name: 'menu',
        component: Menu,
      },

    ]
  });
  
  export { router };