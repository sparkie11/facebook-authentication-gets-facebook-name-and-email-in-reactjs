// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwqXKEVEzHppNbnalYa1FSPSJELPxJnBc",
  authDomain: "facebook-a7fdc.firebaseapp.com",
  projectId: "facebook-a7fdc",
  storageBucket: "facebook-a7fdc.appspot.com",
  messagingSenderId: "961362328906",
  appId: "1:961362328906:web:0ba81a40eb4e8accc955b3",
};

//face:https://facebook-a7fdc.firebaseapp.com/__/auth/handler
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export { auth, provider };
