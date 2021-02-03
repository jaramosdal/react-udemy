import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyAmzUJwHp3p0dDu0YGtKOGoTYifUSe0z0o",
//     authDomain: "react-udemy-test-2879e.firebaseapp.com",
//     projectId: "react-udemy-test-2879e",
//     storageBucket: "react-udemy-test-2879e.appspot.com",
//     messagingSenderId: "921326832798",
//     appId: "1:921326832798:web:3de5dfd15b225ae494ff8f"
// };

// // Initialize Firebase
// if (process.env.NODE_ENV === 'test') {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
//     // dev/prod
//     firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}