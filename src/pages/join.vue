<template>
    <div class="join_container clearfix">
        <AuthForm :confEmail="true" formHeaderText="Don't have an account? Sign up" buttonText="Sign in" :parentErrors="errors" @formSubmitted="submitForm"/>
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

</style>
