// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Vl_TbUoFOZvceCi43t0Ch0QVhOHLaPw",
  authDomain: "nextjs-auth-project-8332b.firebaseapp.com",
  projectId: "nextjs-auth-project-8332b",
  storageBucket: "nextjs-auth-project-8332b.appspot.com",
  messagingSenderId: "1096494737927",
  appId: "1:1096494737927:web:f0176b4e6b8ccfe9a998a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
