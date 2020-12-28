import React from "react";
import LoginBox from './LoginBox.js';

const styles = {}

export default class LoginForm extends React.Component {
  render() {
    return (
        <div style={styles.loginform}>
          <LoginBox />
        </div>
      )
  }
}

styles.loginform = {
	display: "flex",
	flexDirection: "column",
	backgroundColor: "white",
	borderRadius: "8px",
	boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
	padding: "10px 15px 24px"
}