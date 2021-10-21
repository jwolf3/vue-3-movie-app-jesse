<template>
    <div class="GenreFiltersDiv" ref="parentDiv">
        <button 
        class="GenreFilterButton"
        v-for="(genreButton, index) in uniqueGenres"
        :key="index"
        @click="emitFilterMoviesGenre(genreButton,index)"
        >
            <span v-if="genreButton == 28">Action</span>
            <span v-if="genreButton == 12">Adventure </span>
            <span v-if="genreButton == 16">Animation</span>
            <span v-if="genreButton == 35">Comedy</span>
            <span v-if="genreButton == 80" >Crime</span>
            <span v-if="genreButton == 99">Documentary</span>
            <span v-if="genreButton == 18">Drama</span>
            <span v-if="genreButton == 10751">Family</span>
            <span v-if="genreButton == 14">Fantasy</span>
            <span v-if="genreButton == 36">History</span>
            <span v-if="genreButton == 27">Horror</span>
            <span v-if="genreButton == 10402">Music</span>
            <span v-if="genreButton == 9648">Mystery</span>
            <span v-if="genreButton == 10749">Romance</span>
            <span v-if="genreButton == 878">Science Fiction</span>
            <span v-if="genreButton == 10770">TV Movie </span>
            <span v-if="genreButton == 53">Thriller</span>
            <span v-if="genreButton == 10752">War</span>
            <span v-if="genreButton == 37">Western</span>
        </button>
    </div>
    <hr>
</template>

<script>
export default {
    name: 'MovieFilters',
    props: ['movies'],
    emits: ["emitFilterMoviesGenre","emitLoadMovies"],
    data() {
        return {
            uniqueGenres: [],
        }
    },
    //ALLEEN MET DEZE LIFECYCLE HOOK KRIJG IK GEEN ERRORS OVER DE .MAP FUNCTIE (GEEN IDEE WAAROM...)
    beforeUpdate() {
        this.getAllGenres()
        this.resetActiveFilter()
    },
    methods: {
        getAllGenres() {
            var films = this.movies;
            var uniqueGenreArrays = [...new Set(films.map(movie => movie.genre_ids))];
            var merged = [].concat.apply([], uniqueGenreArrays);
            this.uniqueGenres = [...new Set(merged)];
        },

        emitFilterMoviesGenre(genreButton,index) {
            //verwijst naar de ref van de parent div
            const parent = this.$refs.parentDiv
            //geef het child met de juiste index active
            const indexChild = parent.children[index]

            if (indexChild.classList.contains("active")) {
                this.resetActiveFilter()
                this.$emit('emitLoadMovies') 
            } else {
                this.resetActiveFilter()
                indexChild.classList.add("active");                
            }

            this.$emit('emitFilterMoviesGenre', genreButton) 
        },

        //verwijder alle active filters
        resetActiveFilter() {
            const parent = this.$refs.parentDiv
            parent.children.forEach(child => {
                child.classList.remove("active");
            })
        }
    }
}
</script>

<style scoped>

hr {
    margin: 1rem 0;
}

.GenreFiltersDiv {
    display: flex;

    /* for scrolling */
    overflow-x: auto;

    /* for flex wrap */
    /* flex-wrap: wrap;
    justify-content: space-evenly; */
}

.GenreFilterButton {
    padding: .5rem 1rem;
    margin: .5rem;
    cursor: pointer;
}

.active {
    background: #35495e;
    color: white;
    border: none;
    border-radius: 2px;
    transform: scale(1.1);
}

</style>