<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat'
}

#app {
  min-height: 100vh;
  background: rgb(235, 231, 231);
}
</style>
