<template>
    <div class="header_wrapper">
        <div class="header_container clearfix">
            <router-link to="/discover" class="header_logo_wrapper">London Sightseers</router-link>
            
            <div class="nav_wrapper">
                <ul>
                    <li v-if="user"><router-link to='/discover'><i class="fas fa-compass"></i></router-link></li>
                    <li v-if="user" class="favourites_box"><a href="#"><i class="fas fa-heart"></i></a></li>
                    <li><router-link to='/about'><i class="fas fa-info-circle"></i></router-link></li>
                    <li v-if="user"><a @click="logout" href="#" ><i class="fas fa-sign-out-alt"></i></a></li>
                    <li v-if="!user" class="login"><router-link to="/login">Login</router-link></li>
                </ul>
                <div class="favourites_dropdown">
                    <h2>Favouritess</h2>
                </div>
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
            loader: true,
            visible: true,
            hidden: false
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

        computed: {
            compClasses: function() {
                return {
                    visible:this.visible
                }
            }
        },

        methods: {
        logout() {
            fb.auth().signOut()
            .then(() => {
            this.user = "";
            this.$router.push("Login");
            });
        },


        toggleFavs: function () {
            event.preventDefault();
            // visible = !visible
            console.log("button clicked");

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

.nav_wrapper {
    position: relative;
}

.nav_wrapper ul {
    list-style-type: none;
    white-space: nowrap;
    padding: 0;
    margin: 0;
}

.nav_wrapper ul li {
    display: inline-block;
    margin: 0 0 0 2em;   
}

.nav_wrapper ul li a {
    padding: 0 0 0 0;
    position: relative;
    text-decoration: none; 
    letter-spacing: 0.02em;
    font-size: 1.5em;
}

.nav_wrapper ul li a i {
    color: white;
    font-size: 1em;
}

.nav_wrapper ul li a i:hover {
    color: rgb(179, 179, 179);
    
}

.login a {
    color: white;
}

.favourites_dropdown {
    position: absolute;
    height: 300px;
    width: 300px;
    background-color: grey;
    border: 1px solid lightgrey;
    top: 100%;
    right: 50%;
    z-index: 99999;
    border-radius: 5px;
    display: none;
}

.hidden {
    display: none;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

.nav_wrapper ul li {
    margin: 0 0 0 2em;   
}

}

</style>
