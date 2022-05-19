import React from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarItem.module.css";

const SidebarItem = (props) => {
    return (
        <li className={styles.link}>
            <Link to={props.location} className={styles["link-btn"]}>
                {props.icon}
                <p>{props.text}</p>
            </Link>
        </li>
    );
};

export default SidebarItem;
