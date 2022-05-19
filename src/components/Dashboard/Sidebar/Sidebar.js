import React from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Sidebar = () => {
    return (
        <div className={styles["sidebar-container"]}>
            <ul className={styles.links}>
                <SidebarItem
                    location="/dashboard"
                    text="Acasă"
                    icon={<HomeOutlinedIcon />}
                />
                <SidebarItem
                    location="/profile"
                    text="Acasă"
                    icon={<HomeOutlinedIcon />}
                />
            </ul>
        </div>
    );
};

export default Sidebar;
