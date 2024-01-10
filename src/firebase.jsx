import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8EBaR9FbbO0fgrO4gOiKBBvIpzcRsWUk",
  authDomain: "chatly-0.firebaseapp.com",
  projectId: "chatly-0",
  storageBucket: "chatly-0.appspot.com",
  messagingSenderId: "1070108494792",
  appId: "1:1070108494792:web:a293e2b4494a03af3d4efd",
  measurementId: "G-97PZHZEPQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app);
export const db = getFirestore(app);