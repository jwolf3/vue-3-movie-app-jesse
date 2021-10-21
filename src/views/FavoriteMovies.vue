<template>
    <div class="container">
        <div class="movieUl" v-if="allfavoriteMovies.length !== 0">
            <!-- component --> 
            <Movies 
            v-for="movie in allfavoriteMovies" 
            :key="movie.id" 
            @click.prevent="getMovieInfo(movie.id)" 
            :movie="movie"
            @emitFavoriteMovie="FavoriteMovie"
            :allfavoriteMovies="allfavoriteMovies"
            />
            <!-- component --> 
        </div>
        <div v-else>
          <h2>No Favorite movies yet...</h2>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import db from '@/db';
import Movies from '@/components/Movies.vue'
import MovieService from '@/services/MovieService.js'

export default {
  name: 'FavoriteMovies',

  components: {
    Movies,
  },

  data() {
      return {     
        allfavoriteMovies: [],
        //hier zitten alle liked movies in (opgehaald van DB)

        movieID: '',
        movieInfo: '',
      }
    },

    //WANNEER PAGINA START VOER FUNCTIE LOADMOVIES UIT
    created() {
        this.loadMovies()
    },

    methods: { 
      loadMovies() {
        
        //connect met de database naam favMovies
        const movRef = db.database().ref("favMovies");
        
        movRef.on('value', snapshot => {
          const data = snapshot.val();
          let favMovArray = [];

          if (data !== null) {
          //voor elke data item push deze in de todo array
            Object.keys(data).forEach(key => {
              favMovArray.push(data[key]);
            });
          }

          //zet de todoarray gelijk aan die van de data() return variable
          this.allfavoriteMovies = favMovArray;
        }); 
        
      },

      getMovieInfo(movieID) {
        MovieService.getMovie(movieID)
        .then(response => {
            this.movieInfo = response.data
        })
        .catch(error => {
            alert(error)
        })
      },
      
      //toggelen tussen fav en niet
      FavoriteMovie(movie) {
        const movRef = db.database().ref("favMovies");

        //IF FILM IS AL FAVORITE --> ZET DAN UIT FAVORIET
        if (this.allfavoriteMovies.some( film => film.id == movie.id)) {
          const indexOfMov = this.allfavoriteMovies.findIndex(film => film.id === movie.id)
          
          movRef.on('value', snapshot => {
            const data = snapshot.val();
            
            //if data == null voer functie niet uit anders foutmelding in console
            if (data == null) {
              return
            } else {
              //krijg de key van alle items uit de database -> dan de juiste key adhv de index van de movie
              this.allkeys = Object.keys(data)[indexOfMov]  
            }

          });

          //verwijder de movie met de juiste key
          db.database().ref('favMovies/' + this.allkeys).remove()

        //IF FILM IS NOG NIET FAVORIET --> ZET FILM DAN IN FAVORIET
        }   
      },

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
