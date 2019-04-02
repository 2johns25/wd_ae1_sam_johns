<template>
    <div class="discover_container clearfix">
        <div class="autora_map_and_list_wrapper">
            <AutoraMap :results="results"/>
            <AutoraList @mouse-down="locateStop" @mouse-up="stopLocate" :results="results"/>
        </div>

        <!-- {{results}} -->
    </div>

</template>

<script>
    import AutoraMap from '../components/AutoraMap';
    import AutoraList from '../components/AutoraList'
    import { AUTORA_KEY } from '../config/autora_config.js';
    import axios from 'axios';

    export default {
        name: 'Discover',
        components: {
            AutoraMap,
            AutoraList
        },
        data: function() {
        return {
            key: AUTORA_KEY,
            results: [],
            show: false,
            normalIcon: [25,25],
            largeIcon: [70,70]
        }
        },
        mounted: function() {
            const inst = axios.create({ headers: { 'Authorization': 'Bearer ' + this.key } })
            inst.get('https://api.autoura.com/api/stops/search?stop_types=food&geocode_lat=51.51770&geocode_lng=-0.11352&geocode_distance=10&group_context=kids').then(r => {
                this.results = r.data.response
                .map(r => {
                    r.iconSize = this.normalIcon;
                    return r;
                });
            }).catch(e => {
                console.log(e);
            })
        },
        methods: {
            locateStop: function(index) {
                this.results[index].iconSize = this.largeIcon;
                console.log(index, "Locate stop")
            },
            stopLocate: function(index) {
                this.results[index].iconSize = this.normalIcon;
                console.log(index, "Stop locate")
            }
        }
    }

</script>

<style lang="scss" scoped>

// Extra small devices (Portrait phones, 320px and up)

.discover_container {
    height: 100vh;
    width: 100%;    
    margin: 0 auto;
    overflow: hidden;
}  

.autora_map_and_list_wrapper {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    overflow-y: scroll;
    border-top: 1px solid rgb(206, 206, 206);
}

</style>
