// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "braintech-redesign",
  "appId": "1:574264552247:web:e43107f30855be162148b2",
  "storageBucket": "braintech-redesign.firebasestorage.app",
  "apiKey": "AIzaSyBHhZW-Zm_TeYNxhlqsYNLYFFMNfwFSmfo",
  "authDomain": "braintech-redesign.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "574264552247"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
