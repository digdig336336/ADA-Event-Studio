// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAKR2JqpRheEghtRCNai1bT7Uw3b1-IAEY",
  authDomain: "fes2026-12b79.firebaseapp.com",
  projectId: "fes2026-12b79",
  storageBucket: "fes2026-12b79.firebasestorage.app",
  messagingSenderId: "1058459510426",
  appId: "1:1058459510426:web:a69273c1ba86915ab2a123"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)


