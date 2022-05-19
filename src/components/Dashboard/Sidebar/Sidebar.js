import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import AuthContext from "../../../store/auth-context";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Button from "@mui/material/Button";
import SidebarFirma from "./SidebarFirma/SidebarFirma";

const Sidebar = () => {
    const authCtx = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({});

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
        <Navigate to="/" />;
    };

    const pathname = window.location.pathname; //returns the current url minus the domain name

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(
                "https://sneakyapp-e098d-default-rtdb.firebaseio.com/users.json"
            );
            const responseData = await response.json();

            const loadedUsers = [];

            for (const key in responseData) {
                loadedUsers.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setData(loadedUsers);
        };

        fetchUsers();
    }, []);
    let url = "https://sneakyapp-e098d-default-rtdb.firebaseio.com/users";

    return (
        <div className={styles["sidebar-container"]}>
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
