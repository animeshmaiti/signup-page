import firebase from "firebase/app";
import "firebase/auth";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDV5ACAVylCvJLewxUZKRuvnNvqWeuZahI",
    authDomain: "auth-form-c6538.firebaseapp.com",
    projectId: "auth-form-c6538",
    storageBucket: "auth-form-c6538.appspot.com",
    messagingSenderId: "731170493047",
    appId: "1:731170493047:web:9ef3636f3330ae7473ac72",
    measurementId: "G-RP0RXX70MD"
});
const db = firebaseApp.firestore();
// Initialize Firebase Authentication and get a reference to the service
const auth = firebaseApp.auth();
//signup func
const signUp = () => {
    const email = document.getElementById("").value;
    const password = document.getElementById("").value;
    //firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up 
            var user = userCredential.user;
            document.write("You are signed up");
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}
const signIn = () => {
    const email = document.getElementById("").value;
    const password = document.getElementById("").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            document.write("You are signed in");
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}