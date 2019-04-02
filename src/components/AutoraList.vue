<template>
    <div class="autora_list_container">
        <div class="autora_list">
            <div class="result_container" :key="index" v-for="(result, index) in results">
                <div class="result_thumbnail"><img :src="result.picture.url"/></div>
                <h2 class="result_name"><a :href="result.website_url">{{result.name}}</a></h2>
                <h3 class="result_location">{{result.location.name}}</h3>
                <p class="result_url" v-if="result.supplier.name">Provided by <a :href="result.website_url">{{result.supplier.name}}</a></p>
                <p class="result_summary">{{result.summary}}</p>
                <p class="result_address">{{result.location.address}}</p>
                <div class="result_action_wrapper">
                    <a href="#" class="result_add" @click="addFavourite(result)"><i class="fas fa-heart"></i></a>
                    <p class="locate_button" @mousedown="locateStop(index)" @mouseup="stopLocate(index)">Locate</p>
                    <a :href="result.website_url" class="result_visit" v-if="result.website_url">Visit site</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {db, ts} from '../config/firebase'
import authStore from '../stores/authstore'

export default {
    name: 'AutoraList',
    props: {
        results: Array
    }, 
    methods: {
        locateStop: function(index) {
            this.$emit("mouse-down", index)
        },
        stopLocate: function(index) {
            this.$emit("mouse-up", index)
        },
        addFavourite: function(result) {
            db.collection("favourites").add({
                address: result.location.address,
                destination_name: result.name,
                geocode_name: result.location.name,
                image_url: result.picture.url,
                site_link: result.website_url,
                stop_type: result.stop_type,
                summary: result.summary,
                time: ts,
                user: authStore.state.user.email
            });
            console.log("favourite clicked", result.location.name, result.website_url)
            // this.$emit("click-favourite", index)
        }
    }
}

</script>

<style lang="scss" scoped>

// Extra small devices (Portrait phones, 320px and up)

.autora_list_container {
    width: 100%;
    z-index: 9999;
    box-shadow: -1px 0px 10px 0px rgb(136, 136, 136);
}

.autora_list {
    width: 100%;
}

.result_container {
    width: 95%;
    margin: 1em auto;
    border: 1px solid lightgrey;
    border-radius: 3px;
    // box-shadow: 0 1px 5px 1px rgb(150, 150, 150);
}

.result_name {
    margin: 0 10px;
}

.result_name a {
    color: #2C5F9A;
}

.result_location {
    margin: 0em 0 0.75em 0;
    color: rgb(145, 145, 145);
    margin: 0 10px;
}

.result_thumbnail {
    width: 100%;
    margin: 0 0 0.50em 0;
}

.result_thumbnail img {
    width: 100%;
    overflow: hidden;
}

.result_url {
    margin: 0.50em 10px;
}

.result_url a {
    color: #2C5F9A;
}

.result_summary {
    margin: 0.50em 10px 1em 10px;
    line-height: 1.5;
    text-align: justify;
}

.result_address {
    font-weight: 700;
    margin: 0.50em 10px;
}

.result_action_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.50em 0 1em 0;
    margin: 0.50em 10px 0 10px;
}

.result_add {
    background-color: #2C5F9A;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 10px 10px;
    border-radius: 3px;
    font-weight: 600;
    flex-grow: 2;
}

.result_add:hover {
    background-color: rgb(74, 126, 190);
}

.result_add:active {
    background-color: #2C5F9A;
}

.locate_button {
    background-color: rgb(216, 216, 216);
    text-align: center;
    text-decoration: none;
    padding: 10px 10px;
    border-radius: 3px;
    font-weight: 600;
    margin: 0 0 0 5px;
    flex-grow: 1;
    cursor: pointer;
}

.locate_button:hover {
    background-color: rgb(226, 226, 226);
}

.locate_button:active {
    background-color: rgb(216, 216, 216);
}

.result_visit {
    text-align: center;
    text-decoration: none;
    padding: 10px 10px;
    background-color: rgb(216, 216, 216);
    border-radius: 3px;
    font-weight: 600;
    margin: 0 0 0 5px;
    flex-grow: 1;
    color: black;
}

.result_visit:hover {
    background-color: rgb(226, 226, 226);
}

.result_visit:active {
    background-color: rgb(216, 216, 216);
}


// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

.autora_list_container {
    width: 350px;
    overflow-y: scroll;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    box-shadow: -1px 0px 10px 0px rgb(136, 136, 136);
}

}

</style>
