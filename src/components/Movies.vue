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
            <img 
            class="movieImage" 
            :src="img_path + movie.poster_path" 
            :alt="movie.title"
            >
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
        }
    },
    data() {
        return {
            img_path: 'https://image.tmdb.org/t/p/w780/',
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
    justify-content: center;
    align-items: center;
}

.movieImage {
    padding-top: 1rem;
    /* IMG width without padding */
    width: 240px;
    margin-left: -16px;
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