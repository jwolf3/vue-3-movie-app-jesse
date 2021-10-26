<template>
    <header>
        <div id="nav">
            <div class="pages">
                <router-link to="/">Home</router-link> |
                <router-link to="/favorites">Favorite Movies</router-link>
            </div>
            <div class="searchDiv">
                <input 
                type="text" 
                placeholder="Search movie" 
                class="searchInput" 
                v-model="searchInput"
                >
                <!-- :to="{ name: 'Home', query: { page: pageNum + 1 }}"  -->
                <router-link 
                to="/"
                class="search"
                @click.prevent="searchByInput"
                > 
                    <i class="fas fa-search"></i> 
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',

    data() {
        return {
            searchInput: ''
        }
    },

    methods: {
        searchByInput() {
            if (this.searchInput) {
                //verander spaties in plussen .split(' ').join('+')
                const searchInputWithoutSpaces = this.searchInput.split(' ').join('+')
                this.$emit('emitMoviesFoundBySearch', searchInputWithoutSpaces) 
            }
        }
    }
}
</script>

<style scoped>
header {
    text-align: center;
    background: #42b883;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

#nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1072px;
    width: 100%;
    line-height: 3rem;
}

a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
}

.router-link-active {
    font-weight: 600;
    text-decoration: underline;
}

.searchDiv {
    background: #FFF;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 3px;
}

.search {
    color: #42b883;
    font-size: 20px;
}

.searchInput {
    border: 0;
    margin-left: 1rem;
    width: 12rem;
    line-height: 2rem;
    font-size: 14px;
}

.searchInput:focus-visible {
    outline: none;
}

</style>