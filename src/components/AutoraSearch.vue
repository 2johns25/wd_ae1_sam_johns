<template>
    <div class="autora_search_container">
        <div class="autora_search">
            <form action="#">
                <div class="input_and_button_wrapper">
                <div class="search_field">
                    <input type="text" placeholder="Search"/>
                </div> <!-- SEARCH FIELD WRAPPER -->
                <div class="search_button_wrapper">
                    <button><i class="fas fa-search"></i></button>
                </div> <!-- SEARCH BUTTON WRAPPER -->
            </div> <!-- INPUT AND BUTTON WRAPPER -->
            </form> <!-- FORM -->
        </div>
    </div>
</template>

<script>

export default {
    name: 'AutoraSearch',
    
}

</script>

<style lang="scss" scoped>

.autora_search_container {
    margin: 0 0 1em 0;
    width: 100%;
}

.autora_search {
    width: 100%;
    margin-right: auto;
}

.autora_search form {
    position: relative;
    border-radius: 3px;
    overflow: hidden;
}

.search_field {
    width: 100%;
}

.search_field input {
    width: 100%;
    padding: 0 100px 0px 10px;
    border: none;
    outline: none;
    height: 50px;
    background-color: rgb(90, 125, 165);
    overflow: hidden;
    border-radius: 5px;
    color: white;
    font-size: 1.50em;
}

.search_field input::placeholder,
search_field input {
    color: white;
}

.search_field input:focus {
    background-color: white;
    transition: 0.3s;
    color: black;
}

.search_field input:focus::placeholder {
    color: black;
}

.search_button_wrapper {
    display: inline-block;
    position: absolute; 
    vertical-align: baseline;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    // background-color: #142E4D;
    background-color: rgb(90, 125, 165);
    border-left: 0;
    overflow: hidden;
    border-radius: 0px 5px 5px 0;
}

.search_button_wrapper button  {
    padding: 0 30px;
    border: 0;
    outline: none;
    background-color: inherit;
    height: 100%;
    letter-spacing: 0.08em;
    font-size: 1.50em;
    color: white;
    display: block;
}

.search_button_wrapper button:hover {
    background-color: #2C5F9A;
    transition: 0.3s;
}

.search_button_wrapper button:active {
    background-color: inherit;
    transition: 0s;
}


</style>
