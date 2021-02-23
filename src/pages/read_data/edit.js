import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

import Form from '../../comps/Form';

// axios https://advdyn2021.herokuapp.com/allusers -> get all users
// axios https://advdyn2021.herokuapp.com/alldiscussions -> get all discussions
// axios https://advdyn2021.herokuapp.com/user_by_id/5 -> get a single user by it's id

const EditProfile = () => {
    const history = useHistory();
    const params = useParams();
    console.log(params);
    const [p, setP] = useState([]); // profile
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");

    const CheckStorage = async () => {
        var token = await sessionStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
            var resp = await axios.get("https://advdyn2021.herokuapp.com/verify");
            console.log("veryfication", resp.data);
            if (resp.data === "expired") {
                // hide login
                //setShowLogin(false);
                history.push("/");
            } else {
                GetData();
            }
        }
    }

    const GetData = async () => {
        //var resp3 = axios.get("https://advdyn2021.herokuapp.com/user_by_id/5");
        //setDs([...resp2.data]);
        var resp = await axios.get("https://advdyn2021.herokuapp.com/user_by_id/" + params.id);
        console.log(resp.data);
        setP({ ...resp.data[0] });
    }

    const EditProfile = async () => {
        // post
        /*
        var resp = await axios.post("https://advdyn2021.herokuapp.com/editprofile", {
            id:params.id,
            name:name,
            age:age,
            bio:bio
        });
        */
    }

    useEffect(() => {
        CheckStorage();
    }, []);

    return <div>
        <input placeholder={p.name} defaultValue={p.name}></input>
        <input placeholder={p.age} defaultValue={p.age}></input>
        <input placeholder={p.bio} defaultValue={p.bio}></input>
        <button onClick={EditProfile}>Edit</button>
    </div>
}

export default EditProfile;