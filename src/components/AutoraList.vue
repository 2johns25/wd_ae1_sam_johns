<template>
    <div class="autora_list_container">
        <div class="autora_list">
          
        </div>
    </div>

</template>

<script>

export default {
    name: 'AutoraList'
}

</script>

<style lang="scss" scoped>

// Extra small devices (Portrait phones, 320px and up)

.autora_list_container {
        width: 100%;
        margin: 0 auto;
        border: 1px solid black;
        padding: 0 5px;
    }

.autora_list {
    width: 100%;
    height: 200px;
    overflow-y: scroll; 
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

.autora_list_container {
    width: 35%;
    float: right;
    height: 500px;

}

}
    
</style>
