// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-VMMEkl97nwG_EuE41jWf6c8FoimLMro",
  authDomain: "interviewprep-a5730.firebaseapp.com",
  projectId: "interviewprep-a5730",
  storageBucket: "interviewprep-a5730.firebasestorage.app",
  messagingSenderId: "792588097743",
  appId: "1:792588097743:web:90243db24aaca049607fba",
  measurementId: "G-65MEY6X4LS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);