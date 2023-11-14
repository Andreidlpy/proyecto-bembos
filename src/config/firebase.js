// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2CK_o8eggVlrhcISYew-riIlgLNRD9jM",
  authDomain: "bembos-database.firebaseapp.com",
  projectId: "bembos-database",
  storageBucket: "bembos-database.appspot.com",
  messagingSenderId: "817724324177",
  appId: "1:817724324177:web:77703cdc3d426f17eb7b70",
  measurementId: "G-HLK391CGNV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);