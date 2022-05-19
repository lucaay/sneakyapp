import React from "react";
import { Routes, Route } from "react-router-dom";
import AddStage from "./AddStage/AddStage";
import styles from "./Content.module.css";

const Content = () => {
    return (
        <div className={styles["content-container"]}>
            <Routes>
                <Route path="/test-page" element={<AddStage />} />
            </Routes>
        </div>
    );
};

export default Content;
