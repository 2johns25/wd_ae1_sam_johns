<template>
    <div class="header_wrapper">
        <div v-if="loader" class=loader>
            <p>Loading...</p>
        </div>
        <div class="header_container clearfix">
            <router-link to="/" class="header_logo_wrapper">London Sightseers</router-link>
            
            <div class="nav_wrapper">
                <ul>
                    <li v-if="user"><router-link to='/'><i class="fas fa-compass"></i></router-link></li>
                    <li v-if="user" class="favourites_box"><a href="#" v-on:click="isVisible = true"><i class="fas fa-heart"></i></a></li>
                    <li><router-link to='/about'><i class="fas fa-info-circle"></i></router-link></li>
                    <li v-if="user"><a @click="logout" href="#" ><i class="fas fa-sign-out-alt"></i></a></li>
                    <li v-if="!user" class="login"><router-link to="/login">Login</router-link></li>
                </ul>
                <div class="favourites" v-if="isVisible && user">
                    <h2>Favourited
                        <p class="close_button" v-on:click="isVisible = false">Close</p>
                    </h2>
                    <div class="single_favourite clearfix" v-for="(favourite, index) in favourites" :key="index">
                        <h3 class="fav_dest">{{favourite.destination_name}}</h3> <span>-</span>
                        <h4 class="fav_geo">{{favourite.geocode_name}}</h4>
                        <p class="fav_summ">{{favourite.summary}}</p>
                        <p class="fav_addr">{{favourite.address}}</p>
                        <a :href="favourite.site_link" class="fav_link" v-if="favourite.site_link">Website</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {fb} from '../config/firebase'
import {db} from '../config/firebase'
import authStore from '../stores/authstore'

export default {
    name: 'AutoraHeader',
    data() {
    return {
        user: "",
        loader: false,
        isVisible: false,
        favourites: []
    }
    },
    mounted: function() {
        db.collection("favourites").orderBy("time", "desc").onSnapshot(snap => {
            this.favourites = [];
            snap.forEach(doc => {
                // console.log(doc.data())
                this.favourites.push(doc.data());
            });
        });
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
    width: 99%; 
    padding: 0.75em 0.50em;
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

.favourites {
    position: absolute;
    width: 350px;
    background-color: white;
    border: 1px solid lightgrey;
    top: 100%;
    right: 50%;
    z-index: 99999;
    border-radius: 3px;
    // display: none;
    padding: 5px 5px;
    overflow-y: scroll;
    overflow-x: none;
    max-height: 350px;
}

.visivble {
    display: block;
}

.favourites h2 {
    margin: 0 0 0 0;
}

.close_button {
    position: absolute;
    font-size: 10px;
    color: #2C5F9A;
    font-weight: 300;
    margin: 0;
    top: 2%;
    left: 90%;
    cursor: pointer;
}

.close_button:hover {
    text-decoration: underline;
}



.single_favourite {
    width: 100%;
    margin: 0.50em 0 0 0;
    border: 1px solid lightgrey;
    border-radius: 3px;
    padding: 2px 0 5px 5px;
    background-color: white;
    white-space: normal;
    text-overflow: ellipsis;
    overflow: hidden;
}

.fav_dest {
    margin: 0;
    color: #2C5F9A;
    display: inline-block;
}

.fav_geo {
    margin: 0;
    display: inline-block;
    color: grey;
    
}

.single_favourite span {
    margin: 0 5px;
    font-weight: 700;
    font-size: 1.5em;
    display: inline-block;
}

.fav_summ {
    margin: 0 0 0.25em 0;
    width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.fav_addr {
    margin: 0 0 0.25em 0;
    font-weight: 700;
    width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.fav_link {
    margin: 0 0 0.25em 0;
    color: #2C5F9A;
    width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

    .nav_wrapper ul li {
        margin: 0 0 0 2em;   
    }

}

</style>
