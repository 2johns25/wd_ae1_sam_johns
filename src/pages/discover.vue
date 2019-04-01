<template>
    <div class="discover_container clearfix">
        <AutoraFilter/>
        <div class="autora_map_and_list_wrapper">
            <AutoraMap :results="results"/>
            <AutoraList :results="results"/>
        </div>

        <!-- {{results}} -->
    </div>

</template>

<script>
    import AutoraFilter from '../components/AutoraFilter'
    import AutoraMap from '../components/AutoraMap';
    import AutoraList from '../components/AutoraList'
    import { AUTORA_KEY } from '../config/autora_config.js';
    import axios from 'axios';

    export default {
        name: 'Discover',
        components: {
            AutoraMap,
            AutoraList,
            AutoraFilter
        },
        data: function() {
        return {
            key: AUTORA_KEY,
            results: [],
            show: false
        }
        },
        mounted: function() {
            const inst = axios.create({ headers: { 'Authorization': 'Bearer ' + this.key } })
            inst.get('https://api.autoura.com/api/stops/search?stop_types=food&geocode_lat=51.51770&geocode_lng=-0.11352&geocode_distance=10&group_context=kids').then(r => {
                this.results = r.data.response;
            }).catch(e => {
                console.log(e);
            })
        },
        methods: {
            mouseDownResults: function(index) {
                console.log(index, "mouse down")
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
