<template>
    <header>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/favorites">Favorite Movies</router-link>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
header {
    text-align: center;
    background: red;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

#nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

a {
    color: white;
    margin: 0 1rem;
}

.router-link-active {
    font-weight: 600;
    text-decoration: underline;
}
</style>