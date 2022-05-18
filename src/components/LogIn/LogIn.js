import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <form>
            <div>
                <TextField
                    id="outlined-name"
                    label="Username"
                    type="username"
                    // value={}
                    // onChange={}
                    required
                />
                <TextField
                    id="outlined-name"
                    label="Password"
                    type="password"
                    // value={}
                    // onChange={}
                    required
                />
            </div>
            <Button variant="contained">LOGIN</Button>
            <div>
                <p>Dorești să te înregistrezi?</p>
                <Link to="/signup">Creează un cont.</Link>
            </div>
        </form>
    );
};

export default LogIn;
