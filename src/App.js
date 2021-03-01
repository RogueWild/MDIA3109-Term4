import './App.scss';
// import Main from './pages/main';
// import Practice1 from './pages/Practices/Practice1';
// import Practice2 from './pages/Practices/Practice2';
// import ArrayPage from './pages/arrays';
// import Practice4 from './pages/Practices/Practice4';
// import ReadData from './pages/read_data';
// import Profile from './pages/read_data/profile';
// import EditProfile from './pages/read_data/edit';

// import Login from './pages/login';

import Main from "./pages/fullapp";
import Login from "./pages/fullapp/login";
import Register from "./pages/fullapp/register";
import User from "./pages/fullapp/user";
import Message from "./pages/fullapp/message";

import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const token = sessionStorage.getItem("token");
console.log("token", token);
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
  //history.push("/profile");
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div>
          <Link to="/">Home</Link>
          <Link to="/arrays">Arrays</Link>
        </div> */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/profile">
            <User />
          </Route>

          <Route exact path="/profile/edit">
            <User />
          </Route>

          {/* This will have parameters later */}
          <Route exact path="/message">
            <Message />
          </Route>

          {/* <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/read">
            <ReadData />
          </Route>
          <Route path="/arrays/">
            <ArrayPage />
          </Route>
          <Route path="/arrays/:id">
            <ArrayPage />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/editprofile/:id">
            <EditProfile />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
