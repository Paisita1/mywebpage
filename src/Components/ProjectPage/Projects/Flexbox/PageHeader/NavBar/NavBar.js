import React from "react";

import PageTitle from './PageTitle.js';
import NavBarLinks from './NavBarLinks.js';
import SearchBar from './SearchBar.js';

export default class NavBar extends React.Component {
	render() {
		return (
				<div style={{display: "flex", margin: "27px 0", borderBottom: "1px solid orange", paddingBottom: "15px", paddingLeft: "50px"}}>

          <PageTitle />

          <NavBarLinks />

          <SearchBar />

        </div>
			)
	}
}