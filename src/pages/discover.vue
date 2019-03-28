<template>
    <div class="discover_container clearfix">
        <AutoraSearch/>
        <AutoraMap/>
        <AutoraList/>

        <!-- {{results}} -->

    </div>

</template>

<script>

    import AutoraSearch from '../components/AutoraSearch';
    import AutoraList from '../components/AutoraList';
    import AutoraMap from '../components/AutoraMap';
    import { AUTORA_KEY } from '../config/autora_config.js';
    import axios from 'axios';

    export default {
        name: 'Discover',
        components: {
            AutoraSearch,
            AutoraList,
            AutoraMap
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
      inst.get('https://api.autoura.com/api/stops/search?stop_types=tour&geocode_lat=-33.9249&geocode_lng=18.4241').then(r => {
        this.results = r.data.response;
      }).catch(e => {
        console.log(e);
      })
    }
    }

</script>

<style lang="scss" scoped>

// Extra small devices (Portrait phones, 320px and up)

    .discover_container {
        height: 100vh;
        width: 99%;    
        max-width: 960px;
        margin: 0 auto;
    }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

}

</style>
