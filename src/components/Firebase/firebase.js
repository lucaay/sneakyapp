import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBVVF0vjKQevex3hCiaGrNpqtJulOS3PFA",

    authDomain: "sneakyapp-e098d.firebaseapp.com",

    databaseURL: "https://sneakyapp-e098d-default-rtdb.firebaseio.com",

    projectId: "sneakyapp-e098d",

    storageBucket: "sneakyapp-e098d.appspot.com",

    messagingSenderId: "177164763700",

    appId: "1:177164763700:web:929398cd51eca4b344c061",

    measurementId: "G-LXR0MHTN5V",
});

export const auth = getAuth();

export default app;
