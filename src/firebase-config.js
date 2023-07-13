// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjMnuoXhcOff03-Iiz2gMirqksFbGxw1I",
  authDomain: "chatapp-e5276.firebaseapp.com",
  projectId: "chatapp-e5276",
  storageBucket: "chatapp-e5276.appspot.com",
  messagingSenderId: "144146950568",
  appId: "1:144146950568:web:816b2fdf59d9927c49959d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
