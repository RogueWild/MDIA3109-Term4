import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from "axios";

const Main = () => {
    const history = useHistory();

    /*
        Check for a token when the page loads - useEffect
        if a token exists
            onnect token with axios header
            redirect them to message/user
        otherwise let them choose to login or register
    */

    const CheckToken = async () => {
        // Assume we will store the login in the sessionStorage
        const token = await sessionStorage.getItem("token");
        console.log("token", token);
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            history.push("/profile");
        }
    }

    useEffect(() => {
        // When the page loads do the following
        CheckToken();
    }, [])

    return <div>
        <button onClick={()=>history.push("/login")}>Login</button>
        <button onClick={()=>history.push("/register")}>Sign Up!</button>
    </div>
}

export default Main;