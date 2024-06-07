// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from 'react-toastify'; // Correct import for toast

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZvw1lGWHlYPMGTWhOZ2O5zOcep_42Gfw",
  authDomain: "netflx-425616.firebaseapp.com",
  projectId: "netflx-425616",
  storageBucket: "netflx-425616.appspot.com",
  messagingSenderId: "867330043889",
  appId: "1:867330043889:web:8070bec6224c83f44c9e50",
  measurementId: "G-YJVCDW0WYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const handleError = (error) => {
  const errorMessage = error.code ? error.code.split('/')[1].replace(/-/g, ' ') : error.message;
  toast.error(errorMessage);
};

// Signup function
const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local"
    });
    toast.success("User registered successfully!");
  } catch (error) {
    console.error("Signup Error:", error);
    handleError(error);
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("User logged in successfully!");
  } catch (error) {
    console.error("Login Error:", error);
    handleError(error);
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    toast.success("User logged out successfully!");
  } catch (error) {
    console.error("Logout Error:", error);
    handleError(error);
  }
};

export { auth, db, signup, login, logout };
