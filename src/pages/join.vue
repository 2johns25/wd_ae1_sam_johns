<template>
    <div class="join_container clearfix">
        <h1>Don't have an account? Join now for free.</h1>
        <AuthForm :confEmail="true" buttonText="Sign in" :parentErrors="errors" @formSubmitted="submitForm"/>
    </div>

</template>

<script>

import {fb} from '../config/firebase.js'
import AuthForm from '../components/AuthForm'


export default {
  name: 'Join',
  components: {
      AuthForm
  },
data () {
        return {
            errors: []
        }
    },
    methods: { 
        submitForm(user) {
            this.errors = [];
            console.log("Form submitted." + user)
            fb.auth().createUserWithEmailAndPassword(user.email, user.password).then(() => {
                this.$router.push('/');
                console.log("All done.")
            }).catch(e => {
                this.errors.push(e)
            });
        }
    }

}



</script>

<style lang="scss">

    .join_container {
        min-height: calc(100vh - 180px);
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
    }

    .form_group {
        width: 230px;
        white-space: nowrap;
        margin: 0 0 1em 0;
    }

    .form_group label {
        display: block;
        margin: 0 0 0.50em 0;
    }

    .form_group input {
        width: 70%;
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
    }

</style>
