import React from "react";

export default class Caption extends React.Component {
	render() {
		return (
				<div style={{maxWidth: "590px"}}>

          <p style={{
              color: "#c2c2c2",
              fontFamily: "Sentinel SSm A,Sentinel SSm B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
              fontSize: "1.3rem",
              margin: "0 0 1.5rem"
            }}
          >
            {`Our comprehensive guide to CSS flexbox layout. This complete guide explains everything 
              about flexbox, focusing on all the different possible properties for the parent element (the flex container) 
              and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart.`}
          </p>

        </div>
			);
	}
}