import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return <div>
        <div className={styles['show-stat']}>
            <p className={styles['stat-numar']}>Numar</p>
            <p>text descriptiv</p>
        </div>
    </div>;
};

export default Header;
