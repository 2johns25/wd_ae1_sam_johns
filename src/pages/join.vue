<template>
    <div class="join_container clearfix">
        <AuthForm :confEmail="true" formHeaderText="Don't have an account? Sign up" buttonText="Sign up" altText="Already have an account?" altLink="/login" :parentErrors="errors" @formSubmitted="submitForm"/>
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

// Extra small devices (Portrait phones, 320px and up)

    .join_container {
        height: 100vh;
        width: 99%; 
        max-width: 960px;
        margin: 0 auto;
    }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

}

</style>
