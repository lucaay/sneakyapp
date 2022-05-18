import { useContext } from "react";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./store/auth-context";

const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" exact element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* {authCtx.isLoggedIn && (
                    <Route path="/" exact element={<LogIn />} />
                )} */}
            {/* {!authCtx.isLoggedIn && (
                    <Route path="/login" element={<LogIn />} />
                )} */}
            {/* <Route path="/profile"> */}
            {/* {authCtx.isLoggedIn && <UserProfile />} */}
            {/* {!authCtx.isLoggedIn && <Redirect to="/login" />} */}
            {/* </Route> */}
        </Routes>
    );
};

export default App;
