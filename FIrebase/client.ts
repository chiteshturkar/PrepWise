// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCmAmQiXszA1dIZTvDKIDjyfkOQhvppqI",
    authDomain: "prepwise-9278e.firebaseapp.com",
    projectId: "prepwise-9278e",
    storageBucket: "prepwise-9278e.firebasestorage.app",
    messagingSenderId: "495763607378",
    appId: "1:495763607378:web:41dea0c8deca52ca52348b",
    measurementId: "G-305RZ8D65X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app);
export const db = getFirestore(app);