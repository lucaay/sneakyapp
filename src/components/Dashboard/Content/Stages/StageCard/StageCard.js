import React from "react";
import styles from "./StageCard.module.css";
import logo from "../../../../../assets/logo.png";

const StageCard = (props) => {
    return (
        <div className={styles["card-container"]}>
            <img src={logo} alt="logo" className={styles['card-img']} />
            <div className={styles["card-info-container"]}>
                <h3>Firma: {props.firma}</h3>
                <h1>Tema: {props.tema}</h1>
                <p>Domeniu: {props.domeniu}</p>
                <p>Durata: {props.durata}</p>
                <p>Data începere: {props.data}</p>
                <p>Orar: {props.orar}</p>
            </div>
        </div>
    );
};

export default StageCard;
