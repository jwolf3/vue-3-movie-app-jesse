import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyC1ta2952lXXO0KgCKo884MOR4TRbqaQ6U",
    authDomain: "movie-app-vue-3.firebaseapp.com",
    projectId: "movie-app-vue-3",
    storageBucket: "movie-app-vue-3.appspot.com",
    messagingSenderId: "571647589935",
    appId: "1:571647589935:web:06c07c75933dfcabd5d0da"
}

const db = firebase.initializeApp(config);

export default db;