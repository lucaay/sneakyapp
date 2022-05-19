import React from "react";
import styles from "./Profile.module.css";
import logo from "../../../../assets/logo.png";

const Profile = () => {
    return (
            <div className={styles["profile-container"]}>
                <h1 className={styles.titlu}>Profil</h1>
                    <img className={styles.avatar} src={logo} />
                    <div className={styles['text']}>
                        
                        <p>Nume: Gicu</p>
                        <p>Prenume:</p>
                        <p>Temaa</p>
                        <p>Temaa</p>
                        <p>Temaa</p>
                        <p>Temaa</p>
                        <p>Temaa</p>
                    </div>
            </div>
    );
};

export default Profile;
