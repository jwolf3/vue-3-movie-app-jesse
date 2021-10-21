<template>
    <div class="pageSwitcher">

        <router-link
        :to="{ name: 'Home', query: { page: pageNum - 1 }}"
        rel="prev"
        v-if="pageNum != 1"
        @click="pageScrollUp" 
        class="pageButton"
        > 
            <i class="fas fa-minus-square"></i>
        </router-link>

        <span class="currentPageNumber">{{pageNum}}</span>

        <router-link
        :to="{ name: 'Home', query: { page: pageNum + 1 }}"
        rel="next"
        @click="pageScrollUp"
        class="pageButton"
        >
            <i class="fas fa-plus-square"></i>
        </router-link>

    </div>
</template> 

<script>
export default {
    name: 'PageSwitcher',
    
    props: {
        pageNum: {
            type: Number,
            required: true
        }
    },

    methods: {
        pageScrollUp() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
}
</script>

<style scoped>
.pageSwitcher {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    width: 100%;
    max-width: 1010px;
    background: #FFF;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    height: 5rem;
}

.pageButton {
    font-size: xxx-large;
    border: none;
    margin: 10px 1.5rem 0 1.5rem;
    color: #42b883;
    background: #FFF;
}

.pageButton:hover {
    cursor: pointer;
    color: #2a664b;
}

.currentPageNumber {
    line-height: 5rem;
}
</style>