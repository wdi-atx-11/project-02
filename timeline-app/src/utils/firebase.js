// TODO: Use .dotenv
import firebase from 'firebase';

// Provided by the Firebase console
const config = {
  apiKey: "AIzaSyAfShnGnN2aSE0BcP2V0hD8x4PCX-H3QM8",
  authDomain: "project-02-8b8aa.firebaseapp.com",
  databaseURL: "https://project-02-8b8aa.firebaseio.com",
  projectId: "project-02-8b8aa",
  storageBucket: "project-02-8b8aa.appspot.com",
  messagingSenderId: "112458030703"
};

// Firebase instance
firebase.initializeApp(config);

// Firebase doesn't return data as an array but as a parent object
//  containing child objects. This utility function will extract
//  the child objects into an array and place the key as 'id'
const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { firebase, database, auth };
export { firebaseListToArray };
