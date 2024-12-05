// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtDDEivVu_gLBFjhrJRn-0V2tc2lTcHOo",
  authDomain: "coffee-eporium.firebaseapp.com",
  projectId: "coffee-eporium",
  storageBucket: "coffee-eporium.firebasestorage.app",
  messagingSenderId: "1098976511608",
  appId: "1:1098976511608:web:0b01ddaab70f86120e8f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;