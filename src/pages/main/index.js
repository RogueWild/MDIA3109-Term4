import React, { useState, useEffect } from 'react';
import Form from '../../comps/Form';
import Messages from '../../comps/Messages';

import axios from 'axios';

const Main = () => {

    const [clickedForm, setClickedForm] = useState(null);

    // initial state for the messages
    const [msgs, setMsgs] = useState([]);

    const HandleContainerSelect = (name) => {
        // alert("clicked container "+name);
        setClickedForm(name);
    }

    // interaction handler function
    const HandleFormComplete = async (username, pass, msg, check1, check2, check3) => {
        console.log(username, pass, msg, check1, check2, check3);

        // axios promise
        // retreive data
        var resp = await axios.post("https://advdyn2021.herokuapp.com/createmessage", {username:username, message:msg});
        console.log("create", resp);
        // update state
        GetMsgs();
    }

    const GetMsgs = async () => {
        // axios promise - connect
        // retreive
        var resp = await axios.get("https://advdyn2021.herokuapp.com/allmessages");
        console.log("get message", resp);
        // update state
        setMsgs(resp.data);

        // resp = await axios.get("url2");
        // do stuff

        // resp = await axios.get("url3");
        // do stuff

        // callback function
        /*axios.get("https://advdyn2021.herokuapp.com/allmessages").then((resp)=>{
            console.log("get message", resp);
            setMsgs(resp.data);

            axios.get("url2").then((resp)=>{
                axios.get("url3").then((resp)=>{

                })
            })
        });*/
    }

    useEffect(() => {
        // alert("page loaded");

        // interaction - when the page loads
        GetMsgs();
    }, []);

    return <div className="main">
        <div className="left">
            <Form
                onContainerSelect={HandleContainerSelect}
                onFormComplete={HandleFormComplete}
                name="register"
                bgcolor={clickedForm === "register" ? "red" : null}
            />
        </div>
        <div className="content">
            <Messages msgs={msgs} />
        </div>
        <div className="right"></div>
    </div>
}

export default Main;