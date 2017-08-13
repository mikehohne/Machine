import test from './test';
import * as firebase from "firebase";

test('Production is working!!!')
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHDOMAIN + ".firebaseapp.com",
    databaseURL: process.env.DBNAME + ".firebaseio.com",
    storageBucket: process.env.STORAGEBUCKET + ".appspot.com",
  };
  firebase.initializeApp(config);

//   firebase.auth()
//   .createUserWithEmailAndPassword('andrewhohne@gmail.com', 'testing1234')
//   .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//  });