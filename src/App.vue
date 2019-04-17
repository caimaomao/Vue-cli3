<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<home></home>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/layout/Home.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld
     Home
  }
}
</script>

<style>
#app{
  width:100%;
  height:100%;
}
</style>
