<template>
    <div class="movieInformation" v-if="movieInfo">
        <div class="movieInfoText">
          <h1 class="movieTitle">{{movieInfo.title}}</h1>
          <ul class="ulGenres">
            <li 
            class="liGenre"
            v-for="genre in movieInfo.genres" :key="genre.id"> {{ genre.name }} </li>
          </ul>
          <hr>
          
          <h2>Overview</h2>
          <p>{{movieInfo.overview}}</p>

          <div class="budget" v-if="movieInfo.budget != 0">
            <h2>Budget</h2>
            <p>$ {{ numberWithCommas(movieInfo.budget)}}</p>
          </div>

          <h2>Vote average</h2>
          <p>{{movieInfo.vote_average}} / 10</p>

          <h2>Movie time</h2>
          <p>{{movieInfo.runtime}} minutes</p>
        </div>
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
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    numberWithCommas(x) {
      //functie om een getal met punten komma's te tonen
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }
  },
}
</script>

<style scoped>
.movieInformation {
  padding: 2rem;
  display: flex;
}
.movieInfoText {
  color: #35495e;
  padding-right: 1.5rem;
}

hr {
  margin-bottom: 1rem;
}

h2 {
  margin-bottom: .5rem;
}

p {
  margin-bottom: 1.5rem;
}

.movieImg {
  height: 100%;
  max-height: 80vh;
  max-width: 50%;
  object-fit: contain;
}

.movieTitle {
  margin-bottom: 1rem;
  color: #000;
}

.ulGenres {
  list-style-type: none;
  display: flex;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.liGenre {
  padding-right: 1.5rem;
  font-size: 14px;
  font-style: italic;
  color: #000;
}
</style>