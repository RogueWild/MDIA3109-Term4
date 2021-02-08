import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Main from './pages/main';
import Practice1 from './pages/Practices/Practice1';
import Practice2 from './pages/Practices/Practice2';
import ArrayPage from './pages/arrays';
import Practice4 from './pages/Practices/Practice4';
import ReadData from './pages/read_data';
import Profile from './pages/read_data/profile';
import EditProfile from './pages/read_data/edit';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/arrays">Arrays</Link>
        </div>
        <Switch>
          <Route exact path="/">
            {/* <Main /> */}
            <ReadData />
          </Route>
          {/* <Practice1 /> */}
          {/* <Practice2 /> */}
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
          </Route>
        </Switch>
        {/* <Practice4 /> */}
      </div>
    </Router>
  );
}

export default App;
