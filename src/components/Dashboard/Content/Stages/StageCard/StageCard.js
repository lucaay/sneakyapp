import React, { useEffect, useState } from "react";
import styles from "./StageCard.module.css";
import logo from "../../../../../assets/logo.png";
import {
    getUserEmail,
    removeItem,
    stagesRef,
} from "../../../../Firebase/firebase";
import Button from "@mui/material/Button";
import firebase from "../../../../Firebase/firebase";

const StageCard = (props) => {
    const [numeFirmaCurenta, setNumeFirmaCurenta] = useState(null);
    const [rolCont, setRolCont] = useState(null);

    const [isVisible, setIsVisible] = useState(null);

    let currentUserEmail;
    useEffect(() => {
        setTimeout(() => {
            currentUserEmail = getUserEmail();
            let url =
                "https://sneakyapp-e098d-default-rtdb.firebaseio.com/users.json";
            const fetchUsers = async () => {
                const response = await fetch(url);
                const responseData = await response.json();

                let loadedFirme = "";

                for (const key in responseData) {
                    if (
                        responseData[key].rol === "firma" &&
                        responseData[key].email === currentUserEmail
                    ) {
                        loadedFirme = responseData[key].nume;
                    }
                    if (responseData[key].email === currentUserEmail) {
                        setRolCont(responseData[key].rol);
                    }
                }

                setNumeFirmaCurenta(loadedFirme);
            };

            fetchUsers();
        }, 1000);
    }, []);
    const removeHandler = () => {
        const id = props.stageID;
        removeItem(id);
    };

    return (
        <div
            className={styles["card-container"]}
            onMouseOver={() => {
                setIsVisible(true);
            }}
            onMouseLeave={() => {
                setIsVisible(false);
            }}
        >
            <img src={logo} alt="logo" className={styles["card-img"]} />
            <div className={styles["card-info-container"]}>
                <h3>Firma: {props.firma}</h3>
                <h1>Tema: {props.tema}</h1>
                <p>Domeniu: {props.domeniu}</p>
                <p>Durata: {props.durata}</p>
                <p>Data începere: {props.data}</p>
                <p>Orar: {props.orar}</p>
                {isVisible && (
                    <Button
                        variant="outlined"
                        onClick={removeHandler}
                        sx={{ mb: 4 }}
                        className={styles["remove-btn"]}
                        color="error"
                    >
                        Șterge
                    </Button>
                )}
            </div>
        </div>
    );
};

export default StageCard;
