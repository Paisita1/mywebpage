import React from "react";

const styles = {}

export default class AboutTitle extends React.Component {
	render() {
		return (
			<div style= {styles.pageHeaders}>
    			<h2>About Me</h2>
			</div>
		)
	}
}

styles.pageHeaders = {
  display: "flex",
  justifyContent: "center",
  width: "100%"
}
