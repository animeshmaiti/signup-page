const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});

function moveSlider() {
    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
});
const firebaseConfig = {
    apiKey: "AIzaSyDV5ACAVylCvJLewxUZKRuvnNvqWeuZahI",
    authDomain: "auth-form-c6538.firebaseapp.com",
    databaseURL: "https://auth-form-c6538-default-rtdb.firebaseio.com",
    projectId: "auth-form-c6538",
    storageBucket: "auth-form-c6538.appspot.com",
    messagingSenderId: "731170493047",
    appId: "1:731170493047:web:9ef3636f3330ae7473ac72",
    measurementId: "G-RP0RXX70MD"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
function signUp() {
    email = document.getElementById('emailUp').value
    password = document.getElementById('passwordUp').value
    full_name = document.getElementById('full_name').value
    // favourite_work = document.getElementById('favourite_work').value

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
                // favourite_work : favourite_work,
                last_login : Date.now()
            }
            database_ref.child('users/' + user.uid).set(user_data)           
            console.log('user created')
            alert("you are singedUp\nThanks for joining")
        })
        .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
}
function signIn () {
    const email = document.getElementById("emailIn").value;
    const password = document.getElementById("passwordIn").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
            var user = auth.currentUser
            // Signed in
            var database_ref = database.ref()
            //create user data
            var user_data = {
                last_login : Date.now()
            }
            database_ref.child('users/' + user.UID).update(user_data)           
            console.log('user Loged in');
            document.write("You are signed in");
            
        })
        .catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });
}
