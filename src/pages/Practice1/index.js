import React, { useState, useEffect } from 'react';
import Form from '../../comps/Practices/Practice1/Form';
import Tab from '../../comps/Practices/Practice1/Form/Tab';

const Practice1 = () => {

    const [clickedTab, setClickedTab] = useState(null);
    const [state, setState] = useState(null);

    const HandleTabSelect = (name) => {
        setClickedTab(name);
        setState(name);
    }

    const HandleFormComplete = (email, pass) => {
        console.log(email, pass);
        if(state === "register") {
            alert("Registered!")
        } else if(state === "login") {
            alert("Logged In!")
        }
    }

    useEffect(() => {
        setClickedTab("register");
        setState("register");
    }, []);

    return <div className="main">
        <div className="tabs">
            <Tab tabText="Register"
                onTabSelect={HandleTabSelect}
                name="register"
                bgcolor={clickedTab === "register" ? "#FFFFFF" : "#E0E0E0"}
            />
            <Tab tabText="Login"
                onTabSelect={HandleTabSelect}
                name="login"
                bgcolor={clickedTab === "login" ? "#FFFFFF" : "#E0E0E0"}
            />
        </div>
        <Form
            onFormComplete={HandleFormComplete}
            buttonText={clickedTab === "register" ? "Register" : "Login"}
            display={clickedTab === "register" ? "block" : "none"}
        />
    </div>
}

export default Practice1;