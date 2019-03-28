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

// Extra small devices (Portrait phones, 320px and up)

.login_container {
        height: 100vh;
        width: 99%; 
        max-width: 960px;
        margin: 0 auto;
    }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

}

</style>
