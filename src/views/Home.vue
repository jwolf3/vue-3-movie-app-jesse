<template>
    <div class="container">
        <!---------- component ----------> 
        <MovieFilters
        :movies="filmsNumberTwo.results"
        @emitFilterMoviesGenre="filterMoviesGenre"
        @emitLoadMovies="loadMovies"
        />
        <!---------- component ----------> 
        <div class="movieUl">
            <!---------- component ----------> 
            <Movies 
            v-for="movie in movies.results" 
            :key="movie.id" 
            @click="getMovieInfo(movie.id)" 
            :movie="movie"
            @emitFavoriteMovie="FavoriteMovie" 
            :allfavoriteMovies="allfavoriteMovies" 
            />
            <!---------- component ---------->
        </div>
        <!---------- component ---------->
        <PageSwitcher 
        :pageNum="pageNum" 
        />  
        <!---------- component ---------->
    </div>
</template>

<script>
// @ is an alias to /src
import db from '@/db';
import MovieService from '@/services/MovieService.js'
import { watchEffect } from 'vue'

import Movies from '@/components/Movies.vue'
import PageSwitcher from '@/components/PageSwitcher.vue'
import MovieFilters from '@/components/MovieFilters.vue'

export default {
  name: 'Home',

  props: ['pageNum','inputSearch'],

  components: {
    Movies,
    PageSwitcher,
    MovieFilters,
  },

  data() {
      return {
        movies: '',

        filmsNumberTwo: [],

        allfavoriteMovies: [],
        allKeys: '',

        movieID: '',
        movieInfo: '',
      }
    },
    
    //WANNEER PAGINA START VOER FUNCTIE LOADMOVIES UIT
    created() {
      //WATCH EFFECT VOOR HET RELOADEN WANNEER HET PAGINA NUMMER VERANDERD
      watchEffect(() => {
        this.loadMovies()
      })
    },

    //Watch een bepaalde property (kijkt wanneer deze veranderd)
    watch: {
      inputSearch: function() {
        MovieService.searchMovie(this.inputSearch)
        .then(response => {
            this.movies = response.data
        })
        .catch(error => {
            alert(error)
        })

        MovieService.searchMovie(this.inputSearch)
        .then(response => {
            this.filmsNumberTwo = response.data
        })
        .catch(error => {
            alert(error)  
        })
        
      }
    },

    methods: { 
      loadMovies() {
        //KRIJG DE MOVIES ADHV HET PAGINANUMMER, ZET DEZE GELIJK AAN THIS.MOVIES
        MovieService.getPopularMoviePage(this.pageNum)
        .then(response => {
            this.movies = response.data
            // console.log(this.movies)
        })
        .catch(error => {
            alert(error)
        })

        MovieService.getPopularMoviePage(this.pageNum)
        .then(response => {
            this.filmsNumberTwo = response.data
        })
        .catch(error => {
            alert(error)
        })

        // ----------------- VOOR FAV MOVIE --------------------------------------------------------------------
        // CONNECT MET DE DATABASE WAAR ALLE FAVORIETE FILMS IN STAAN
        const movRef = db.database().ref("favMovies")
        
        movRef.on('value', snapshot => {
          const data = snapshot.val()
          const favMovArray = []

          // ALS ER 0 FILMS IN DE DB STAAN (DUS DATA == NULL) ZET ALLFAVORITEMOVIES OP []
          if (data == null)  {
            this.allfavoriteMovies = []
          } 
          // ANDERS MAAK ALLFAVORITEMOVIES GELIJK AAN DE DATA IN DE DB
          else {
            Object.keys(data).forEach(key => {
              favMovArray.push(data[key])
            });
            this.allfavoriteMovies = favMovArray
          } 

        })
        // ----------------- VOOR FAV MOVIE --------------------------------------------------------------------
      },
      
      // GA NAAR EEN SPECIFIEKE MOVIE D.M.V. HEM TE ZOEKEN VIA MOVIE.ID
      getMovieInfo(movieID) {
        MovieService.getMovie(movieID)
        .then(response => {
            this.movieInfo = response.data
        })
        .catch(error => {
            alert(error)
        })
      },

      //TOGGELEN TUSSEN FAVORITE MOVIE
      FavoriteMovie(movie) {
        const movRef = db.database().ref("favMovies");

        //IF FILM IS AL FAVORITE --> ZET DAN UIT FAVORIET
        if (this.allfavoriteMovies.some( film => film.id == movie.id)) {
          const indexOfMov = this.allfavoriteMovies.findIndex(film => film.id === movie.id)
          
          movRef.on('value', snapshot => {
            const data = snapshot.val()
            
            //IF DATA == NULL VOER FUNCTIE NIET UIT ANDERS FOUTMELDING IN CONSOLE
            if (data == null) {
              return
            } else {
              //KRIJG DE KEY VAN ALLE ITEMS UIT DE DATABASE -> DAN DE JUISTE KEY ADHV DE INDEX VAN DE MOVIE
              this.allkeys = Object.keys(data)[indexOfMov]  
            }

          });

          //VERWIJDER DE MOVIE MET DE JUISTE KEY
          db.database().ref('favMovies/' + this.allkeys).remove()

        //IF FILM IS NOG NIET FAVORIET --> ZET FILM DAN IN FAVORIET
        } else {
          movRef.push(movie)  
        }

      },

      //KRIJG ALLE FILMS MET DAT BEPAALDE GENRE (UIT THIS.MOVIES.RESULTS GEHAALD)
      filterMoviesGenre(genre) {

        let moviesWithGenre = []
        this.filmsNumberTwo.results.forEach(movie => {
          const movieGenres = movie.genre_ids
          if (Object.values(movieGenres).indexOf(genre) > -1) {
            moviesWithGenre.push(movie)
          }
        });
        this.movies.results = moviesWithGenre
      }

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

