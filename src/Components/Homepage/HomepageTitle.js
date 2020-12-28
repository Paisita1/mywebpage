import React from "react";

export default class HomepageTitle extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <h1>{'Welcome to my project showcase!'}</h1>
          <h4 style={{textAlign: "center"}}>{'Please login below'}</h4>
        </div>
      );
  }
}