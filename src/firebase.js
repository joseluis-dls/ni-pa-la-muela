// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI_Mtwub0fMLD_lWnI1ZeBCyb1sSQBXpg",
  authDomain: "nipalamuelaauth.firebaseapp.com",
  projectId: "nipalamuelaauth",
  storageBucket: "nipalamuelaauth.appspot.com",
  messagingSenderId: "1007353260848",
  appId: "1:1007353260848:web:28875af858a496730276f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

