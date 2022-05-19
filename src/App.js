import { useContext } from "react";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./store/auth-context";
import TestPage from "./components/TestPage";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/test-page" element={<TestPage />} />
            {authCtx.isLoggedIn && (
                <Route path="/dashboard" element={<Dashboard />} />
            )}

            {authCtx.isLoggedIn && (
                <Route path="/" exact element={<Dashboard />} />
            )}
            {!authCtx.isLoggedIn && <Route path="/" element={<LogIn />} />}
            {/* <Route path="/profile"> */}
            {/* {authCtx.isLoggedIn && <UserProfile />} */}
            {/* {!authCtx.isLoggedIn && <Redirect to="/login" />} */}
            {/* </Route> */}
        </Routes>
    );
};

export default App;
