// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB63D6KLmqJmPd4Krwxg9MGnmQcyMqmzTg",
  authDomain: "web-eff6c.firebaseapp.com",
  projectId: "web-eff6c",
  storageBucket: "web-eff6c.appspot.com",
  messagingSenderId: "641065618913",
  appId: "1:641065618913:web:1b792f65f41a864fbd96a0",
  measurementId: "G-12XBZKDM63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
