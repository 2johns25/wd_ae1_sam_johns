<template>
    <div class="autora_map_container">
        <div class="autora_map">
            
            <l-map @update:zoom="zoomUpdate" @update:center="centerUpdate" :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :key="index" v-for="(result, index) in results" :lat-lng="latLng(result.location.geocode.lat, result.location.geocode.lng)">
                    <l-icon :icon-size="iconSize" :icon-url="icon"></l-icon>
                </l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>

import {LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
import pointer from '../assets/pointer.svg';

export default {
    name: 'AutoraMap',
    props: {
        results: Array
    },
        data: function () {
            return {
                zoom: 11,
                center: L.latLng(51.51770, -0.11352),
                currentZoom: 11,
                currentCenter: (51.51770, -0.11352),
                url: 'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=dee49f63983c410bb6815f560ab4d967',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
                icon: pointer,
                iconSize: [25,25]
            }
        },
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LIcon
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
    overflow: hidden;
}

.autora_map {
    width: 100%;
    height: 500px;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

    .autora_map_container {
        width: 60%;
        float: left;
    }

}

</style>
