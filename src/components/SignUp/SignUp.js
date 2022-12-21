import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const SignUp = () => {
    const [rol, setRol] = useState("");


    // loading/loaded
    const [isLoading, setIsLoading] = useState(false);
    const [isSucces, setIsSuccess] = useState(false);

    const [isDateFocused, setIsDateFocused] = useState(false);

    // credentials
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    //company account
    const denumireFirmaRef = useRef(null);
    const cuiInputRef = useRef(null);
    const judetFirmaInputRef = useRef(null);
    const domeniuActivitateInputRef = useRef(null);

    //guardian account
    const numeTutoreInputRef = useRef(null);
    const prenumeTutoreInputRef = useRef(null);
    const firmaTutoreInputRef = useRef(null);

    //student account
    const numeStudentInputRef = useRef(null);
    const prenumeStudentInputRef = useRef(null);
    const dataNStudentInputRef = useRef(null);
    const facultateStudentInputRef = useRef(null);
    const anStudentInputRef = useRef(null);
    const specializareStudentInputRef = useRef(null);
    const judetStudentInputRef = useRef(null);

    //teacher account
    const numeProfesorInputRef = useRef(null);
    const prenumeProfesorInputRef = useRef(null);

    const rolHandler = (e) => {
        setRol(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        let body;
        switch (rol) {
            case "firma":
                const enteredDenumireFirma = denumireFirmaRef.current.value;
                const enteredCui = cuiInputRef.current.value;
                const enteredJudetFirma = judetFirmaInputRef.current.value;
                const enteredDomeniuActivitate =
                    domeniuActivitateInputRef.current.value;

                body = JSON.stringify({
                    email: enteredEmail,
                    rol,
                    nume: enteredDenumireFirma,
                    cui: enteredCui,
                    judet: enteredJudetFirma,
                    domeniuActivitate: enteredDomeniuActivitate,
                    returnSecureToken: true,
                });
                break;
            case "student":
                const enteredNumeStudent = numeStudentInputRef.current.value;
                const enteredPrenumeStudent =
                    prenumeStudentInputRef.current.value;
                const enteredDataNStudent = dataNStudentInputRef.current.value;
                const enteredFacultateStudent =
                    facultateStudentInputRef.current.value;
                const enteredAnStudent = anStudentInputRef.current.value;
                const enteredSpecializareStudent =
                    specializareStudentInputRef.current.value;
                const enteredJudetStudent = judetStudentInputRef.current.value;

                body = JSON.stringify({
                    email: enteredEmail,
                    rol,
                    nume: enteredNumeStudent,
                    prenume: enteredPrenumeStudent,
                    dataNastere: enteredDataNStudent,
                    facultate: enteredFacultateStudent,
                    an: enteredAnStudent,
                    specializare: enteredSpecializareStudent,
                    judet: enteredJudetStudent,

                    returnSecureToken: true,
                });
                break;
            case "tutore":
                const enteredNumeTutore = numeTutoreInputRef.current.value;
                const enteredPrenumeTutore =
                    prenumeTutoreInputRef.current.value;
                const enteredFirmaTutore = firmaTutoreInputRef.current.value;

                body = JSON.stringify({
                    email: enteredEmail,
                    rol,
                    nume: enteredNumeTutore,
                    prenume: enteredPrenumeTutore,
                    firmaTutore: enteredFirmaTutore,
                    returnSecureToken: true,
                });
                break;
            case "profesor":
                const enteredNumeProfesor = numeProfesorInputRef.current.value;
                const enteredPrenumeProfesor =
                    prenumeProfesorInputRef.current.value;

                body = JSON.stringify({
                    email: enteredEmail,
                    rol,
                    nume: enteredNumeProfesor,
                    prenume: enteredPrenumeProfesor,
                    returnSecureToken: true,
                });
                break;

            default:
                break;
        }

        setIsLoading(true);

        // auth info realtime database
        let url =
            "https://sneakyapp-e098d-default-rtdb.firebaseio.com/users.json";
        fetch(url, {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    setIsSuccess(true);
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = "Înregistrare eșuată!";
                        throw new Error(errorMessage);
                    });
                }
            })
            .catch((err) => {
                alert(err.message);
            });

        setIsLoading(true);
        //auth database
        url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVVF0vjKQevex3hCiaGrNpqtJulOS3PFA";
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
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
                        let errorMessage = "Înregistrare eșuată!";
                        throw new Error(errorMessage);
                    });
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    };
    useEffect(() => {
        setTimeout(() => {
            setIsSuccess(false);
            if (isSucces === true) {
                setTimeout(() => {
                    window.location.reload(false);
                }, 500);
            }
        }, 2000);
    }, [isSucces]);

    const inregistrareFirma = (
        <div className={styles["inputs-container"]}>
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Denumire"
                type="text"
                inputRef={denumireFirmaRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="CUI"
                type="text"
                inputRef={cuiInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Judet"
                type="text"
                inputRef={judetFirmaInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Domeniu activitate"
                type="text"
                inputRef={domeniuActivitateInputRef}
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
                inputRef={numeStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Prenume"
                type="text"
                inputRef={prenumeStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                type="date"
                label={isDateFocused && "Data Nasterii"}
                inputRef={dataNStudentInputRef}
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
                inputRef={facultateStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Judetul Facultatii"
                type="text"
                inputRef={judetStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Specializare"
                type="text"
                inputRef={specializareStudentInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="An"
                type="number"
                inputRef={anStudentInputRef}
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
                inputRef={numeTutoreInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Prenume"
                type="text"
                inputRef={prenumeTutoreInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Firma"
                type="text"
                inputRef={firmaTutoreInputRef}
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
                inputRef={numeProfesorInputRef}
                required
            />
            <TextField
                className={styles.textField}
                id="outlined-name"
                label="Prenume"
                type="text"
                inputRef={prenumeProfesorInputRef}
                required
            />
        </div>
    );

    return (
        <div className={styles["bg-login"]}>
            <img src={logo} alt="logo" className={styles.img} />

            <form onSubmit={submitHandler} className={styles.form}>
                {isSucces && (
                    <h1 className={styles["info-success"]}>
                        Cont creat cu success!
                    </h1>
                )}
                <div className={styles["inputs-container"]}>
                    <TextField
                        className={styles.textField}
                        id="outlined-name"
                        label="Email"
                        type="email"
                        inputRef={emailInputRef}
                        required
                    />
                    <TextField
                        className={styles.textField}
                        id="outlined-name"
                        label="Password"
                        type="password"
                        inputRef={passwordInputRef}
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

                {!isLoading && (
                    <Button
                        variant="contained"
                        type="submit"
                        className={styles["btn-login"]}
                    >
                        Înregistrează-te
                    </Button>
                )}
                {isLoading && <p>Se încarcă...</p>}
                <div className={styles.inscrie}>
                    <p>Ai deja un cont?</p>
                    <Link to="/login">Loghează-te acum.</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
