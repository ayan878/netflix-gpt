import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBroZpRmmdpJycWsKJunM0SKMIH9ybHWb8",
  authDomain: "netflix-gpt-d6332.firebaseapp.com",
  projectId: "netflix-gpt-d6332",
  storageBucket: "netflix-gpt-d6332.appspot.com",
  messagingSenderId: "544503708857",
  appId: "1:544503708857:web:cca83e5c8c81bd05e36f68",
  measurementId: "G-SFJ5WTERJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
