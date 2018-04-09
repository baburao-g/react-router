import React from "react";
import ContatcUS from "./ContatcUS";
import AboutUS from "./AboutUS";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="activeClass"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" activeClassName="activeClass"> Contact us </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" activeClassName="activeClass"> About us </NavLink>
          </li>
        </ul>

        <div>
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/contactus" component={ContatcUS} />
            <Route path="/aboutus" component={AboutUS} />
          </switch>
        </div>
      </div>
    );
  }
}
export default App;