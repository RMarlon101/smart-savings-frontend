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
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());