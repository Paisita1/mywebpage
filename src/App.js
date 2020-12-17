import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";

import './App.css';

const styles = {};

export default class MyWebsite extends React.Component {
  render() {
    return (
        <Homepage />

      )
  }
}

class Title extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <h1>{'Welcome to my project showcase!'}</h1>
          <h4 style={{textAlign: "center"}}>{'Please login below'}</h4>
        </div>
      );
  }
}

class Login extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <input className="login" placeholder="Username" style={styles.login} />
          <input type="password" placeholder="Password" />
          <input type="button" value="Submit" />
        </div>
      )
  }
}

styles.login = {
  fontSize: "17px",
  borderRadius: "6px",
  padding: "14px 16px",
  width: "330px",
  border: "1px solid #dddfe2",
  height: "22px"
}

class Homepage extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Title />
          <Login />
        </div>
      );
  }
}