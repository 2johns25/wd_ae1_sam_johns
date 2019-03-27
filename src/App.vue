<template>
  <div class="body_wrapper">
    <AutoraHeader/>
    


<router-view/>
  <AutoraFooter/>
  </div>
</template>

<script>
import AutoraHeader from './components/AutoraHeader.vue'
import AutoraFooter from './components/AutoraFooter.vue'
import Login from './pages/login.vue'
import Dashboard from './pages/dash.vue'
import Discover from './pages/discover.vue'
import About from './pages/about.vue'

export default {
  name: 'app',
  components: {
    AutoraHeader,
    AutoraFooter,
    About,
    Dashboard,
    Discover,
    About
  }
}
</script>

<style lang="scss" scoped>

</style>
