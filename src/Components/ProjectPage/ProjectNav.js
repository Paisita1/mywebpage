import React from "react";
import {NavLink} from "react-router-dom";

export default class ProjectNav extends React.Component {
  render() {
    return (
        <div style={{display: "flex", width: "80%", border: "1px solid black", margin: "0 90px", padding: "20px 30px"}}>

          <NavLink to="/aboutme" target="_blank" style={{textDecoration: "none"}}>
            <div style={{height: "125px", width: "125px", border: "1px solid blue", color: "black", padding: "5px", marginRight: "30px"}}>
              {"About me"}
            </div>
          </NavLink>

          <NavLink to="/flexboxpage" target="_blank" style={{textDecoration: "none"}}>
            <div style={{height: "125px", width: "125px", border: "1px solid blue", color: "black", padding: "5px"}}>
              {"Near perfect copy of css-tricks flexbox guide"}
            </div>
          </NavLink>

        </div>
      )
  }
}