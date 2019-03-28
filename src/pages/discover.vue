<template>
    <div class="discover_container clearfix">
        <AutoraSearch/>
        <AutoraMap/>
        <AutoraList/>

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
      inst.get('https://api.autoura.com/api/stops/search?group_context=friends&stop_types=food').then(r => {
        this.results = r.data.response;
      }).catch(e => {
        console.log(e);
      })
    }
    }

</script>

<style lang="scss" scoped>

    .discover_container {
        min-height: calc(100vh - 180px);
        width: 100%;
        max-width: 960px;
        margin: 1em auto;
    }

</style>
