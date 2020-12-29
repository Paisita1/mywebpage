import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import './App.css';
import HomePage from './Components/Homepage/Homepage.js';
import ProjectPage from './Components/ProjectPage/ProjectPage.js';
import AboutMe from './Components/ProjectPage/Projects/AboutMePage/AboutMe.js';
import Flexbox from './Components/ProjectPage/Projects/Flexbox/Flexbox.js'

export default class MyWebsite extends React.Component {
  render() {
    return (

        <Router>
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/projects">
              <ProjectPage />
            </Route>

            <Route path="/flexboxpage">
              <Flexbox />
            </Route>

            <Route path="/aboutme">
              <AboutMe />
            </Route>

          </Switch>
        </Router>

      )
  }
}
