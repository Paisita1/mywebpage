import React from "react";

import NavBar from './NavBar/NavBar.js';
import PageDesc from './PageDesc/PageDesc.js';

export default class PageHeader extends React.Component {
	render() {
		return (
				<div>

					<NavBar />

					<PageDesc />

				</div>
			);
	}
}