<template>
  <div id="app">
    <!-- <indexComp /> -->
    <!-- <blogComp /> -->
    <!-- <blogDetailsComp /> -->
    <!-- <ProjectComp /> -->
    <projectDetailsComp @nextSlider="nextSlider"/>
  </div>
</template>

<script>
// import indexComp from './pages/indexComp.vue'
// import blogComp from './pages/blogComp.vue'
// import blogDetailsComp from './pages/blogDetailsComp.vue'
// import ProjectComp from './pages/projectComp.vue'
import projectDetailsComp from './pages/projectDetailsComp.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    // indexComp,
    // blogComp,
    // blogDetailsComp,
    // ProjectComp
    projectDetailsComp
  },
  methods: {
    nextSlider () {
      this.NEXT_SLIDER()
    },
    ...mapMutations(['NEXT_SLIDER'])
  },
  computed: {
    ...mapState(['title', 'text', 'currentSlider', 'slider']),
    ...mapGetters(['getSlider'])
  }
}
</script>

<style lang="scss">
@import "./assets/style/vars";

* {
  box-sizing: border-box;
}

#app {
  // img {
  //   display: block;
  // }

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
