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

    .autora_list_container {
        width: 35%;
        border: 1px solid black;
        float: right;
    }

    .autora_list {
        width: 100%;
        height: 500px;
        overflow-y: scroll;
    }
    
</style>
