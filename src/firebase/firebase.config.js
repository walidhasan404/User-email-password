// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyOFFo9onUj3AlKvn2gk1i0OeofYomUNY",
  authDomain: "user-email-password-auth-b0c14.firebaseapp.com",
  projectId: "user-email-password-auth-b0c14",
  storageBucket: "user-email-password-auth-b0c14.appspot.com",
  messagingSenderId: "746558630114",
  appId: "1:746558630114:web:b17a869970212e67cc96bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;