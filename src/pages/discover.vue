<template>
    <div class="discover_container clearfix">
        <div class="autora_search_container">
        <form action="#">
            <div class="button_picker">
                <p>Select a destination type: </p>
                <label class="pill_button_wrapper"><input type="checkbox" value="food" v-model="checkedTypes"><span class="checkmark">Food</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="accom" v-model="checkedTypes" /><span class="checkmark">Accomodation</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="event" v-model="checkedTypes" /><span class="checkmark">Events</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="tour" v-model="checkedTypes" /><span class="checkmark">Tours</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="poi" v-model="checkedTypes" /><span class="checkmark">Points of Interest</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="attraction" v-model="checkedTypes" /><span class="checkmark">Attractions</span></label>
                {{checkedTypes}}
            </div>
        </form>
    </div>
        <AutoraMap :results="results"/>
        <AutoraList :results="results" @mouse-down-results="mouseDownResults"/>

        <!-- {{results}} -->

    </div>

</template>

<script>
    import AutoraList from '../components/AutoraList';
    import AutoraMap from '../components/AutoraMap';
    import { AUTORA_KEY } from '../config/autora_config.js';
    import axios from 'axios';

    export default {
        name: 'Discover',
        components: {
            AutoraList,
            AutoraMap
        },
        data: function() {
        return {
            key: AUTORA_KEY,
            results: [],
            show: false,
            checkedTypes: []
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
            },
            filterTypes: function(checkedTypes) {
                console.log(r)
            }
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

    .autora_search_container {
    width: 100%;
    margin: 1em auto;
}

.button_picker {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    border-bottom: 1px solid lightgrey;
    padding: 0 0 1em 0;
}

.button_picker p {
    font-size: 1em;
    margin: 0 0 1em 0;
    font-weight: 700;
    flex: none;
    display: block;
    width: 100%;
}

.pill_button_wrapper{
    position: relative;
    user-select: none;
    background-color: rgb(190, 190, 190);
    display: block;
    margin: 0.50em 1em 0.50em 0;
    border-radius: 20px;
    cursor: pointer;
}

.pill_button_wrapper input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
}

.checkmark {
    display: block;
    left: 0;
    height: 100%;
    width: 100%;
    font-size: 1em;
    font-weight: 700;
    padding: 7px 15px;
    border-radius: 20px;
    background-color: rgb(235, 235, 235);
}

.pill_button_wrapper:hover {
  background-color: rgb(224, 224, 224);
}

.pill_button_wrapper:hover input ~ .checkmark {
  background-color: rgb(241, 241, 241);
}

.pill_button_wrapper input:checked ~ .checkmark {
  background-color: rgb(105, 153, 216);
  color: white;
}

.button_picker button {
    padding: 7px 15px;
    background-color: #2C5F9A;
    border: 0;
    outline: 0;
    color: white;
    margin: 0.25em 0 0 0;
    width: 100%;
    border-radius: 3px;
}

.button_picker button:hover {
    background-color: rgb(78, 153, 238);
    
}

.button_picker button:active {
   background-color: #2C5F9A;
}

.button_picker button i {
    display: inline-block;
    margin: 0 1em 0 0;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

     .button_picker {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        flex-wrap: no-wrap;
    }

    .button_picker p {
        width: auto;
        font-size: 1em;
        margin: 0 0 0 0;
    }

    .pill_button_wrapper{
    margin: 0.50em 0.50em 0.50em 0.50em;
}

    .button_picker button {
        align-self: center;
        margin: 0 0 0 0;
        width: auto;
    }

}

</style>
