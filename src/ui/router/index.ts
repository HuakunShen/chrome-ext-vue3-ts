import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import Home from '@/ui/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/ui/views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(), // update history setting to this, the previous one doesn't work in chrome extension ui
  routes,
});

export default router;
