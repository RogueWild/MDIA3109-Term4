import React, { useState, useEffect } from 'react';
import Form from '../../comps/Form';

const Main = () => {

    const [clickedForm, setClickedForm] = useState(null);

    const HandleContainerSelect = (name) => {
        //alert("clicked container "+name);
        setClickedForm(name);
    }

    const HandleFormComplete = (username, pass, check1, check2, check3) => {
        console.log(username, pass, check1, check2, check3);
    }

    useEffect(()=>{
        alert("page loaded");
    }, []);

    return <div className="main">
        <div className="left"></div>
        <div className="content">
            <Form
                onContainerSelect={HandleContainerSelect}
                onFormComplete={HandleFormComplete}
                name="register"
                bgcolor={clickedForm === "register" ? "red" : null}
            />
            <Form
                onContainerSelect={HandleContainerSelect}
                onFormComplete={HandleFormComplete}
                name="signup"
                bgcolor={clickedForm === "signup" ? "red" : null}
            />
            <Form
                onContainerSelect={HandleContainerSelect}
                onFormComplete={HandleFormComplete}
                name="beast"
                bgcolor={clickedForm === "beast" ? "red" : null}
            />

        </div>
        <div className="right"></div>
    </div>
}

export default Main;