import React, { useEffect, useState } from "react";
import StageCard from "./StageCard/StageCard";
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
            console.log(loadedStages.durata);
        };

        fetchStages();
    }, []);
    return (
        <div className={styles["stages-container"]}>
            {stages?.map((stagiu) => (
                <StageCard
                    key={stagiu.id}
                    firma={stagiu.firma}
                    tema={stagiu.tema}
                    domeniu={stagiu.domeniu}
                    durata={stagiu.durata}
                    data={stagiu.data}
                    orar={stagiu.orar}
                />
            ))}
        </div>
    );
};

export default Stages;
