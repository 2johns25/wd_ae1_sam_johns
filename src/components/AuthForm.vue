<template>
    <div class="form_container">
        <li :key="index" v-for="(error, index) in errors">{{error}}</li>
        <li :key="index" v-for="(error, index) in parentErrors">{{error}}</li>
            <form @submit="submitForm">
                <div class="form_group clearfix">
                    <label>Email</label>
                    <input type="email" id="email" v-model="email" class="text_input"/>
                </div>
                <div class="form_group clearfix" v-if="confEmail">
                    <label>Confirm email</label>
                    <input type="email" id="confirmEmail" v-model="confirmEmail" class="text_input"/>
                </div>
                <div class="form_group clearfix">
                    <label>Password</label>
                    <input type="password" id="password" v-model="password" class="text_input"/>
                </div>
                <button type="submit" class="submit_button">Join</button>
            </form>
    </div>

</template>

<script>

export default {
    name: 'AuthForm',
    props: {
        confEmail: Boolean,
        parentErrors: Array,
        buttonText: String
    },

    data() {
        return {
            email: "peter.watsit@solent.ac.uk",
            confirmEmail: "peter.watsit@solent.ac.uk",
            password: "password",
            errors: []
        };
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            this.errors = [];

            if (this.email && (this.email == this.confirmEmail || !this.confEmail)&& this.password) {
                console.log('The information provided is valid.');
                this.$emit('formSubmitted', {email: this.email, password: this.password})
                
            }

            if(!this.email) {
                this.errors.push('Please enter an email address');
            }

            if(this.email != this.confirmEmail && this.confEmail) {
                this.errors.push('Please enter matching email addresses.');
            }

            if(!this.password) {
                this.errors.push('Please enter a password');
            }
            
        }
    }
}

</script>

<style lang="scss" scoped>


</style>
