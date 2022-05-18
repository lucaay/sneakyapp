import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./LogIn.module.css";
import { style } from "@mui/system";

const LogIn = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const usernameValue = usernameRef.current.value;
        const passwordValue = passwordRef.current.value;
        console.log(usernameValue, passwordValue);
    };

    return (
        <div className={styles["bg-login"]}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className={styles["inputs-container"]}>
                    <TextField
                        id="outlined-name"
                        label="Username"
                        type="username"
                        ref={usernameRef}
                        required
                    />
                    <TextField
                        id="outlined-name"
                        label="Password"
                        type="password"
                        ref={passwordRef}
                        required
                    />
                </div>
                <Button
                    variant="contained"
                    type="submit"
                    className={styles["btn-login"]}
                >
                    LOGIN
                </Button>
                <div className={styles.inscrie}>
                    <p>Dorești să te înregistrezi?</p>
                    <Link to="/signup">Creează un cont.</Link>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
