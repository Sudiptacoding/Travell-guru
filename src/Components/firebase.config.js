import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA5f-YvmLmCTpxiHnwPcvcBRrvmC19YVjw",
    authDomain: "travell-grue.firebaseapp.com",
    projectId: "travell-grue",
    storageBucket: "travell-grue.appspot.com",
    messagingSenderId: "307135560320",
    appId: "1:307135560320:web:b5e6b4be68b61e76dc8465"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
