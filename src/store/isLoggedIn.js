import React, { useState, useEffect } from "react";

const useIsLoggedIn = () => {
    const [isLoggedIn, setIsLogged] = useState(false);

    const url =
        "https://sneakyapp-e098d-default-rtdb.firebaseio.com/isLoggedIn.json";

    useEffect(() => {
        fetch(url, {
            method: "GET",
        }).then((res) => {
            return res.json().then((data) => {
                setIsLogged(data.isLoggedIn);
            });
        });
    }, [isLoggedIn]);
    return isLoggedIn;
};

export default useIsLoggedIn;
