<template>

    <div class="col-8">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>

</template>

<script>

import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    name: 'autora_map',
    data: function() {
        return {
        zoom:13,
            center: L.latLng(47.413220, -1.219482),
            url:'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=dee49f63983c410bb6815f560ab4d967',
            attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: L.latLng(47.413220, -1.219482)
        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker
    }
}

</script>

<style lang="scss" scoped>

</style>
