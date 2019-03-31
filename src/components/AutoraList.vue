<template>
    <div class="autora_list_container">
        <div class="autora_list">
            <div class="result_container" v-bind:key="index" v-for="(result, index) in results">
                <h3 class="result_name"><a :href="result.website_url">{{result.name}}</a></h3>
                <h4 class="result_location">{{result.location.name}}</h4>
                <div class="result_thumbnail"><img :src="result.picture.url"/></div>
                
                <p class="result_url" v-if="result.supplier.name">Provided by <a :href="result.website_url">{{result.supplier.name}}</a></p>
                <p class="result_summary">{{result.summary}}</p>
                <div class="result_action_wrapper">
                    <a href="#" class="result_add">Add to itinerary</a>
                    <p class="locate_button">Locate</p>
                    <a :href="result.website_url" class="result_visit" v-if="result.website_url">Visit site</a>
                </div>
                
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'AutoraList',
    props: {
        results: Array
    },
    methods: {
        
    }
}

</script>

<style lang="scss" scoped>

// Extra small devices (Portrait phones, 320px and up)

.autora_list_container {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        border-right: 1px solid rgb(224, 224, 224);
        overflow-y: scroll; 
        padding: 0 1em 0 0;
    }

.autora_list {
    width: 100%;
    height: 200px;
}

.result_container {
    width: 100%;
    margin: 0 0 1em 0;
    border-radius: 5px;
    padding: 0.50em;
    border: 1px solid rgb(224, 224, 224);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);  
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
}

.result_action_wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    margin: 0 5px;
    flex-grow: 1;
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
    margin: 0 0;
    flex-grow: 1;
}

.result_visit:hover {
    background-color: rgb(226, 226, 226);
}

.result_visit:active {
    background-color: rgb(216, 216, 216);
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

.autora_list_container {
    width: 35%;
    float: right;
}

.autora_list {
    height: 500px;
}

}
    
</style>
