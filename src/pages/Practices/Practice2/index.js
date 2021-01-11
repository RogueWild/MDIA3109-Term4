import React, { useState, useEffect } from 'react';
import Table from '../../../comps/Practices/Practice2/Table';

import axios from 'axios';

const Practice2 = () => {
    const [list, setList] = useState([]);

    const HandleInsert = async (name, reps, cal) => {
        var resp = await axios.post("https://advdyn2021.herokuapp.com/createexercise", {name:name, reps:reps, calories:cal});
        console.log("insert", resp);
        GetList();
    }

    const GetList = async () => {
        var resp = await axios.get("https://advdyn2021.herokuapp.com/allexercises");
        console.log("get list", resp);
        setList(resp.data);
    }

    useEffect(() => {
        GetList();
    }, []);

    return <div className="practice2">
        <Table list={list}
        onInsert={HandleInsert}
        />
    </div>
}

export default Practice2;