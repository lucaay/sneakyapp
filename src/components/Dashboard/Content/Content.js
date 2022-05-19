import React from "react";
import { Routes, Route } from "react-router-dom";
import AddStage from "./AddStage/AddStage";
import styles from "./Content.module.css";
import ModifyStage from "./ModifyStage/ModifyStage";
import Stages from "./Stages/Stages";

const Content = () => {
    return (
        <div className={styles["content-container"]}>
            <Routes>
                <Route path="adaugare-stagiu" element={<AddStage />} />
                <Route path="modificare-stagiu" element={<ModifyStage />} />
                <Route path="*" element={<Stages />} />
            </Routes>
        </div>
    );
};

export default Content;
