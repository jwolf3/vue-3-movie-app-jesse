import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import FavoriteMovies from '@/views/FavoriteMovies.vue'
import MovieDetails from '@/views/MovieDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
    props: route => ({ pageNum: parseInt(route.query.page) || 1 }) 
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    props: true,
    component: MovieDetails
  },
  {
    path: '/favorites',
    name: 'FavoriteMovies',
    component: FavoriteMovies
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
