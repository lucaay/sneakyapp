import firebase from "firebase/compat/app";
import { getDatabase, ref, remove } from "firebase/database";
import "firebase/compat/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

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
//    /\
//    ||
//    ||
// to be filled with your own firebase project data

export const auth = getAuth();

export default app;

export function getUserEmail() {
    const user = auth.currentUser;
    return user.email;
}

export function signIn(email, password, setIsLoading) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            if (userCredential) {
                const user = userCredential.user;
                const url =
                    "https://sneakyapp-e098d-default-rtdb.firebaseio.com/isLoggedIn.json";
                fetch(url, {
                    method: "PUT",
                    body: JSON.stringify({
                        isLoggedIn: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }).then(() => {
                    <Navigate to="/" />;
                });
            } else {
                let errorMessage = "Autentificare eșuată!";
                throw new Error(errorMessage);
            }
            setIsLoading(false);
        })
        .catch((err) => {
            alert(err.message);
            <Navigate to="/" />;
        });
}

export function logOut() {
    firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch((err) => {
            alert(err.message);
            <Navigate to="/" />;
        });

    const url =
        "https://sneakyapp-e098d-default-rtdb.firebaseio.com/isLoggedIn.json";
    fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            isLoggedIn: false,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

// const database = firebase.database();
// export const stagesRef = database.child("stages");

export function removeItem(id) {
    const db = getDatabase();
    remove(ref(db, "stages/" + id)).then(() => {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    });
}
