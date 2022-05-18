import React, { useState } from "react";
import styles from "./SignUp.module.css";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useRef } from "react";

const SignUp = () => {
    const [rol, setRol] = useState("");

    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const denumireFirmaRef = useRef(null);
    const cuiInputRef = useRef(null);
    const judetInputRef = useRef(null);
    const domeniuActivitateInputRef = useRef(null);

    const numeTutoreInputRef = useRef(null);
    const prenumeTutoreInputRef = useRef(null);
    const firmaTutoreInputRef = useRef(null);

    const rolHandler = (e) => {
        setRol(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const usernameValue = usernameInputRef.current.value;
        const passwordValue = passwordInputRef.current.value;
        console.log(usernameValue, passwordValue, rol);
    };

    const inregistrareFirma = (
        <div className={styles["inputs-container"]}>
            <TextField
                id="outlined-name"
                label="Denumire"
                type="text"
                ref={denumireFirmaRef}
                required
            />
            <TextField
                id="outlined-name"
                label="CUI"
                type="text"
                ref={cuiInputRef}
                required
            />
            <TextField
                id="outlined-name"
                label="Judet"
                type="text"
                ref={judetInputRef}
                required
            />
            <TextField
                id="outlined-name"
                label="Domeniu activitate"
                type="text"
                ref={domeniuActivitateInputRef}
                required
            />
        </div>
    );
    const inregistrareStudent = <div>formular Student</div>;
    const inregistrareTutore = (
        <div className={styles["inputs-container"]}>
            <TextField
                id="outlined-name"
                label="Nume"
                type="text"
                ref={numeTutoreInputRef}
                required
            />
            <TextField
                id="outlined-name"
                label="Prenume"
                type="text"
                ref={prenumeTutoreInputRef}
                required
            />
            <TextField
                id="outlined-name"
                label="Firma"
                type="text"
                ref={firmaTutoreInputRef}
                required
            />
        </div>
    );
    const inregistrareProfesor = <div>formular Profesor</div>;

    return (
        <div className={styles["bg-login"]}>
            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className={styles["inputs-container"]}>
                    <TextField
                        id="outlined-name"
                        label="Username"
                        type="username"
                        ref={usernameInputRef}
                        required
                    />
                    <TextField
                        id="outlined-name"
                        label="Password"
                        type="password"
                        ref={passwordInputRef}
                        required
                    />
                </div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                        Rol*
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={rol}
                        onChange={rolHandler}
                        label="Rol"
                        required
                    >
                        <MenuItem value="firma">Firma</MenuItem>
                        <MenuItem value="student">Student</MenuItem>
                        <MenuItem value="tutore">Tutore</MenuItem>
                        <MenuItem value="profesor">Profesor</MenuItem>
                    </Select>
                </FormControl>

                {rol === "firma" && inregistrareFirma}
                {rol === "student" && inregistrareStudent}
                {rol === "tutore" && inregistrareTutore}
                {rol === "profesor" && inregistrareProfesor}

                <Button
                    variant="contained"
                    type="submit"
                    className={styles["btn-login"]}
                >
                    INREGISTREAZĂ-TE
                </Button>
                <div className={styles.inscrie}>
                    <p>Ai deja un cont?</p>
                    <Link to="/login">Loghează-te acum.</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
