import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error from '../views/Error.vue'
import About from '../views/About.vue'
import TopArtists from '../views/TopArtists.vue'
import TopTracks from '../views/TopTracks.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artists',
    name: 'TopArtists',
    component: TopArtists
  },
  {
    path: '/tracks',
    name: 'TopTracks',
    component: TopTracks
  },
  {
    path: '/about',
    name: 'About',
    component: About 
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
]

const router = new VueRouter({
  routes
})

export default router
