// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1S9ghrX9ByasGMyQfy1V9YO2vDIjARWY",
  authDomain: "react-auth-practice-c53d4.firebaseapp.com",
  projectId: "react-auth-practice-c53d4",
  storageBucket: "react-auth-practice-c53d4.appspot.com",
  messagingSenderId: "911383448295",
  appId: "1:911383448295:web:1bf28b6de58cf5f20e7042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);