import React, { useEffect, useState } from "react";
import StageCard from "./StageCard/StageCard";
import styles from "./Stages.module.css";
import { getUserEmail } from "../../../Firebase/firebase";

const Stages = () => {
    const [stages, setStages] = useState(null);

    const [numeFirmaCurenta, setNumeFirmaCurenta] = useState(null);
    const [rolCont, setRolCont] = useState(null);

    let currentUserEmail;
    useEffect(() => {
        setTimeout(() => {
            currentUserEmail = getUserEmail();
            let url =
                "https://sneakyapp-e098d-default-rtdb.firebaseio.com/users.json";
            const fetchUsers = async () => {
                const response = await fetch(url);
                const responseData = await response.json();

                let loadedFirme = "";

                for (const key in responseData) {
                    if (
                        responseData[key].rol === "firma" &&
                        responseData[key].email === currentUserEmail
                    ) {
                        loadedFirme = responseData[key].nume;
                    }
                    if (
                        responseData[key].rol === "student" &&
                        responseData[key].email === currentUserEmail
                    ) {
                        setRolCont(responseData[key].rol);
                    }
                }

                setNumeFirmaCurenta(loadedFirme);
            };

            fetchUsers();
        }, 1000);
    }, []);

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
            if (rolCont === "firma") {
                const newLoadedStages = loadedStages.filter(
                    (item) => item.firma === numeFirmaCurenta
                );
                setStages(newLoadedStages);
            } else {
                setStages(loadedStages);
            }
        };

        fetchStages();
    }, [numeFirmaCurenta, rolCont]);
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
