<template>
    <div class="header_wrapper">
        <div class="header_container clearfix">
            <a href="#" class="header_logo_wrapper">
                <img src="../assets/header_logo.svg"/>
            </a>
            <div class="nav_wrapper">
                <ul>
                    <li><router-link v-if="user" to='/'>Dashboard</router-link></li>
                    <li><router-link v-if="user" to='/discover'>Discover</router-link></li>
                    <li><router-link to='/about'>About</router-link></li>
                    <li><router-link v-if="!user" to='/login'>Login</router-link></li>
                    <li><router-link v-if="!user" to='/join'>Join</router-link></li>
                    <li><a @click="logout" href="#" v-if="user">Logout</a></li>
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

.header_wrapper {
    width: 100%;
    background-color: #2C5F9A;
}

.header_container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    padding: 5px 0;
}

.header_logo_wrapper {
    float: left;
}

.nav_wrapper {
    float: right;
}

.nav_wrapper ul {
    list-style-type: none;
    white-space: nowrap;
    padding: 0;
}

.nav_wrapper ul li {
    display: inline-block;
    margin: 0 0 0 1em;
    
}

.nav_wrapper ul li:last-child {
    display: inline-block;
    margin: 0 0 0 1em;
}

.nav_wrapper ul li a {
    padding: 10px 0 17px 0;
    position: relative;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.02em;
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
</style>
