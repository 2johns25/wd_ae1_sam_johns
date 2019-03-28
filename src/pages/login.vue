<template>
    <div class="login_container clearfix">
        <AuthForm :confEmail="false" formHeaderText="Sign in" buttonText="Sign in" :parentErrors="errors" @formSubmitted="submitForm"/>
    </div>

</template>

<script>

import {fb} from '../config/firebase.js'
import AuthForm from '../components/AuthForm'


export default {
  name: 'Login',
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
            console.log("user has joined " + user.email);

            fb.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(() => {
                console.log("redirect to the dash");
                this.$router.push('/');
            }).catch(e => {
                this.errors.push(e);
            });
        },
    }

}



</script>

<style lang="scss">

    .login_container {
        min-height: calc(100vh - 180px);
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
    }

</style>
