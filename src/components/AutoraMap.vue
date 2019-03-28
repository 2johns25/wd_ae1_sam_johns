<template>
    <div class="autora_map_container">
        <div class="autora_map">
            <l-map :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :lat-lng="marker"></l-marker>
            </l-map>
        </div>
    </div>
</template>

<script>

import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'AutoraMap',
    props: ['brewList'],
        data: function () {
            return {
                zoom:13,
                center: L.latLng(47.413220, -1.219482),
                center: L.latLng(33.683295, -111.930685),
                url: 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=e955b6c9bc0b4ec6a38495e3f90d87b5',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
            }
        },
        components: {
            LMap,
            LTileLayer,
            LMarker,
            // LIcon
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

.autora_map_container {
    width: 60%;
    float: left;
}

.autora_map {
    width: 100%;
    height: 500px;
}

</style>
