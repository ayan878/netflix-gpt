import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBooEkz_NEWHKKt7EFGLDQj7OJ2lUqTlJc",
  authDomain: "netflix-gpt-2ca3a.firebaseapp.com",
  projectId: "netflix-gpt-2ca3a",
  storageBucket: "netflix-gpt-2ca3a.appspot.com",
  messagingSenderId: "325811192081",
  appId: "1:325811192081:web:cf296745904491beec4cb0",
  measurementId: "G-SSD70VBD0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


