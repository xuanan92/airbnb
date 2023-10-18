import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlN4DOka9onXF1fTiQ7me4W7ZW_5xxUlA",
  authDomain: "airbnbtweak.firebaseapp.com",
  projectId: "airbnbtweak",
  storageBucket: "airbnbtweak.appspot.com",
  messagingSenderId: "1055901281664",
  appId: "1:1055901281664:web:39b32f5d83a5da8ed4e565",
};

/* eslint-disable-next-line */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
