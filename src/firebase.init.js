// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzxuAuBf1aJNsnjXdS6HHnP6uPplTV9Q8",
  authDomain: "healthy-smile-70015.firebaseapp.com",
  projectId: "healthy-smile-70015",
  storageBucket: "healthy-smile-70015.appspot.com",
  messagingSenderId: "76709694869",
  appId: "1:76709694869:web:9d12fe770eee38bde7fa9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
