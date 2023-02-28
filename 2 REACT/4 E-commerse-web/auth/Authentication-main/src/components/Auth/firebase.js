// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqAWuE9zphiTo8Om0JVvlH6NIDf9JWXwI",
  authDomain: "e-commerce-25ae3.firebaseapp.com",
  projectId: "e-commerce-25ae3",
  storageBucket: "e-commerce-25ae3.appspot.com",
  messagingSenderId: "638442866852",
  appId: "1:638442866852:web:8cab3e8ca0c6998c8a3e31",
  measurementId: "G-LR9D4320FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);