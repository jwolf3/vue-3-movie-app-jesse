<template>
    <router-link 
    class="movie-link" 
    :to="{ name: 'MovieDetails', params: {id: movie.id} }" 
    >
        <div class="movieLi">
            <h2 class="movieTitle">{{movie.title}}</h2>
            <ul class="genreUl">
                <li 
                class="genreLi"
                v-for="genre in movie.genre_ids" 
                :key="genre"
                >
                    <p v-if="genre == 28">Action</p>
                    <p v-if="genre == 12">Adventure </p>
                    <p v-if="genre == 16">Animation</p>
                    <p v-if="genre == 35">Comedy</p>
                    <p v-if="genre == 80">Crime</p>
                    <p v-if="genre == 99">Documentary</p>
                    <p v-if="genre == 18">Drama</p>
                    <p v-if="genre == 10751">Family</p>
                    <p v-if="genre == 14">Fantasy</p>
                    <p v-if="genre == 36">History</p>
                    <p v-if="genre == 27">Horror</p>
                    <p v-if="genre == 10402">Music</p>
                    <p v-if="genre == 9648">Mystery</p>
                    <p v-if="genre == 10749">Romance</p>
                    <p v-if="genre == 878">Science Fiction</p>
                    <p v-if="genre == 10770">TV Movie </p>
                    <p v-if="genre == 53">Thriller</p>
                    <p v-if="genre == 10752">War</p>
                    <p v-if="genre == 37">Western</p>
                </li>
            </ul>
            <div class="imgDiv">
                <img 
                class="movieImage" 
                :src="movie.poster_path ? img_path + movie.poster_path : img_path + default_path" 
                :alt="movie.title"
                > 
                <div class="svgDiv">
                    <!-- geef de favoriete films een andere class mee dan de anderen (check of id v/d film in de fav array zit) -->
                    <svg  
                    class="favoriteSVG"
                    :class="{ 'favoriteSVGActive' : this.allfavoriteMovies.some( film => film.id == movie.id ) }"
                    viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg" ><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                    @click.prevent="emitFavoriteMovie(movie)"
                    /></svg>
                </div>
            </div>
            <p class="movieDescription">{{movie.overview}}</p>
        </div>
    </router-link>
</template> 

<script>

export default {
    name: 'Movies',
    props: {
        movie: {
            type: Object,
            required: true
        },
        allfavoriteMovies: {
            type: Array,
            required: false
        }
    },
    data() {
        return {
            img_path: 'https://image.tmdb.org/t/p/w780/',
            default_path: 'gzb6P78zeFTnv9eoFYnaJ2YrZ5q.jpg'
        }
    },
    methods: {
        emitFavoriteMovie(movie) {
            this.$emit('emitFavoriteMovie', movie) 
        }
    },
}
</script>

<style scoped>
.movie-link {
    text-decoration: none;
}

.movieLi {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: #FFF;
    border-radius: 1rem;
    margin: 1rem .5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    width: 15rem; 
}

.movieLi:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: ease-in .2s;
}

.movieTitle {
    display: flex;
    height: 4rem;
    font-size: 17px;
    text-align: center;
    color: #35495e;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.imgDiv {
    position: relative;
    min-height: 380px;
}

.movieImage {
    padding-top: 1rem;
    /* IMG width without padding */
    width: 240px;
    height: 380px;
    margin-left: -16px;
    position: relative;
}

.svgDiv {
    width: 35px;
    background: rgba(0, 0, 0, 0.7);
    padding: .5rem;
    border-radius: 50%;
    height: 35px;
    display: flex;
    justify-content: center;
    position: absolute;
    align-items: center;
    top: 1.5rem;
    left: -.5rem;
}

.lengthZero {
    height: 18px;
    width: 20px;
    stroke: white;
    stroke-width: 35px;
    fill-opacity: 0;
    fill: white;
}

.favoriteSVG {
    height: 18px;
    width: 20px;
    stroke: white;
    stroke-width: 35px;
    fill-opacity: 0;
    fill: white;
}

.favoriteSVGActive {
    height: 18px;
    width: 20px;
    stroke: white;
    stroke-width: 35px;
    fill-opacity: 1;
    fill: white;
}

.favoriteSVG:hover {
    fill-opacity: 1;
    fill: white;
    transition: .3s;
}

.movieDescription {
    font-size: 13px;
    margin-top: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #35495e;
}

.genreUl {
    list-style-type: none;
    display: flex;
    color: #35495e;
    flex-wrap: wrap;
    align-items: flex-end;
    min-height: 30px;
}

.genreLi {
    margin: 0 5px;
    font-size: 12px;
}
</style>