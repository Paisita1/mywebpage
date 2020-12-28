import React from "react";
import ProjectPageTitle from './ProjectPageTitle';
import ProjectNav from './ProjectNav';

export default class ProjectPage extends React.Component {
  render() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          <ProjectPageTitle />
          <ProjectNav />
        </div>
      )
  }
}