import React, { useState } from "react";
import styles from "./AddStage.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddStage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDateFocused, setIsDateFocused] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
    };

    return (
        <div className={styles["bg-form-stagiu"]}>
            <h1 className={styles.titlu}>Adaugă stagiu</h1>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles["inputs-container"]}>
                    <TextField
                        className={styles.textField}
                        id="tema"
                        label="Tema"
                        type="text"
                        // ref={}
                        required
                    />
                    <TextField
                        className={styles.textField}
                        id="Domeniu"
                        label="Domeniu"
                        type="text"
                        // ref={}
                        required
                    />
                    <TextField
                        className={styles.textField}
                        id="outlined-name"
                        type="date"
                        label={isDateFocused && "Data de început"}
                        // inputRef={dataNStudentInputRef}
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
                        // ref={}
                        required
                    />
                    <TextField
                        className={styles.textField}
                        id="Orar"
                        label="Orar"
                        type="text"
                        // ref={}
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
