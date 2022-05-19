import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import logo from "../../../../assets/logo.png";
import { getUserEmail } from "../../../Firebase/firebase";

const Profile = (props) => {
    const [isLoading, setIsLoading] = useState(false);
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
                        an: responseData[key]?.an,
                        dataNastere: responseData[key]?.dataNastere,
                        facultate: responseData[key]?.facultate,
                        judet: responseData[key]?.judet,
                        specializare: responseData[key]?.specializare,
                        firmaTutore: responseData[key]?.firmaTutore,
                        cui: responseData[key]?.cui,
                        domeniuActivitate: responseData[key]?.domeniuActivitate,
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
    return (
        <div className={styles["profile-container"]}>
            <h1 className={styles.titlu}>Profil</h1>
            <img className={styles.avatar} src={logo} />
            {isLoading && "Se încarcă..."}
            {!isLoading && (
                <div className={styles["text"]}>
                    <p>Nume: {userData.nume}</p>
                    <p>
                        {userData?.prenume && "Prenume: " + userData?.prenume}
                    </p>
                    <p>E-mail: {userData.email}</p>
                    <p>Tip cont: {userData.rol}</p>
                    <p>
                        {userData?.dataNastere &&
                            "Data Nașterii: " + userData?.dataNastere}
                    </p>
                    <p>
                        {userData?.facultate &&
                            "Facultate: " + userData?.facultate}
                    </p>
                    <p>{userData?.judet && "Județ: " + userData?.judet}</p>
                    <p>
                        {userData?.specializare &&
                            "Specializare: " + userData?.specializare}
                    </p>
                    <p>{userData?.an && "An studiu: " + userData?.an}</p>
                    <p>{userData?.CUI && "CUI: " + userData?.CUI}</p>
                    <p>
                        {userData?.domeniuActivitate &&
                            "Domeniu Activitate: " +
                                userData?.domeniuActivitate}
                    </p>
                    <p>
                        {userData?.firmaTutore &&
                            "Firmă Tutore: " + userData?.firmaTutore}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Profile;
