import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNJ81394vRVsur1NgUwDtA2Ne1tQ3pc7k",
  authDomain: "chatapp-24bfe.firebaseapp.com",
  projectId: "chatapp-24bfe",
  storageBucket: "chatapp-24bfe.appspot.com",
  messagingSenderId: "914897020790",
  appId: "1:914897020790:web:ce1001055f75a5684efc57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
