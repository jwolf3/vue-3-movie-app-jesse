<template>
    <div class="pageSwitcher">
        <button class="pageButton" @click="emitPageNumDown" v-if="pageNum > 1">
            <i class="fas fa-minus-square"></i>
        </button>
        <span class="currentPageNumber">{{pageNum}}</span>
        <button class="pageButton" @click="emitPageNumUp">
            <i class="fas fa-plus-square"></i>
        </button>
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
        emitPageNumUp() {
           this.$emit('emitPageNumUp') 
        },

        emitPageNumDown() {
           this.$emit('emitPageNumDown') 
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
    margin: 0 1.5rem;
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