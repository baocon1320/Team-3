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
        path: "/store/:cate_id",
        //path: "/store",
        name: 'store',
        props: true,
        component: () => import('./views/StoreView.vue'),
    },
    {
        path: "/services",
        name: 'services',
        component: () => import('./views/Service.vue'),
    },
    {
        path: "/item/:item_id",
        name: 'item',
        props:true,
        component: () => import('./views/ItemView.vue'),
    },
    {
        path: "/cart",
        name: 'carts',
        component: () => import('./views/CartView.vue'),
    },
    {
        path: "/checkout",
        name: 'checkout',
        component: () => import('./views/CheckoutView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/LoginView.vue'),
    },
    {
        path: '/manufacturer',
        name: 'manufacturer',
        component: () => import('./views/ManufacturerView.vue')
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('./views/SignUpView.vue')
    },
  ],
});
