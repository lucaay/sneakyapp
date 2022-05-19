import React from "react";
import styles from "./Header.module.css";
import HeaderItem from "./HeaderItem/HeaderItem";


const Header = () => {
    return <div className={styles['header-container']}>
                <HeaderItem 
                    value="0"
                    denumire="Utilizatori Inregistrati"
                />
                <HeaderItem 
                    value="0"
                    denumire="Firme"
                />
                                <HeaderItem 
                    value="0"
                    denumire="Profesori"
                />
                                <HeaderItem 
                    value="0"
                    denumire="Studenti"
                />
            </div>;

};

export default Header;
