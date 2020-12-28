import React from "react";

import AboutTitle from './AboutTitle.js';
import AboutPicture from './AboutPicture.js';
import AboutBody from './AboutBody/AboutBody.js';

export default class AboutMe extends React.Component {

  render(){
    return (
      <div style= {{width: "100%"}}>
        <div style= {{width: "50%", marginLeft: "auto", marginRight: "auto", border: "5px solid black",
                      borderRadius: "10px", padding: "20px"}}>
          
          <AboutTitle />

          <AboutPicture />

          <AboutBody />

        </div>
      </div>
    );
  }
}
