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
            <Main />
          </Route>
        </Switch>
        {/* <Practice1 /> */}
        {/* <Practice2 /> */}
        <Route path="/arrays/">
          <ArrayPage />
        </Route>
        <Route path="/arrays/:id">
          <ArrayPage />
        </Route>
        {/* <Practice4 /> */}
      </div>
    </Router>
  );
}

export default App;
