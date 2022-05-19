import React, { useEffect, useState } from "react";
import styles from "./Stages.module.css";

const Stages = () => {
    const [stages, setStages] = useState(null);
    useEffect(() => {
        const fetchStages = async () => {
            const response = await fetch(
                "https://sneakyapp-e098d-default-rtdb.firebaseio.com/stages.json"
            );
            const responseData = await response.json();

            const loadedStages = [];

            for (const key in responseData) {
                loadedStages.push({
                    id: key,
                    firma: responseData[key].firma,
                    tema: responseData[key].tema,
                    domeniu: responseData[key].domeniu,
                    durata: responseData[key].durata,
                    data: responseData[key].data,
                    orar: responseData[key].orar,
                });
            }

            setStages(loadedStages);
        };

        fetchStages();
    }, []);
    return <div className={styles["stages-container"]}></div>;
};

export default Stages;
