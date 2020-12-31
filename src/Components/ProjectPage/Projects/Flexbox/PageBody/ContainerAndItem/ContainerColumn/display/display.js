import React from "react";

import DisplayText1 from './displaytext1.js';
import DisplayEx from './displayex.js';
import DisplayText2 from './displaytext2.js'

export default class Display extends React.Component {
	render() {
		return (

				<div style={{
	          background: "linear-gradient(rgba(156,39,176,.2),#fff)",
	          padding: "2rem",
	          marginBottom: "5px"
	        }}
	      >

	        <h2 style={{
	            margin: "0 0 .8rem",
	            fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif",
	            fontSize: "1.8rem"
	          }}
	        >

	          {'display'}
	          
	        </h2>

	        <DisplayText1 />

	        <DisplayEx />

	        <DisplayText2 />

	      </div>

			);
	}
}