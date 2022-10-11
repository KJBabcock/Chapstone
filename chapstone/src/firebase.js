// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiylYVG4rQ1fY136TzN0tS4ARQw1zA2KY",
  authDomain: "chapstone-35ae7.firebaseapp.com",
  projectId: "chapstone-35ae7",
  storageBucket: "chapstone-35ae7.appspot.com",
  messagingSenderId: "516683347374",
  appId: "1:516683347374:web:12c5f800239fed6253843f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)