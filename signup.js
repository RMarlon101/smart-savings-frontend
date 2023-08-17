import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'
        

import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js'
(function () {
    
  
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
   
    initializeApp(firebaseConfig);

  
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

   
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = getAuth();

        
        signInWithEmailAndPassword(auth, email, password).then(user =>{
            localStorage.setItem("uid", user.uid)
            alert("Login Successful :)");
            window.location.href = "search.html";
        }).catch(err => {
            alert(err.message);
        });
        
    });


    btnSignup.addEventListener('click', e => {

     
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = getAuth();

     
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
