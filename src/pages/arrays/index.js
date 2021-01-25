import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pagin from '../../comps/Pagin'

const ArrayPage = () => {

    const [msgs, setMsgs] = useState([]);
    const [allmsgs, setAll] = useState([]);
    const itemps_per_page = 3;
    const GetMessages = async () => {
        var resp = await axios.get("https://advdyn2021.herokuapp.com/allmessages");
        // console.log("get message", resp);
        var arr = resp.data.slice(3, 6);
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

    useEffect(() => {
        GetMessages()
    }, []);
    return <div>
        <b>Array Page</b>
        {msgs.map(o => {
            var date = new Date(o.created);
            return <div>{o.username} - {o.created}</div>
        })}
        <input type="number" defaultValue={1} onChange={(e) => {
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
        <Pagin numpages={Math.ceil(allmsgs.length/3)} onClickPage={ChangePage} />
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