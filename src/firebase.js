import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "sign-language-7c5c5.firebaseapp.com",
  projectId: "sign-language-7c5c5",
  storageBucket: "sign-language-7c5c5.firebasestorage.app",
  messagingSenderId: "736674977685",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
