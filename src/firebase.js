import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk-uB2fbmcplZErHggokIDd8FTHtdC0Dw",
  authDomain: "blogging-app-ddc22.firebaseapp.com",
  projectId: "blogging-app-ddc22",
  storageBucket: "blogging-app-ddc22.appspot.com",
  messagingSenderId: "697119938096",
  appId: "1:697119938096:web:d0b765a06a3ed3feb0fff5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
