import React from "react";

import ContainerTitle from './ContainerTitle.js';
import Display from './display/display.js';
import FlexDirection from './flexdirection/flexdirection.js';
import FlexWrap from './flexwrap/flexwrap.js';
import JustifyContent from './justifycontent/justifycontent.js';

export default class ContainerColumn extends React.Component {
	render() {
		return (

				<div style={{display: "flex", flexFlow: "column", width: "50%", paddingRight: "30px"}}>

          <ContainerTitle />

          <Display />

          <FlexDirection />

          <FlexWrap />

          <JustifyContent />

        </div>

			);
	}
}