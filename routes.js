import { createWebHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import About from './views/About.vue'
import BuyNow from './views/BuyNow.vue'
import ContactUs from './views/ContactUs.vue'
import Register from './views/Register'
import { auth } from '../src/firebase/index'


const routes=[
    {
name:'Home',
path:'/',
component:Home,
meta: {
    requiresAuth: true
  }
    },
    {
name:'BuyNow',
path:'/BuyNow',
component:BuyNow,
meta: {
    requiresAuth: true
  }
    },
    {
        name:'About',
        path:'/About',
        component:About,
        meta: {
            requiresAuth: true
          }
    },
{
    name:'ContactUs',
    path:'/ContactUs',
    component:ContactUs,
    meta: {
        requiresAuth: true
      }
},
{
    name:'Register',
    path:'/Register',
    component:Register
}
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  router.beforeEach((to, from, next) => {
    if (to.path === '/Register' && auth.currentUser) {
      next('/')
      return;
    }
  
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
      next('/Register')
      return;
    }
  
    next();
  })
  
  export default router