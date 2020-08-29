
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDqM2jlZQZZy9XRY8_vraoABd5BB-w2UPs",
    authDomain: "project-future-5038d.firebaseapp.com",
    databaseURL: "https://project-future-5038d.firebaseio.com",
    projectId: "project-future-5038d",
    storageBucket: "project-future-5038d.appspot.com",
    messagingSenderId: "918921424465",
    appId: "1:918921424465:web:edafba0913f36a560f1270",
    measurementId: "G-61C9W8MVXQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogIn= document.getElementById('btnLogIn');
  const btnLogOut= document.getElementById('btnLogOut');

  btnLogIn.addEventListener('click', e=> {
    const email = txtEmail.value;
    const pass =  txtPassword.value;
    const auth = firebase.auth();
    firebase.auth.signInWithEmailandPassword(email,pass);
    var errorCode = error.code;
    var errorMessage = error.message;

 });

  btnSignUp.addEventListener('click', e=> {
    const email = txtEmail.value;
    const pass =  txtPassword.value;
    const auth = firebase.auth();
    firebase.auth.createUserWithEmailandPassword(email,pass);
    var errorCode = error.code;
    var errorMessage = error.message;

});

  btnLogOut.addEventListener('click', e =>{
    firebase.auth().signOut();
  });

firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
    btnLogOut.classList.remove('hide');
    btnLogIn.classList.add('hide');
  }
  else {
    console.log('not logged in');
    btnLogOut.classList.add('hide');
    btnLogIn.classList.remove('hide');
  }

});

