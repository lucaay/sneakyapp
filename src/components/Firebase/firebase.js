import firebase from "firebase/compat/app";
import { getDatabase, ref, remove } from "firebase/database";
import "firebase/compat/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

const app = firebase.initializeApp({
    apiKey: "your_api_key",

    authDomain: "your_domain",

    databaseURL: "url_firebase",

    projectId: "id_proiect",

    storageBucket: "storage_bucket_firebase",

    messagingSenderId: "_sender_id_messaging",

    appId: "app_id",

    measurementId: "measurement_id",
});

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
