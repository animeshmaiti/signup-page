var firebaseConfig = {
    apiKey: "AIzaSyDV5ACAVylCvJLewxUZKRuvnNvqWeuZahI",
    authDomain: "auth-form-c6538.firebaseapp.com",
    projectId: "auth-form-c6538",
    storageBucket: "auth-form-c6538.appspot.com",
    messagingSenderId: "731170493047",
    appId: "1:731170493047:web:9ef3636f3330ae7473ac72",
    databaseURL: "https://auth-form-c6538-default-rtdb.firebaseio.com",
    measurementId: "G-RP0RXX70MD"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
function signUp() {
    email = document.getElementById('emailUp').value
    password = document.getElementById('passwordUp').value
    full_name = document.getElementById('full_name').value
    favourite_work = document.getElementById('favourite_work').value

    console.log(email,password)
    //firebase code
    auth.createUserWithEmailAndPassword(email, password)
        .then(function(){
            var user = auth.currentUser
            //add user to thr firebase data base
            var database_ref = database.ref()
            //create user data
            var user_data = {
                email : email,
                full_name : full_name,
                favourite_work : favourite_work,
                last_login : Date.now()
            }
            database_ref.child('users/' + user.uid).set(user_data)           
            console.log('user created')
        })
        .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}
function signIn () {
    const email = document.getElementById("emailIn").value;
    const password = document.getElementById("passwordIn").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
            // Signed in
            var database_ref = database.ref()
            //create user data
            var user_data = {
                last_login : Date.now()
            }
            database_ref.child('users/' + user.UID).update(user_data)           
            console.log('user Loged in')
            
        })
        .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}
