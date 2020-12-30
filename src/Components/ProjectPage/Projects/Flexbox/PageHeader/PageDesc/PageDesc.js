import React from "react";

import PageTitle2 from './PageTitle2';
import Update from './Update.js';
import Caption from './Caption.js';

export default class PageDesc extends React.Component {
	render() {
		return (

				<div style={{paddingLeft: "50px"}}>

          <PageTitle2 />

          <Update />

          <Caption />

         </div>

			);
	}
}