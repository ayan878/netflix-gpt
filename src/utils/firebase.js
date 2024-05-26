import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0941Bqmd8L_bDJSQOmToAqZ-SyCBECJM",
  authDomain: "netflix-gpt-d1e3c.firebaseapp.com",
  projectId: "netflix-gpt-d1e3c",
  storageBucket: "netflix-gpt-d1e3c.appspot.com",
  messagingSenderId: "1047516761440",
  appId: "1:1047516761440:web:0e30ec281de87c9b742205",
  measurementId: "G-HM1WD7SSTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


