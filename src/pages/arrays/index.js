import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from '../../comps/Form';
import Items from '../../comps/Items';

import Pagin from '../../comps/Pagin';

import {
    useParams
} from "react-router-dom";

const ArrayPage = () => {

    const params = useParams();
    console.log(params.id);
    const [msgs, setMsgs] = useState([]);
    const [allmsgs, setAll] = useState([]);
    const [selectedId, setSelected] = useState(null);
    const itemps_per_page = 3;

    const GetMessages = async () => {
        var resp = await axios.get("https://advdyn2021.herokuapp.com/allmessages");
        // console.log("get message", resp);
        var arr = resp.data.slice(0, 5);
        setMsgs(arr);
        setAll(resp.data);
    }

    const ChangePage = (num) => {
        console.log(num);
        setMsgs(
            allmsgs.slice(itemps_per_page * (num - 1), itemps_per_page * num)
        )
    }

    const FilterPage = (text) => {
        setMsgs(
            allmsgs.filter((o) => {
                return o.username.includes(text);
            })
        )
    }

    const FilterCheck = (checked) => {
        if (checked) {
            setMsgs(
                allmsgs.filter((o) => {
                    return o.username.length < 5;
                })
            )
        } else {
            setMsgs(
                allmsgs
            )
        }
    }

    const SortMsgs = () => {
        setMsgs(
            allmsgs.sort(sortByUsername)
        )
    }

    const SortMsgsDate = () => {
        setMsgs(
            allmsgs.sort(sortByDate)
        )
    }

    const UpdateMessage = async (username, pass, msg, check1, check2, check3) => {
        console.log(msg);
        if (selectedId === null) {
            return false;
        }
        var resp = await axios.post("https://advdyn2021.herokuapp.com/editmessage", {
            id: selectedId,
            message: msg
        });
        GetMessages();
    }

    useEffect(() => {
        GetMessages()
    }, []);
    return <div>
        <b>Array Page</b>
        {msgs.map(o => {
            // var date = new Date(o.created);
            return <Items onClick={(id) => {
                console.log(id);
                setSelected(id); // Get id from the comp and use it
            }}
                id={o.id}
                message={o.message}
                created={o.created}
                username={o.username}
                highlight={selectedId === o.id}
            />;
        })}
        <Form onFormComplete={UpdateMessage} />
        {/* <input type="number" defaultValue={1} onChange={(e) => {
            ChangePage(e.target.value);
        }} />
        <div>Filter</div>
        <input type="text" onChange={(e) => {
            FilterPage(e.target.value);
        }} />

        <input type="checkbox" onChange={(e) => {
            FilterCheck(e.target.checked);
        }} />

        <button onClick={SortMsgs}>Sort by username</button>
        <button onClick={SortMsgs}>Sort messages by date</button>
        <Pagin numpages={Math.ceil(allmsgs.length/3)} onClickPage={ChangePage} /> */}
    </div>

}

export default ArrayPage;

function sortByUsername(a, b) {
    if (a.username > b.username) {
        return 1;
    } else if (a.username < b.username) {
        return -1;
    } else {
        return 0;
    }
}

function sortByDate(a, b) {
    var adate = new Date(a.created);
    var bdate = new Date(b.created);

    if (adate > bdate) {
        return 1;
    } else if (adate < bdate) {
        return -1;
    } else {
        return 0;
    }
}

/*
To Update
1 - pass the id to the component (if you are using a component)
2 - have a handler to capture a interaction that passes the id back out to the page
3 - have a state ready to remember the id to update (useState)
4 - use the state id for your axios call so you can pass the id + other data to the backend
5 - make the axios call and re read everything.
*/

/*
PAGINATE

arr=arr.slice(0,3); // get the first 3 item on the page

page1 - item1,2,3 - slice(0,3) - input 1
page2 - item4,5,6 - slice(3,6) - input 2
page3 - item7,8,9 - slice(6,9) - input 3

3 items per page
slice(items_per_page*0, items_per_page) - page1 - input 1
slice(items_per_page, items_per_page*2) - page2 - input 2
slice(items_per_page*2, items_per_page*3) - page2

# of pages should be amount of items in the array divided by the number of items per page
EG, 10 items in the array, 2 items per page = 5 page (10/2)
*/

/*
FILTERS

Check for true/false statement
If the username includes the letter -> return true


Checked, filter for all username that is below 5 characters
*/

/*
SORTING

a.username > b.username 1
a.username < b.username -1
== 0
*/