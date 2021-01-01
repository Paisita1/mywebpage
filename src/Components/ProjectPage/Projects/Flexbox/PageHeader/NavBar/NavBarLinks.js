import React from "react";

import '../../Flexbox.css';

const styles = {}

export default class NavBarLinks extends React.Component {
	render() {
		return (

				<div style={{display: "flex", fontFamily: "Ringside Regular A,Ringside Regular B,Rubik,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif", fontWeight: "600"}}>
          <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Articles'}</a>
          <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Videos'}</a>
          <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Almanic'}</a>
          <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Newsletter'}</a>
          <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Guides'}</a>
          <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Books'}</a>
          <a className="flexBar" href="" target="_blank" style={styles.navBarItems}>{'Account'}</a>
        </div>

			);
	}
}

styles.navBarItems = {
    display: "flex",
    alignItems: "flex-end",
    color: "white",
    textDecoration: "none",
    marginLeft: "10px",
    borderRight: "1px solid #201c29",
    paddingRight: "10px",
    paddingBottom: "5px",
    fontSize: "13px",
}