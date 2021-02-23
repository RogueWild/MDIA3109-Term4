import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Items from '../../comps/Items';
import { Link, useHistory } from "react-router-dom";

// ENDPOINTS
// login -> token
// verify -> token expired, no token, data of the token - to make sure we're still authorized to route
// restricted -> if you don't have the secret data from the token, you won't be allowed to connect to the endpoint

// let token = null;

const Login = () => {
    const history = useHistory();

    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    const [showLogin, setShowLogin] = useState(true);

    const CheckStorage = async () => {
        var token = await sessionStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            var resp = await axios.get("https://advdyn2021.herokuapp.com/verify");
            console.log("veryfication", resp.data);
            if (resp.data !== "expired") {
                // hide login
                //setShowLogin(false);
                history.push("/read");
            }
        }
    }

    const Auth = async () => {
        var resp = await axios.post("https://advdyn2021.herokuapp.com/login", {
            username: un, // student
            password: pass // mdia3109
        });

        axios.defaults.headers.common['Authorization'] = resp.data;
        sessionStorage.setItem("token", resp.data);
        setShowLogin(false);
        // after logging in, rereoute them with history.push("/read");

        console.log("identifier/token", resp.data);
    }

    const Restricted = async () => {
        // create a new post endpoint
        var resp = await axios.post("https://advdyn2021.herokuapp.com/restricted", {
            // nothing to post, pretend to post something to create
            itemname: "item 1"
        })
        console.log("restricted", resp.data);
    }

    useEffect(() => {
        CheckStorage();
    }, []);

    return <div>
        {showLogin && <> <input type="text" placeholder="username" onChange={(e) => setUn(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPass(e.target.value)} />
            <button onClick={Auth}>Log in</button>
        </>
        }
        <button onClick={Restricted}>Restricted</button>
    </div>
}

export default Login;