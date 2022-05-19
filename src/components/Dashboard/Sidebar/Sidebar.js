import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Button from "@mui/material/Button";
import SidebarFirma from "./SidebarFirma/SidebarFirma";
import useIsLoggedIn from "../../../store/isLoggedIn";
import { getUserEmail, logOut } from "../../Firebase/firebase";

const Sidebar = () => {
    const isLoggedIn = useIsLoggedIn();

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

    const logoutHandler = () => {
        logOut();
        setTimeout(() => {
            window.location.reload(false);
        }, 1000);
    };

    const pathname = window.location.pathname; //returns the current url minus the domain name

    return (
        <div className={styles["sidebar-container"]}>
            <div className={styles["sidebar-user"]}>
                <h3>
                    Bine ai venit, <br /> {isLoading ? "..." : userData?.nume}{" "}
                    {isLoading ? "..." : userData?.prenume}
                </h3>
                <p className={styles["sidebar-user-rol"]}>
                    Tip cont: {isLoading ? "..." : userData?.rol}
                </p>
            </div>
            <ul className={styles.links}>
                <SidebarItem
                    location="/dashboard"
                    text="Acasă"
                    icon={<HomeOutlinedIcon />}
                    active={
                        pathname === "/" ||
                        (pathname === "/dashboard" ? true : false)
                    }
                />
                <SidebarItem
                    location="/profile"
                    text="Profilul meu"
                    icon={<PermIdentityOutlinedIcon />}
                    active={pathname === "/profile" ? true : false}
                />

                {/* daca contul este de firma */}
                {!isLoading && userData?.rol === "firma" && <SidebarFirma />}

                {/* daca contul este de student */}

                {/* daca contul este de tutore */}

                {/* daca contul este de profesor */}
            </ul>
            {isLoggedIn && (
                <Button
                    variant="outlined"
                    onClick={logoutHandler}
                    sx={{ mb: 4 }}
                    className={styles["logout-btn"]}
                    color="error"
                >
                    Logout
                </Button>
            )}
        </div>
    );
};

export default Sidebar;
