import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./LogIn.module.css";

import { signIn } from "../Firebase/firebase";
import logo from "../../assets/logo.png";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        signIn(email, password, setIsLoading);
        setTimeout(() => {
            window.location.reload(false);
        }, 1000);
    };

    return (
        <div className={styles["bg-login"]}>
            <img src={logo} alt="logo" className={styles.img} />
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
