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
// //signup func
const signUp = () => {
    const email = document.getElementById("emailUp").value;
    const password = document.getElementById("passwordUp").value;
    console.log(email,password)
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
    const email = document.getElementById("emailIn").value;
    const password = document.getElementById("passwordIn").value;
    console.log(email,password)
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
