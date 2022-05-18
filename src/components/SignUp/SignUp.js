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
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const SignUp = () => {
    const [rol, setRol] = useState("");

    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    //
    const numeStudentInputRef = useRef(null);
    const prenumeStudentInputRef = useRef(null);
    const dataNStudentInputRef = useRef(null);
    const facultateStudentInputRef = useRef(null);
    const anStudentInputRef = useRef(null);
    const specializareStudentInputRef = useRef(null);
    //
    
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
        <div>
            <TextField
                id="outlined-name"
                label="Denumire"
                type="text"
                ref={usernameInputRef}
                required
            />
        </div>
    );
    const inregistrareStudent = (
    <div className={styles["inputs-container"]}>
            <TextField
                id="outlined-name"
                label="Nume"
                type="text"
                ref={numeStudentInputRef}
                required
            />
            <TextField
                id="outlined-name"
                label="Prenume"
                type="text"
                ref={prenumeStudentInputRef}
                required
            />
            {/* <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value=""
                onChange={}
                ref={dataNStudentInputRef}
                renderInput={(params) => <TextField {...params} />}
            /> */}
            <TextField
                id="outlined-name"
                label="Facultate"
                type="text"
                ref={facultateStudentInputRef}
                required
            />
            <TextField
                id="outlined-name"
                label="Specializare"
                type="text"
                ref={specializareStudentInputRef}
                required
            />
            <TextField
                id="outlined-name"
                label="An"
                type="text"
                ref={anStudentInputRef}
                required
            />

    </div>);
    const inregistrareTutore = <div>formular Tutore</div>;
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
