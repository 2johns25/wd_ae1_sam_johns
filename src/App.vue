<template>
  <div class="body_wrapper">
    <AutoraHeader/>
<router-view/>
    <div v-if="loader" class=loader>
        <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import AutoraHeader from './components/AutoraHeader.vue'
import Login from './pages/login.vue'
import Discover from './pages/discover.vue'
import About from './pages/about.vue'

import {fb} from './config/firebase'
import authStore from './stores/authstore'

export default {
  name: 'app',
  components: {
    AutoraHeader,
    About,
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
          this.$router.push('/discover');
        } else {
          authStore.clearAuthFunction();
        }

      });
    },
}
</script>

<style lang="scss" scoped>

// Extra small devices (Portrait phones, 320px and up)

.body_wrapper {
    width: 100%;
    min-width: 370px;
    margin: 0 auto;
}

// Medium devices (tablets, 768px and up)


</style>
