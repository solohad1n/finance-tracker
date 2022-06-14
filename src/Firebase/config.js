import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCUWNFHg6gfjj6z6Iwip49X4x61tkkazcQ",
  authDomain: "finance-tracker-7d051.firebaseapp.com",
  projectId: "finance-tracker-7d051",
  storageBucket: "finance-tracker-7d051.appspot.com",
  messagingSenderId: "328092234891",
  appId: "1:328092234891:web:ce7247e0febd366489908e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);