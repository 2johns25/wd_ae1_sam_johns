<template>
    <div class="header_wrapper">
        <div class="header_container clearfix">
            <router-link to="/" class="header_logo_wrapper">London Sightseer</router-link>
            <div class="nav_wrapper">
                <ul>
                    <li v-if="user"><router-link  to='/'>Dashboard</router-link></li>
                    <li v-if="user"><router-link to='/discover'>Discover</router-link></li>
                    <li><router-link to='/about'>About</router-link></li>
                    <li v-if="user"><a @click="logout" href="#" >Logout</a></li>
                    <li v-if="!user"><router-link to='/login'>Login</router-link></li>
                    <li v-if="!user"><router-link to='/join'>Join</router-link></li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import {fb} from '../config/firebase'
import authStore from '../stores/authstore'

export default {
  name: 'AutoraHeader',

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

    methods: {
      logout() {
        fb.auth().signOut()
        .then(() => {
          this.user = "";
          this.$router.push("Login");
        });
      }
    }
  }




</script>

<style lang="scss" scoped>

 // Extra small devices (Portrait phones, 320px and up)

.header_wrapper {
    width: 100%;
    background-color: #2C5F9A;
}
.header_container {
    max-width: 960px;
    width: 99%; 
    padding: 0.75em 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
}

.header_logo_wrapper {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 0.08em;
    font-size: 1em;
    color: #2C5F9A;
    background-color: white;
    padding: 5px;
    border-radius: 3px;
}

.header_logo_wrapper:hover {
    text-decoration: none;
}

.nav_wrapper ul {
    list-style-type: none;
    white-space: nowrap;
    padding: 0;
    margin: 0;
}

.nav_wrapper ul li {
    display: inline-block;
    margin: 0 0 0 1em;   
}

.nav_wrapper ul li a {
    padding: 0 0 0 0;
    position: relative;
    text-decoration: none; 
    color: white;
    letter-spacing: 0.02em;
    font-size: 1em;
    padding: 0 0 12px 0;
}

.nav_wrapper ul li a:hover:after {
    content: " ";
    height: 2px;
    width: 100%;
    background-color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

.nav_wrapper ul li {
    margin: 0 0 0 1.50em;   
}

}

</style>
