import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyD0EHzZ-q0A_uWPAPrnt4Lk44JEknng4DA",
    authDomain: "vue-movie-app-jesse.firebaseapp.com",
    projectId: "vue-movie-app-jesse",
    storageBucket: "vue-movie-app-jesse.appspot.com",
    messagingSenderId: "49467615402",
    appId: "1:49467615402:web:e385a1bc03ea2994ffc8d3"
}

const db = firebase.initializeApp(config);

export default db;