import React from "react";

import BodyLinks from './BodyLinks.js';
import ContainerAndItem from './ContainerAndItem/ContainerAndItem.js';

export default class PageBody extends React.Component {
	render() {
		return (

				<div style={{
            backgroundColor: "White",
            padding: "1rem 1rem 1rem 50px"
          }}
        >

          <BodyLinks />

          <ContainerAndItem />

        </div>

			);
	}
}