
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIBE20mHGGN7tDYfIVe3EXIjr2j9wVKz8",
  authDomain: "netflix-clone-36f45.firebaseapp.com",
  projectId: "netflix-clone-36f45",
  storageBucket: "netflix-clone-36f45.appspot.com",
  messagingSenderId: "213408024551",
  appId: "1:213408024551:web:4bc9079e349abc1ec3df42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db=getFirestore(app);

const signup = async (name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password)
       const user = res.user;
       await addDoc(collection(db, "user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
       })
    } catch (error) {
        console.log(error);
        alert(error);
    }

}

const login = async (email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password);

    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout}