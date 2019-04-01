import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './scss/main.scss';
import 'popper.js/dist/popper.min.js'
import 'jquery/dist/jquery.min.js'



import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import About from './pages/about'
import Login from './pages/login'
import Discover from './pages/discover'
import Join from './pages/join'

import authStore from './stores/authstore';

Vue.use(Router);

const routes = [
  {path: '/discover', component: Discover, meta: {requiresAuth: true}},
  {path: '/about', component: About},
  {path: '/login', component: Login},
  {path: '/join', component: Join}

];

const router = new Router ({routes: routes})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.state.user) {
      next('Login');
    } else {
      next();
    }
  } else {
    next();
  }

});

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
