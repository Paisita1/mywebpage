import React from "react";
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';

export default class AboutBody extends React.Component {
  render() {
    return (
        <div style= {{width: "100%", marginRight: "auto", marginLeft: "auto"}}>

          <Section1 />

          <Section2 />

          <Section3 />

        </div>
      )
  }
}