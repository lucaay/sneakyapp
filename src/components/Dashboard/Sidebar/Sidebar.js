import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import AuthContext from "../../../store/auth-context";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Button from "@mui/material/Button";
import SidebarFirma from "./SidebarFirma/SidebarFirma";

import { auth } from "../../Firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Sidebar = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    const auth = getAuth();
    let currentUserEmail;
    const currentUser = auth.currentUser;
    if (currentUser) {
        currentUserEmail = currentUser.email;
    }
    console.log(currentUser);

    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({});

    const logoutHandler = () => {
        authCtx.logout();
        <Navigate to="/" />;
    };

    const pathname = window.location.pathname; //returns the current url minus the domain name

    let url = "https://sneakyapp-e098d-default-rtdb.firebaseio.com/users.json";
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(url);
            const responseData = await response.json();

            const loadedUsers = [];

            for (const key in responseData) {
                loadedUsers.push({
                    id: key,
                    email: responseData[key].email,
                    rol: responseData[key].rol,
                });
            }

            const user = loadedUsers.filter(
                (item) => item.email === "test@test.com"
            );

            setUserData(user);
        };

        fetchUsers();
    }, [url]);

    return (
        <div className={styles["sidebar-container"]}>
            <button
                onClick={() => {
                    console.log(currentUserEmail);
                }}
            >
                Log users
            </button>
            <div className={styles["sidebar-user"]}>
                <h3>Bine ai venit, User1</h3>
                <p>(profesor)</p>
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
                <SidebarFirma />

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
