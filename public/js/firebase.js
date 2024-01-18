// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmPNlg7yOTCYjxigzPFDsu9-Un9XSJZSo",
  authDomain: "lafavor-2c8ce.firebaseapp.com",
  databaseURL: "https://lafavor-2c8ce-default-rtdb.firebaseio.com",
  projectId: "lafavor-2c8ce",
  storageBucket: "lafavor-2c8ce.appspot.com",
  messagingSenderId: "54093090557",
  appId: "1:54093090557:web:6befa6f1d5480464b8f894",
  measurementId: "G-WQZZWTVE7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);