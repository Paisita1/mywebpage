import React from "react";

export default class FlexDirectionEx extends React.Component {
	render() {
		return (

				<div style={{
            display: "flex",
            flexFlow: "column",
            backgroundColor: "#001628",
            padding: "18px 20px 20px 22px",
            borderRadius: "8px",
            marginBottom: "1.5rem",
            maxWidth: "525px",
            overflowX: "scroll",
          }}
        >
            
          <code style={{
              color: "#72e0d1",
            }}
          >
            <span style={{color: "#f5d67b"}}>.container</span> {' {'}
          </code>

          <code style={{
              color: "#72e0d1",
              margin: "10px 0 10px 15px",
              minWidth: "600px",
            }}
          >
            {'  flex-direction:'} <span style={{color: "#f5d67b"}}>row | row-reverse | column | column-reverse</span>;
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