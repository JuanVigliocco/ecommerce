
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAWz6loESmaw-U2yW2AX0NMEPRA_0lbnVI",
  authDomain: "previapp-75d21.firebaseapp.com",
  projectId: "previapp-75d21",
  storageBucket: "previapp-75d21.appspot.com",
  messagingSenderId: "387737639203",
  appId: "1:387737639203:web:483e1b4dd9181c47661496"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);