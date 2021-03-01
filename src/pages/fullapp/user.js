import Reac, { useEffect, useState } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

import axios from "axios";

const User = () => {
    const location = useLocation();
    const history = useHistory();
    // For displaying the info
    const [user, setUser] = useState({});
    // For editing the profile
    const [un, setUn] = useState("");
    const [pass, setPass] = useState("");
    const [bio, setBio] = useState("");
    const [avatar, setAvatar] = useState("");

    /*
        Check if token is expired or if there is a token at all
            if not, redirect back to login

        axios call to get my user profile
        axios call to update my user profile
    */

    const CheckToken = async () => {
        const resp = await axios.get("https://advdyn2021.herokuapp.com/user/me");
        console.log(resp);
        if (resp.data !== "expired" && resp.data !== "no token") {
            setUser({
                ...resp.data
            })

            setUn(resp.data.username);
            setPass(resp.data.password);
            setBio(resp.data.bio);
            setAvatar(resp.data.avatar);
        } else {
            history.push("login");
        }
    }

    const UpdateProfile = async () => {
        const resp = await axios.post("https://advdyn2021.herokuapp.com/user_edit", {
            username: un, password: pass, bio: bio, avatar: avatar
        });
        history.push("/profile");
    }

    useEffect(() => {
        CheckToken();
    }, [])

    if (location.pathname === "/profile/edit") {
        return <div>
            <div>
                Username - <input type="text" value={un} onChange={(e) => setUn(e.target.value)} />
            </div>
            <div>
                Password - <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <div>
                Bio - <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
            </div>
            <div>
                Avatar - <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
            </div>

            <button onClick={UpdateProfile}>Update Profile</button>
        </div>
    } else {
        return <div>
            <h3>User Profile:</h3>
            {user.username && <div>username: {user.username}</div>}
            {user.password && <div>password: {user.password}</div>}
            {user.bio && <div>bio: {user.bio}</div>}
            {user.avatar && <div>avatar: <img src={user.avatar} width={100} height={100} /></div>}
            <Link to="/profile/edit">
                Edit Profile
        </Link>
            <p />
            <Link to="/message">
                Message
        </Link>
        </div>
    }
}

export default User;