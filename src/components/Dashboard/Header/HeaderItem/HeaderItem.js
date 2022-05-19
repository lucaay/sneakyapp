import React from 'react'
import styles from './HeaderItem.module.css';

const HeaderItem = (props) => {
    return (
        <div className={`${styles['show-stat']}`}>
            <p className={styles['valoare-headerItem']}>{props.value}</p>
            <p className={styles['denumire-headerItem']}>{props.denumire}</p>
        </div>
    );
};

export default HeaderItem