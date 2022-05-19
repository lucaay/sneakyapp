import React, { useRef, useState, useEffect } from "react";
import styles from "./AddStage.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getUserEmail } from "../../../Firebase/firebase";

const AddStage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDateFocused, setIsDateFocused] = useState(false);
    const [isSuccess, setIsSucces] = useState(false);

    const temaInputRef = useRef(null);
    const domeniuInputRef = useRef(null);
    const dataInputRef = useRef(null);
    const durataInputRef = useRef(null);
    const orarInputRef = useRef(null);

    const [userData, setUserData] = useState(null);

    let currentUserEmail;
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            currentUserEmail = getUserEmail();
            let url =
                "https://sneakyapp-e098d-default-rtdb.firebaseio.com/users.json";
            const fetchUsers = async () => {
                const response = await fetch(url);
                const responseData = await response.json();

                const loadedUsers = [];

                for (const key in responseData) {
                    loadedUsers.push({
                        id: key,
                        email: responseData[key].email,
                        nume: responseData[key].nume,
                        prenume: responseData[key]?.prenume,
                        rol: responseData[key].rol,
                    });
                }

                const user = loadedUsers.filter(
                    (item) => item.email === currentUserEmail
                );

                setUserData(user[0]);
                setIsLoading(false);
            };

            fetchUsers();
        }, 1000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsSucces(false);
        }, 6000);
    }, [isSuccess]);

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);

        const enteredTema = temaInputRef.current.value;
        const enteredDomeniu = domeniuInputRef.current.value;
        const enteredData = dataInputRef.current.value;
        const enteredDurata = durataInputRef.current.value;
        const enteredOrar = orarInputRef.current.value;

        let body = JSON.stringify({
            firma: userData.nume,
            tema: enteredTema,
            domeniu: enteredDomeniu,
            data: enteredData,
            durata: enteredDurata,
            orar: enteredOrar,
            returnSecureToken: true,
        });

        // auth info realtime database
        let url =
            "https://sneakyapp-e098d-default-rtdb.firebaseio.com/stages.json";
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
                    // alert("Stagiu adăugat cu success!");
                    setIsSucces(true);
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = "Operațiune adăugare stagiu eșuată!";
                        throw new Error(errorMessage);
                    });
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className={styles["bg-form-stagiu"]}>
            {isSuccess && (
                <h1 className={styles["info-success"]}>
                    Stagiu adăugat cu success!
                </h1>
            )}
            <h1 className={styles.titlu}>Adaugă stagiu</h1>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles["inputs-container"]}>
                    <TextField
                        className={styles.textField}
                        id="tema"
                        label="Tema"
                        type="text"
                        inputRef={temaInputRef}
                        required
                    />
                    <TextField
                        className={styles.textField}
                        id="Domeniu"
                        label="Domeniu"
                        type="text"
                        inputRef={domeniuInputRef}
                        required
                    />
                    <TextField
                        className={styles.textField}
                        id="outlined-name"
                        type="date"
                        label={isDateFocused && "Data de început"}
                        inputRef={dataInputRef}
                        onFocus={() => {
                            setIsDateFocused(true);
                        }}
                        onBlur={() => setIsDateFocused(false)}
                        required
                    />
                    <TextField
                        className={styles.textField}
                        id="Durată"
                        label="Durată"
                        type="text"
                        inputRef={durataInputRef}
                        required
                    />
                    <TextField
                        className={styles.textField}
                        id="Orar"
                        label="Orar"
                        type="text"
                        inputRef={orarInputRef}
                        required
                    />
                </div>

                {!isLoading && (
                    <Button
                        variant="contained"
                        type="submit"
                        className={styles["btn-adauga"]}
                    >
                        ADAUGĂ STAGIU
                    </Button>
                )}
                {isLoading && <p>Se încarcă...</p>}
            </form>
        </div>
    );
};

export default AddStage;
