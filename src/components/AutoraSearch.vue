<template>
    <div class="autora_search_container">
        <form action="#">
            <div class="button_picker">
                <p>Select a destination type: </p>
                <label class="pill_button_wrapper"><input type="checkbox" value="food"/><span class="checkmark">Food</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="accom"/><span class="checkmark">Accomodation</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="poi"><span class="checkmark">Points of interest</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="event"/><span class="checkmark">Events</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="attraction"/><span class="checkmark">Attractions</span></label>
                <label class="pill_button_wrapper"><input type="checkbox" value="tour"/><span class="checkmark">Tours</span></label>

                <!-- <div class="checkbox"><input type="checkbox" name="food" value="food" checked="checked"/><span class="checkmark"></span><label for="food">Food</label></div>
                <div class="checkbox"><input type="checkbox" name="accom" value="accom"/><label for="accom">Accomodation</label></div>
                <div class="checkbox"><input type="checkbox" name="poi" value="poi"/><label for="poi">Point of interest</label></div>
                <div class="checkbox"><input type="checkbox" name="event" value="event"/><label for="food">Event</label></div>
                <div class="checkbox"><input type="checkbox" name="attraction" value="attraction"/><label for="food">Attraction</label></div>
                <div class="checkbox"><input type="checkbox" name="tour" value="tour"/><label for="food">Tour</label></div> -->
                <button type="submit"><i class="fas fa-redo-alt"></i></button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'AutoraSearch',
     
}

</script>

<style lang="scss" scoped>


// Extra small devices (Portrait phones, 320px and up)

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

/*
.checkbox {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 0 0.75em 0;
}

.checkbox label {
    font-size: 1em;
}

.checkbox input {
    transform: scale(1.5);
}
*/

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
