import React, { useState, useEffect } from 'react';

import axios from "axios";

const Message = () => {

    const [msg, setMsg] = useState("");
    const [mymsgs, setMyMsgs] = useState([]);
    const [allmsgs, setAllMsgs] = useState([]);

    /*
        Check if token is expired or if there is a token at all
            if not, redirect back to login

        axios call to get all the messages
        axios call to get MY messages
        axios call to do other things with messages like create, update etc.
    */

    const HandleCreate = async () => {
        const resp = await axios.post("https://advdyn2021.herokuapp.com/createmessage", {
            message: msg
        });
        if (resp.data !== "expired" && resp.data !== "no token") {
            // Message created! Read the message later...
            GetMessage();
        }
    }

    const GetMessage = async () => {
        const resp = await axios.get("https://advdyn2021.herokuapp.com/message/user");
        if (resp.data !== "expired" && resp.data !== "no token") {
            setMyMsgs([...resp.data]);
        }
    }

    const GetAllMessage = async () => {
        const resp = await axios.get("https://advdyn2021.herokuapp.com/allmessages");
        if (resp.data !== "expired" && resp.data !== "no token") {
            setAllMsgs([...resp.data]);
        }
    }

    useEffect(() => {
        GetMessage();
        GetAllMessage();
    }, [])

    return <div>
        <h3>Message</h3>
        <input type="text" onChange={(e) => setMsg(e.target.value)} />
        <button onClick={HandleCreate}>Create Message</button>

        <div>
            <h3>My Messages</h3>
            {mymsgs.map((o, i) => <div key={i}>{o.message}</div>)}
        </div>

        <div>
            <h3>All Messages</h3>
            {allmsgs.map((o, i) => <div key={i}>{o.message}</div>)}
        </div>
    </div>
}

export default Message;