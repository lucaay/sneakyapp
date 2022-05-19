import React from "react";
import styles from "./StageCard.module.css";

const StageCard = (props) => {
    return (
        <div className={styles["card-container"]}>
            <img src="" />
            <div className={styles["card-info-container"]}>
                <h3>Firma: {props.nume}</h3>
                <h1>Tema: {props.tema}</h1>
                <p>Domeniu: {props.domeniu}</p>
                <p>Durata: {props.durataa}</p>
                <p>Data începere: {props.data}</p>
                <p>Orar: {props.orar}</p>
            </div>
        </div>
    );
};

export default StageCard;
