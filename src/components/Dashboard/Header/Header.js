import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import HeaderItem from "./HeaderItem/HeaderItem";

const Header = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [usersData, setUsersData] = useState(null);
    const [users, setUsers] = useState(null);
    const [firme, setFirme] = useState(null);
    const [profesori, setProfesori] = useState(null);
    const [studenti, setStudenti] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            let url =
                "https://sneakyapp-e098d-default-rtdb.firebaseio.com/users.json";
            const fetchUsers = async () => {
                const response = await fetch(url);
                const responseData = await response.json();

                const loadedUsers = [];
                const loadedFirme = [];
                const loadedProfesori = [];
                const loadedStudenti = [];

                for (const key in responseData) {
                    if (
                        responseData[key].rol === "firma" &&
                        !loadedFirme.includes(responseData[key].nume)
                    ) {
                        loadedFirme.push(responseData[key].nume);
                    }

                    if (
                        responseData[key].rol === "profesor" &&
                        !loadedProfesori.includes(responseData[key].nume)
                    ) {
                        loadedProfesori.push(responseData[key].nume);
                    }
                    if (
                        responseData[key].rol === "student" &&
                        !loadedStudenti.includes(responseData[key].nume)
                    ) {
                        loadedStudenti.push(responseData[key].nume);
                    }
                    loadedUsers.push({
                        id: key,
                        rol: responseData[key].rol,
                    });
                }

                setUsersData(loadedUsers);
                setFirme(loadedFirme);
                setProfesori(loadedProfesori);
                setStudenti(loadedStudenti);
                setUsers(
                    loadedFirme.length +
                        loadedProfesori.length +
                        loadedStudenti.length
                );
                setIsLoading(false);
            };

            fetchUsers();
        }, 1000);
    }, []);
    return (
        <div className={styles["header-container"]}>
            <HeaderItem
                value={isLoading ? "Se încarcă..." : users}
                denumire="Utilizatori Inregistrati"
            />
            <HeaderItem
                value={isLoading ? "Se încarcă..." : firme?.length}
                denumire="Firme"
            />
            <HeaderItem
                value={isLoading ? "Se încarcă..." : profesori?.length}
                denumire="Profesori"
            />
            <HeaderItem
                value={isLoading ? "Se încarcă..." : studenti?.length}
                denumire="Studenti"
            />
        </div>
    );
};

export default Header;
