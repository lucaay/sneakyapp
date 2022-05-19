import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Content from "./Content/Content";

const Dashboard = () => {
    return (
        <div className={styles["dashboard-container"]}>
            <Sidebar />
            <div className={styles["right-side-container"]}>
                <Header />
                <Content />
            </div>
        </div>
    );
};

export default Dashboard;
