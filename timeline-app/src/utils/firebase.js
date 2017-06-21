import firebase from 'firebase';

// Provided by the Firebase console
var config = {
    apiKey: "AIzaSyAfShnGnN2aSE0BcP2V0hD8x4PCX-H3QM8",
    authDomain: "project-02-8b8aa.firebaseapp.com",
    databaseURL: "https://project-02-8b8aa.firebaseio.com",
    projectId: "project-02-8b8aa",
    storageBucket: "project-02-8b8aa.appspot.com",
    messagingSenderId: "112458030703"
  };

// Firebase instance
firebase.initializeApp(config);

const auth = firebase.auth();

export { firebase, auth };
