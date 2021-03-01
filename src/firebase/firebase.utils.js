import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyALkphub8hgBfGav5WSdgvPQdX7QKxm6og",
  authDomain: "bakery-app-268d1.firebaseapp.com",
  projectId: "bakery-app-268d1",
  storageBucket: "bakery-app-268d1.appspot.com",
  messagingSenderId: "1017752988130",
  appId: "1:1017752988130:web:529191385b0506b46c31bb",
  measurementId: "G-165SC9ESY8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
