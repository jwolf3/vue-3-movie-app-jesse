<template>
    <header>
        <div id="nav">
            <!-- Mobile & Tablet >800px -->
            <div class="hamburgerMenu">
                <i class="fas fa-bars menuIcon" @click="toggleMobileMenu"></i>
            </div>
            <div class="mobileMenu" v-show="mobileMenuOpen">
                <i class="fas fa-times closeMobileMenu" @click="toggleMobileMenu"></i>

                <router-link class="mobileRouterLink" to="/" @click="toggleMobileMenu">Home</router-link>
                <hr>
                <router-link class="mobileRouterLink" to="/favorites" @click="toggleMobileMenu">Favorite Movies</router-link>
            </div>
            <div class="blackOverlay" v-show="mobileMenuOpen"></div>

            <!-- Desktop >800px -->
            <div class="pages">
                <router-link to="/">Home</router-link> |
                <router-link to="/favorites">Favorite Movies</router-link>
            </div>

            <!-- Search bar -->
            <div class="searchDiv">
                <input 
                type="text" 
                placeholder="Search movie" 
                class="searchInput" 
                v-model="searchInput"
                @keyup.enter="searchByInput"
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
            searchInput: '',
            mobileMenuOpen: false
        }
    },

    methods: {
        searchByInput() {
            if (this.searchInput) {
                //verander spaties in plussen .split(' ').join('+')
                const searchInputWithoutSpaces = this.searchInput.split(' ').join('+')
                this.$emit('emitMoviesFoundBySearch', searchInputWithoutSpaces) 
            }
        },

        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
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

.hamburgerMenu {
    margin-left: 1rem;
    color: #FFF;
    display: none;
}

.menuIcon {
    font-size: 24px;
    line-height: 48px;
}

.menuIcon:hover {
    cursor: pointer;
}

.mobileMenu {
    position: absolute;
    top: 0;
    bottom: 0;
    background: rgb(241, 241, 241);
    display: flex;
    flex-direction: column;
    z-index: 999;
    padding: 1rem;
    align-items: flex-start;
    box-shadow: 3px 3px 6px -3px rgba(0,0,0,0.7);
}

.mobileRouterLink {
    color: #42b883;
}

.closeMobileMenu {
    color: grey;
    opacity: .5;
    font-size: 18px;
    margin-left: auto;
    cursor: pointer;
    padding: 0 0 5px 5px;
}

hr {
    width: 100%;
    margin: .3rem 0;
}

.blackOverlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background: rgba(0, 0, 0, 0.6);
}

@media (max-width: 799px) {
    .pages {
        display: none;
    }

    .hamburgerMenu {
        display: block;
    }

}

</style>