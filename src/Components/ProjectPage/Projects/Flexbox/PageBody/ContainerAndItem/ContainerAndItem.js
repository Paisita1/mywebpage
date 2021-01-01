import React from "react";

import ContainerColumn from './ContainerColumn/ContainerColumn.js';
import ItemColumn from './ItemColumn/ItemColumn.js';

export default class ContainerAndChildren extends React.Component {
	render() {
		return (

				<div style={{display: "flex"}}>

          <ContainerColumn />

          <ItemColumn />

        </div>

			);
	}
}