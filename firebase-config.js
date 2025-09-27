// Import Firebase core + needed services
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAP2ihApg1gM07nhLWHQZnoLJi7fOih6u4",
  authDomain: "chanting-tracker.firebaseapp.com",
  projectId: "chanting-tracker",
  storageBucket: "chanting-tracker.firebasestorage.app",
  messagingSenderId: "196659144083",
  appId: "1:196659144083:web:8be1380c531c868ac8f466",
  measurementId: "G-W3QWL2TWX6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
