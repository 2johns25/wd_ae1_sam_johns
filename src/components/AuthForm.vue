<template>
    <div class="form_container">
        
        <li :key="index" v-for="(error, index) in errors">{{error}}</li>
        <li :key="index" v-for="(error, index) in parentErrors">{{error}}</li>
            <form class="auth_form" @submit="submitForm">
                <h1>{{formHeaderText}}</h1>
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
                <button type="submit" class="submit_button">{{buttonText}}</button></br>
                <p class="alt">{{altText}} <router-link v-bind:to="altLink">Click here.</router-link></p>
            </form>
            
    </div>

</template>

<script>

export default {
    name: 'AuthForm',
    props: {
        confEmail: Boolean,
        parentErrors: Array,
        buttonText: String,
        formHeaderText: String,
        altText: String,
        altLink: String
    },

    data() {
        return {
            email: "",
            confirmEmail: "",
            password: "",
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

    .form_container {
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
    }

    .auth_form {
        width: 210px;
        margin: 0 auto;
    }

    h1, p {
       display: inline-block;
    }

   .form_group {
        white-space: nowrap;
        margin: 0 0 1em 0;
        width: 200px;
    }

    .form_group label {
        display: block;
        margin: 0 0 0.50em 0;
    }

    .form_group input {
        width: 100%;
        padding: 5px 5px;
        outline: none;
        
    }

    form button {
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 700;
        background-color: #2C5F9A;
        color: white;
        border: 0;
        outline: none;
        display: inline-block;
    }

    .alt a {
        color: #2C5F9A;
    }

</style>
