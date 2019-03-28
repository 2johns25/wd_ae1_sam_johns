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
                zoom: 13,
                center: L.latLng(51.5073219, -0.1276474),
                url: 'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=dee49f63983c410bb6815f560ab4d967',
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

// Extra small devices (Portrait phones, 320px and up)

.autora_map_container {
        width: 100%;
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
