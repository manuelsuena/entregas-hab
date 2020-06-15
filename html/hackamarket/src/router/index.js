import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Error from '../views/Error.vue'
import { isLoggedIn, checkAdmin } from "../api/utils";
/* import AddCliente from '../views/AddCliente.vue' */


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      //RUTA PÚBLICA
      allowAnonymous: true,
      },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      //RUTA PÚBLICA
      allowAnonymous: true,
      },
  },
  {
    path: '/clientes',
    name: 'CLientes',
    component: () => import('../views/CLientes.vue'),
    //Ruta Privada
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
      },
      beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
      next({
      path: "/productos",
      query: { redirect: to.fullPath },
      });
      } else {
      next();
      }
      },
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/Productos.vue'),
    meta: {
      //RUTA PRIVADA
      allowAnonymous: false,
      },
  },
  {
    path: '/add-cliente',
    name: 'AddCliente',
    component: () => import('../views/AddCliente.vue'),
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
      },
      beforeEnter: (to, from, next) => {
      if (to.meta.allowNoAdmin === false && !checkAdmin()) {
      next({
      path: "/productos",
      query: { redirect: to.fullPath },
      });
      } else {
      next();
      }
      },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  meta:{
    //RUTA PRIVADA
    allowAnonymous: false,
    },
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
    },
    ];

const router = new VueRouter({
  routes
})

// COMPROBANDO CADA PÁGINA POR SI LA PERSONA ESTÁ LOGUEADA //
router.beforeEach((to, from, next) => {
  // SI LA RUTA ES PRIVADA Y LA PERSONA NO TIENE TOKEN //
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
  next({
  path: "/",
  query: { redirect: to.fullPath },
  });
  } else {
  next();
  }
  });
  
  export default router;
