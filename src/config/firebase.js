import firebase from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyDejEnWpHUdxru3VOvYiiLYZLnIJg6buaw",
    authDomain: "wd-ae1-autora.firebaseapp.com",
    databaseURL: "https://wd-ae1-autora.firebaseio.com",
    projectId: "wd-ae1-autora",
    storageBucket: "wd-ae1-autora.appspot.com",
    messagingSenderId: "1075575447121"
  };

  export let fb = firebase.initializeApp(config);
  export let db = firebase.firestore();
  export let ts = firebase.firestore.FieldValue.serverTimestamp();
