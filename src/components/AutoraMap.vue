<template>
    <div class="autora_map_container">
        <div class="autora_map">
            
            <l-map @update:zoom="zoomUpdate" @update:center="centerUpdate" :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :key="index" v-for="(result, index) in results" :lat-lng="latLng(result.location.geocode.lat, result.location.geocode.lng)">
                    <l-icon :icon-size="result.iconSize" :icon-url="icon"></l-icon>
                    <l-popup>
                        <div class="result_container">
                            <h3 class="result_name"><a :href="result.website_url">{{result.name}}</a></h3>
                            <h4 class="result_location">{{result.location.name}}</h4>
                            <div class="result_thumbnail"><img :src="result.picture.url"/></div>
                            
                            <p class="result_url" v-if="result.supplier.name">Provided by <a :href="result.website_url">{{result.supplier.name}}</a></p>
                            <p class="result_summary">{{result.summary}}</p>
                            <p class="result_address">{{result.location.address}}</p>
                            <div class="result_action_wrapper">
                                <a href="#" class="result_add">Add to favourites</a>
                                <a :href="result.website_url" class="result_visit" v-if="result.website_url">Visit site</a>
                            </div>
                         </div>
                    </l-popup>
                    <l-tooltip>{{result.name}}</l-tooltip>
                </l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>

import {LMap, LTileLayer, LMarker, LIcon, LPopup, LTooltip} from 'vue2-leaflet';
import pointer from '../assets/pointer.svg';

export default {
    name: 'AutoraMap',
    props: {
        results: Array,
    },
        data: function () {
            return {
                zoom: 12,
                center: L.latLng(51.498394, -0.098314),
                currentZoom: 12,
                currentCenter: (51.498394, -0.098314),
                url: 'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=dee49f63983c410bb6815f560ab4d967',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
                icon: pointer,
                iconSize: [25,25],
            }
        },
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LIcon,
            LPopup,
            LTooltip
        }, methods: {
            latLng: function (lat, lng) {
                return L.latLng(lat, lng);
            },
            centerUpdate: function(center) {
                this.currentCenter = center;
            },
            zoomUpdate: function(zoom) {
               this.currentZoom = zoom;
            },
        }
}

</script>

<style lang="scss" scoped>

// Extra small devices (Portrait phones, 320px and up)

.autora_map_container {
    width: 100%;
    border-radius: 5px;
    z-index: 50;
}

.autora_map {
    width: 100%;
    height: 100vh;
}

.result_container {
    margin: 5px;
}

.result_name {
    margin: 0 0 0.25em 0;
}

.result_name a {
    color: #2C5F9A;
}

.result_location {
    margin: 0em 0 0.75em 0;
    color: rgb(145, 145, 145);
}

.result_thumbnail {
    width: 100%;
   
}

.result_thumbnail img {
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
}

.result_url {
    margin: 0.50em 0 0 0;
}

.result_url a {
    color: #2C5F9A;
}

.result_summary {
    margin: 0.50em 0 1em 0;
    line-height: 1.5;
    text-align: justify;
}

.result_address {
    font-weight: 700;
}

.result_action_wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid lightgray;
    padding: 1em 0 0 0;
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

}

</style>
