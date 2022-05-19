import { useContext, useEffect, useState } from "react";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TestPage from "./components/TestPage";
import Dashboard from "./components/Dashboard/Dashboard";
import useIsLoggedIn from "./store/isLoggedIn";

const App = () => {
    const isLoggedIn = useIsLoggedIn();

    return (
        <Routes>
            <Route path="/test-page" element={<TestPage />} />
            {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
            {!isLoggedIn && <Route path="/dashboard" element={<LogIn />} />}

            {isLoggedIn && <Route path="/login" element={<Dashboard />} />}
            {!isLoggedIn && <Route path="/login" element={<LogIn />} />}

            {isLoggedIn && <Route path="/signup" element={<Dashboard />} />}
            {!isLoggedIn && <Route path="/signup" element={<SignUp />} />}

            {isLoggedIn && <Route path="/" exact element={<Dashboard />} />}
            {!isLoggedIn && <Route path="/" element={<LogIn />} />}
            {/* <Route path="/profile"> */}
            {/* { isLoggedIn && <UserProfile />} */}
            {/* {! isLoggedIn && <Redirect to="/login" />} */}
            {/* </Route> */}
        </Routes>
    );
};

export default App;
