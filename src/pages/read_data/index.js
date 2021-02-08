import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Items from '../../comps/Items';
import { Link } from "react-router-dom";

// axios https://advdyn2021.herokuapp.com/allusers -> get all users
// axios https://advdyn2021.herokuapp.com/alldiscussions -> get all discussions
// axios https://advdyn2021.herokuapp.com/user_by_id/5 -> get a single user by it's id

const ReadData = () => {
    const [ds, setDs] = useState([]);
    const GetData = async () => {
        //var resp = await axios.get("https://advdyn2021.herokuapp.com/allusers");
        var resp2 = await axios.get("https://advdyn2021.herokuapp.com/alldiscussions");
        //var resp3 = axios.get("https://advdyn2021.herokuapp.com/user_by_id/5");
        console.log(resp2.data);

        setDs([...resp2.data]);
    }

    useEffect(() => {
        GetData();
    }, []);

    return <div>
        Read Data
        {ds.map((o, i) => <div key={i}>
        <Link to={"/profile/" + o.user_id}>
            <Items  username={o.name} message={o.message} />
        </Link>
        <Link to={"/editprofile/" + o.user_id}>
            Edit
        </Link>
    </div>
    )}
    </div>
}

export default ReadData;