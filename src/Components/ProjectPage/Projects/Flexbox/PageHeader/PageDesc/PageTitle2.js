import React from "react";

export default class PageTitle2 extends React.Component {
	render() {
		return (
				<div>
					<div style={{color: "grey"}}>
              {'Guide'}
          </div>

          <h1 style={{
              color: "white",
              fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
              fontSize: "2.5rem",
              margin: "0 0 1.5rem"
            }}
          >
            {'A Complete Guide to Flexbox'}
          </h1>
				</div>
			);
	}
}