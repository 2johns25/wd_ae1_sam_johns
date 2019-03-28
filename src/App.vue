<template>
  <div class="body_wrapper">
      
    <AutoraHeader/>
    <div v-if="loader" class="col-5 offset=md-5">
      <p>Loading...</p>
    </div>


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

import {fb} from './config/firebase'
import authStore from './stores/authstore'

export default {
  name: 'app',
  components: {
    AutoraHeader,
    AutoraFooter,
    About,
    Dashboard,
    Discover,
    About
  },
  data() {
      return {
        user: "",
        loader: true
      }
    },
    created() {
      fb.auth().onAuthStateChanged(user => {
        this.loader = false;
        if (user) {
          this.user = user;
          authStore.setAuthAction(user);
          this.$router.push('/');
        } else {
          authStore.clearAuthFunction();
        }

      });
    },
}
</script>

<style lang="scss" scoped>

</style>
