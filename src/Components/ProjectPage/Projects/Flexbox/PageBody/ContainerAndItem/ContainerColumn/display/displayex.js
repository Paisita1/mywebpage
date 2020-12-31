import React from "react";

export default class DisplayEx extends React.Component {
	render() {
		return (

				<div style={{display: "flex", flexFlow: "column", backgroundColor: "#001628", padding: "18px 20px 20px 22px", borderRadius: "8px", marginBottom: "1.5rem", maxWidth: "525px"}}>
	          
          <code style={{
              color: "#72e0d1",
            }}
          >
            <span style={{color: "#f5d67b"}}>.container</span> {' {'}
          </code>

          <code style={{
              color: "#72e0d1",
              margin: "10px 0 10px 15px"
            }}
          >
            {'  display:'} <span style={{color: "#f5d67b"}}>flex</span>; <span style={{color: "#5e7671", fontStyle: "italic"}}>/* or inline-flex */</span>
          </code>

          <code style={{
              color: "#72e0d1",
              margin: "0"
            }}
          >
           {'}'}
          </code>

        </div>

			);
	}
}