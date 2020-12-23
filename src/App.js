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
        <Router>
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/projects">
              <ProjectPage />
            </Route>

          </Switch>
        </Router>

      )
  }
}

class HomepageTitle extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <h1>{'Welcome to my project showcase!'}</h1>
          <h4 style={{textAlign: "center"}}>{'Please login below'}</h4>
        </div>
      );
  }
}

class LoginForm extends React.Component {
  render() {
    return (
        <div style={styles.loginform}>
          <LoginBox />
        </div>
      )
  }
}

class LoginBox extends React.Component {
  constructor(props) {
    super(props)

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.loginButtonHandler = this.loginButtonHandler.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);

    this.state = {
      box1: styles.loginBlur,
      box2: styles.loginBlur,
      username: "",
      password: ""
    }
  }

  usernameHandler(e) {
    console.log(e.target.value);

    this.setState({username: e.target.value})
  }

  passwordHandler(e) {
    console.log(e.target.value);

    this.setState({password: e.target.value})
  }

  loginButtonHandler() {
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "username": this.state.username,
                               "password": this.state.password})
    };

    fetch('http://localhost:3001/login', requestOptions)
    .then(response => response.json())
    .then(res => {
      console.log("res")
      console.log(res)
      if (res.length == 0 || res[0].Username != this.state.username || res[0].Password != this.state.password) {
        alert("Wrong username or password. Stop tryna hack my website");
      }
      else {
        window.location.href = '/projects';
      }
    })
  }


  focusHandler(a) {
    if (a == 1) {
      this.setState({box1: styles.loginFocus})
    }
    else {
      this.setState({box2: styles.loginFocus})
    }
  }

  blurHandler(a) {
    if (a == 1) {
      this.setState({box1: styles.loginBlur})
    }
    else {
      this.setState({box2: styles.loginBlur})
    }
  }

  render() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={{margin: "10px 0"}}>
            <input placeholder="Username" style={this.state.box1} onFocus={() => this.focusHandler(1)} onBlur={() => this.blurHandler(1)} onChange={this.usernameHandler} />
          </div>
          <div style={{margin: "10px 0"}}>
            <input type="password" placeholder="Password" style={this.state.box2} onFocus={() => this.focusHandler(0)} onBlur={() => this.blurHandler(0)} onChange={this.passwordHandler} />
          </div>
          <input className="button" type="button" value="Submit" style={styles.submitButton} onClick={this.loginButtonHandler} />
        </div>
      )
  }
}

styles.loginBlur = {
  fontSize: "17px",
  borderRadius: "6px",
  padding: "14px 16px",
  width: "330px",
  border: "1px solid #dddfe2",
  height: "22px"
}

styles.loginform = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
  padding: "10px 15px 24px"
}

styles.loginFocus = {
  outline: "none",
  border: "1px solid #1877f2",
  boxShadow: "0 0 0 2px #e7f3ff",
  caretColor: "#1877f2",
  fontSize: "17px",
  borderRadius: "6px",
  padding: "14px 16px",
  width: "330px",
  border: "1px solid #dddfe2",
  height: "22px"
}

styles.submitButton = {
  color: "white",
  fontFamily: "Helvetica, Arial, sans-serif",
  fontWeight: "600",
  border: "none",
  borderRadius: "6px",
  fontSize: "17px",
  lineHeight: "48px",
  padding: "0 16px",
  backgroundColor: "#42b72a"
}

class HomePage extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <HomepageTitle />
          <LoginForm />
        </div>
      );
  }
}


class ProjectPageTitle extends React.Component {
  render() {
    return (
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
          <h1>{'Select a project to view'}</h1>
        </div>
      )
  }
}

class ProjectNav extends React.Component {
  render() {
    return (
        <div style={{display: "flex", width: "80%", border: "1px solid black", margin: "0 90px", padding: "20px 30px"}}>
          <Router>
            <div style={{height: "125px", width: "125px", border: "1px solid blue"}}>
            </div>
          </Router>
        </div>
      )
  }
}

class ProjectPage extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <ProjectPageTitle />
          <ProjectNav />
        </div>
      )
  }
}