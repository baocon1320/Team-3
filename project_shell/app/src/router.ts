import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Toolbar from './views/Toolbar.vue';
import TrackingView from './views/TrackingView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/toolbar',
      name:'toolbar',
      component: () => import('./views/Toolbar.vue'),
    },
    {
        path: "/tracking",
        name: 'tracking',
        component: () => import('./views/TrackingView.vue'),
    },
    {
        path: "/store",
        name: 'store',
        component: () => import('./views/StoreView.vue'),
    },
    {
        path: "/services",
        name: 'services',
        component: () => import('./views/Service.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/LoginView.vue'),
    },

  ],
});
