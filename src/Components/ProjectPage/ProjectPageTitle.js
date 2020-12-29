import React from "react";

export default class ProjectPageTitle extends React.Component {
  render() {
    return (
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
          <h1>{'Select a project to view'}</h1>
        </div>
      );
  }
}