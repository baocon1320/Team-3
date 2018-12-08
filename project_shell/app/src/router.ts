import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Toolbar from './views/Toolbar.vue';
import TrackingView from './views/TrackingView.vue';
import { AuthModel, AccountModel } from '@/models';
import { AuthProvider, AccountProvider } from '@/providers';


Vue.use(Router);

let router = new Router({
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
        component: () => import('./views/ServiceView.vue'),
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
        path: "/confirmation/:order_id",
        name: 'confirmation',
        component: () => import('./views/ConfirmationView.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/LoginView.vue'),
        meta: {
          guest: true
        }
    },
    {
        path: '/manage/changepassword',
        name: 'passwordmanager',
        component: () => import('./views/PasswordManagerView.vue'),
        meta: {
          requiresAuth: true
        }
    },
      {
        path: '/manage/item',
        name: 'itemmanager',
        component: () => import('./views/ItemManagerView.vue'),
        meta: {
          requiresAuth: true
        }
    },
      {
        path: '/manage/order',
        name: 'ordermanager',
        component: () => import('./views/OrderManagerView.vue'),
        meta: {
          requiresAuth: true
        }
    },
    {
        path: '/manage/account',
        name: 'accountmanager',
        component: () => import('./views/AccountManagerView.vue'),
        meta: {
          requiresAuth: true,
          is_owner : true
        }
    },
    {
        path: '/manage/general',
        name: 'generalmanager',
        component: () => import('./views/GeneralManagerView.vue'),
        meta: {
          requiresAuth: true,
          is_owner : true
        }
    },
    {
        path: '/owner',
        name: 'owner',
        component: () => import('./views/OwnerView.vue'),
        meta: {
          requiresAuth: true,
          is_owner : true
        }
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

router.beforeEach((to, from, next) => {
    const userJson = localStorage.getItem('user');
    let user = userJson !== null ? JSON.parse(userJson) : null;
    let token1 = 'aaaa';
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null || user == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            //this.currentUser = userJson !== null ? JSON.parse(userJson) : new User();
            
            var authprovider = new AuthProvider();

            let token = new AuthModel('','',0);
            console.log(user.id);
            authprovider.getTokenByAccountId(user.id).then(data => {
            if(data == null || data.token != localStorage.getItem('jwt')){
                //token = data;
                //token1 = data.token;
                //console.log(data);
                //console.log(token);
                //f(token1 != localStorage.getItem('jwt')){
                localStorage.removeItem('user');
                localStorage.removeItem('jwt');
                next({
                    path: '/login',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                var accountprovider = new AccountProvider();
                var account = new AccountModel('','',0);
                accountprovider.getAccountById(user.id).then(data => {
                    account = data;
                    account.password = '***';
                    localStorage.setItem('user', JSON.stringify(account)); 
                    user = userJson !== null ? JSON.parse(userJson) : null;
                    //let user = JSON.parse(localStorage.getItem('user'))
                    if(to.matched.some(record => record.meta.is_owner)) {
                        if(user.permission == 1){
                            next()
                        }
                        else{
                            next({ name: 'passwordmanager'})
                        }
                    }else {
                        next()
                    }
                })
                
            }
        
        });

        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'admin'})
        }
    }else {
        next() 
    }
})

export default router


