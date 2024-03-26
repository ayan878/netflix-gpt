import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO3UvXxHoNsCuy4NJPTbWG04nzc67P7a8",
  authDomain: "netflix-gpt-6475a.firebaseapp.com",
  projectId: "netflix-gpt-6475a",
  storageBucket: "netflix-gpt-6475a.appspot.com",
  messagingSenderId: "785952715562",
  appId: "1:785952715562:web:7c85015571ba8b5a48a453",
  measurementId: "G-HL9176W6RG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
