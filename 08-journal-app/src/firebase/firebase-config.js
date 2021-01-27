import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdQgBiDzT4zlpqPYGAlY93JUCtY1DZ0L0",
    authDomain: "react-udemy-9b3f4.firebaseapp.com",
    projectId: "react-udemy-9b3f4",
    storageBucket: "react-udemy-9b3f4.appspot.com",
    messagingSenderId: "112493557661",
    appId: "1:112493557661:web:2359d8e07fe98a5cd46174"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}