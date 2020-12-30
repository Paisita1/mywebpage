import React from "react";

export default class Update extends React.Component {
	render() {
		return (
				<div style={{margin: "0 0 1.5rem"}}>

          <div style={{
              color: "#7a7a8c",
              fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
              fontSize: ".7rem",
              marginBottom: "3px"
            }}
          >
            {'Last Updated'}
          </div>

          <div style={{
              color: "white",
              fontSize: ".9rem"
            }}
          >
            {'Oct 22, 2020'}
          </div>

        </div>
			);
	}
}