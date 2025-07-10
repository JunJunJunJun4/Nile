// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa4a1rlRvg8vId_lQy865eqvw_aDAJz2w",
  authDomain: "nile2-18aa3.firebaseapp.com",
  databaseURL: "https://nile2-18aa3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nile2-18aa3",
  storageBucket: "nile2-18aa3.firebasestorage.app",
  messagingSenderId: "850359693771",
  appId: "1:850359693771:web:a54cd6ca50acd70789064e",
  measurementId: "G-621VRDQ03W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Import and initialize the database

export { db }; // Export the database instance


const analytics = getAnalytics(app);