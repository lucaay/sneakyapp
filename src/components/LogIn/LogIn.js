import React, { useRef, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./LogIn.module.css";
import { style } from "@mui/system";

import AuthContext from "../../store/auth-context";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authCtx = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        setIsLoading(true);
        let url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVVF0vjKQevex3hCiaGrNpqtJulOS3PFA";
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = "Autentificare eșuată!";
                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                const expirationTime = new Date(
                    new Date().getTime() + +data.expiresIn * 1000
                );
                authCtx.login(data.idToken, expirationTime.toISOString());
                <Navigate to="/test-page" />;
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className={styles["bg-login"]}>
            <h1 className={styles.titlu}>Login</h1>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles["inputs-container"]}>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={emailHandler}
                        required
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={passwordHandler}
                        required
                    />
                </div>

                {!isLoading && (
                    <Button
                        variant="contained"
                        type="submit"
                        className={styles["btn-login"]}
                    >
                        LOGIN
                    </Button>
                )}
                {isLoading && <p>Se încarcă...</p>}
                <div className={styles.inscrie}>
                    <p>Dorești să te înregistrezi?</p>
                    <Link to="/signup">Creează un cont.</Link>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
