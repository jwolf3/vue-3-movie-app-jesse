<template>
    <div class="container">
        <div class="movieUl">
            <Movies 
            v-for="movie in movies.results" 
            :key="movie.id" 
            @click="getMovieInfo(movie.id)" 
            :movie="movie"
            />
        </div>
        <PageSwitcher 
        :pageNum="pageNum" 
        @emitPageNumUp="pageNumUp" 
        @emitPageNumDown="pageNumDown"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import Movies from '@/components/Movies.vue'
import PageSwitcher from '@/components/PageSwitcher.vue'
import MovieService from '@/services/MovieService.js'

export default {
  name: 'Home',

  components: {
    Movies,
    PageSwitcher,
  },

  data() {
      return {
        pageNum: 1,
        
        movies: '',

        movieID: '',
        movieInfo: '',
      }
    },

    methods: { 
      pageNumDown() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pageNum--
        this.loadMovies()
      },

      pageNumUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pageNum++
        this.loadMovies()
      },

      loadMovies() {
        MovieService.getPopularMoviePage(this.pageNum)
        .then(response => {
            this.movies = response.data
            console.log(this.movies);
        })
        .catch(error => {
            alert(error)
        })
      },
      
      getMovieInfo(movieID) {
        MovieService.getMovie(movieID)
        .then(response => {
            this.movieInfo = response.data
        })
        .catch(error => {
            alert(error)
        })
      }
    }, 

    created() {
        this.loadMovies()
    },
}
</script>

<style scoped>
.container {
  padding: 1rem;
  max-width: 1072px;
  margin-left: auto;
  margin-right: auto;
}

.movieUl {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
}

</style>
