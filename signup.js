import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'
        
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'
(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCBqCFd_NPi2Ihg87igH8zZeKDGGKwgTLM",
        authDomain: "smartsavings-9d5b1.firebaseapp.com",
        databaseURL: "https://smartsavings-9d5b1-default-rtdb.firebaseio.com",
        projectId: "smartsavings-9d5b1",
        storageBucket: "smartsavings-9d5b1.appspot.com",
        messagingSenderId: "198467463653",
        appId: "1:198467463653:web:b0f1395bcd990f447f270c",
        measurementId: "G-56ZPB0XLHR"
    };
    // Initialize Firebase
    initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = getAuth();

        //sign in with firebase auth
        signInWithEmailAndPassword(auth, email, password).then(user =>{
            localStorage.setItem("uid", user.uid)
            alert("Login Successful :)");
            window.location.href = "search.html";
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = getAuth();

        //sign in with firebase auth
        const promise = createUserWithEmailAndPassword(auth, email, password).then(user => {
            localStorage.setItem("uid", user.uid)
            loca.Storage.setItem("currCart", [])
            alert("Signup Successful :)")
            window.location.href = "search.html";
        }).catch(err => {
            alert(err.message);
        });

    });


}());
