<template>
  <div id="app">
    <!-- <indexComp/> -->
    <!-- <blogComp/> -->
    <blogDetailsComp/>
  </div>
</template>

<script>
// import indexComp from './pages/indexComp.vue'
// import blogComp from './pages/blogComp.vue'
import blogDetailsComp from './pages/blogDetailsComp.vue'

export default {
  name: 'App',
  components: {
    // indexComp,
    // blogComp,
    blogDetailsComp
  }
}
</script>

<style lang="scss">
@import "./assets/style/vars";
*{
   box-sizing: border-box;
}
#app {
  img {
  display: block;
}
a {
  text-decoration: none;
  color: $titleColor;
}
svg:hover {
  cursor: pointer;
}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
</style>
