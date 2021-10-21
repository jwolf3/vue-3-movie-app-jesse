<template>
    <div class="movieInformation" v-if="movieInfo">
        <h1>{{movieInfo.title}}</h1>
        <p>{{movieInfo.overview}}</p>
        <img 
        class="movieImg"
        :src="img_path + movieInfo.poster_path" 
        :alt="movieInfo.title"
        >
    </div>    
</template>

<script>
import MovieService from '@/services/MovieService.js'
export default {
  name: 'MovieDetails',
  props: ['id'], 
  data() {
    return {
      movieInfo: null,
      img_path: 'https://image.tmdb.org/t/p/w1280/',
    }
  },
  created() {
    MovieService.getMovie(this.id)
      .then(response => {
        this.movieInfo = response.data
        console.log(this.movieInfo);
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.movieImg {
    width: 100%;
}
</style>