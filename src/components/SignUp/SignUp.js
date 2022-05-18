import React, { useState, useContext } from "react";
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
import { Navigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { LocalizationProvider } from "@mui/x-date-pickers";

const SignUp = () => {
    const [rol, setRol] = useState("");

    const authCtx = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    const [isDateFocused, setIsDateFocused] = useState(false);

    const emailInputRef = useRef(null);
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

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const enteredDenumireFirma = denumireFirmaRef.current.value;
        const enteredCui = cuiInputRef.current.value;
        const enteredJudetFirma = judetFirmaInputRef.current.value;
        const enteredDomeniuActivitate =
            domeniuActivitateInputRef.current.value;

        const enteredNumeTutore = numeTutoreInputRef.current.value;
        const enteredPrenumeTutore = prenumeTutoreInputRef.current.value;
        const enteredFirmaTutore = firmaTutoreInputRef.current.value;

        const enteredNumeStudent = numeStudentInputRef.current.value;
        const enteredPrenumeStudent = prenumeStudentInputRef.current.value;
        const enteredDataNStudent = dataNStudentInputRef.current.value;
        const enteredFacultateStudent = facultateStudentInputRef.current.value;
        const enteredAnStudent = anStudentInputRef.current.value;
        const enteredSpecializareStudent =
            specializareStudentInputRef.current.value;
        const enteredJudetStudent = judetStudentInputRef.current.value;

        const enteredNumeProfesor = numeProfesorInputRef.current.value;
        const enteredPrenumeProfesor = prenumeProfesorInputRef.current.value;

        const bodyFirma = JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            denumire: enteredDenumireFirma,
            cui: enteredCui,
            judet: enteredJudetFirma,
            domeniuActivitate: enteredDomeniuActivitate,
            returnSecureToken: true,
        });

        const bodystudent = JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            nume: enteredNumeStudent,
            prenume: enteredPrenumeStudent,
            dataNastere: enteredDataNStudent,
            an: enteredAnStudent,
            judet: enteredJudetStudent,
        });

        const bodyTutore = JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            nume: enteredNumeTutore,
            prenume: enteredPrenumeTutore,
            firmaTutore: enteredFirmaTutore,
            returnSecureToken: true,
        });

        const bodyProfesor = JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            nume: enteredNumeProfesor,
            prenume: enteredPrenumeProfesor,
            returnSecureToken: true,
        });

        setIsLoading(true);
        let url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVVF0vjKQevex3hCiaGrNpqtJulOS3PFA";
        fetch(url, {
            method: "POST",
            body: bodyFirma,
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

            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles["inputs-container"]}>
                    <TextField
                        className={styles.textField}
                        id="outlined-name"
                        label="Email"
                        type="email"
                        ref={emailInputRef}
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
