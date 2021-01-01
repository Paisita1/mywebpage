import React from "react";

import {images} from '../../../Assets/images.js';

import ItemTitle from './ItemTitle.js';
import Order from './order/order.js';
import Flexgrow from './flexgrow/flexgrow.js';
import Flexshrink from './flexshrink/flexshrink.js';
import Flexbasis from './flexbasis/flexbasis.js';

export default class ItemColumn extends React.Component {
	render() {
		return (

				<div style={{display: "flex", flexFlow: "column", width: "50%"}}>

          <ItemTitle />

          <Order />

          <Flexgrow />

          <Flexshrink />

          <Flexbasis />

        </div>

			);
	}
}