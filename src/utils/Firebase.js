// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDG_864YRTpZspH33BLoL3q1BGpoX_tvWk",
  authDomain: "test-school-1e904.firebaseapp.com",
  projectId: "test-school-1e904",
  storageBucket: "test-school-1e904.appspot.com",
  messagingSenderId: "615226622002",
  appId: "1:615226622002:web:399c11966d4ee6d851bc2b",
  measurementId: "G-27XSQFLHGC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 