import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV84QxNpfoj4u-JebyWEmxgaQAb92TX8w",
  authDomain: "login-auth-c003e.firebaseapp.com",
  projectId: "login-auth-c003e",
  storageBucket: "login-auth-c003e.appspot.com",
  messagingSenderId: "355460518584",
  appId: "1:355460518584:web:abb063c7ef53d7359e5a4d",
  measurementId: "G-SSX7FZ4DRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
