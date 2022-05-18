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
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { LocalizationProvider } from "@mui/x-date-pickers";

const SignUp = () => {
    const [rol, setRol] = useState("");

    const [isDateFocused, setIsDateFocused] = useState(false);

    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const denumireFirmaRef = useRef(null);
    const cuiInputRef = useRef(null);
    const judetFirmaInputRef = useRef(null);
    const domeniuActivitateInputRef = useRef(null);

    const numeTutoreInputRef = useRef(null);
    const prenumeTutoreInputRef = useRef(null);
    const firmaTutoreInputRef = useRef(null);

    //
    const numeStudentInputRef = useRef(null);
    const prenumeStudentInputRef = useRef(null);
    const dataNStudentInputRef = useRef(null);
    const facultateStudentInputRef = useRef(null);
    const anStudentInputRef = useRef(null);
    const specializareStudentInputRef = useRef(null);
    const judetStudentInputRef = useRef(null);
    //
    const numeProfesorInputRef = useRef(null);
    const prenumeProfesorInputRef = useRef(null);

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
                className={styles.textField}
                id="outlined-name"
                label="Denumire"
                type="text"
                ref={denumireFirmaRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="CUI"
                type="text"
                ref={cuiInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Judet"
                type="text"
                ref={judetFirmaInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Domeniu activitate"
                type="text"
                ref={domeniuActivitateInputRef}
                required
            />
        </div>
    );
    const inregistrareStudent = (
        <div className={styles["inputs-container"]}>
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Nume"
                type="text"
                ref={numeStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Prenume"
                type="text"
                ref={prenumeStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                type="date"
                label={isDateFocused && "Data Nasterii"}
                ref={dataNStudentInputRef}
                onFocus={() => {
                    setIsDateFocused(true);
                }}
                onBlur={() => setIsDateFocused(false)}
                required
            />

            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Facultate"
                type="text"
                ref={facultateStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Judetul Facultatii"
                type="text"
                ref={judetStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Specializare"
                type="text"
                ref={specializareStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="An"
                type="text"
                ref={anStudentInputRef}
                required
            />
        </div>
    );
    const inregistrareTutore = (
        <div className={styles["inputs-container"]}>
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Nume"
                type="text"
                ref={numeTutoreInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Prenume"
                type="text"
                ref={prenumeTutoreInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Firma"
                type="text"
                ref={firmaTutoreInputRef}
                required
            />
        </div>
    );
    const inregistrareProfesor = (
        <div className={styles["inputs-container"]}>
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Nume"
                type="text"
                ref={numeProfesorInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Prenume"
                type="text"
                ref={prenumeProfesorInputRef}
                required
            />
        </div>
    );

    return (
        <div className={styles["bg-login"]}>
            <h1 className={styles.titlu}>Înregistrează-te</h1>

            <form onSubmit={onSubmitHandler} className={styles.form}>
                <div className={styles["inputs-container"]}>
                    <TextField
                        className={styles.textField}
                        id="outlined-name"
                        label="Username"
                        type="username"
                        ref={usernameInputRef}
                        required
                    />
                    <TextField
                        className={styles.textField}
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
                        className={styles.textField}
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
