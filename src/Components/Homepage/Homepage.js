import React from "react";
import HomepageTitle from './HomepageTitle.js';
import LoginForm from './LoginForm/LoginForm.js';

export default class HomePage extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <HomepageTitle />
          <LoginForm />
        </div>
      );
  }
}