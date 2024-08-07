// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQeGFtu34zDu2sY-nhZEzqUzg918t1bB8",
  authDomain: "solo-sphere-11.firebaseapp.com",
  projectId: "solo-sphere-11",
  storageBucket: "solo-sphere-11.appspot.com",
  messagingSenderId: "307695533862",
  appId: "1:307695533862:web:886a5241e6a22d8bbacbe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;