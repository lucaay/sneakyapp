import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import AuthContext from "../../../store/auth-context";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Button from "@mui/material/Button";

const Sidebar = () => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
        <Navigate to="/" />;
    };

    const pathname = window.location.pathname; //returns the current url minus the domain name

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
                <SidebarItem
                    location="/adaugare-stagiu"
                    text="Adaugă stagiu"
                    icon={<AddBoxOutlinedIcon />}
                    active={pathname === "/adaugare-stagiu" ? true : false}
                />
                <SidebarItem
                    location="/modificare-stagiu"
                    text="Modifică stagiu"
                    icon={<BorderColorOutlinedIcon />}
                    active={pathname === "/modificare-stagiu" ? true : false}
                />

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
