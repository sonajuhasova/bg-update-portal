import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase 
  .initializeApp({
  apiKey: "AIzaSyDs5tzMkRDxxN2Jng8uCbWMUnrfIRey9Ak",
  authDomain: "bethlen-garde.firebaseapp.com",
  databaseURL: "https://bethlen-garde-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bethlen-garde",
  storageBucket: "bethlen-garde.appspot.com",
  messagingSenderId: "243205233881",
  appId: "1:243205233881:web:e23d7aa6b5cb07e98db2c8",
  measurementId: "G-S63FNZ35YP"
  })
  .firestore();

export const eventRef = db.collection("events");
export const photoRef = db.collection("gallery");