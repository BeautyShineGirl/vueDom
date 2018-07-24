<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <Layout/> -->
  </div>
</template>

<script>
import Layout from '@/layout/layout.vue'

export default {
  name: 'App',
  components:{Layout}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body{
  margin: 0;
  padding: 0;
}
</style>
