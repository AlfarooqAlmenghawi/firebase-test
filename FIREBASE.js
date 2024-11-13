// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAANGw_wWGMLBsKD-hVLxrymkqbllNSR2w",
  authDomain: "fir-test-6a594.firebaseapp.com",
  projectId: "fir-test-6a594",
  storageBucket: "fir-test-6a594.firebasestorage.app",
  messagingSenderId: "98242452805",
  appId: "1:98242452805:web:1be64ac68ab220c05ab22c",
  measurementId: "G-M1PCZZRL0V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
