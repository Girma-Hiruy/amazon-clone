import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsHeSkEvHjFAy-lAj8bFO6u4S7XFpD_c0",
  authDomain: "clone-2ed13.firebaseapp.com",
  projectId: "clone-2ed13",
  storageBucket: "clone-2ed13.appspot.com",
  messagingSenderId: "487272885806",
  appId: "1:487272885806:web:0292261e25b6550c6e39bf",
  measurementId: "G-2LNJM6MF5G",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

// The latest update for auth with db
const auth = firebase.auth();
export default auth;
// export { db, auth };
